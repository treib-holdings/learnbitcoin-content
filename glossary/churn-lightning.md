---
title: "Churn (Lightning)"
slug: churn-lightning
draft: false
shortDefinition: "Frequent channel openings, closings, or rebalancing on the Lightning Network-can be costly and reduce efficiency."
keyTakeaways:
  - "Refers to moving channel liquidity frequently on LN"
  - "Racks up on-chain fees if done excessively"
  - "Efficient liquidity management can minimize costly churn"
sources: []
relatedTerms:
  - autopilot-lightning
  - bridge-node-lightning
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - lightning-routing
liveWidget: ~
---

Lightning churn is the process of constantly adjusting channel liquidity-closing channels, opening new ones, or rebalancing funds to maintain capacity. While some amount of churn is normal, excessive churn can drive up on-chain fees and counteract LN’s benefits.
For instance, if users frequently close channels as soon as they receive or send payments, they’ll repeatedly pay Bitcoin transaction fees. Well-managed LN setups mitigate churn by predicting liquidity needs, using rebalancing strategies, or relying on splicing (when implemented) so that channels last longer and require fewer on-chain transactions. The goal is to strike a balance between channel flexibility and the cost of frequent changes.
