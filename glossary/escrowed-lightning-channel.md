---
title: "Escrowed Lightning Channel"
slug: escrowed-lightning-channel
draft: false
shortDefinition: "A Lightning channel where a third party or a multi-sig arrangement adds extra security or conditional controls."
keyTakeaways:
  - "Adds a neutral or conditional party to LN channels"
  - "Strengthens security/dispute resolution for channel payments"
  - "Introduces complexity beyond standard LN two-party setups"
sources: []
relatedTerms:
  - core-lightning-c-lightning
  - counterparty-risk
  - custodial-lightning-wallet
  - escrow
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - payment-channel
liveWidget: ~
---

In an escrowed Lightning channel, an external entity or condition is introduced to oversee or arbitrate channel operations. This could be a multi-signature setup where an ‘escrow’ key is required to finalize certain updates, or a specialized script that triggers if one participant fails to fulfill obligations.
These modifications can help in business deals or more complex arrangements. For instance, a service provider and a client might open a channel, with an escrow agent stepping in only if disputes arise-reducing the need for trust in a fully custodial third party. It’s an example of how LN channels can be customized for higher-level contract logic while retaining off-chain efficiency.
