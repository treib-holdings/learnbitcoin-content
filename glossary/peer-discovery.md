---
title: "Peer Discovery"
slug: peer-discovery
draft: false
shortDefinition: "Nodes find each other using DNS seeds, hard-coded peers, or gossip from connected nodes to expand their network view."
keyTakeaways:
  - "Bootstraps a node's initial peer set"
  - "Combines DNS seeds, built-in seeds, and peer-shared addresses"
  - "Prevents reliance on a single server or centralized directory"
sources: []
relatedTerms:
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

Peer discovery is how a fresh [Bitcoin node](/glossary/node) finds other nodes to connect to. Without an initial peer list, the node would be isolated; without ongoing discovery, the network couldn't heal after churn.

Bitcoin Core uses several mechanisms, in order of fallback:

1. **DNS seeds.** Maintained by trusted Bitcoin developers (Pieter Wuille, Matt Corallo, Luke Dashjr, Christian Decker, others). These are domain names like `seed.bitcoin.sipa.be` that return IP addresses of well-connected, recently-active full nodes. The node queries them on first start.
2. **Hard-coded seed nodes.** A fallback list shipped with the Bitcoin Core binary. Used only if DNS seeds are unreachable. Recompiled into each release with currently-active nodes.
3. **Peer gossip (the `addr` protocol).** Once connected to one or more peers, the node asks them for *their* peer lists, expanding its known-peer set organically. This is how the network heals: any one server going down doesn't break anyone's ability to discover others.
4. **Manual configuration.** Operators can specify peers via `-addnode` or `-connect` flags. Useful for sovereign setups that don't want to trust DNS seeds.
5. **Tor / I2P / CJDNS.** Bitcoin Core supports peer discovery over privacy networks, useful for operators behind hostile firewalls or wanting to obscure their IP.

The DNS-seed step is the most centralized part of the bootstrap, and it's worth knowing about. A malicious DNS seed could feed your node a curated list of attacker-controlled peers (an "eclipse attack" setup). The defense is having multiple independent seeds; an attacker would need to compromise most of them simultaneously. The seeds themselves are operated by separate, well-known individuals across multiple jurisdictions.

For a long-running node, the initial bootstrap matters far less than the ongoing peer health - Bitcoin Core continuously evaluates peer behavior, drops misbehaving connections, and replaces them via the gossip mechanism. See [Eclipse Attack](/glossary/eclipse-attack) for the relevant threat model.
