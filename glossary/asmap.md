---
title: "Asmap"
slug: asmap
draft: false
updated: "2026-10-02"
shortDefinition: "A Bitcoin Core feature mapping IP addresses to autonomous systems (AS) to diversify peer connections and mitigate network attacks."
keyTakeaways:
  - "Diversifies peer connections by AS"
  - "Aims to reduce potential eclipse attacks"
  - "Enhances decentralization in node networking"
sources:
  - { label: "Bitcoin Core 0.20.0 release notes - new -asmap option", url: "https://bitcoincore.org/en/releases/0.20.0/" }
  - { label: "Bitcoin Core 31.0 release notes - asmap data embedded", url: "https://bitcoincore.org/en/releases/31.0/" }
  - { label: "Bitcoin Core - Embedded ASMap data (doc/asmap-data.md)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/asmap-data.md" }
  - { label: "Bitcoin Optech - Eclipse attacks topic", url: "https://bitcoinops.org/en/topics/eclipse-attacks/" }
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

The asmap data is a snapshot of internet routing records, built from RPKI and IRR registry data plus BGP routes seen by the Routeviews collectors. Since Bitcoin Core 31.0 a copy ships inside the release. Contributors build it with the Kartograf tool in coordinated runs, and a file is published at the asmap-data project only when at least five of them sign the same result. Operators can still load their own file with `-asmap=<file>`.

Asmap is off by default, even in releases that embed the map, and for most home node operators the default grouping by IP range is good enough. On Bitcoin Core 31.0 and later, turning it on takes one line in bitcoin.conf: `asmap=1`. For operators serious about defense-in-depth - high-value Lightning routing nodes, exchange-operated nodes, or anyone whose node is a meaningful target - asmap is one of several network-layer defenses worth knowing about.

See [Eclipse Attack](/glossary/eclipse-attack) for the threat this defends against and [Peer Discovery](/glossary/peer-discovery) for the broader peer-selection process.
