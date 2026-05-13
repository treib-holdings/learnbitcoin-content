---
title: "BIP 75 (Payment Protocol Enhancements)"
slug: bip-75-payment-protocol-enhancements
draft: false
shortDefinition: "Extended BIP 70 with identity verification and communication improvements, but never achieved widespread use."
keyTakeaways:
  - "Added identity and communication features to BIP 70"
  - "Never gained traction due to similar trust/complexity issues"
  - "An example of how merchant protocols evolved away from CAs"
sources: []
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bip-70-payment-protocol
  - bitcoin-core
  - transaction
  - transaction-fee
liveWidget: ~
---

BIP 75, outlined in [BIP-75](https://github.com/bitcoin/bips/blob/master/bip-0075.mediawiki), attempted to build on BIP 70’s merchant payment features by adding enhancements for identity and secure messaging. Its goal was to make Bitcoin payments more user-friendly, like emailing or texting someone a request.
Despite these intentions, it inherited the same CA-based model and privacy drawbacks that doomed BIP 70. Combined with complexities in implementation, the proposal saw minimal adoption. Today, most merchant payment flows rely on simpler URL schemes or LN invoices, leaving BIP 75 as an ambitious but ultimately sidelined effort.
