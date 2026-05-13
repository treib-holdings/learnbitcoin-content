---
title: "HTLC Preimage Manager"
slug: htlc-preimage-manager
draft: false
shortDefinition: "The component (or external service) in LN setups tracking and handling preimages for multi-hop payments."
keyTakeaways:
  - "Keeps track of short-lived LN secrets tied to each HTLC"
  - "Coordinates timely preimage disclosure for multi-hop payments"
  - "May be internal node logic or an external LN service module"
sources: []
relatedTerms:
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
liveWidget: ~
---

When routing multiple LN payments simultaneously, a node must securely store the ephemeral secrets (preimages) associated with each HTLC. A preimage manager ensures that once a node receives the correct preimage from a downstream hop, it can immediately pass it upstream or finalize the payment claim. Some LN implementations handle this logic internally, while more modular designs might allow an external service to coordinate multiple channels or advanced payment flows. Managing preimages reliably is key to preventing route-level failures and ensuring the node collects its routing fees.
