---
title: "BIP 22 (getblocktemplate)"
slug: bip-22-getblocktemplate
draft: false
shortDefinition: "A proposal for an RPC method giving miners raw block data to assemble their own candidate blocks instead of relying on getwork."
keyTakeaways:
  - "Offers full control over block construction"
  - "Supersedes the simpler but less flexible getwork"
  - "Enhances decentralization in transaction selection"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - block
  - block-header
  - mining-centralization
  - mining-rig
  - mining-software
liveWidget: ~
---

BIP 22 specifies `getblocktemplate` (GBT), the RPC a miner uses to ask a full node for a block to mine. The node hands over a complete template: previous block hash, coinbase scaffolding, the transactions the node wants included, and the consensus rules the block must satisfy. The miner can accept the template wholesale, reorder transactions, swap them out, or build their own template from scratch.

It replaced the older `getwork` call, which only handed back a partially-hashed block header. Under `getwork` the pool chose every transaction and the miner just spun the nonce - fine for the miner, bad for decentralization, because the choice of what to include in a block lived entirely at the pool. GBT, properly used, gives that power back to whoever runs the node.

In practice most hashpower still routes through pools that pre-build templates and ship them over Stratum V1, so the decentralization benefit is largely theoretical. Stratum V2 and "decentralized job negotiation" specifications aim to push template construction back toward individual miners, but adoption is slow. The result is that GBT is healthy as a protocol and underused as a practice, which is exactly the structural shape of [mining centralization](/glossary/mining-centralization) today.

Spec: [BIP-22](https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki). Paired with BIP 23 for refinements to template submission.
