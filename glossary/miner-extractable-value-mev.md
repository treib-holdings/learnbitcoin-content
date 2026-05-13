---
title: "Miner Extractable Value (MEV)"
slug: miner-extractable-value-mev
draft: false
shortDefinition: "A concept from Ethereum focusing on reordering/injecting transactions for profit; limited in Bitcoin due to simpler scripting."
keyTakeaways:
  - "Mainly relevant to smart-contract-based chains (e.g., Ethereum)"
  - "Bitcoin's limited script reduces front-running or contract exploit opportunities"
  - "Miners might reorder for higher fees but deeper MEV is uncommon"
sources: []
relatedTerms:
  - chain-analysis
  - competitive-block-propagation
  - competitive-mining
  - fee-sniping
  - hidden-miner-tax
  - mining
  - mining-algorithm
  - mining-colocation
  - mining-centralization
liveWidget: ~
---

MEV refers to opportunities where a miner (or block producer) can reorder, insert, or censor transactions to extract extra profit-e.g., front-running trades on decentralized exchanges. In Ethereum's ecosystem, it's a big concern because of complex smart contracts. In Bitcoin, MEV is less pronounced due to minimal on-chain contract logic and first-seen transaction ordering norms. Still, a miner could theoretically reorder transactions for higher fees or exploit rare time-sensitive opportunities. However, the simpler Bitcoin scripting environment and UTXO model mitigate many complex MEV scenarios seen in Ethereum.
