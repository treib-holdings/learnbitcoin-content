---
title: "BIP 102 (2MB Block Size)"
slug: bip-102-2mb-block-size
draft: false
shortDefinition: "A short-lived proposal to increase Bitcoin's block size to 2 MB, reflecting earlier scaling contention."
keyTakeaways:
  - "A direct block size doubling proposal"
  - "Never implemented due to consensus around SegWit"
  - "Reflects the early, heated scaling disputes"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block
  - block-size
  - fork
  - soft-fork
liveWidget: ~
---

BIP 102, drafted by Jeff Garzik in 2015, was the smallest possible scaling proposal: change the maximum block size from 1 MB to 2 MB at a fixed flag-day height. No witness discount, no soft fork tricks, just a hard fork to a slightly larger block.

It never activated. The community settled on [SegWit (BIP 141)](/glossary/segwit-segregated-witness-bip-141) instead, which delivered an effective 1.7-2x capacity increase as a soft fork, fixed transaction malleability, and unlocked the Lightning Network. Big-block proponents who wanted a clean capacity bump (and rejected SegWit on principle) forked off as Bitcoin Cash in August 2017.

Almost a decade later, the answer to "how does Bitcoin scale" hasn't changed: SegWit and Taproot for base-layer efficiency, Lightning for high-throughput payments, and a deliberate refusal to chase throughput by inflating the block. BIP 102 is the road not taken, and a useful reference for why the road wasn't taken.

Spec: [BIP-102](https://github.com/bitcoin/bips/blob/master/bip-0102.mediawiki).
