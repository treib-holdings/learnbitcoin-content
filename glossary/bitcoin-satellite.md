---
title: "Bitcoin Satellite"
slug: bitcoin-satellite
draft: false
shortDefinition: "A Blockstream initiative that broadcasts Bitcoin's blockchain data via satellite, letting nodes sync offline."
keyTakeaways:
  - "Delivers blockchain data via satellite link"
  - "Enhances redundancy for node operators"
  - "Requires minimal hardware to receive the broadcast"
sources: []
relatedTerms:
  - block-propagation
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
liveWidget: ~
---

Bitcoin Satellite is Blockstream's broadcast of Bitcoin blocks over geostationary satellite. Several leased transponders cover most of the populated planet. A small receive-only dish (around 45 cm) plus a $200-300 receiver gives a node a real-time block feed without an internet connection.

The use cases are narrower than the marketing implies. You still need some way to broadcast your own transactions: a phone with cell service, an SMS gateway, or Blockstream's paid satellite uplink service that queues messages for satellite transmission. So it's not quite "Bitcoin without the internet" for the user. But it does mean:

- A node in a censored network can keep its chain state current without revealing that it's running Bitcoin. The dish points at a satellite, not at a server.
- A node in a remote location with intermittent internet can fill gaps from satellite.
- The network has a redundant, hard-to-jam block distribution path that doesn't depend on any single ISP, country, or peering arrangement.

It's a "good to know it exists" infrastructure piece. Most node operators with reliable internet will never touch it. For the few who need it, it's the difference between a working node and a stale one.
