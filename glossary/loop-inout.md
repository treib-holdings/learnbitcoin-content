---
title: "Loop In/Out"
slug: loop-inout
draft: false
shortDefinition: "Lightning Labs’ non-custodial service for swapping between on-chain BTC and LN channel liquidity (inbound or outbound)."
keyTakeaways:
  - "Provides liquidity balancing without channel closures"
  - "Uses atomic swaps for trust-minimized on-chain ↔ off-chain transfers"
  - "Useful for merchants, large LN users, or node operators rebalancing channels"
sources: []
relatedTerms: []
liveWidget: ~
---

‘Loop In’ sends on-chain BTC to an LN channel, boosting a node’s outgoing capacity, while ‘Loop Out’ withdraws LN funds to an on-chain address, freeing up inbound capacity. This helps users rebalance channels without closing them. Since it’s non-custodial, you don’t deposit funds with a trusted party; instead, a submarine swap-like mechanism ensures atomicity between on-chain and off-chain moves. This improves liquidity management-merchants can increase inbound capacity if they’re receiving too many LN payments, or LN users can add more outbound capacity for sending large payments.
