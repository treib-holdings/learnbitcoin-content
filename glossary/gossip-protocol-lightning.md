---
title: "Gossip Protocol (Lightning)"
slug: gossip-protocol-lightning
draft: false
shortDefinition: "The method LN nodes use to exchange channel and node info, building a global routing map."
keyTakeaways:
  - "Nodes broadcast channel info to each other in a decentralized manner"
  - "Ensures LN has a global routing map for payments"
  - "Must be optimized to prevent excessive data overhead"
sources: []
relatedTerms:
  - autopilot-lightning
  - bolt
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - lightning-channel
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
liveWidget: ~
---

The Lightning gossip protocol is how [Lightning nodes](/glossary/lightning-node) share information about the network's topology: which channels exist, who they connect, what fees they charge, and whether they're currently active. Without it, nodes couldn't [route](/glossary/lightning-routing) payments through paths they don't directly participate in.

Three kinds of gossip messages, defined in [BOLT-7](https://github.com/lightning/bolts/blob/master/07-routing-gossip.md):

1. **`channel_announcement`** - declares a new channel exists. Includes proof that the channel is real (signed by both endpoints' node keys plus a Bitcoin signature confirming the on-chain funding transaction exists).
2. **`node_announcement`** - declares a node's metadata: alias, color, advertised network addresses.
3. **`channel_update`** - declares a channel's current policy: fee rate, time-lock delta, enable/disable status. These are issued frequently as channels rebalance or adjust their fees.

When a node receives a valid gossip message it doesn't already have, it stores it and forwards it to its peers. The whole network ends up with the same (eventually consistent) view of the public graph.

What gossip *doesn't* reveal:

- **Channel balances.** You know a channel exists and its total capacity, but not how that capacity is currently allocated between its two endpoints. This is a deliberate privacy choice. It also makes routing harder (you have to probe to discover liquidity).
- **Private channels.** Many channels are opt-out from gossip - common between a mobile wallet and its routing node. These channels work fine but aren't usable as intermediate hops in others' routes.

Gossip volume grew large enough that newer optimizations (gossip sync v2, range queries, compact filters) became necessary. A modern Lightning node downloads tens of megabytes of gossip data when fully syncing. Once synced, ongoing gossip is a few KB/sec at most.

See [Lightning Routing](/glossary/lightning-routing) for how the gossip graph gets used to actually move payments.
