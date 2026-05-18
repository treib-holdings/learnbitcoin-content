---
title: "Micropayment"
slug: micropayment
draft: false
shortDefinition: "A very small-value payment, typically impractical on-chain due to fees, but feasible via LN or off-chain solutions."
keyTakeaways:
  - "Usually too small to justify on-chain fees"
  - "LN or sidechains enable fractions-of-a-cent payments"
  - "Drives new use cases like streaming payments or micro-tipping"
sources: []
relatedTerms: []
liveWidget: ~
---

A micropayment is a payment too small to be economical via traditional payment rails or on-chain Bitcoin transactions due to overhead. Typical threshold: anything under a few cents, where fees would dominate the payment value.

Why micropayments don't work on-chain:

- A typical Bitcoin transaction costs anywhere from a few cents to several dollars in fees depending on mempool conditions.
- Paying someone $0.01 via on-chain Bitcoin while fees are $1 means the recipient gets paid $0.01 and pays $1 to access the value. Net result is loss.
- The [dust limit](/glossary/dust-limit) (~300-550 sats per output) is a separate hard floor that prevents creating outputs smaller than ~$0.20 worth of BTC at current prices.

Lightning Network is the canonical answer:

- Sub-second settlement, sub-cent fees, instant finality (within the channel network).
- A $0.01 Lightning payment costs typically 0-10 sats in routing fees: still real cost, but multiple orders of magnitude lower than on-chain.
- Practical for streaming payments (pay-per-second video / data), pay-per-API-call services, tipping, real-time content monetization.

Active micropayment use cases as of 2026:

- **Podcasting 2.0 streaming sats.** Listeners stream Lightning payments to podcast hosts in real time while listening. Standard in Fountain, Castamatic, and other modern podcast apps.
- **Lightning-paid APIs.** Pay-per-call services where users send sats to use computation, data, or AI inference. Marginal services rather than mainstream, but technically viable.
- **In-game economies.** Some games use Lightning for in-game item purchases, sub-cent unit pricing.
- **AI agent micropayments.** Speculative-but-growing area: AI agents paying each other sats for API access, computation, data retrieval.

Pre-Lightning attempts:

- **PayPal Micropayments tier**: existed but had per-transaction floors that limited true micropayments.
- **Flattr, Patreon, BAT**: various non-Bitcoin micropayment systems with their own custody and trust assumptions.
- **Bitcoin Cash / other "big-block" forks**: claim on-chain micropayments are feasible. Math works only if fees stay low; structurally less robust than off-chain.

Micropayments are one of Lightning's strongest use cases - things that traditional finance literally can't do because the rails impose per-transaction overhead. Whether they become a major economic phenomenon or stay a niche feature is still being decided, but the technical capability is there in a way it never was before Lightning matured.
