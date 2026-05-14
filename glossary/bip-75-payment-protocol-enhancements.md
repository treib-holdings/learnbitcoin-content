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

BIP 75 was the second-act extension to BIP 70. It added receiver identity, encrypted store-and-forward messaging, and PKI-rooted authentication on top of BIP 70's signed payment requests. The pitch: make a Bitcoin payment feel like an email exchange between two identified parties.

It inherited every reason BIP 70 failed. The trust model still leaned on X.509 certificate authorities, which Bitcoiners had close to zero appetite for. The protocol was heavy to implement, the privacy story phoned identity back to the merchant, and by the time BIP 75 was drafted (2016) the wallet ecosystem was already moving toward plain `bitcoin:` URIs and [Lightning invoices](/glossary/lightning-invoice).

In 2026 the practical answer to "send a merchant a payment" is a Lightning invoice or a BOLT-12 offer (reusable, payer-anonymous, no CA in sight). BIP 75 sits unused, a fork in the road the ecosystem deliberately didn't take.

Spec: [BIP-75](https://github.com/bitcoin/bips/blob/master/bip-0075.mediawiki).
