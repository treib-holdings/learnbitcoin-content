---
title: "Ordinals"
slug: ordinals
draft: false
shortDefinition: "A protocol that assigns unique sequential identity to individual satoshis, allowing them to be tracked across transactions and inscribed with arbitrary data."
keyTakeaways:
  - "Every satoshi gets a unique ordinal number based on the order it was mined"
  - "Sat identity is tracked client-side; the Bitcoin protocol itself does not require changes"
  - "Combined with inscriptions, ordinals create NFT-like objects native to Bitcoin"
sources: []
relatedTerms:
  - inscriptions
  - satoshi-unit
  - taproot
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/Ordinals_(protocol)"
liveWidget: ~
---

*Ordinals* is a numbering scheme — and a protocol built around that scheme — that assigns a unique identifier to each [satoshi](/glossary/satoshi-unit) based on the order in which it was mined. Combined with [inscriptions](/glossary/inscriptions), the system enables Bitcoin-native digital collectibles, often informally called "Bitcoin NFTs."

The protocol was introduced by Casey Rodarmor in January 2023. It runs entirely client-side and does not require any change to Bitcoin's consensus rules.

## Ordinal theory

The core idea is simple: number every satoshi in the order it comes into existence. The first satoshi ever mined (in the genesis block, January 2009) is ordinal 0. The second is 1. The 100-trillionth — the 2,099,999,997,690,000th — will be the last satoshi ever mined, sometime around the year 2140.

Each ordinal has a fixed identity. When two [UTXOs](/glossary/utxo-unspent-transaction-output) are combined as inputs to a new transaction, the protocol uses a simple first-in, first-out rule to track which output satoshis end up where. The Bitcoin protocol itself doesn't care — to a node, satoshis are fungible — but an ordinals-aware indexer can reconstruct the lineage of any particular sat.

This lets the community talk about "rare sats" using categories like:

- **Uncommon** — the first satoshi of every block
- **Rare** — the first satoshi of every difficulty adjustment period
- **Epic** — the first satoshi after each halving
- **Legendary** — the first satoshi of each cycle (every four halvings)
- **Mythic** — the very first satoshi of the genesis block (ordinal 0)

These categories exist purely as a social/cultural convention layered on the protocol. The Bitcoin network has no notion of "rare" — it's a meaning humans assign on top.

## Combined with inscriptions

The Ordinals protocol shipped with [inscriptions](/glossary/inscriptions) as a way to attach data to specific sats. An inscription is written into [Taproot](/glossary/taproot) witness data inside a transaction; ordinals theory then says the inscribed data is "on" the first satoshi of the first input of that transaction.

This combination created what most people call "ordinals" colloquially: a sat with data attached. A PNG inscribed on sat #12345 becomes a transferable, indivisible object — sell that sat, the PNG goes with it.

The two concepts are conceptually separable. Ordinal theory is the numbering scheme. Inscriptions are the data-storage technique. In practice they're almost always used together.

## Why it matters

Ordinals matter to a Bitcoin learner because:

1. **They reshaped on-chain activity.** Since 2023, ordinal/inscription transactions have been a meaningful share of block space and fee revenue.
2. **They surface a definitional question.** Bitcoin minimalists argue Bitcoin is for money and ordinals are noise. Free-market Bitcoiners argue any paying use of block space is legitimate. The disagreement is real, internal to Bitcoin, and unlikely to resolve in either direction.
3. **They're often confused with broader "crypto" NFTs.** Ordinals are different — they live natively on Bitcoin, do not require a separate token or smart-contract platform, and rely only on Bitcoin's existing consensus rules.

The Ordinals protocol is open source and the spec is maintained at [docs.ordinals.com](https://docs.ordinals.com). Bitcoin itself remains unchanged by their existence; ordinals are an interpretation layer that anyone can run or ignore.
