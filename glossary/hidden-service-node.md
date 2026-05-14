---
title: "Hidden Service Node"
slug: hidden-service-node
draft: false
shortDefinition: "A Bitcoin node accessible exclusively via Tor hidden services, obscuring its real IP address."
keyTakeaways:
  - "Uses a .onion address to route traffic through the Tor network"
  - "Improves node operator anonymity and resists IP blocking"
  - "Can reduce performance compared to clearnet nodes"
sources: []
relatedTerms:
  - headless-node
  - hidden-miner-tax
  - i2p-invisible-internet-project
  - node
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
  - tor-hidden-service
liveWidget: ~
---

A hidden service node runs Bitcoin Core behind a Tor v3 onion address (56 characters, ed25519-keyed) instead of, or in addition to, a clearnet IP. Other Tor-enabled peers connect via `.onion`; clearnet-only peers don't see the node at all.

What you gain:

- The operator's IP is not visible to peers. Useful if you'd rather not advertise to neighbors, ISPs, or chain analysts that you run a Bitcoin node.
- The node accepts inbound connections without port forwarding or a public IPv4 address. Behind NAT? Doesn't matter.
- Censorship resistance. Tor's relay model makes blanket "block all Bitcoin peers" rules much harder to enforce than a clearnet block list.

What you give up:

- Some latency. Tor adds hops, so block and transaction propagation is a few seconds slower than clearnet.
- Some peer diversity. The node only sees other onion-reachable peers unless you also enable clearnet outbound (the typical config does both).

BIP 155 (addrv2, deployed 2021) gave Bitcoin proper P2P support for advertising Tor v3, I2P, and CJDNS addresses through address gossip. Before that, hidden service nodes were second-class citizens in peer discovery. Today, running Bitcoin Core on a host with Tor installed automatically enables hidden service mode, and a meaningful fraction of the network is reachable only via Tor.
