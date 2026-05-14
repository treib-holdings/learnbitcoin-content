# learnbitcoin-content

Source content for [learnbitcoin.com](https://learnbitcoin.com) - the
honest Bitcoin school.

**Bitcoin only. No bullshit. Have fun.**

## What lives here

- [`glossary/`](glossary/) - 428 Bitcoin terms, one markdown file each.
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

The site renderer ([`learnbitcoin-web`](https://github.com/treib-holdings/learnbitcoin-web)) reads this repo as a set of Astro content collections. The schema is defined in `learnbitcoin-web/src/content.config.ts`; look at neighboring files in each directory for the exact fields a given collection expects.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for what we welcome, what we will not merge, voice notes, and how to submit. Every content page on the site has an "Edit this page on GitHub" link in the footer that drops you straight at the right source file.

## License

Content: [Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA-4.0)](LICENSE).

Translate it. Embed it. Remix it. Build your own Bitcoin school on top of it. Attribution + share-alike is the only ask.
