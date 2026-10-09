#!/usr/bin/env node
/**
 * Regenerate scripts/migrate/live-slug-map.tsv from glossary frontmatter.
 *
 * The TSV is the data source for the web repo's rehype-link-glossary plugin,
 * which auto-links any text mention of a glossary title to its slug page at
 * build time. When new glossary entries ship and the TSV is not refreshed,
 * those entries silently lose all their auto-linking on every other page.
 *
 * Run this whenever:
 *   - You add or remove glossary entries
 *   - You rename a slug or change a title
 *   - You add or change a linkText list
 *   - The audit script flags a drift between glossary/*.md and the TSV
 *
 * Usage (from the content repo root):
 *   node scripts/generate-slug-map.mjs                 # writes scripts/migrate/live-slug-map.tsv
 *   node scripts/generate-slug-map.mjs --out FILE      # writes FILE instead (for review)
 *
 * Output format: one row per link phrase, "Phrase<TAB>slug", no header.
 * By default the phrase is the entry's title. An entry can instead declare
 * the phrases that actually appear in prose with an optional linkText list:
 *
 *   linkText:
 *     - "BIP-340"
 *     - "BIP 340"
 *
 * (the one-line form linkText: ["BIP-340", "BIP 340"] also works). When
 * linkText is present, one row is emitted per string, all pointing at the
 * entry's slug, and the title is NOT emitted. List the title too if it
 * still reads naturally in prose. An empty list (linkText: []) emits no
 * rows, which opts the entry out of auto-linking.
 *
 * The plugin matches case-insensitively, whole words only, longest phrase
 * first, one link per slug per page. A phrase claimed by two entries can only
 * link to one of them, so duplicates (ignoring case) are reported and only
 * the first is kept.
 *
 * Entries with draft: true are excluded - they are not visible on the
 * production site so they should not be auto-linked from anywhere.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GLOSSARY_DIR = join(__dirname, '..', 'glossary');
const DEFAULT_OUT_PATH = join(__dirname, 'migrate', 'live-slug-map.tsv');

function parseArgs(argv) {
  let out = DEFAULT_OUT_PATH;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out') {
      if (!argv[i + 1]) throw new Error('--out needs a file path');
      out = resolve(argv[++i]);
    } else if (a.startsWith('--out=')) {
      out = resolve(a.slice('--out='.length));
    } else {
      throw new Error(`unknown argument: ${a}`);
    }
  }
  return { out };
}

// Unquote one YAML list item: "double", 'single', or bare.
function unquoteItem(raw) {
  const s = raw.trim();
  if (s.startsWith('"') && s.endsWith('"') && s.length >= 2) {
    try {
      return JSON.parse(s);
    } catch {
      return s.slice(1, -1);
    }
  }
  if (s.startsWith("'") && s.endsWith("'") && s.length >= 2) {
    return s.slice(1, -1).replace(/''/g, "'");
  }
  return s;
}

// Split a one-line YAML flow list like ["a", 'b, c', d] into its items.
function parseFlowList(text) {
  const inner = text.trim().slice(1, -1);
  const items = [];
  let cur = '';
  let quote = null;
  for (let i = 0; i < inner.length; i++) {
    const c = inner[i];
    if (quote) {
      cur += c;
      if (c === '\\' && quote === '"' && i + 1 < inner.length) {
        cur += inner[++i];
      } else if (c === quote) {
        quote = null;
      }
    } else if (c === '"' || c === "'") {
      quote = c;
      cur += c;
    } else if (c === ',') {
      items.push(cur);
      cur = '';
    } else {
      cur += c;
    }
  }
  items.push(cur);
  return items.map(unquoteItem).filter((s) => s !== '');
}

// Minimal YAML frontmatter parser. `title`, `slug` and `draft` are
// single-line scalars in this codebase and are read exactly as before.
// Lists (block "- item" lines, or a one-line [a, b] flow list) are read
// into arrays so `linkText` can be used. No dependency on a full YAML
// parser keeps this script trivially portable.
function parseFrontmatter(text) {
  if (!text.startsWith('---')) return {};
  const end = text.indexOf('\n---', 4);
  if (end === -1) return {};
  const fm = {};
  let listKey = null;
  for (const line of text.slice(4, end).split('\n')) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      (fm[listKey] ??= []).push(unquoteItem(item[1]));
      continue;
    }
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) {
      if (!/^\s/.test(line)) listKey = null;
      continue;
    }
    listKey = null;
    const k = m[1];
    let v = m[2].trim();
    if (v === '') {
      // Start of a possible block list; stays null (YAML's reading of an
      // empty value) if no "- item" lines follow.
      fm[k] = null;
      listKey = k;
      continue;
    }
    if (v.startsWith('[') && v.endsWith(']')) {
      fm[k] = parseFlowList(v);
      continue;
    }
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    if (v === 'true') v = true;
    if (v === 'false') v = false;
    fm[k] = v;
  }
  return fm;
}

let OUT_PATH;
try {
  ({ out: OUT_PATH } = parseArgs(process.argv.slice(2)));
} catch (e) {
  console.error(`${e.message}\nUsage: node scripts/generate-slug-map.mjs [--out FILE]`);
  process.exit(1);
}

const files = readdirSync(GLOSSARY_DIR).filter((f) => f.endsWith('.md'));
const rows = [];
const seen = new Set();
const phraseOwner = new Map(); // lowercased phrase -> slug
let entries = 0;
let withLinkText = 0;

for (const f of files) {
  const text = readFileSync(join(GLOSSARY_DIR, f), 'utf8');
  const fm = parseFrontmatter(text);
  if (!fm.title || !fm.slug || Array.isArray(fm.title) || Array.isArray(fm.slug)) {
    console.warn(`[skip] ${f}: missing title or slug in frontmatter`);
    continue;
  }
  if (fm.draft === true) continue;
  if (seen.has(fm.slug)) {
    console.warn(`[warn] duplicate slug "${fm.slug}" - keeping first occurrence`);
    continue;
  }
  seen.add(fm.slug);
  entries++;

  let phrases = [fm.title];
  if (fm.linkText !== undefined && fm.linkText !== null) {
    if (!Array.isArray(fm.linkText)) {
      console.warn(`[warn] ${f}: linkText is not a list - using title`);
    } else {
      phrases = fm.linkText;
      withLinkText++;
    }
  }

  for (const raw of phrases) {
    const phrase = String(raw).trim();
    if (!phrase || /[\t\n]/.test(phrase)) {
      console.warn(`[warn] ${f}: skipping empty or tab/newline link text ${JSON.stringify(raw)}`);
      continue;
    }
    const key = phrase.toLowerCase();
    const owner = phraseOwner.get(key);
    if (owner === fm.slug) continue; // same phrase listed twice for one entry
    if (owner) {
      console.warn(`[warn] ${f}: link text "${phrase}" already used by "${owner}" - skipped`);
      continue;
    }
    phraseOwner.set(key, fm.slug);
    rows.push({ title: phrase, slug: fm.slug });
  }
}

// Stable sort by title (case-insensitive) so diffs are minimal across runs.
rows.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

const tsv = rows.map((r) => `${r.title}\t${r.slug}`).join('\n') + '\n';
writeFileSync(OUT_PATH, tsv);

console.log(
  `Wrote ${rows.length} rows for ${entries} entries (${withLinkText} with linkText) to ${OUT_PATH}`
);
