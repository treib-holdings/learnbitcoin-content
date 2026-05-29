---
title: "Routing Node"
slug: routing-node
draft: false
shortDefinition: "An LN node focusing on forwarding third-party payments, holding ample liquidity and strategic connections."
keyTakeaways:
  - "Connects multiple LN channels to forward payments for fees"
  - "Requires careful liquidity management and stable uptime"
  - "Essential for LN's decentralized payment routing"
sources: []
relatedTerms:
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-network
  - lightning-routing
  - liquidity
  - node-operator
liveWidget: ~
---

A routing node is a Lightning node that forwards third-party payments through its channels for fees. It's distinct from an end-user node that just sends and receives its own payments: a routing node is plumbing for the network.

What running one actually involves:

- **Multiple well-funded channels** to peers with strong onward connectivity. Typical setups have 10-50+ channels totaling tens to hundreds of millions of sats.
- **Constant uptime.** Channels need both sides online to update; a frequently-offline routing node will see channels closed by counterparties and fail to forward.
- **Active liquidity management.** Inbound and outbound balance drift as payments flow. Circular rebalancing, submarine swaps (Loop, PeerSwap), and channel-splicing tools restore balance without closing channels.
- **Fee policy tuning.** Per-channel `base_fee` (msat) and `fee_rate` (parts per million). Set too high and payments route around you; set too low and you subsidize traffic.
- **Channel-partner selection.** New channels to popular hubs improve fee revenue; new channels to dead nodes lock up capital.

The economic reality is sobering. Most routing nodes earn 0.5-2% annualized on locked capital before costs, and that's before the operational overhead of monitoring, server costs, and the opportunity cost of capital that has to sit in channels. Routing as a business has thin margins; most successful routers run it as an extension of some other Lightning service (a wallet provider, a merchant gateway, etc.) rather than as a standalone profit center.

The major Lightning implementations all support routing-node operation: [LND](/glossary/lightning-network-daemon-lnd), Core Lightning (CLN), Eclair, and LDK. Each has its own approach to liquidity management and fee setting. Operator tooling like Thunderhub, RTL, and Charge-LND fills the gaps in raw daemon UX.

Routing nodes are what make Lightning a payment network rather than a collection of bilateral payment channels. They're not mandatory for end users (most senders pay nothing to do nothing); they are how multi-hop payment routing works at all.
