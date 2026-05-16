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
- **sameAs values for glossary entries.** External entity URLs in the
  frontmatter `sameAs:` array (Wikipedia, Wikidata, Bitcoin Wiki, BIP
  source, Optech). See the dedicated section below for conventions.
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
- **No price predictions.** Ever.
- **Real numbers, current era.** If you cite supply, fees, hash rate,
  or similar, use figures consistent with the current era and
  cross-checked against the chain.

If you are unsure whether something fits the voice, look at a few
existing entries and match the cadence.

## sameAs values for glossary entries

Glossary entries support a `sameAs:` array in their frontmatter, listing
authoritative external URLs that describe the same Bitcoin concept.
Adding values for entries that do not have them yet is a high-leverage
contribution.

**Source priority** (use these in order; include all that apply):

1. **Wikipedia (English)** — `https://en.wikipedia.org/wiki/<Article_Title>` with underscores
2. **Wikidata** — `https://www.wikidata.org/wiki/Q<number>`. Find the Q-number from the Wikipedia article's "Wikidata item" sidebar link.
3. **Bitcoin Wiki** — `https://en.bitcoin.it/wiki/<Article_Title>`
4. **BIP source** — `https://github.com/bitcoin/bips/blob/master/bip-NNNN.mediawiki` with leading zeros (`bip-0032`, `bip-0141`, `bip-0341`)
5. **Bitcoin Optech topic page** — `https://bitcoinops.org/en/topics/<slug>/`

**Rules:**

- Verify every URL loads and describes the right concept before adding.
  Wikipedia has redirect chains that mislead: for example
  `Bitcoin_address` redirects into the broader `Bitcoin_protocol`
  article, which is too generic to count as the same entity. Omit
  rather than alias to something misleading.
- 2 to 5 URLs per entry is the sweet spot. Fewer is fine. More than 5
  dilutes the signal.
- Skip blog posts, Bitcoin Magazine, Medium articles, exchange
  marketing. The list is for canonical references only.
- Use canonical URL form: underscores not spaces, no trailing slashes,
  no fragments.

**Frontmatter example:**

```yaml
sameAs:
  - "https://en.wikipedia.org/wiki/Unspent_transaction_output"
  - "https://www.wikidata.org/wiki/Q55636735"
  - "https://en.bitcoin.it/wiki/UTXO"
```

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
