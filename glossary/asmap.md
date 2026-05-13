---
title: "Asmap"
slug: asmap
draft: false
shortDefinition: "A Bitcoin Core feature mapping IP addresses to autonomous systems (AS) to diversify peer connections and mitigate network attacks."
keyTakeaways:
  - "Diversifies peer connections by AS"
  - "Aims to reduce potential eclipse attacks"
  - "Enhances decentralization in node networking"
sources: []
relatedTerms:
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
liveWidget: ~
---

**asmap** is a feature in [Bitcoin Core](/glossary/bitcoin-core) that maps peer IP addresses to their **Autonomous System Numbers (ASNs)** - the routing entities that own and operate ranges of internet IP space. Using this mapping, the node spreads its outbound peer connections across many *different* ASNs rather than risking many connections to the same network operator.

Why this matters for [eclipse-attack](/glossary/eclipse-attack) defense:

- **An ASN is a real-world entity** (e.g., AS15169 = Google, AS16509 = Amazon AWS, etc.). All IPs belonging to one ASN are administratively under the same authority.
- **If your node has 8 outbound peers all on AWS**, then an attacker who can compromise AWS or coerce them can isolate your node trivially. They control the entire path.
- **If your node has outbound peers across 8 different ASNs** spanning Google, AWS, Hetzner, OVH, Digital Ocean, and assorted residential ISPs, an attacker has to compromise *all* of them to isolate you - dramatically harder.

The asmap file is just a compressed lookup table: given an IP address, which ASN owns it? Bitcoin Core's `addrman` (address manager) uses this when selecting peers to ensure ASN diversity in the outbound peer set.

The asmap data is generated from public BGP routing announcements and shipped or downloaded separately from Bitcoin Core. The most-cited maintained source is the one from Sjors Provoost / Pieter Wuille based on BGP table snapshots. Operators can use their own asmap file if they want.

For most home node operators, the default asmap behavior is good enough. For operators serious about defense-in-depth - high-value Lightning routing nodes, exchange-operated nodes, or anyone whose node is a meaningful target - asmap is one of several network-layer defenses worth knowing about.

See [Eclipse Attack](/glossary/eclipse-attack) for the threat this defends against and [Peer Discovery](/glossary/peer-discovery) for the broader peer-selection process.
