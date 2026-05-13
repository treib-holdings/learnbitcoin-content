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

Asmap is like having a travel agent who ensures you don’t fly through the same city every single time, reducing your risk of delays or being intercepted. By mapping IP addresses to their respective autonomous systems, Bitcoin Core can spread its peer connections across various network providers.
This approach helps avoid a scenario where too many peers belong to a single AS, which could enable an attacker to isolate or disrupt the node’s view of the network. It bolsters Bitcoin’s decentralization by making it harder for a single network provider to conduct a large-scale eclipse attack or block certain data routes.
