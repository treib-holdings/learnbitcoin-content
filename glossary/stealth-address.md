---
title: "Stealth Address"
slug: stealth-address
draft: false
shortDefinition: "A privacy approach letting a receiver share a single stealth pubkey, generating fresh addresses for each payment. Not standard in Bitcoin."
keyTakeaways:
  - "Generates new addresses under the hood from a single pubkey"
  - "Improves privacy but needs constant chain scanning by the receiver"
  - "Mostly overshadowed by BIP 47 or other advanced privacy proposals"
sources: []
relatedTerms:
  - address-reuse
  - coinjoin
  - fungibility
  - key-rotation
  - mixing-service
  - payjoin
  - security
  - shielded-coinjoin
  - silent-payments
liveWidget: ~
---

Stealth addresses are a privacy primitive: the receiver publishes a single long-term public key, and senders derive a fresh on-chain [address](/glossary/address) for each payment from that key. The receiver scans the chain for outputs that match their key and finds the payments without ever publishing a static receive address.

The cryptographic idea has existed in Bitcoin discussions since 2014 but never made it into the base protocol. The reasons:

- **Receiver-side scanning is expensive.** To find your payments, you must check every transaction on the chain against your stealth key. This is doable for a server with the full chain available, but awkward for light wallets and bandwidth-constrained users.
- **Two-way handshake variants** (like [BIP-47 Payment Codes](/glossary/bip-47-payment-codes)) require a "notification" transaction that itself reveals you're using payment codes - which leaks a different kind of metadata.

Monero builds stealth addresses into its protocol by default. Bitcoin has historically left them to wallet-level conventions and BIP-47, which had limited adoption.

The modern revival is **[Silent Payments](/glossary/silent-payments)** ([BIP-352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki), 2023), which refines the stealth-address idea to work cleanly with Bitcoin's existing Taproot infrastructure. Silent Payments is the stealth-address concept that's actually shipping in 2026 wallets.

See [Silent Payments](/glossary/silent-payments) for the practical 2026 version of this idea.
