# learnbitcoin-content

Source content for [learnbitcoin.com](https://learnbitcoin.com) — the honest Bitcoin school.

**Bitcoin only. No bullshit. Have fun.**

## What lives here

- [`glossary/`](glossary/) — 488 Bitcoin terms, each in its own markdown file.
- [`deep-dives/`](deep-dives/) — long-form explainers (e.g. Bitcoin units).
- [`journey/`](journey/) — the opinionated path from "what is money?" to "I run my own node."
- [`scripts/migrate/`](scripts/migrate/) — one-shot migration scripts from the legacy Drupal site.

## File format

Each piece of content is a markdown file with YAML frontmatter:

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

The site renderer ([`learnbitcoin-web`](https://github.com/treib-holdings/learnbitcoin-web)) reads this repo as a content collection.

## Contributing

When this repo goes public, we'll accept PRs for:

- Typo fixes, clarifications, citation additions
- New glossary entries (with sources)
- Translations
- "Why it matters" expansions

We won't accept:

- Altcoin content. This is a Bitcoin-only site.
- Affiliate links.
- Price speculation.
- Marketing-flavored rewrites.

## License

Content: [Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA-4.0)](LICENSE).

Translate it. Embed it. Remix it. Build your own Bitcoin school on top of it. Attribution + share-alike is the only ask.

Scripts: [MIT](scripts/LICENSE) — fork freely.
