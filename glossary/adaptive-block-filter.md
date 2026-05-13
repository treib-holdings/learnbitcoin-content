---
title: "Adaptive Block Filter"
slug: adaptive-block-filter
draft: false
shortDefinition: "A proposed alternative to compact block filters, aiming to reduce false positives for SPV clients by adjusting filtering methods dynamically."
keyTakeaways:
  - "Refines block filtering for SPV clients"
  - "Potential improvement over current compact filters"
  - "Targets fewer false positives for a better user experience"
sources: []
relatedTerms:
  - bip-158
  - bloom-filter
  - merkle-block
  - merkle-inclusion-proof
  - merged-mining
  - merkle-proof
  - merkle-root
liveWidget: ~
---

Adaptive block filters could one day become the next evolution of lightweight wallet technology. Currently, [BIP-157](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki) and [BIP-158](https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki) define compact block filters that help Simplified Payment Verification (SPV) wallets determine which blocks contain relevant transactions without downloading every transaction in full. However, these filters sometimes generate 'false positives,' meaning an SPV wallet might think a transaction is relevant when it's not.
Adaptive block filters aim to address this issue by adjusting how they index transactions and manage data, lowering the odds of a false match. It's like having a search engine that refines its algorithm on the fly to deliver more precise results. While still at a conceptual or experimental stage, this technology promises a smoother user experience for lightweight Bitcoin wallets by improving privacy and reducing unnecessary data fetches.
