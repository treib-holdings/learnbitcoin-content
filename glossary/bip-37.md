---
title: "BIP 37"
slug: bip-37
draft: false
shortDefinition: "Introduced Bloom filters for lightweight wallets, later criticized for privacy leaks and mostly replaced by BIP 157/158."
keyTakeaways:
  - "Reduced bandwidth use for SPV wallets"
  - "Criticized for revealing user interest patterns"
  - "Mostly deprecated in favor of modern filtering methods"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-36-merkle-block-request
  - bip-40-alerts-avoid-replay
  - bloom-filter
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - merkle-root
  - spv-simplified-payment-verification
liveWidget: ~
---

BIP 37, seen in [BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki), specified a method for SPV (Simplified Payment Verification) clients to request transactions that match certain Bloom filters. This allowed lightweight wallets to download fewer blocks by only retrieving transactions they cared about.
However, over time, security researchers noted that these Bloom filters could leak information about which addresses or transactions a client was interested in. As a result, many nodes disabled support for BIP 37 due to privacy concerns. Newer proposals like BIP 157/158’s compact block filters offer a more privacy-friendly approach, leaving BIP 37 as an interim solution from an earlier stage in Bitcoin’s evolution.
