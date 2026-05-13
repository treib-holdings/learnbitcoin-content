---
title: "CoinJoin"
slug: coinjoin
draft: false
shortDefinition: "A privacy method combining multiple users’ inputs into a single transaction, obscuring which outputs belong to which inputs."
keyTakeaways:
  - "Blends multiple inputs/outputs in a single transaction"
  - "Weakens deterministic links between addresses"
  - "Not perfect privacy but a notable improvement over standard sends"
sources: []
relatedTerms:
  - address-clustering
  - address-reuse
  - chain-analysis
  - coin-control
  - coin-plasma
  - mixing-service
  - payjoin
  - shielded-coinjoin
  - stealth-address
liveWidget: ~
---

CoinJoin is like a group of friends pooling their money to pay a restaurant bill in one go, then receiving their change individually. Outsiders see one big transaction with many inputs and many outputs, making it harder to link which user funded which output. Popular implementations include Wasabi, Samourai Whirlpool, and JoinMarket.
While CoinJoin significantly improves on-chain privacy, it’s not bulletproof against all blockchain analytics techniques. Some heuristics can still detect suspicious patterns or imperfect mixing strategies. Nonetheless, it remains one of the more accessible ways for average users to break address clusters and obscure their transaction history in a decentralized, trustless manner.
