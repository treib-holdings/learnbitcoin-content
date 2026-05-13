---
title: "Liquidity"
slug: liquidity
draft: false
shortDefinition: "The ease of buying/selling BTC with minimal price impact (in markets) or channel capacity (in LN)."
keyTakeaways:
  - "BTC markets: volume and order book depth for stable trades"
  - "LN channels: inbound/outbound capacity for successful routing"
  - "Vital to both exchange usage and off-chain LN payment flow"
sources: []
relatedTerms: []
liveWidget: ~
---

In Bitcoin trading, liquidity means plenty of willing buyers and sellers, so large trades don’t drastically move prices. High liquidity fosters stable spreads, fair pricing, and smoother order book dynamics. Meanwhile, in the Lightning Network context, ‘liquidity’ refers to channel capacity-both inbound (how much you can receive) and outbound (how much you can send). A channel with insufficient inbound capacity can’t accept more payments, while insufficient outbound capacity can’t send more. Managing or leasing liquidity is crucial for LN nodes seeking to reliably route payments or handle customer transactions.
