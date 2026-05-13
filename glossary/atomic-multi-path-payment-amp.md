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

AMP is like sending several puzzle pieces through different mail carriers, ensuring that only when all parts arrive do they form a complete payment. Instead of relying on a single path in the Lightning Network, AMP divides the total amount into smaller chunks, routing each through potentially different channels. This helps avoid capacity bottlenecks and increases the likelihood of a successful payment.
From the receiver’s perspective, the funds only finalize when all partial payments come in, preventing scenarios where you get stuck with incomplete amounts. AMP’s design also preserves privacy: observers can’t easily tell these smaller parts belong to the same overall payment. While a bit more complex under the hood, AMP adds significant flexibility to the Lightning Network, making it more robust for larger payments.
