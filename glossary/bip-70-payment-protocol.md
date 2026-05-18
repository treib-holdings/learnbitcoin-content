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

BIP 70 tried to make Bitcoin payments feel like card payments. A merchant generates a signed payment request, the wallet shows "Paying to Acme Corp" (verified via an X.509 certificate authority chain), the user approves, and the wallet posts the signed transaction back to a merchant URL.

It died for the usual reasons. The signing model leaned on CAs - the same CA system Bitcoiners had close to zero trust in. The "phone home" payment ACK callback leaked the buyer's IP and timing to the merchant on every transaction. Implementation complexity drove wallets to quietly drop support. Bitcoin Core deprecated BIP 70 in 0.18 (2019) and removed it in 0.20.

What replaced it is just simpler. `bitcoin:` URIs (`bitcoin:bc1q...?amount=0.01&label=Acme`) cover most on-chain merchant flows in a single QR code. For interactive payments, [Lightning invoices](/glossary/lightning-invoice) and BOLT-12 offers do the user-experience job BIP 70 was reaching for, without CA trust, without identity-leaking callbacks, and with cryptographic proof of payment baked into the protocol rather than bolted on.

Spec: [BIP-70](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki).
