---
title: "Atomic Multi-Path Payment (AMP)"
slug: atomic-multi-path-payment-amp
draft: false
shortDefinition: "A Lightning Network feature splitting one payment into multiple smaller payments that recombine upon receipt."
keyTakeaways:
  - "Splits a single payment into multiple routes"
  - "Helps bypass channel capacity limitations"
  - "Only completes when all partial payments arrive"
sources: []
relatedTerms:
  - atomic-swap
  - atomic-swap-refill
  - audiobook-model-lightning
  - autopilot-lightning
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - lightning-channel-capacity
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
liveWidget: ~
---

Atomic Multi-Path Payment (AMP) is a [Lightning](/glossary/lightning-network) technique that splits a single logical payment into multiple smaller partial payments, each [routed](/glossary/lightning-routing) along a different path through the network. The receiver only "completes" the payment when all parts arrive.

The motivation: any single [Lightning channel](/glossary/lightning-channel) has a limited capacity, often a few million sats or less. Sending a payment larger than the smallest channel on any candidate route would fail with the single-path approach. AMP works around this by spreading the load across multiple routes.

How it works:

1. The sender's wallet decides to use AMP and splits the total into chunks (say, 5 × 200,000 sats for a 1,000,000-sat payment).
2. It finds different routes for each chunk - ideally through disjoint channels so no one path is fully loaded.
3. All chunks are sent simultaneously using [HTLCs](/glossary/htlc-hashed-time-locked-contract).
4. The receiver holds each incoming HTLC until they've received all of them.
5. Once complete, the receiver releases the preimage and all chunks settle atomically.

If even one chunk fails to route, the receiver refuses to release the preimage and the entire payment unwinds via HTLC timeouts. Nothing partial gets settled.

Variants:

- **MPP** (Multi-Path Payment) - the basic split-and-recombine variant. All parts share the same payment hash.
- **AMP proper** - introduced by Olaoluwa Osuntokun in BOLT-12-era specs. Uses separate sub-hashes per part for slightly better privacy and reliability properties.

Both are widely supported in 2026 across major Lightning implementations. The practical upshot for users: payments that would have failed in 2019 due to liquidity constraints now succeed routinely. Wallets retry automatically with different splits if the first attempt doesn't route.
