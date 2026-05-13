---
title: "Sidechain"
slug: sidechain
draft: false
shortDefinition: "An external blockchain interoperable with Bitcoin via pegging (e.g., Liquid), enabling new features or faster transactions."
keyTakeaways:
  - "Brings extra functionality while maintaining BTC's monetary unit"
  - "Requires a bridging mechanism (federated or otherwise) to lock/unlock BTC"
  - "Allows experimentation without risking mainnet consensus"
sources: []
relatedTerms:
  - one-way-peg
liveWidget: ~
---

A sidechain is a separate blockchain that's interoperable with Bitcoin via a **two-way peg** - you lock BTC on the main chain, an equivalent token is issued on the sidechain, and at any time you can reverse the process to redeem your BTC back.

The sidechain runs its own consensus, its own block production, often its own scripting environment, and its own [block time](/glossary/block-time). Users can transact freely on the sidechain (often with features Bitcoin's base layer doesn't have - faster blocks, confidential transactions, smart contracts) while the BTC remains locked on mainnet.

The peg mechanism is the central trust question. The strongest existing approaches:

- **Federated peg.** A multisignature committee of operators holds the locked BTC. They issue/redeem sidechain tokens based on signed deposits/withdrawals. Trust is in the federation: if 51% (or whatever threshold) collude or get compromised, peg breaks. Used by **Liquid** (Blockstream).
- **Drivechain ([BIP-300/301](/glossary/bip-300-drivechains))** - a proposed Bitcoin upgrade where miners enforce the peg via voting on withdrawal requests. Not yet activated; debated.
- **Spacechains / Statechains / Ark** - more recent designs with various trust models, some genuinely sovereign for the user, some still dependent on coordinators.

Notable Bitcoin sidechains in 2026:

- **Liquid Network** (Blockstream) - federated, supports confidential transactions and issued assets. Used for institutional inter-exchange settlement, security tokens, and some Tether USD.
- **RSK (Rootstock)** - federated, EVM-compatible smart contracts.
- **Statechains / Mercury Layer** - newer, smaller user base; off-chain transfers of UTXO control without on-chain transactions.

The general framing: sidechains let you experiment with features Bitcoin can't safely adopt on its base layer. The trade-off is some additional trust assumption (typically a federation). Different users will value that trade differently. See [Second Layer](/glossary/second-layer) for the broader category of off-mainchain constructions.
