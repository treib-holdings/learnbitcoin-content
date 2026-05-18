---
title: "Node Uptime"
slug: node-uptime
draft: false
shortDefinition: "How long a Bitcoin node has remained online and synchronized, relevant for network reliability and routing capacity."
keyTakeaways:
  - "Indicates reliability in relaying and validating blocks/transactions"
  - "Higher uptime fosters a healthier, more robust network"
  - "Server-grade or well-maintained nodes typically aim for near-constant operation"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - eclipse-attack
  - full-node
  - headless-node
  - hidden-service-node
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
liveWidget: ~
---

Node uptime is how long a Bitcoin node has been running continuously without restart or disconnection.

High uptime is good network citizenship. A long-running node:

- Builds up a richer peer-discovery view (`peers.dat` and the `addr` set), which makes it more resistant to [eclipse attacks](/glossary/eclipse-attack).
- Has a warm mempool. New transactions get validated against an established mempool view, not a cold one.
- Is useful to other peers during their initial sync; it can serve historical blocks immediately.
- Doesn't churn the network with repeated reconnections.

Bitcoin Core doesn't surface uptime as a prominent metric, and there's no leaderboard or reward for keeping a node up. For a regular full node, occasional downtime (minutes or days) is fine; the node just catches up when it comes back.

Uptime matters more for [Lightning](/glossary/lightning-network) routing nodes than for plain full nodes. A Lightning channel needs both sides reachable to update, and a frequently-offline routing node will see channels closed by counterparties or fail to forward payments. If you're running a routing node, optimize for uptime; if you're running a full node for your own wallet, don't bother chasing nines.
