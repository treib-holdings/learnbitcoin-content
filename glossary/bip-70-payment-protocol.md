---
title: "BIP 70 (Payment Protocol)"
slug: bip-70-payment-protocol
draft: false
shortDefinition: "Specified a protocol for merchant payment requests, now largely deprecated over security and privacy issues."
keyTakeaways:
  - "Created a merchant payment request standard"
  - "Ultimately fell out of favor due to security flaws"
  - "Most modern wallets no longer support it"
sources: []
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bip-75-payment-protocol-enhancements
  - bitcoin-core
  - transaction
  - transaction-fee
liveWidget: ~
---

BIP 70, described in [BIP-70](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki), allowed merchants to send signed payment requests to customers, providing a standardized invoice-like experience. In theory, it let customers confirm they were paying the correct merchant, reducing address typos.
However, in practice, it introduced security vulnerabilities and relied on centralized certificate authorities (CAs). Privacy concerns arose from transmitting data that could link payments to identities. Major wallet developers and payment processors gradually dropped support, favoring simpler and more private QR code or address-based solutions. As a result, BIP 70 lingers as a reference to a concept that never fully caught on.
