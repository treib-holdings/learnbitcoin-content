# learnbitcoin-content

Source content for [learnbitcoin.com](https://learnbitcoin.com) - the
honest Bitcoin school.

**Bitcoin only. No bullshit. Have fun.**

## What lives here

- [`glossary/`](glossary/) - 437 Bitcoin terms, one markdown file each.
- [`rabbit-holes/`](rabbit-holes/) - self-contained deep dives, mostly MDX so they can embed interactive widgets.
- [`journey/`](journey/) - the opinionated path from "what is money?" to "I run my own node."
- [`pages/`](pages/) - editorial body of the top-level site pages (manifesto, home, /node, the three index pages).
- [`downloads/`](downloads/) - PDFs served at `/downloads/` on the site.

## File format

Each piece of content is a markdown or MDX file with YAML frontmatter:

```markdown
---
title: "Absolute Fee"
slug: absolute-fee
draft: false
shortDefinition: "A transaction fee set as a specific amount in satoshis or BTC..."
keyTakeaways:
  - "Flat amount paid regardless of transaction size"
  - "Can be convenient but risky if network conditions change"
sources: []
relatedTerms: []
liveWidget: ~
---

Body text in markdown.
```

The site renderer reads this repo as a set of Astro content collections. 

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for what we welcome, what we will not merge, voice notes, and how to submit. Every content page on the site has an "Edit this page on GitHub" link in the footer that drops you straight at the right source file.

## License

Content: [Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA-4.0)](LICENSE).

Translate it. Embed it. Remix it. Build your own Bitcoin school on top of it. Attribution + share-alike is the only ask.

## How to attribute

If you reuse any of this content, please credit it with something like:

> Content from [LearnBitcoin.com](https://learnbitcoin.com), licensed
> [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/).

For print or contexts where hyperlinks do not render, include the URLs
in plain text. The license requires a link to the license itself; a
link or citation back to learnbitcoin.com is encouraged and helps
readers find the source.

Two extra things to know if you are publishing a derivative:

- **Share-alike applies.** Your version must also be licensed CC-BY-SA-4.0
  (or a compatible later version).
- **Modifications must be noted.** If you change the content, say so. A
  line like "Adapted from LearnBitcoin.com, with edits." is enough.
