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
  - coin-plasma
  - coinjoin
  - fungibility
  - gzen-generalized-zen
  - key-rotation
  - mixing-service
  - payjoin
  - security
  - shielded-coinjoin
  - silent-payments
liveWidget: ~
---

Stealth addresses predate BIP 47 Payment Codes and share conceptual overlap-users publish a stealth key from which senders create ephemeral addresses. The receiver can then scan the chain to find payments to them. While similar to Payment Codes, stealth addresses aren't widely adopted in Bitcoin due to complexity and the requirement to constantly scan the blockchain for incoming transactions. Altcoins like Monero incorporate stealth addresses by default. New proposals like Silent Payments refine the idea further but aren't yet merged into Bitcoin's base protocol.
