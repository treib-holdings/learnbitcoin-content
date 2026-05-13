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

[BIP-47](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki) ("Reusable Payment Codes") defines a system where a receiver publishes one long-term **payment code**, and senders derive fresh on-chain [addresses](/glossary/address) from it for each payment. The goal: avoid [address reuse](/glossary/address-reuse) while still having a single, shareable identifier.

How it worked:

1. The receiver publishes their payment code (an extended public key plus some metadata, encoded as a string starting with `PM...`).
2. The sender does a one-time **notification transaction** on-chain: a tiny payment to a special derivation that "introduces" the sender to the receiver and exchanges the cryptographic material needed for ECDH-based address derivation.
3. From that point forward, both parties can derive a stream of unique addresses for payments between them, without further on-chain handshakes.

In practice, BIP-47 saw limited adoption. The Samourai Wallet team championed it; a handful of other wallets implemented it. Two main reasons it didn't take off broadly:

- **The notification transaction is a privacy leak in itself.** It tells chain observers "this user is using payment codes," and links the sender and receiver via that single on-chain transaction. The whole point was supposed to be privacy.
- **The infrastructure burden.** Each receiver needed to scan the chain for incoming notification transactions, then derive and watch all the corresponding addresses.

The modern successor is **[Silent Payments](/glossary/silent-payments)** (BIP-352, 2023), which achieves the same "one reusable code, fresh addresses per payment" goal without any notification transaction. As of 2026, BIP-47 is mostly of historical interest; new wallets adopting reusable receive codes are picking Silent Payments instead.
