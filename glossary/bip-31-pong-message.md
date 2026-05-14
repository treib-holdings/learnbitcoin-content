---
title: "BIP 31 (pong message)"
slug: bip-31-pong-message
draft: false
shortDefinition: "Introduced the 'pong' reply to a 'ping' on Bitcoin's P2P network, ensuring both nodes stay responsive."
keyTakeaways:
  - "Creates a standardized ping-pong for node health checks"
  - "Simplifies detecting stale connections"
  - "Helps maintain a stable P2P network"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
liveWidget: ~
---

BIP 31, authored by Mike Hearn in 2012, added the `pong` message to Bitcoin's P2P protocol. Before BIP 31, the existing `ping` message had no required reply: a node could send `ping` and the peer might ignore it or just disconnect; you couldn't tell which.

BIP 31 fixed that. `ping` now includes a randomly-chosen 64-bit nonce; the peer is expected to reply with `pong` echoing the same nonce. The round trip confirms the peer is alive and yields a measurable latency.

Modest as it sounds, this enables:

- **Liveness detection.** A node that doesn't return `pong` within a reasonable window gets disconnected, freeing the slot.
- **Latency-based peer selection.** Bitcoin Core prefers faster-responding peers for block propagation.
- **NAT keep-alive.** Periodic ping / pong keeps stateful firewalls and NAT mappings from collapsing the connection during idle periods.

It's one of those tiny BIPs that feels invisible because the protocol couldn't really work without it. Activated by software version negotiation: peers that support BIP 31 (effectively all peers since Bitcoin 0.6.1, released March 2012) use it; older peers fall back to the no-reply ping.

Spec: [BIP-31](https://github.com/bitcoin/bips/blob/master/bip-0031.mediawiki).
