---
title: "Layer 1"
slug: layer-1
draft: false
shortDefinition: "The Bitcoin mainnet blockchain, where transactions settle on-chain under the full proof-of-work consensus."
keyTakeaways:
  - "Foundation of Bitcoin's security and settlement"
  - "Constrained in throughput, leading to layer-2 expansions"
  - "Miners and full nodes collectively enforce consensus"
sources: []
relatedTerms: []
liveWidget: ~
---

Layer 1 is Bitcoin's base chain - the [proof-of-work](/glossary/proof-work-pow)-secured ledger where every confirmed transaction ultimately settles. It's the maximum-security, maximum-finality, but also slowest and most expensive layer in Bitcoin's architecture.

What lives on layer 1:

- **Every UTXO**, controlled directly by [private keys](/glossary/private-key) or scripts.
- **Every on-chain transaction**, validated by every [full node](/glossary/full-node) under Bitcoin's consensus rules.
- **The [block subsidy](/glossary/block-subsidy)** issuance.
- **Channel opens and closes** for [Lightning](/glossary/lightning-network).
- **Peg-ins and peg-outs** for [sidechains](/glossary/sidechain).
- **Settlement of any second-layer activity** that ultimately resolves back to BTC ownership.

The properties layer 1 is optimized for:

- **Finality.** Once a transaction is buried under enough blocks, it's effectively permanent. The [longest chain rule](/glossary/longest-chain-rule) and accumulated proof-of-work make rewriting it cost more than any plausible attacker can afford.
- **Censorship resistance.** No party can block specific transactions from eventually being mined. Miners might try, but other miners exist who won't.
- **Verifiability.** Every node validates everything for itself. No trust required.
- **21 million cap enforcement.** The [supply asymptote](/glossary/asymptote) is enforced here, by every node, every block.

What layer 1 is *not* optimized for:

- **Throughput.** ~7 transactions per second on average, with a hard cap that doesn't change.
- **Instant payments.** Confirmations take ~10 minutes on average; full settlement takes longer.
- **Microtransactions.** Fees make low-value payments uneconomical at the base layer.

These constraints are *features*, not bugs. They keep the base chain secure enough to be the world's final settlement layer. [Second-layer](/glossary/second-layer) solutions like Lightning handle the use cases base-layer constraints rule out.

Layer 1 is the part of Bitcoin that doesn't change. Everything else builds on top.
