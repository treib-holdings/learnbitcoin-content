---
title: "Node Headcount"
slug: node-headcount
draft: false
updated: "2026-10-09"
shortDefinition: "An estimate of how many Bitcoin nodes are on the network, often derived from direct scanning or DNS seeds."
keyTakeaways:
  - "Only captures listening nodes (Tor and I2P included), missing those that refuse inbound connections"
  - "Frequently used as a decentralization benchmark"
  - "Exact numbers are elusive, highlighting Bitcoin's permissionless nature"
sources:
  - { label: "Bitnodes - reachable Bitcoin nodes (25,514 counted on October 9, 2026)", url: "https://bitnodes.io" }
  - { label: "Coin Dance - public Bitcoin nodes, duplicate and non-listening nodes omitted (25,362 on October 9, 2026; live)", url: "https://coin.dance/nodes" }
  - { label: "Bitnodes crawler README (sends getaddr messages recursively, starting from a set of seed nodes)", url: "https://github.com/ayeowch/bitnodes" }
  - { label: "BTC Nodes - reachable nodes split by IPv4, IPv6, onion and I2P (same operator and snapshots as the relaunched bitnodes.io; 12,510 of the 25,514 nodes on October 9, 2026 were onion addresses)", url: "https://btcnodes.io/nodes/" }
relatedTerms:
  - bitcoin-satellite
  - byzantine-fault-tolerance
  - dedicated-ip-nodes
  - decentralization
  - eclipse-attack
  - full-node
  - hidden-service-node
  - node
  - node-autoban
  - node-operator
  - node-synchronization
  - node-uptime
liveWidget: ~
---

Estimating how many Bitcoin nodes exist is hard, because the network is permissionless and a lot of nodes don't want to be counted.

Two flavors of count:

- Reachable (listening) nodes. Public crawlers (Bitnodes is the best known) start from a few seed nodes, keep asking peers for more addresses, and count every IPv4, IPv6, Tor and I2P node that accepts an inbound connection. Bitnodes counted 25,514 on October 9, 2026. This is the public-facing fraction of the network.
- All nodes. Includes everything reachable plus everything behind NAT, residential firewalls, or simply not advertising itself for inbound. Estimates here range from 50K to 100K+, with wide error bars.

Different methodologies produce different numbers. Luke Dashjr's site historically counted more aggressively and produced higher totals; Bitnodes counts conservatively. Neither is wrong; they're answering slightly different questions.

The headcount is a useful directional metric, not a perfect proxy for decentralization. What actually matters is whether the rules are uniformly enforced and whether the network has enough independent operators to make capture infeasible. 20K nodes all run from one cloud provider would be more centralized than 5K nodes spread across home internet connections in 80 countries. Structural composition matters as much as the raw number.
