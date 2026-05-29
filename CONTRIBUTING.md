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
- **ASCII straight punctuation only.** No curly quotes, no smart
  apostrophes, no en-dashes, no ellipsis characters. Curly quotes
  break YAML frontmatter.
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
downloads/            # PDFs distributed at /downloads/
```

Each file has YAML frontmatter that the site renderer reads. Look at
neighboring files for the exact schema; do not invent new fields
without coordinating first.

## Publishing dates

Journey chapters and rabbit holes carry two ISO-date frontmatter
fields. The build pipeline enforces the first; the second is
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

Glossary entries can also carry these fields but are not enforced
(there are 440+ entries; fall back to launch day via
`DEFAULT_PUBLISHED` if absent). Set them on glossary entries when
accuracy matters for search-engine freshness on that specific entry.

Example:

```yaml
published: "2026-06-15"
updated: "2026-07-02"
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
