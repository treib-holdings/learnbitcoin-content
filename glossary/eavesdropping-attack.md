---
title: "Eavesdropping Attack"
slug: eavesdropping-attack
draft: false
shortDefinition: "A network-level attack monitoring node traffic, potentially correlating IPs with transactions or identifying transaction origins."
keyTakeaways:
  - "Focuses on correlating TX announcements with IP addresses"
  - "Reduced by Tor, VPN, or specialized broadcast methods"
  - "Exploits the open, real-time data flow of peer-to-peer relays"
sources: []
relatedTerms:
  - i2p-invisible-internet-project
  - jammed-htlc-detector
  - onion-routing-lightning
  - race-attack
  - replay-attack
  - security
  - tor-hidden-service
liveWidget: ~
---

An eavesdropping attack on Bitcoin's peer-to-peer network involves passively observing node-to-node communications to learn things about transactions before they're confirmed. It doesn't break cryptography; it just exploits the fact that Bitcoin's gossip layer broadcasts data in real time.

What an attacker can learn from eavesdropping:

- **Transaction origin.** If a single node is consistently first to relay a particular transaction, that node likely originated it. Operators with many surveillance peers can identify the source of broadcasts with high probability.
- **IP-to-transaction correlation.** Pair the originating node's IP with that transaction, and you've linked an on-chain activity to a network location - and potentially to a real-world identity if the IP can be deanonymized.
- **Network topology.** Repeated observation reveals which nodes connect to which, building a map of the gossip graph.

Real-world adversaries running eavesdropping attacks include: chainalysis firms with extensive node fleets, ISP-level observers, and well-resourced government surveillance projects. The attacks are practical and have been demonstrated.

Defenses, roughly in order of effectiveness:

- **Run your node over [Tor](/glossary/tor-hidden-service).** Your transactions get broadcast from random Tor exit points, not your real IP. Most credible defense for a self-custody user.
- **Use Lightning for actual payments** wherever possible. Lightning payments aren't broadcast publicly; they hop directly to the receiver through encrypted channels.
- **Limit inbound connections** on your node to trusted peers if possible.
- **Use Dandelion++** (a transaction-relay improvement implemented in some clients) to make the originating node harder to identify.

Eavesdropping is one of the realities that distinguishes Bitcoin's *pseudonymity* from actual *anonymity*. The cryptographic layer is strong; the network layer leaks. Mitigations exist; not everyone uses them.
