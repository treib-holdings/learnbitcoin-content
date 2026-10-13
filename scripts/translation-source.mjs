#!/usr/bin/env node
/**
 * Print the provenance fields a Spanish translation records about its
 * English source, ready to paste into the Spanish file's frontmatter:
 *
 *   node scripts/translation-source.mjs rabbit-holes/mining.mdx
 *
 *   sourceHash: "3f9a1c2b7d4e"
 *   sourceCommit: "a705ffa"
 *   sourceUpdated: "2026-10-12"
 *
 * sourceHash is the first 12 hex characters of sha256 over the English
 * file's bytes as they are on disk right now. The web build's
 * check-translations step recomputes it on every build and warns STALE
 * when the English file has changed since, so nobody computes hashes by
 * hand and nobody has to remember to look. sourceCommit is the last
 * commit that touched the file (for `git diff <sourceCommit>.. -- <file>`
 * when porting a change; omitted when git is unavailable). sourceUpdated
 * is the English `updated` date, else `published`; a glossary entry with
 * neither went live with the site, which the comment says.
 *
 * Several files can be given at once; each block is preceded by a
 * comment naming the file. A path under es/ is refused: a translation is
 * not a source. If the working tree differs from HEAD for the file, a
 * warning goes to stderr: the hash is of the uncommitted bytes while the
 * commit is the last committed one, so commit the English file before
 * translating it.
 */
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIRS = ['glossary', 'rabbit-holes', 'journey', 'pages'];
const SITE_LAUNCH = '2026-05-14'; // DEFAULT_PUBLISHED in learnbitcoin-web/src/lib/site-dates.mjs

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('usage: node scripts/translation-source.mjs <english file> [<english file> ...]');
  process.exit(2);
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

let failed = false;
for (const arg of args) {
  const abs = resolve(ROOT, arg);
  const rel = relative(ROOT, abs).split(sep).join('/');
  const top = rel.split('/')[0];
  if (rel.startsWith('..') || !SOURCE_DIRS.includes(top)) {
    console.error(`${rel}: not an English content file (expected one of ${SOURCE_DIRS.join(', ')}/; a file under es/ is a translation, not a source)`);
    failed = true;
    continue;
  }
  if (!existsSync(abs)) {
    console.error(`${rel}: no such file`);
    failed = true;
    continue;
  }
  const bytes = readFileSync(abs);
  const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 12);
  const text = bytes.toString('utf8');
  const end = text.startsWith('---') ? text.indexOf('\n---', 3) : -1;
  const block = end === -1 ? '' : text.slice(3, end);
  const updated = fieldValue(block, 'updated');
  const published = fieldValue(block, 'published');
  const commit = git('log', '-1', '--format=%h', '--', rel);
  const dirty = git('status', '--porcelain', '--', rel);

  if (args.length > 1) console.log(`# ${rel}`);
  console.log(`sourceHash: "${hash}"`);
  if (commit) console.log(`sourceCommit: "${commit}"`);
  else console.log('# sourceCommit: unavailable (no git history for this file)');
  if (updated || published) console.log(`sourceUpdated: "${updated || published}"`);
  else console.log(`# sourceUpdated: the English entry has no updated or published date; glossary entries without one went live with the site on ${SITE_LAUNCH}`);
  if (dirty) {
    console.error(`warning: ${rel} has uncommitted changes; sourceHash is of the working tree, sourceCommit is the last commit. Commit the English file first.`);
  }
}
process.exit(failed ? 1 : 0);
