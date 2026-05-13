---
title: "Proof-of-Work (PoW)"
slug: proof-work-pow
draft: false
shortDefinition: "Bitcoin's consensus mechanism where miners compute SHA-256 hashes until a valid block hash meets the target difficulty."
keyTakeaways:
  - "Requires massive computational effort to propose valid blocks"
  - "Ensures security by making attacks prohibitively expensive"
  - "Fundamental to Bitcoin's decentralized consensus design"
sources: []
relatedTerms:
  - anti-sybil-mechanism
  - bounty
  - byzantine-fault-tolerance
  - consensus-parameter
  - cuckoo-cycle
  - decentralization
  - difficulty
  - difficulty-retargeting
  - energy-fud
  - hash
  - nonce
  - nonce-exhaustion
  - poisson-process
liveWidget: ~
---

PoW is the backbone of Bitcoin: miners expend computational resources to produce valid blocks. They combine a block's data with a nonce, repeatedly hashing until the output is below the difficulty threshold. The 'work' is verifiable by any node but extremely costly to replicate at scale, deterring double-spends or chain rewrites. PoW secures the blockchain without a central authority: to attack, one must outcompete honest miners in raw hashing power. Critics cite high energy use, while supporters argue it underpins Bitcoin's robust, permissionless security.
