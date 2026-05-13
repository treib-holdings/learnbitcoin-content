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

An eavesdropping attacker snoops on the connections between Bitcoin nodes. By observing when a node announces a transaction, they might guess that node is its originator, undermining privacy. If the attacker controls enough relay points, they can triangulate and track transactions back to IP addresses.
Defensive strategies include running a Bitcoin node behind Tor or VPN, limiting inbound connections, or using transaction-broadcasting tools that add randomness or multiple hops. While eavesdropping doesn't break Bitcoin's cryptography, it does threaten the anonymity layer, highlighting the difference between pseudonymity and full privacy within a public peer-to-peer network.
