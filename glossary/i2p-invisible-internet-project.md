---
title: "I2P (Invisible Internet Project)"
slug: i2p-invisible-internet-project
draft: false
shortDefinition: "An anonymity network similar to Tor, allowing Bitcoin nodes to communicate privately."
keyTakeaways:
  - "Another decentralized anonymity network, akin to Tor"
  - "Less commonly used by Bitcoin nodes but offers similar privacy benefits"
  - "Can reduce IP-level surveillance or traffic correlation"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - eavesdropping-attack
  - eclipse-attack
  - hidden-service-node
  - node
  - node-operator
  - onion-routing-lightning
  - tor-hidden-service
liveWidget: ~
---

I2P (Invisible Internet Project) is an alternative anonymity network to [Tor](/glossary/tor-hidden-service). It routes traffic through a network of volunteer relays using "garlic routing" (a multi-layered onion-routing variant that bundles multiple messages together) to obscure the path between sender and destination.

Bitcoin Core has supported I2P as a peer transport since version 22 (2021). For a [node](/glossary/node) operator, this means peers can advertise I2P addresses (ending in `.i2p` or formatted as base32 destinations) alongside Tor `.onion` and clearnet IP addresses. The network discovers and connects to peers across all available transports.

I2P vs Tor for Bitcoin:

- **Different threat models.** Tor optimizes for low-latency anonymity for browsing-style traffic. I2P optimizes for high-throughput peer-to-peer applications. Bitcoin sits in between; both work.
- **Smaller user base on I2P.** Tor has many more relays and exit nodes globally. I2P's Bitcoin connectivity is real but thinner.
- **Different attack surfaces.** Tor and I2P have different known weaknesses and different threat models against well-resourced adversaries. Running over both (multihop redundancy) is more defensive than running over either alone.

For most Bitcoin node operators, Tor is the more practical privacy choice purely because of ecosystem maturity. I2P is a reasonable secondary option for defense-in-depth, especially for operators who want to avoid being dependent on the Tor network specifically.

The general principle: running your Bitcoin node over any anonymity network is significantly better than running it on a static residential IP. Tor or I2P or both - the marginal privacy benefit is large.
