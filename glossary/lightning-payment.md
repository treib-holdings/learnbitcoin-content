---
title: "Lightning Payment"
slug: lightning-payment
draft: false
shortDefinition: "An off-chain BTC transfer across one or more LN channels, typically near-instant and with minimal fees."
keyTakeaways:
  - "Uses channel balance updates for quick, cheap transfers"
  - "Multihop routing connects distant LN nodes seamlessly"
  - "Bypasses on-chain fees except when channels open/close"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - delayed-payment-channel
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-invoice
  - lightning-network
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - payment-channel
  - submarine-swap
liveWidget: ~
---

A Lightning payment is a transfer of value across the [Lightning Network](/glossary/lightning-network) - typically near-instant, fee-cheap, and routed through one or more intermediate channels without any of the routing hops being trusted with the funds.

How a payment actually flows:

1. **Receiver generates an invoice.** A [BOLT-11](/glossary/bolt-11) invoice (or [BOLT-12 offer](/glossary/lightning-invoice)) containing amount, payment hash, destination, expiry.
2. **Sender's wallet finds a route.** Using the gossip graph, it builds a path of channels with enough liquidity to deliver the payment.
3. **Sender constructs an onion.** Each hop's instructions are encrypted in a nested [Sphinx](/glossary/lightning-sphinx) packet so each hop only sees its own routing info.
4. **HTLCs cascade forward.** The sender locks funds into an [HTLC](/glossary/htlc-hashed-time-locked-contract) with their first hop. That hop, after verifying, locks funds with its next hop, and so on. Each hop is committing "I'll pay forward if the next hop reveals the preimage."
5. **Receiver reveals the preimage.** This propagates back through the route, settling each HTLC.
6. **Done.** Usually within 1-5 seconds, with sub-cent fees.

What can go wrong:

- **Route not found.** Insufficient liquidity along any candidate path. Wallet retries with different paths (often using [AMP](/glossary/atomic-multi-path-payment-amp) to split the payment).
- **Intermediate node offline.** The HTLC times out and unwinds; nothing is lost.
- **Probing / jamming attacks.** Edge cases that can briefly tie up liquidity but don't actually lose funds.

What can never go wrong:

- **Partial settlement.** Either the entire payment completes or nothing does. HTLCs make it atomic.
- **Theft by intermediate hops.** Hops can refuse to forward, but they can't steal - the cryptographic structure makes that impossible.

For most everyday Lightning use in 2026, payments succeed on the first try in under a second. The cases where things get interesting are large payments (which test route capacity) or payments to obscure nodes (which test the connectivity of the public graph). The progress on both fronts has been substantial.
