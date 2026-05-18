---
title: "HTLC Invoice"
slug: htlc-invoice
draft: false
shortDefinition: "An LN invoice referencing a hashed secret (payment hash). The receiver must reveal the preimage to collect funds."
keyTakeaways:
  - "Ties LN payments to a specific hashed secret"
  - "Receiver must disclose the preimage for final settlement"
  - "Crucial for LN's atomic multi-hop security"
sources: []
relatedTerms:
  - bolt-11
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - htlc-preimage-manager
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
liveWidget: ~
---

An HTLC invoice is, in practical terms, an ordinary [Lightning invoice](/glossary/lightning-invoice) - one whose `payment_hash` field is used to construct [Hashed Time-Locked Contracts](/glossary/htlc-hashed-time-locked-contract) at each hop of the routed payment. Almost every [Lightning payment](/glossary/lightning-payment) made today is via HTLC invoices.

What makes the invoice "HTLC-based":

1. The receiver picks a random 32-byte **preimage** and computes its SHA-256 hash. This hash goes into the invoice as the `payment_hash`.
2. The sender's wallet uses the payment hash to construct HTLCs along the route - each hop is locked by the same hash.
3. To claim payment, the receiver reveals the preimage. This propagates backward through the route, settling every HTLC.

This is essentially the [BOLT-11](/glossary/bolt-11) invoice mechanism. "HTLC invoice" is a description of the cryptographic mechanism rather than a separate format - all standard Lightning invoices work this way.

Variants and successors:

- **[BOLT-12](/glossary/bolt-11) offers** still use HTLC-based settlement; the change is in invoice format and reusability, not the underlying cryptography.
- **PTLCs (Point Time-Locked Contracts)** are a proposed future replacement for HTLCs using [Schnorr](/glossary/schnorr-signature)/Taproot-based point math instead of hash preimages. They'd give better privacy (each hop's lock looks different rather than all sharing the same hash). Not yet deployed.
- **Held HTLCs / hodl invoices** are HTLC invoices that the receiver deliberately doesn't settle immediately - useful for conditional payments where the receiver wants to confirm something off-chain before completing.

For everyday Lightning users, "HTLC invoice" is just "the way Lightning invoices work." The mechanism is invisible behind wallet UX. See [HTLC](/glossary/htlc-hashed-time-locked-contract) for the underlying primitive.
