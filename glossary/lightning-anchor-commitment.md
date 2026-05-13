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

Introduced by LND and c-lightning, anchor outputs add special outputs in the LN commitment transaction. Either party can use these outputs to attach additional fees (via CPFP) if the network becomes congested. Without anchor outputs, if the pre-signed fees are too low when you broadcast a channel closure, it may get stuck in the mempool. Anchor commitments solve that by allowing post-broadcast fee injections, reducing the risk of a channel closure languishing unconfirmed. While it’s a beneficial improvement, both sides must support anchor commitment logic to take advantage of this feature.
