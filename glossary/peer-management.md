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

Peer management is the set of rules a node uses to decide which connections to keep, which to drop, and how to respond to misbehavior.

Bitcoin Core's defaults in 2026:

- 8 outbound full-relay peers (the ones it actively gossips transactions and blocks with).
- 2 outbound block-relay-only peers, which receive only blocks. They harden against transaction-based eclipse attacks because they don't reveal which transactions the node has seen.
- Up to about 115 inbound peers, configurable via `maxconnections`.
- 1 outbound "feeler" connection that briefly probes new peers to test reachability and then disconnects.

Outbound peer selection prefers diversity: different ASNs (using the bundled `asmap` file), different network types (clearnet, Tor, I2P), different geographies where the signal allows. That diversity is the main defense against [eclipse attacks](/glossary/eclipse-attack), where an adversary tries to fill all your peer slots with peers they control.

Misbehavior is tracked per-peer. Invalid messages, malformed protocol traffic, repeated useless requests: the peer's score rises and eventually triggers disconnection and a temporary ban (see [node-autoban](/glossary/node-autoban)). Honest peers almost never trip it.

The art of peer management is balance. Enough peers for redundancy and diverse paths, not so many that resource usage gets out of hand or that the node becomes a target for resource-exhaustion attacks. Bitcoin Core's defaults are sensible; most operators should leave them alone.
