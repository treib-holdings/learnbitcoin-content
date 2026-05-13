---
title: "Lightning Probe"
slug: lightning-probe
draft: false
shortDefinition: "A test payment that intentionally fails on the final hop, used to check LN route capacity or node responsiveness."
keyTakeaways:
  - "Checks channel liquidity and node availability along a path"
  - "Fails intentionally at the last hop, avoiding a real payment"
  - "Used for LN reliability checks but can add minor network overhead"
sources: []
relatedTerms:
  - custodial-lightning-wallet
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
  - lightning-sphinx
liveWidget: ~
---

Sometimes LN users want to see if a route can handle a large payment without risking partial or stuck funds. They may send a 'probe' payment that uses the desired route but has a payment hash the final node cannot resolve, ensuring it fails. By analyzing where it fails, the user learns if channels en route have enough capacity. While convenient for route testing, excessive probing can create network noise or risk partial fees if the route partially completes. Generally, LN software tries to do minimal or smaller probes automatically before sending big payments.
