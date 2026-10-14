---
title: "Layer 1"
slug: layer-1
draft: false
updated: "2026-10-13"
shortDefinition: "The Bitcoin mainnet blockchain, where transactions settle on-chain under the full proof-of-work consensus."
keyTakeaways:
  - "Foundation of Bitcoin's security and settlement"
  - "Constrained in throughput, leading to layer-2 expansions"
  - "Miners and full nodes collectively enforce consensus"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP 141 - Segregated Witness (Consensus layer): block weight limit of 4,000,000 (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - src/consensus/amount.h, MAX_MONEY (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/amount.h" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp, mainnet nPowTargetSpacing and nSubsidyHalvingInterval (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Visuals - data_daily.csv, daily transaction counts (tx_count_total_sum), 2016 to 2026 (accessed 2026-10-13)", url: "https://bitcoinvisuals.com/static/data/data_daily.csv" }
  - { label: "Bitcoin Optech - Taproot topic: activated soft fork, block 709,632 (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/taproot/" }
relatedTerms:
  - bitcoin-core
  - block
  - block-size
  - consensus-parameter
  - full-node
  - lightning-network
  - off-chain
  - proof-work-pow
  - second-layer
  - soft-fork
liveWidget: ~
---

Layer 1 is Bitcoin's base chain - the [proof-of-work](/glossary/proof-work-pow)-secured ledger where every confirmed transaction ultimately settles. It's the maximum-security, maximum-finality, but also slowest and most expensive layer in Bitcoin's architecture.

What lives on layer 1:

- **Every UTXO**, controlled directly by [private keys](/glossary/private-key) or scripts.
- **Every on-chain transaction**, validated by every [full node](/glossary/full-node) under Bitcoin's consensus rules.
- **The [block subsidy](/glossary/block-subsidy)** issuance, halved every 210,000 blocks.
- **Channel opens and closes** for [Lightning](/glossary/lightning-network).
- **Peg-ins and peg-outs** for [sidechains](/glossary/sidechain).
- **Settlement of any second-layer activity** that ultimately resolves back to BTC ownership.

The properties layer 1 is optimized for:

- **Finality.** Once a transaction is buried under enough blocks, it's effectively permanent. The [longest chain rule](/glossary/longest-chain-rule) and accumulated proof-of-work make rewriting it cost more than any plausible attacker can afford.
- **Censorship resistance.** No party can block specific transactions from eventually being mined. Miners might try, but other miners exist who won't.
- **Verifiability.** Every node validates everything for itself. No trust required.
- **21 million cap enforcement.** The [supply asymptote](/glossary/asymptote) is enforced here, by every node, every block.

What layer 1 is *not* optimized for:

- **Throughput.** Blocks are capped at 4,000,000 weight units, which holds a few thousand typical transactions every ten minutes. Averaged over a year, that has worked out to between about 2.5 and 7 transactions per second since 2016, depending on how large the typical transaction is.
- **Instant payments.** Blocks arrive about every ten minutes on average by design; waiting for several of them takes longer.
- **Microtransactions.** Fees make low-value payments uneconomical at the base layer.

These constraints are *features*, not bugs. They keep the base chain secure enough to be the world's final settlement layer. [Second-layer](/glossary/second-layer) solutions like Lightning handle the use cases base-layer constraints rule out.

Layer 1 is the part of Bitcoin that changes slowest, and only by [soft fork](/glossary/soft-fork), when the nodes agree to enforce a new rule: [SegWit](/glossary/segwit-segregated-witness-bip-141) and [Taproot](/glossary/taproot) are the landmark examples. Everything else builds on top.
