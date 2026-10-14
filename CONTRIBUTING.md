# Contributing to LearnBitcoin

Thanks for considering it. This repo holds every word that shows up on
[learnbitcoin.com](https://learnbitcoin.com): the glossary, the journey
chapters, the rabbit holes, the downloadable PDFs.

The content is licensed [CC-BY-SA-4.0](LICENSE). Use it, remix it, build
your own Bitcoin school on top of it. The site itself (Astro, Svelte,
the rendering pipeline) lives in a separate private repo.

## What we welcome

- **Typos and grammar fixes.** Send a PR. We will merge fast.
- **Factual corrections.** Cite a primary source. We update on-chain
  numbers periodically but it is impossible to keep every figure live
  in static content.
- **Clarifications.** If a paragraph is confusing or could be sharper,
  open an issue or a PR. Show us the before and after.
- **New glossary entries.** If a term is missing, propose it via the
  "Propose a new entry" issue template.
- **New rabbit holes.** These are bigger commitments. Open an issue
  first so we can talk about scope and angle before you write 8,000
  words.
- **Better cross-links.** The rehype plugin auto-links exact title
  matches, but manual links still beat auto-links for prose flow.
- **sameAs links on glossary entries.** External references that go
  in the content `sameAs:` array. See below.
- **Translations.** Long-term goal. Talk to us first.

## What we will not merge

- Anything about altcoins, tokens, or "crypto generally."
- Price predictions, "this could moon" content, anything that ages
  like milk.
- Affiliate links of any kind.
- Tracking pixels, analytics beacons, or "just one small JS snippet."
- Content that names specific custodial Lightning wallets as
  long-term recommendations. The landscape moves too fast.
- Edgelord politics. Bitcoin-only does not mean Bitcoin-tribal.

## How to submit

1. **For small fixes (typos, broken links, factual corrections):** open
   a pull request directly. We will merge if it is correct.
2. **For new content or substantive changes:** open an issue first
   using the relevant template. Brief alignment beats wasted hours.
3. **For anything else:** open a discussion or just email us. See the
   contact link on the [manifesto page](https://learnbitcoin.com/manifesto).

## Style and voice

The site has a consistent voice. The short version:

- **Plain language.** Write so a curious normie can follow without
  feeling talked down to.
- **Sourced.** Every factual claim should cite a primary source: BIPs,
  source code, papers, reputable references. Not blog posts that link
  to blog posts.
- **Opinionated, not preachy.** Take positions where they are earned.
  Skip the moralizing.
- **ASCII straight punctuation, in every language.** Use straight
  quotes (`'` and `"`), the hyphen-minus (`-`, spaced ` - ` where a
  dash is wanted) and three periods (`...`). No curly quotes, no en or
  em dashes, no ellipsis character, no guillemets (« »), in any
  language. Curly quotes break YAML frontmatter, and the web build's
  `check-charset` step refuses the file.
- **Letters are not punctuation.** English content is pure ASCII,
  except µ (U+00B5) for unit prefixes. Spanish content under `es/` may
  also use exactly these characters, which Spanish orthography
  requires: á é í ó ú ü ñ Á É Í Ó Ú Ü Ñ (U+00E1, U+00E9, U+00ED,
  U+00F3, U+00FA, U+00FC, U+00F1, U+00C1, U+00C9, U+00CD, U+00D3, U+00DA,
  U+00DC, U+00D1) and the inverted marks ¿ ¡ (U+00BF, U+00A1). Files
  are UTF-8 in Unicode NFC. Nothing else outside ASCII. The rule covers
  the content files in this repo (`glossary/`, `rabbit-holes/`,
  `journey/`, `pages/` and `es/`); the website's own UI glyphs are out
  of scope.
- **Slugs and filenames stay ASCII in every language** (`mineria`, not
  `minería`).
- **Use U+00B5 (µ) for unit prefixes, not U+03BC (μ).** They look
  identical but the OG card font subset includes only the Latin block,
  so Greek mu renders as a missing-glyph box on social previews. The
  Unicode standard recommends U+00B5 (Micro Sign) for unit prefixes
  like µBTC, µs, µm anyway. On macOS, Option+M types µ.
- **No price predictions.** Ever.
- **Real numbers, current era.** If you cite supply, fees, hash rate,
  or similar, use figures consistent with the current era and
  cross-checked against the chain.

If you are unsure whether something fits the voice, look at a few
existing entries and match the cadence.

## sameAs values

Glossary entries can list external URLs to authoritative references
in their content `sameAs:` array.

Good sources, in rough order of priority:

- Wikipedia
- Wikidata
- Bitcoin Wiki (en.bitcoin.it)
- The BIP source on GitHub (for BIP entries)
- Bitcoin Optech topic pages

2-5 URLs per entry is plenty. Skip blog posts and marketing pages.

Example:

```yaml
sameAs:
  - "https://en.wikipedia.org/wiki/Unspent_transaction_output"
  - "https://www.wikidata.org/wiki/Q55636735"
  - "https://en.bitcoin.it/wiki/UTXO"
```

## OG cards and the `ogImage` override

Every glossary entry, rabbit hole, and journey chapter gets a social
preview card (`og:image`). The site auto-renders one at
`/og/<collection>/<slug>.png` from the entry's `title` and short text,
so you do not need to do anything for a stock card.

You can override the auto-resolved URL with an `ogImage` field in
frontmatter:

```yaml
ogImage: "/og/glossary/bip-361.png?v=2"     # cache-bust after editing
ogImage: "/diagrams/og/halvings.png"        # static diagram image
ogImageAlt: "Description of the image."     # optional alt text
```

Common use cases:

- **Cache-bust after editing.** Twitter caches OG cards for ~7 days
  and the Cloudflare CDN caches for 24h. Append `?v=2` (then `?v=3`,
  etc.) to force a re-fetch when you change a `shortDefinition` or
  `tagline` that affects the card.
- **Custom diagram.** Point at a checked-in static image when the
  entry deserves a richer visual than the text-only template can do.
  Every journey chapter does this today.

The Worker routes off URL path, so the `?v=N` query string is purely
a cache-busting facade — the rendered card content is unchanged.

## Where things live

```
glossary/             # One markdown file per term
journey/              # Six narrative chapters
rabbit-holes/         # Deep dives, mostly MDX (interactive widgets)
pages/                # Editorial copy of the fixed pages (home, manifesto, policies)
es/                   # The Spanish edition: the same four directories, see below
data/                 # Shelf list for the rabbit holes (rabbit-hole-shelves.json)
downloads/            # PDFs distributed at /downloads/
```

Each file has YAML frontmatter that the site renderer reads. Look at
neighboring files for the exact schema; do not invent new fields
without coordinating first.

## MDX is code

A `.mdx` file is compiled and run on the build server, where the
deploy token lives, so the rules are strict. The web build's
`check-mdx-imports` step enforces the first two and refuses the file
otherwise:

- The only import allowed is a first-party Svelte component from the
  web repo: `import Name from '@components/<dir>/<Name>.svelte'`. No
  packages, URLs, absolute or relative paths, nothing with `..`.
- No `export` of any kind, no dynamic `import()`, no `import.meta`,
  anywhere in the file. Fenced code samples are not exempt: a sample
  that needs those words goes in a `.md` file.
- `{expressions}` run at build too. The only expressions we merge are
  component props such as `<SupplyChart height={320} />`; a pull
  request that adds any other expression is refused by the reviewer,
  whatever it appears to do.

If a chapter needs something interactive, propose a component in the
web repo instead.

## Translations (`es/`)

A Spanish edition is being prepared (talk to us before translating
anything: the pilot is owner-run). Spanish files live under `es/` in
the same four directories as the English ones (`es/glossary/`,
`es/rabbit-holes/`, `es/journey/`, `es/pages/`), follow the English
schema of their type, and add these fields:

```yaml
slug: mineria                 # the Spanish URL slug, ASCII (entries only; pages/ have none)
translationOf: mining         # the English slug; for pages/, the English file stem (home, glossary, privacy)
sourceHash: "3f9a1c2b7d4e"    # first 12 hex of sha256 over the English file's bytes at translation time
sourceCommit: "a705ffa"       # optional: the English file's last commit, for diffing later
sourceUpdated: "2026-10-05"   # optional: the English updated (or published) date at translation time
translation:
  method: "llm-draft"                # then "llm-draft+human-review" or "human" once reviewed
  reviewedBy: "<name or handle>"     # optional; shown on the page once someone has reviewed it
  reviewedAt: "2026-10-20"           # optional
```

`node scripts/translation-source.mjs rabbit-holes/mining.mdx` prints
`sourceHash`, `sourceCommit` and `sourceUpdated` for pasting; nobody
computes a hash by hand. `translationOf` is the one key every
cross-language feature reads (hreflang, the language switcher, reading
progress, share cards, the "the English version was updated" notice),
so it must be exact. The Spanish filename itself is free as long as it
is ASCII: an `es/pages/inicio.md` with `translationOf: home` is the
Spanish home page.

**The title is the term.** A Spanish glossary entry's `title` is the
word every Spanish page uses for that concept, in every chapter, page
and UI string: "billetera", not "cartera" or "monedero". There is no
separate word list; the glossary is it, and `es/GUIA-DE-ESTILO.md`
covers the rest (register, numbers, dates, punctuation, the words that
are not glossary terms). Two optional fields on a Spanish glossary
entry carry the decision:

    aliases: ["wallet", "billetera digital"]   # other phrasings and loanwords that mean the same thing; the auto-linker links them to this entry
    avoid: ["cartera", "monedero"]             # rejected alternatives: words a Spanish page must not use for this concept

`avoid` words are never auto-linked. The web build's `check-translations`
step prints an `AVOIDED <file>:<line>` warning (it does not fail) for
every occurrence of one in another Spanish file's prose, accent- and
case-insensitive, whole word; list the plural too if it should be caught
("carteras"). Introducing the rejected word once in a parenthesis right
after the chosen term is fine and not flagged: "tu billetera (cartera)".
Frontmatter, code and link targets are not scanned, and the entry that
lists a word may discuss it freely. To see the current table (Spanish
title, slug, English title, aliases, avoid, reviewed), run
`pnpm terminology` in the web repo; it is generated from
`es/glossary/*.md`, so to change a term, change the entry. Write the
`translation:` block in block form (one key per line); the check does
not read the one-line `{ ... }` form.

The web build's `check-translations` step refuses a Spanish file that
is missing `translationOf` or `sourceHash`;
whose `translationOf` names no English entry, a draft, or a chapter
that is not live; that claims an English source another Spanish file
already claims; or that reuses another file's `slug`. A page without a
reviewer is allowed: it ships with a notice saying the translation is an
AI draft pending human review, and the build prints an UNREVIEWED line
for it; once someone reviews it, add their name and date and the notice
becomes a credit. The check warns STALE, without failing, when the
English file has changed since `sourceHash` was taken; port the change,
re-run the helper, bump the Spanish `updated`.

## Rabbit-hole shelves

The rabbit holes are grouped into shelves on `/rabbit-holes`. The
shelves (id, label, one-line deck, order) live in
`data/rabbit-hole-shelves.json`. Every rabbit hole needs:

- **`category: <shelf id>`** - its primary shelf, for example
  `category: how-it-works`. **Required, drafts included.** The build
  fails if the id is missing or not in the shelf list.
- **`alsoIn: ["<shelf id>"]`** - optional, up to two more shelves the
  chapter is also listed on.
- **`featured: true`** - optional. Featured chapters are linked from
  the home page's shelf tiles. Only feature chapters that have been
  through review.

Shelf ids are the page anchors (`/rabbit-holes#money`), so never
rename one after it has shipped; change its label instead.

Journey chapters can list rabbit holes to read next with
`goDeeper: ["<rabbit-hole slug>", ...]`.

## Publishing dates

Journey chapters and rabbit holes carry three ISO-date frontmatter
fields. The build pipeline enforces the first; the other two are
opt-in.

- **`published: "YYYY-MM-DD"`** - when the entry first became publicly
  visible on the site. **Required on non-draft journey and rabbit-hole
  entries.** The web repo's `check-published-dates` script runs in
  every `predev` / `prebuild` / `prepreview` hook and fails the build
  if this field is missing or malformed on a non-draft entry.

  Wired into: RSS feed `pubDate` (newest-first sort) + schema.org
  Article `datePublished` + `og:article:published_time`.

- **`updated: "YYYY-MM-DD"`** - when the entry was last meaningfully
  revised. **Optional. Bump on substantive rewrites, not typo fixes.**
  Re-notifies RSS subscribers and signals freshness to search engines.

  Wired into: RSS feed `<atom:updated>` + schema.org Article
  `dateModified` (Google freshness signal) + `og:article:modified_time`.

- **`reviewedAt: "YYYY-MM-DD"`** - when the entry was last fact-checked
  end to end against its sources. **Optional.** Set it when a review
  pass finishes, and leave it alone for ordinary edits; `updated`
  tracks those. The two can differ: a chapter edited after its review
  keeps its `reviewedAt` until the next review.

  Not rendered anywhere yet. It is the record the translation gates
  read (a source page needs a `reviewedAt` before it is translated).

Glossary entries can also carry `published` and `updated` but are not
enforced (there are 440+ entries; fall back to launch day via
`DEFAULT_PUBLISHED` if absent). Set them on glossary entries when
accuracy matters for search-engine freshness on that specific entry.

Example:

```yaml
published: "2026-06-15"
updated: "2026-07-02"
reviewedAt: "2026-07-02"
```

Always quote the date string. Bare `YYYY-MM-DD` parses as a YAML date
type and fails schema validation.

## Credit

Substantive contributions get credited in the relevant commit and in
the page metadata where it makes sense. We do not maintain a
contributors page yet (the project is still young) but we will when
the contributor list is long enough to deserve one.

## License

By submitting a contribution you agree that it is licensed under
[CC-BY-SA-4.0](LICENSE) along with the rest of the repo.

## Code of conduct

Be honest. Be precise. Cite your sources. Stay on topic. That is
the whole code.
