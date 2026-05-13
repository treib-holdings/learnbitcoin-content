---
title: "Bridge Node (Lightning)"
slug: bridge-node-lightning
draft: false
shortDefinition: "A Lightning node that actively routes payments between separate parts of the LN, connecting otherwise isolated channels or peers."
keyTakeaways:
  - "Connects distinct LN segments for payment routing"
  - "Earns small fees for forwarding transactions"
  - "Requires managing channel liquidity and uptime"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
liveWidget: ~
---

A bridge node is like the handy neighbor who connects two cul-de-sacs, enabling traffic to flow between them. In the LN, it acts as a hub, maintaining channels with multiple nodes so it can forward payments across the network. By efficiently routing payments, bridge nodes help keep the LN mesh well-connected.
These nodes typically have solid liquidity and decent uptime, encouraging users to open channels with them. As they route payments, they earn small fees. However, the role also carries risk since they must lock up funds in channels. When bridge nodes work well, they reduce the likelihood of failed payments due to capacity or connectivity constraints.
