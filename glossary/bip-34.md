---
title: "BIP 34"
slug: bip-34
draft: false
shortDefinition: "Mandates that coinbase transactions explicitly include the block height, standardizing block referencing."
keyTakeaways:
  - "Forces coinbase to declare block height"
  - "Improves chain organization and validation"
  - "Prevents ambiguous references to block position"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-30
  - block
  - block-explorer
  - block-height
  - double-spend
  - transaction
liveWidget: ~
---

[BIP-34](https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki) requires every Bitcoin block's [coinbase transaction](/glossary/coinbase-transaction) to encode the [block height](/glossary/block-height) as the first push in its input script. Activated as a [soft fork](/glossary/soft-fork) in March 2013, it's a structural cleanup that solved several niggling issues at once.

What the rule actually does:

```
coinbase input script must begin with: <block_height_serialized>
```

For block 800,000, the coinbase input starts with the byte sequence encoding the integer 800,000. Simple, mechanical, easy to verify.

What it buys:

- **Uniqueness.** Every coinbase transaction now has a unique input that differs from every other block's coinbase, so two blocks can't accidentally produce the same coinbase txid. This is the structural fix that makes the [BIP-30](/glossary/bip-30) "no duplicate txids" rule trivially satisfiable forever.
- **Self-referential blocks.** A block now explicitly states its own height. This made certain validation logic cleaner and provided a sanity-check anchor for nodes resyncing or recovering from corruption.
- **Soft-fork activation precedent.** BIP-34 was one of the first non-trivial soft forks to use a clean miner-signaling activation method (predating the more formal [BIP-9](/glossary/bip-9-versionbits)). It established patterns that later activations refined.

You'll see BIP-34 referenced in node logs, in protocol documentation, and occasionally in mining-pool discussions, but most users never directly interact with it. It's part of the "things that just work because they were carefully designed in 2013" infrastructure of Bitcoin.
