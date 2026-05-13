---
title: "Peer Discovery"
slug: peer-discovery
draft: false
shortDefinition: "Nodes find each other using DNS seeds, hard-coded peers, or gossip from connected nodes to expand their network view."
keyTakeaways:
  - "Bootstraps a node’s initial peer set"
  - "Combines DNS seeds, built-in seeds, and peer-shared addresses"
  - "Prevents reliance on a single server or centralized directory"
sources: []
relatedTerms:
  - api-application-programming-interface
  - bip-159
  - dedicated-ip-nodes
  - eclipse-attack
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
liveWidget: ~
---

When a new node starts, it contacts DNS seeds (like seed.bitcoin.sipa.be) that supply IP addresses of known Bitcoin nodes. Some addresses are also hard-coded in the software. Upon connecting to a peer, the node learns more addresses from that peer’s list. This iterative process broadens the node’s network map, letting it connect to diverse peers. This combination of DNS seeds, built-ins, and gossip ensures the network remains robust and can self-heal if certain peers go offline. Privacy-focused users might disable DNS seeds and rely solely on manual or Tor-based connections.
