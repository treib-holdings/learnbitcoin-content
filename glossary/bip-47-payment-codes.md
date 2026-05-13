---
title: "BIP 47 (Payment Codes)"
slug: bip-47-payment-codes
draft: false
shortDefinition: "A system for reusable payment codes, aiming to improve privacy and avoid static address reuse."
keyTakeaways:
  - "Enables private reusable payment codes"
  - "Generates unique addresses automatically"
  - "Addresses privacy risks of reusing static addresses"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - payment-codes-bip-47
  - security
  - silent-payments
  - stealth-address
liveWidget: ~
---

BIP 47, proposed in [BIP-47](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki), offers a clever solution to the address reuse problem. Instead of sharing new addresses every time you expect a payment, you distribute a single reusable code (like a stealth handle), which your wallet uses to generate unique addresses under the hood.
By employing special notifications and derivation paths, each payment can still occur on a fresh address, preserving privacy for both sender and receiver. While it’s not universally adopted, BIP 47 remains an intriguing approach to solving the perennial issue of address reuse and transaction linkability in Bitcoin.
