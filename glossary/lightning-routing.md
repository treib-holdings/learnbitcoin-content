---
title: "Lightning Routing"
slug: lightning-routing
draft: false
shortDefinition: "Finding a path of LN channels from sender to recipient, potentially spanning multiple intermediaries."
keyTakeaways:
  - "Selects a route of connected channels with sufficient capacity"
  - "Uses LN gossip data for up-to-date channel states"
  - "Relies on ephemeral HTLCs ensuring trustless multi-hop payments"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - delayed-payment-channel
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-refund-invoice
  - lightning-sphinx
  - onion-routing-lightning
liveWidget: ~
---

When you pay someone on LN but lack a direct channel with them, your node consults the network graph, searching for a route where each channel has enough capacity to forward the amount. LN nodes gossip channel info, enabling route-finding algorithms (like Dijkstra’s or variations). If the chosen route fails mid-payment, the node retries with an alternate path or a smaller chunk (AMP). Routing complexities arise from the dynamic nature of liquidity-channels can deplete or rebalance unpredictably-making LN routing an ongoing challenge for node software developers to optimize.
