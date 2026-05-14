---
title: "BIP 36 (merkle block request)"
slug: bip-36-merkle-block-request
draft: false
shortDefinition: "An early partial block request proposal, eventually supplanted by modern SPV approaches."
keyTakeaways:
  - "Outlined merkle block retrieval for SPV clients"
  - "Preceded Bloom filters and compact block filters"
  - "Largely replaced by newer proposals"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - merkle-root
liveWidget: ~
---

BIP 36 was an early sketch (2012) for letting SPV-style clients pull only relevant pieces of a block instead of the whole thing. It never made it past draft status.

What actually shipped was BIP 37 (Bloom Filter requests), which had its own privacy problems and is now mostly disabled on the public network. Modern light clients use BIP 158 compact block filters: the node publishes a small deterministic filter per block, the client downloads filters and decides locally which blocks to fetch. The wallet never tells the node what it's looking for.

Spec: [BIP-36](https://github.com/bitcoin/bips/blob/master/bip-0036.mediawiki). Pure history; useful only as the first attempt in a line that eventually got it right.
