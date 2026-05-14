---
title: "Graph Pruning"
slug: graph-pruning
draft: false
shortDefinition: "An LN node's maintenance process for removing stale or inactive channels from its local network map to improve efficiency."
keyTakeaways:
  - "Deletes outdated or non-responsive LN channels from the routing table"
  - "Saves memory and improves route-finding performance"
  - "Ensures nodes have a current snapshot of active channels"
sources: []
relatedTerms:
  - inactive-channel
  - lightning-invoice
  - pruning-mode
liveWidget: ~
---

Graph pruning is the housekeeping process by which a Lightning node removes stale or unresponsive channels from its local view of the network's routing graph.

The Lightning gossip protocol broadcasts channel announcements and updates across the network so any node can in principle find a route through any other node. But channels can:

- **Go offline** when one side's node is down for an extended period.
- **Become abandoned** if a node operator stops running their daemon entirely.
- **Stop updating** their fee policy or capacity advertisements, signaling neglect.
- **Get force-closed** without the on-chain settlement event reaching every gossip peer.

Without pruning, the local graph accumulates dead branches that waste memory and (worse) cause pathfinding to repeatedly attempt routes that always fail. The node spends time and CPU exploring unreachable destinations.

Bitcoin Core Lightning, LND, and Eclair each have their own pruning heuristics, but the common shape is:

- **Channels with no `channel_update` message in N days (typically 14)** are considered stale and removed.
- **Channels whose closing transaction has been observed on-chain** are removed immediately.
- **Channels failing repeated payment attempts** may be temporarily blacklisted for routing even if they're not yet pruned from the graph entirely.

For users this is invisible: the wallet just finds working routes. For node operators it shows up as a steady-state graph size (typically 50K-80K active channels in the public network as of 2026, down from peak hype-cycle highs) versus what would be hundreds of thousands of dead channel records if nothing were ever pruned.

Pruning is also one of the reasons Lightning's public routing graph metrics are inherently noisy - different implementations prune on different schedules, so "total Lightning network capacity" depends on whose view you're using.
