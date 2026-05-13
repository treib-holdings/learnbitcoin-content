---
title: "Consensus Parameter"
slug: consensus-parameter
draft: false
shortDefinition: "A network-wide rule or setting-like block size or difficulty-that all full nodes must follow for consensus."
keyTakeaways:
  - "Defines fundamental rules of block and transaction validity"
  - "Changes risk chain splits if not broadly accepted"
  - "Enforced by full nodes for network-wide agreement"
sources: []
relatedTerms:
  - block
  - block-subsidy
  - blockchain
  - decentralization
  - deployment-threshold-soft-fork
  - difficulty
  - difficulty-retargeting
  - fork
  - locked-period-soft-fork
  - nonce
  - proof-work-pow
  - soft-fork
liveWidget: ~
---

Bitcoin's consensus parameters are the rules that determine block validity, like the maximum block weight, the halving schedule, or valid script opcodes. Full nodes enforce these settings: if a block violates them, nodes reject it. This ensures the network collectively agrees on the correct ledger state.
Adjusting a consensus parameter typically requires a coordinated soft or hard fork. Examples include changing the block size limit or introducing new opcodes via BIPs. Because altering these parameters can split the chain if not universally adopted, proposals undergo extensive debate and testing before any wide deployment.
