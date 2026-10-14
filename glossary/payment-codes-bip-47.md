---
title: "Payment Codes (BIP 47)"
slug: payment-codes-bip-47
draft: false
updated: "2026-10-15"
shortDefinition: "Reusable identifiers enabling private payments without exposing static addresses, avoiding address reuse."
keyTakeaways:
  - "One code produces new addresses for each payment"
  - "Prevents the privacy leaks of address reuse"
  - "Requires a notification TX to synchronize the code between parties"
sources:
  - { label: "BIP 47 - Reusable Payment Codes for Hierarchical Deterministic Wallets (Status: Deployed): codes are Base58Check with version byte 0x47, which 'produces a P as the first character'; before the first payment the sender MUST send a notification transaction, a small payment to the receiver's notification address (the P2PKH address of the code's first derived key) with an 80-byte OP_RETURN carrying the blinded payment code; the inputs 'MUST NOT be easily associated' with the sender; the receiver must send its own notification before paying back; after that up to 2^32 payments need no further notification; future versions will not go through the BIP process", url: "https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki" }
  - { label: "BIP 352 - Silent Payments: static payment addresses 'without on-chain linkability of payments or a need for on-chain notifications'; notification schemes leave 'a noticeable footprint in the blockchain, potentially revealing metadata about the sender and receiver' and let the receiver link all payments from the same sender; version 0 addresses start sp1q and outputs are BIP 341 taproot outputs; the cost is that wallets must scan the chain", url: "https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki" }
  - { label: "Bitcoin Optech - Silent payments topic: a receiver publishes a single silent payment address, eliminating the need for interaction; the sender derives the destination from its own input keys and the address; the main downside is the cost of scanning", url: "https://bitcoinops.org/en/topics/silent-payments/" }
  - { label: "Samourai Wallet - samourai-wallet-android features list (GitHub): 'BIP47 Reusable Payment Codes support' and 'PayNym.is lookup of BIP47 payment codes'; the repository README adds 'BIP47: Samourai implementation based on original BIP by Justus Ranvier', with modifications to incorporate SegWit addresses", url: "https://github.com/Samourai-Wallet/samourai-wallet-android/blob/master/Samourai-Wallet-features.md" }
  - { label: "US DOJ SDNY - founders and CEO of cryptocurrency mixing service arrested and charged (April 24, 2024): indictment unsealed, Samourai's web servers and domain seized, a seizure warrant for the app served on the Google Play Store", url: "https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering" }
  - { label: "US DOJ SDNY - Samourai Wallet founders sentenced to five and four years (November 19, 2025)", url: "https://www.justice.gov/usao-sdny/pr/founders-samourai-wallet-cryptocurrency-mixing-service-sentenced-five-and-four-years" }
relatedTerms:
  - address-reuse
  - bip-47-payment-codes
  - bip-bitcoin-improvement-proposal
  - silent-payments
  - stealth-address
liveWidget: ~
---

Payment codes are reusable receiver identifiers defined in [BIP-47](/glossary/bip-47-payment-codes). A user publishes one long-term payment code (a string starting with `P`); senders combine it with their own keys via ECDH to derive a unique on-chain [address](/glossary/address) per payment. The receiver scans for these derived addresses; the sender knows the address from their own derivation.

The privacy goal: avoid [address reuse](/glossary/address-reuse) without forcing users to share a fresh address every time they want to be paid.

The catch that limited BIP-47 adoption: before the first payment, each new sender must publish a one-time **notification transaction** on-chain (one per direction; if the receiver later wants to pay the sender back, they send their own). This notification is an actual Bitcoin transaction: a small payment to the receiver's notification address, carrying the sender's payment code in an 80-byte `OP_RETURN` output, blinded so that only the receiver can read it. Once that notification exists, subsequent payments between the same two parties happen at unique addresses with no further on-chain handshake. But the notification *itself* is a privacy leak. The notification address is derived from the receiver's public code, so anyone who knows the code can watch new senders' coins arrive there (which is why BIP-47 requires that the inputs "MUST NOT be easily associated" with the sender's own notification address), and the receiver can link every later payment from the same sender together.

Where this leaves BIP-47:

- **Samourai Wallet** built its PayNym feature on it and shipped it until April 2024, when US prosecutors unsealed an indictment against the founders, seized the servers and domain, and had the app pulled from Google Play in the US. The founders were sentenced in November 2025.
- **The spec is frozen.** BIP-47 is marked Deployed, but it says any further versions of payment codes will not go through the BIP process.
- **The modern successor [Silent Payments](/glossary/silent-payments) (BIP-352)** achieves the same "one code, many addresses" goal without any notification transaction - publishing only the silent-payment address (`sp1q...`) and deriving a fresh Taproot output from keys the sender is already revealing to spend its inputs, so no handshake is needed. The cost moves to the receiver, who has to scan the chain.

BIP-47 is now best understood as a historical proof-of-concept: useful in demonstrating the design space, technically functional, and largely superseded by better successors. New users looking for reusable private receive addresses should look at Silent Payments. See [Silent Payments](/glossary/silent-payments) for the modern equivalent.

Note: this entry partially overlaps with [BIP-47 (Payment Codes)](/glossary/bip-47-payment-codes). They cover the same concept from slightly different angles.
