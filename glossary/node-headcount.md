---
title: "Node Headcount"
slug: node-headcount
draft: false
updated: "2026-10-10"
shortDefinition: "An estimate of how many Bitcoin nodes are on the network, often derived from direct scanning or DNS seeds."
keyTakeaways:
  - "Only captures listening nodes (Tor and I2P included), missing those that refuse inbound connections"
  - "Frequently used as a decentralization benchmark"
  - "Exact numbers are elusive, highlighting Bitcoin's permissionless nature"
sources:
  - { label: "bitnodes.io - independent rebuild of the Bitnodes crawler, run by Rodrigo Martinez and not affiliated with the original project (25,514 reachable nodes on October 9, 2026)", url: "https://bitnodes.io" }
  - { label: "Bitnodes crawler README, Addy Yeow's original code (sends getaddr messages recursively, starting from a set of seed nodes)", url: "https://github.com/ayeowch/bitnodes" }
  - { label: "BTC Nodes API - bitnodes.io snapshot of October 9, 2026, 19:28 UTC (25,514 nodes, main chain at height 970,671; 1,829 nodes with Knots user agents report heights off the main chain: 656 stuck at 961,639 and 1,173 near 976,430, ahead of the main chain)", url: "https://btcnodes.io/api/v1/snapshots/1791574083/" }
  - { label: "Luke Dashjr - Bitcoin node software chart, listening nodes plus his estimate of non-listening ones (about 106,000 at 15:00 UTC on October 10, 2026; its per-version list puts about 7,900 nodes on Knots builds that enforce BIP-110, about 5,000 of them on 29.4.1 or 29.4.2)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/software.html" }
  - { label: "Luke Dashjr - Bitcoin node count history chart (listening plus estimated non-listening nodes: 104,388 at 00:00 UTC on October 10, 2026)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/historical.html" }
  - { label: "Bitcoin Knots v29.4.1 release notes, published by Luke Dashjr (September 2, 2026) - a backward-incompatible protocol change that switches Knots to a BLAKE2b proof of work", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.1.knots20260508" }
  - { label: "BTC Nodes - reachable nodes split by IPv4, IPv6, onion and I2P (same operator and snapshots as the rebuilt bitnodes.io; 12,510 of the 25,514 nodes on October 9, 2026 were onion addresses)", url: "https://btcnodes.io/nodes/" }
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

- Reachable (listening) nodes. Public crawlers (Bitnodes is the best known) start from a few seed nodes, keep asking peers for more addresses, and count every IPv4, IPv6, Tor and I2P node that accepts an inbound connection. The bitnodes.io site, an independent rebuild of the original Bitnodes by a new operator, counted 25,514 on October 9, 2026, including 1,829 Knots nodes that no longer follow Bitcoin's main chain. This is the public-facing fraction of the network.
- All nodes. Includes everything reachable plus everything behind NAT, residential firewalls, or simply not advertising itself for inbound. Nobody can connect to these to count them, so any total is an estimate. Luke Dashjr's node counter includes an estimate for them, and it put the total at about 104,000 on October 10, 2026. Dashjr maintains Bitcoin Knots, and that total includes several thousand Knots nodes running versions that no longer follow Bitcoin's main chain.

Different methods produce different numbers. bitnodes.io counts only the nodes it can reach, while Luke Dashjr's counter adds its estimate of the ones it can't. Neither is wrong; they're answering different questions.

The headcount is a useful directional metric, not a perfect proxy for decentralization. What actually matters is whether the rules are uniformly enforced and whether the network has enough independent operators to make capture infeasible. 20K nodes all run from one cloud provider would be more centralized than 5K nodes spread across home internet connections in 80 countries. Structural composition matters as much as the raw number.
