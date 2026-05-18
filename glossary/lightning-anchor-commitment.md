---
title: "Lightning Anchor Commitment"
slug: lightning-anchor-commitment
draft: false
shortDefinition: "A commitment transaction type with anchor outputs, enabling fee bumps after broadcast if mempool fees spike."
keyTakeaways:
  - "Makes LN channel closures more adaptable to fee market changes"
  - "Uses CPFP on special outputs to bump fees post-broadcast"
  - "Requires node implementations that support anchor outputs"
sources: []
relatedTerms: []
liveWidget: ~
---

Anchor commitments are a [Lightning channel](/glossary/lightning-channel) design pattern that solves a critical fee-rate problem in older channel designs.

The problem: a Lightning channel's commitment transaction (the on-chain transaction that closes the channel and distributes funds) is **pre-signed** when the channel is opened. That signing includes a fee. If you sign with a 10 sat/vB fee in a low-congestion period and then need to broadcast it during a high-fee storm at 200 sat/vB, the transaction is uneconomical to mine and may sit in the [mempool](/glossary/mempool) forever - or get evicted.

Pre-anchor designs handled this poorly. Channels could be effectively "stuck" if fees spiked, with no clean way to bump the commitment's fee post-signing.

Anchor outputs solve it. The commitment transaction is signed at a deliberately low fee, but it includes two small "anchor" outputs (one per channel party). When either party broadcasts the commitment, they can use [CPFP (Child-Pays-for-Parent)](/glossary/fee-bumping) on their anchor output to attach an additional fee child transaction. The anchor child pays the real fee; the original commitment gets pulled along.

The benefits:

- **Channels stay closable regardless of fee market.** No more "I can't close because fees spiked since I signed."
- **Less pre-signed fee waste.** Commitments can be signed with minimal fees, then bumped only when actually broadcast.
- **Better resilience.** Force-closes during fee storms now work reliably.

Anchor commitments became standard in BOLT specs around 2021-2022 and are now the default in modern Lightning implementations. Older channels that don't use anchor commitments are still in operation but are gradually being replaced. If you're opening a new channel in 2026, it's anchor-based unless something is misconfigured.
