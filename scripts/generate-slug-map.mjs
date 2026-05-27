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
 *   - The audit script flags a drift between glossary/*.md and the TSV
 *
 * Usage (from the content repo root):
 *   node scripts/generate-slug-map.mjs
 *
 * Output format: one row per entry, "Title<TAB>slug".
 * Entries with draft: true are excluded - they are not visible on the
 * production site so they should not be auto-linked from anywhere.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GLOSSARY_DIR = join(__dirname, '..', 'glossary');
const OUT_PATH = join(__dirname, 'migrate', 'live-slug-map.tsv');

// Minimal YAML frontmatter parser - we only need `title`, `slug`, and `draft`,
// all of which are single-line scalars in this codebase. No dependency on a
// full YAML parser keeps this script trivially portable.
function parseFrontmatter(text) {
  if (!text.startsWith('---')) return {};
  const end = text.indexOf('\n---', 4);
  if (end === -1) return {};
  const fm = {};
  for (const line of text.slice(4, end).split('\n')) {
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) continue;
    const k = m[1];
    let v = m[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    if (v === 'true') v = true;
    if (v === 'false') v = false;
    fm[k] = v;
  }
  return fm;
}

const files = readdirSync(GLOSSARY_DIR).filter((f) => f.endsWith('.md'));
const rows = [];
const seen = new Set();

for (const f of files) {
  const text = readFileSync(join(GLOSSARY_DIR, f), 'utf8');
  const fm = parseFrontmatter(text);
  if (!fm.title || !fm.slug) {
    console.warn(`[skip] ${f}: missing title or slug in frontmatter`);
    continue;
  }
  if (fm.draft === true) continue;
  if (seen.has(fm.slug)) {
    console.warn(`[warn] duplicate slug "${fm.slug}" - keeping first occurrence`);
    continue;
  }
  seen.add(fm.slug);
  rows.push({ title: fm.title, slug: fm.slug });
}

// Stable sort by title (case-insensitive) so diffs are minimal across runs.
rows.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

const tsv = rows.map((r) => `${r.title}\t${r.slug}`).join('\n') + '\n';
writeFileSync(OUT_PATH, tsv);

console.log(`Wrote ${rows.length} entries to ${OUT_PATH}`);
