---
title: "Lightning Channel Capacity"
slug: lightning-channel-capacity
draft: false
shortDefinition: "The amount of BTC locked in a Lightning channel, determining how much can be sent or received via that channel."
keyTakeaways:
  - "Represents total locked funds available for off-chain payments"
  - "Imbalance in capacity distribution can hamper sending or receiving"
  - "Rebalancing strategies keep channels usable for both directions"
sources: []
relatedTerms:
  - bolt
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - inactive-channel
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-routing
  - wumbo-channels-lightning
liveWidget: ~
---

Channel capacity is the combined amount of Bitcoin both parties deposit into the multi-sig address. If a channel has 1 BTC total capacity, it means there's 1 BTC of liquidity to route or spend. However, capacity distribution matters: if all 1 BTC sits on one side, that side can pay while the other can't. Balancing inbound vs. outbound liquidity is a common challenge, especially for merchants receiving payments (they need inbound capacity). Tools like circular rebalancing or splicing help maintain healthy capacity without closing channels.
