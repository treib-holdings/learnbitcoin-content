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

Sidechains lock BTC on mainnet, issuing pegged tokens on a separate ledger, which can have different block times, scripting rules, or privacy features. When you 'peg out', you return those tokens, reclaiming the locked BTC. Examples include Blockstream's Liquid or RSK. They let Bitcoin remain secure as the base while specialized blockchains handle niche use cases-like quick settlements, confidential transactions, or smart contracts. The trade-off: sidechains often rely on federations or alternative security models to manage the peg, so it's not purely trustless like mainnet.
