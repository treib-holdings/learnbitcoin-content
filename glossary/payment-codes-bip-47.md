---
title: "Payment Codes (BIP 47)"
slug: payment-codes-bip-47
draft: false
shortDefinition: "Reusable identifiers enabling private payments without exposing static addresses, avoiding address reuse."
keyTakeaways:
  - "One code produces new addresses for each payment"
  - "Prevents the privacy leaks of address reuse"
  - "Requires a notification TX to synchronize the code between parties"
sources: []
relatedTerms:
  - address-reuse
  - bip-47-payment-codes
  - bip-bitcoin-improvement-proposal
  - silent-payments
  - stealth-address
liveWidget: ~
---

Payment codes are reusable receiver identifiers defined in [BIP-47](/glossary/bip-47-payment-codes). A user publishes one long-term payment code (e.g. `PM8T...`); senders combine it with their own keys via ECDH to derive a unique on-chain [address](/glossary/address) per payment. The receiver scans for these derived addresses; the sender knows the address from their own derivation.

The privacy goal: avoid [address reuse](/glossary/address-reuse) without forcing users to share a fresh address every time they want to be paid.

The catch that limited BIP-47 adoption: each new sender-receiver pair must publish a one-time **notification transaction** on-chain. This notification is an actual Bitcoin transaction that "introduces" the sender to the receiver and exchanges the cryptographic context for future ECDH derivation. Once that notification exists, subsequent payments between the same two parties happen at unique addresses with no further on-chain handshake. But the notification *itself* is a privacy leak - it publicly tells observers "these two parties have begun a payment-code relationship."

Where this leaves BIP-47:

- **Samourai Wallet** championed it as their main privacy receive-flow until the team's 2024 indictment and platform shutdown.
- **A few other wallets** maintain support for legacy compatibility.
- **The modern successor [Silent Payments](/glossary/silent-payments) (BIP-352)** achieves the same "one code, many addresses" goal without any notification transaction - publishing only the silent-payment address and using a clever Taproot-based derivation that requires no handshake.

BIP-47 is now best understood as a historical proof-of-concept: useful in demonstrating the design space, technically functional, and largely superseded by better successors. New users looking for reusable private receive addresses should look at Silent Payments. See [Silent Payments](/glossary/silent-payments) for the modern equivalent.

Note: this entry partially overlaps with [BIP-47 (Payment Codes)](/glossary/bip-47-payment-codes). They cover the same concept from slightly different angles.
