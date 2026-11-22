#!/usr/bin/env node
/**
 * Start a translation: make the file a translator works in.
 *
 *   node scripts/start-translation.mjs hi journey/why-money-is-broken.md
 *   node scripts/start-translation.mjs hi journey pages/journey.md interface.json
 *   node scripts/start-translation.mjs hi --journey
 *
 * The first argument is the language's code, which is also its folder
 * ("hi" for Hindi, "es" for Spanish). Each English file named after it is
 * copied to the same place inside that folder: journey/x.md becomes
 * hi/journey/x.md. A folder name stands for every file in it. --journey
 * is short for the whole Journey: its seven chapters, its front page
 * (pages/journey.md) and the site's own words that those pages show
 * (interface.journey.json, about ninety short entries, which becomes the
 * language's interface.json).
 *
 * What the copy gets, so that nobody writes it by hand:
 *
 *   translationOf   the English page this file translates (its slug, or
 *                   for pages/ its file name). The site pairs the two
 *                   pages by this one line.
 *   sourceHash      a fingerprint of the English file as it is today.
 *   sourceCommit    The website's build compares the fingerprint with the
 *   sourceUpdated   English file on every build and says when the English
 *                   has changed since, so a translation never falls
 *                   behind without anyone noticing.
 *   translation:    who translated it (translatedBy, for you to fill in)
 *                   and, later, who checked it.
 *   draft: true     the page is not shown on the site until it is
 *                   switched on. Leave it; we change it on the day.
 *
 * The dates of the English page (published, updated) are taken out: a
 * translation gets its own on the day it goes live.
 *
 * Then translate: the text under the second "---", and in the part above
 * it only the values of title, tagline, heading and description. Leave
 * every other line above it as it is, the slug too, unless you were told
 * that your language has addresses of its own (Spanish does).
 * CONTRIBUTING.md, "Adding or extending a language", has the few rules.
 *
 * The words file is copied as it is: the English words in it are what you
 * translate, between the quotes, leaving the names on the left and
 * anything in {braces} untouched. interface.json is every word the site
 * has; interface.journey.json is the part the Journey's pages show, and
 * the place to start. Either one is saved as <code>/interface.json: a
 * language has one words file, and an entry it does not have yet is shown
 * in English.
 *
 * A file that already exists is never overwritten (--force overwrites).
 * Nothing is committed or sent anywhere.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIRS = ['glossary', 'rabbit-holes', 'journey', 'pages'];
const WORDS = 'interface.json';
// The part of it the Journey's pages show: what a new language starts from.
const FIRST_WORDS = 'interface.journey.json';

const args = process.argv.slice(2);
const force = args.includes('--force');
const wholeJourney = args.includes('--journey');
const [code, ...named] = args.filter((a) => !a.startsWith('--'));

if (!code || (named.length === 0 && !wholeJourney)) {
  console.error('usage: node scripts/start-translation.mjs <language code> <english file or folder> [...]');
  console.error('       node scripts/start-translation.mjs <language code> --journey');
  process.exit(2);
}
if (!/^[a-z]{2,3}$/.test(code) || code === 'en' || SOURCE_DIRS.includes(code)) {
  console.error(`"${code}" is not a language code: two or three lower-case letters, as in "hi" or "es".`);
  process.exit(2);
}
if (!existsSync(join(ROOT, code))) {
  console.error(`note: ${code}/ does not exist yet and will be made. The website shows a language only once it has been`);
  console.error('      added to its list, so write to us before translating much (CONTRIBUTING.md).');
}

function git(...a) {
  try {
    return execFileSync('git', ['-C', ROOT, ...a], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return null;
  }
}

// `key: value`, optionally quoted, optionally followed by a comment.
function fieldValue(block, key) {
  const m = block.match(new RegExp(`^${key}:[ \\t]*(.*?)[ \\t]*$`, 'm'));
  if (!m) return undefined;
  return m[1].replace(/\s+#.*$/, '').replace(/^(["'])(.*)\1$/, '$2').trim();
}

// The English files the arguments name, as paths below the repo root.
function sources() {
  const out = [];
  const add = (rel) => !out.includes(rel) && out.push(rel);
  const wanted = wholeJourney ? ['journey', 'pages/journey.md', existsSync(join(ROOT, FIRST_WORDS)) ? FIRST_WORDS : WORDS, ...named] : named;
  for (const arg of wanted) {
    const abs = resolve(ROOT, arg);
    const rel = relative(ROOT, abs).split(sep).join('/');
    if (rel.startsWith('..') || !existsSync(abs)) {
      console.error(`${arg}: no such file or folder in this repository`);
      process.exitCode = 1;
      continue;
    }
    if (rel === WORDS || rel === FIRST_WORDS) {
      add(rel);
    } else if (!SOURCE_DIRS.includes(rel.split('/')[0])) {
      console.error(`${rel}: not an English page (expected ${WORDS} or a file under ${SOURCE_DIRS.join('/, ')}/; a file under a language's folder is a translation already)`);
      process.exitCode = 1;
    } else if (statSync(abs).isDirectory()) {
      for (const f of readdirSync(abs).sort()) if (/\.mdx?$/.test(f)) add(`${rel}/${f}`);
    } else {
      add(rel);
    }
  }
  return out;
}

let made = 0;
for (const rel of sources()) {
  // Either words file becomes the language's one interface.json.
  const isWords = rel === WORDS || rel === FIRST_WORDS;
  const target = join(ROOT, code, isWords ? WORDS : rel);
  const shown = `${code}/${isWords ? WORDS : rel}`;
  if (existsSync(target) && !force) {
    console.log(`kept     ${shown} (it exists; --force overwrites it)`);
    continue;
  }
  const bytes = readFileSync(join(ROOT, rel));
  mkdirSync(dirname(target), { recursive: true });
  if (isWords) {
    writeFileSync(target, bytes);
    console.log(`started  ${shown}  (from ${rel}: translate the text between the quotes)`);
    made++;
    continue;
  }
  const text = bytes.toString('utf8');
  const end = text.startsWith('---') ? text.indexOf('\n---', 3) : -1;
  if (end === -1) {
    console.error(`${rel}: no front matter (the part between the two "---" lines); skipped`);
    process.exitCode = 1;
    continue;
  }
  const block = text.slice(4, end);
  const body = text.slice(end);
  const isPage = rel.startsWith('pages/');
  const stem = rel.split('/').pop().replace(/\.mdx?$/, '');
  const translationOf = isPage ? stem : fieldValue(block, 'slug') || stem;
  const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 12);
  const commit = git('log', '-1', '--format=%h', '--', rel);
  const updated = fieldValue(block, 'updated') || fieldValue(block, 'published');
  if (git('status', '--porcelain', '--', rel)) {
    console.error(`warning: ${rel} has changes that are not committed; the fingerprint is of the file as it is on disk.`);
  }

  const provenance = [
    `translationOf: ${isPage ? `"${translationOf}"` : translationOf}`,
    `sourceHash: "${hash}"`,
    ...(commit ? [`sourceCommit: "${commit}"`] : []),
    ...(updated ? [`sourceUpdated: "${updated}"`] : []),
    'translation:',
    '  method: "human"',
    '  translatedBy: ""',
  ];
  const lines = [];
  let placed = false;
  let sawDraft = false;
  for (const line of block.split('\n')) {
    // A translation is dated the day it goes live, not the day its source did.
    if (/^(published|updated):/.test(line)) continue;
    if (/^draft:/.test(line)) {
      lines.push('draft: true');
      sawDraft = true;
      continue;
    }
    lines.push(line);
    // After the slug, or after the title where a page has no slug.
    if (!placed && (isPage ? /^title:/.test(line) : /^slug:/.test(line))) {
      lines.push(...provenance);
      placed = true;
    }
  }
  if (!placed) lines.unshift(...provenance);
  // pages/ have no draft field: they are shown once the language is switched on.
  if (!sawDraft && !isPage) lines.push('draft: true');
  writeFileSync(target, `---\n${lines.join('\n')}${body}`);
  console.log(`started  ${shown}  (translates ${rel})`);
  made++;
}
console.log(
  made === 0
    ? 'Nothing to start.'
    : `\n${made} file(s) started under ${code}/. Fill in translatedBy, translate, then send a pull request or the files themselves (CONTRIBUTING.md).`
);
