---
title: "Peer Management"
slug: peer-management
draft: false
shortDefinition: "Node policies deciding how many connections to keep, which peers to evict, and how to respond to misbehavior or spam."
keyTakeaways:
  - "Balances inbound and outbound connections for network stability"
  - "Autoban kicks in for repeated invalid data or spam"
  - "Ensures resource efficiency and robust block/transaction relay"
sources: []
relatedTerms: []
liveWidget: ~
---

A healthy Bitcoin node usually connects to 8-125 peers (configurable). If a peer sends invalid blocks or spam, the node might drop or ban them. Conversely, nodes prefer stable, high-bandwidth peers to propagate blocks efficiently. Algorithms ensure a mix of inbound and outbound connections so the node is both discoverable and well-connected. Peer management aims for a resilient P2P mesh: too few peers leaves the node isolated, while too many wastes resources. Automatic or manual controls can refine the node’s connectivity, improving sync speed and network reliability.
