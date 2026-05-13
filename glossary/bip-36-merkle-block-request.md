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

BIP 36, described in [BIP-36](https://github.com/bitcoin/bips/blob/master/bip-0036.mediawiki), aimed to formalize how lightweight nodes could request only relevant parts of a block (the merkle block) without downloading everything. This technique saved bandwidth by delivering a pruned version of the block containing only transactions that matched a user’s filters.
Although it showed promise, subsequent developments like [BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki) and later [BIP-157/158](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki) introduced more advanced, privacy-friendly methods. As such, BIP 36 is more of a stepping stone in Bitcoin’s journey toward efficient light client protocols than an active feature widely in use today.
