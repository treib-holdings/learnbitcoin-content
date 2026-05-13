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

BIP 31, found in [BIP-31](https://github.com/bitcoin/bips/blob/master/bip-0031.mediawiki), added a simple but important feature to the Bitcoin peer-to-peer protocol: when a node receives a "ping," it can now send back a matching "pong." This exchange helps confirm an active connection and ensures messages aren't just disappearing into the void.
Though small, it standardized a keep-alive mechanism. Before BIP 31, nodes had less direct feedback on network health. Now, by matching ping-pong sequences, nodes quickly detect unresponsive or disconnected peers. This paves the way for more efficient resource management and a better-connected network overall.
