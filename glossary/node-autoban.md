---
title: "Node Autoban"
slug: node-autoban
draft: false
shortDefinition: "Automatic banning of peers that send invalid or spam data, enforcing network health and reducing resource abuse."
keyTakeaways:
  - "Prevents repeated invalid or spammy data from a single source"
  - "Common technique to mitigate DoS and preserve node resources"
  - "Ban durations are typically temporary but can be extended if abuse persists"
sources: []
relatedTerms:
  - bitcoin-satellite
  - dedicated-ip-nodes
  - eclipse-attack
  - full-node
  - node
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
liveWidget: ~
---

Node autoban is Bitcoin Core's misbehavior tracking. The node assigns each peer a running misbehavior score; certain offenses bump it; once the score crosses a threshold (default 100), the peer is disconnected and its IP is banned for 24 hours.

What earns points:

- Invalid blocks (often an immediate ban-class offense: large score in one shot).
- Invalid transactions that violate consensus rules (smaller score, additive).
- Malformed P2P messages, oversized payloads, protocol violations.
- Repeated requests for data the peer should already have.
- DoS-style behavior: spamming `INV`, requesting nonexistent data, flooding with garbage.

Honest peers basically never get banned. Almost every points-accumulating behavior requires either a bug in the peer's software or active malice. The system exists to make it expensive for an attacker to keep spending your bandwidth and CPU on garbage.

The ban list is local to each node. There's no global "bad peer" registry, and there shouldn't be: a network-wide peer-banning consensus would itself be a centralization vector. Each node decides for itself. You can inspect and edit your own ban list with `listbanned` / `setban` via RPC.
