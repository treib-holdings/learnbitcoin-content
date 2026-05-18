---
title: "Lightning Gossip Pruning"
slug: lightning-gossip-pruning
draft: false
shortDefinition: "Removing outdated or inactive channel announcements from an LN node's network graph to reduce clutter."
keyTakeaways:
  - "Eliminates stale channel data to reduce routing overhead"
  - "Improves LN node performance and memory usage"
  - "Ensures network maps reflect only viable, live channels"
sources: []
relatedTerms: []
liveWidget: ~
---

Lightning gossip pruning is the practice of removing stale or inactive channel announcements from a [Lightning node's](/glossary/lightning-node) local view of the [gossip graph](/glossary/gossip-protocol-lightning). It's the housekeeping that keeps routing tables manageable as the network grows.

Why pruning matters:

- **The gossip graph grows over time.** Every channel that gets announced sits in your node's routing tables. Without pruning, you'd accumulate every channel that ever existed, including closed channels, abandoned nodes, and other dead weight.
- **Pathfinding scales with graph size.** A node trying to find a route runs Dijkstra-like algorithms over the gossip graph. A bigger graph means slower routing decisions.
- **Memory usage matters.** Lightning nodes running on Raspberry Pi-class hardware can't afford unbounded gossip storage.

The protocol-level rules ([BOLT-7](https://github.com/lightning/bolts/blob/master/07-routing-gossip.md)):

- **Channel announcements** must be refreshed every two weeks via `channel_update` messages. Channels that go more than two weeks without a refresh are considered stale and can be pruned.
- **Node announcements** similarly have a freshness window; nodes not heard from in two weeks are considered offline.
- **Closed channels** detected via on-chain monitoring can be pruned immediately - if the funding transaction has been spent, the channel definitely doesn't exist anymore.

Implementations handle pruning slightly differently. [LND](/glossary/lightning-network-daemon-lnd), [Core Lightning](/glossary/core-lightning-c-lightning), Eclair, and LDK all have their own pruning policies and configuration options.

For end users, gossip pruning is invisible infrastructure. For node operators, tuning pruning policy can affect memory usage, sync time, and routing performance. The protocol-level freshness rules are conservative; more aggressive pruning is sometimes useful for resource-constrained nodes.
