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

A bridge node is a [Lightning node](/glossary/lightning-node) that maintains channels across what would otherwise be disconnected segments of the Lightning Network graph - acting as connective tissue between regions of nodes that wouldn't have direct routing options without it.

In practice, "bridge node" overlaps heavily with "routing node" - the distinction is more about position in the network topology than about role. A node with many high-capacity channels connecting otherwise sparsely-connected parts of the gossip graph is a bridge whether or not it advertises itself that way.

Who runs bridge nodes:

- **Commercial routing operators.** River, Voltage, hosted-Lightning services, and dedicated routing-as-a-business operations. They optimize for fee revenue and uptime.
- **Major exchanges and Lightning service providers.** Coinbase, Strike, Cash App run large Lightning infrastructure for their own user flow plus opportunistic routing.
- **Power users with serious capital.** Some self-custody operators run substantial routing nodes essentially as a hobby with positive expected return.

What bridge nodes earn vs. cost:

- **Routing fees** - small per-payment, but at scale across thousands of daily payments, real revenue.
- **Capital costs** - BTC locked into channels can't be spent or staked elsewhere. The opportunity cost matters.
- **Operational costs** - server uptime, monitoring, liquidity rebalancing, watchtower services.

The economics for bridge nodes have been tight historically. Some operators run them profitably; others run them at marginal cost to support the network. Either way, well-connected bridge nodes are part of what makes Lightning's routing reliable - a sparsely-bridged graph means more failed payments.

See [Lightning Routing](/glossary/lightning-routing) for how bridge nodes get used and [Lightning Node](/glossary/lightning-node) for the broader landscape.
