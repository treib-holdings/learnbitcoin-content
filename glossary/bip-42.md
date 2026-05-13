---
title: "BIP 42"
slug: bip-42
draft: false
shortDefinition: "Codified the 21 million BTC cap, clarifying no inflation beyond the maximum supply."
keyTakeaways:
  - "Ensures 21 million BTC remains the max supply"
  - "Fixes potential overflow issues with coin issuance"
  - "Core to Bitcoin’s ‘sound money’ narrative"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block-reward
  - block-size
  - block-subsidy
  - hal-finneys-running-bitcoin
  - halving-halvening
  - miner
  - mining-pool
liveWidget: ~
---

BIP 42, described in [BIP-42](https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki), formally documented what was already a shared understanding: Bitcoin’s supply would never exceed 21 million BTC. The impetus was a floating-point overflow bug that could hypothetically lead to more minted coins.
By clarifying and ensuring the code respects that cap under all circumstances, BIP 42 reinforced Bitcoin’s hard limit. It’s a cornerstone of Bitcoin’s value proposition as ‘digital gold,’ where scarcity is algorithmically guaranteed. This BIP is both a technical patch and a symbolic declaration of the project’s commitment to a fixed supply.
