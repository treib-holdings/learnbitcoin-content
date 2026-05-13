---
title: "Lightning Refund Invoice"
slug: lightning-refund-invoice
draft: false
shortDefinition: "An invoice that returns funds to the original payer if a payment route fails or is canceled, used in LN workflows."
keyTakeaways:
  - "Provides a plan B if an LN payment fails or can't route"
  - "Requires cooperation between sender and receiver to issue the refund invoice"
  - "Enhances reliability in complex LN scenarios"
sources: []
relatedTerms:
  - bolt-11
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-invoice
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
liveWidget: ~
---

Some LN workflows offer a fallback mechanism: if the payment can't complete, a refund invoice is generated so the sender can claim their BTC back via another LN route. This ensures that if the network is congested or capacity is lacking, the payer isn't left hanging. Depending on the scenario, the user might either automatically or manually attempt a refund payment to retrieve unclaimed or stuck funds. While not a built-in LN feature, some advanced tools or custom scripts facilitate this to improve user experience and reduce lost or locked BTC in multi-hop attempts.
