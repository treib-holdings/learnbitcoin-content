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
  - gzen-generalized-zen
  - headless-node
  - hidden-miner
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

Running a Bitcoin node as a hidden service means it can’t be reached via a standard public IP. Instead, it provides a .onion address, which only Tor-enabled peers can connect to. This setup bolsters privacy for the node operator by masking geolocation and network details. It also helps circumvent certain ISP or jurisdiction-based restrictions, as Tor traffic is encrypted and routed through multiple relays. Many privacy-conscious users prefer hidden service nodes to protect themselves from targeted attacks or eavesdropping. The trade-off is slightly more complex configuration and potential lower bandwidth or connectivity speed than non-Tor connections.
