---
title: "Peer Bookmark"
slug: peer-bookmark
draft: false
shortDefinition: "A node-optional feature saving specific peers' IP or onion addresses for reconnection or whitelisting."
keyTakeaways:
  - "Ensures a node regularly reconnects to certain peers or onions"
  - "Aids stable networks or private usage where specific connections matter"
  - "Pairs with whitelisting to avoid default policy throttles"
sources: []
relatedTerms:
  - bitcoin-core
  - node
  - node-operator
  - peer-management
liveWidget: ~
---

"Peer bookmark" is informal naming for Bitcoin Core's persistent-peer config options:

- `-addnode=<ip>` keeps trying to connect to a specific peer in addition to the usual peer-discovery slots. If the connection drops, the node retries on its own.
- `-connect=<ip>` only connects to specified peers and disables DNS seed lookup entirely. Use this for a fully controlled topology, like a private net, a lab setup, or a paranoid production configuration.

Typical use cases:

- A merchant's payment-processing node maintains a direct link to its own backup node in a different datacenter so blocks and transactions propagate between them with minimum latency.
- A hobbyist whose home node connects to a friend's node so blocks travel between them faster than through random peer discovery.
- A "watchtower" or monitoring setup where one node is the authoritative source and others mirror it.

Combine with the `-whitelist` setting to exempt those peers from rate limits and ban scoring. Most public nodes don't need any of this. The default peer discovery via DNS seeds and address gossip works fine and is the right choice for almost everyone.
