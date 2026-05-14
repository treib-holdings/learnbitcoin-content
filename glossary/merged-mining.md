---
title: "Merged Mining"
slug: merged-mining
draft: false
shortDefinition: "Simultaneously mining two PoW blockchains (e.g., Bitcoin + Namecoin) using the same hash algorithm."
keyTakeaways:
  - "Allows miners to reuse hashes for multiple SHA-256 coins"
  - "Helps smaller chains share security from Bitcoin's hashing power"
  - "Requires support in node software for both blockchains"
sources: []
relatedTerms:
  - hash
  - miner
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-software
  - retail-mining
liveWidget: ~
---

If multiple blockchains share the same PoW function (like SHA-256), miners can submit proof-of-work for both chains without doubling their hash computations-this is merged mining. When they find a valid block hash, it can be packaged for each chain, potentially earning rewards on both if the blocks meet each chain's difficulty target. Bitcoin+Namecoin is a classic example. Critics note that merged mining can introduce security concerns if one chain becomes overly reliant on another chain's mining power, but it remains a notable way to bootstrap smaller networks with Bitcoin's existing ASIC ecosystem.
