---
title: "Eclipse Attack"
slug: eclipse-attack
draft: false
shortDefinition: "A network-level attack in which a node is isolated from honest peers and fed a manipulated view of the blockchain."
keyTakeaways:
  - "Cuts a node off from honest peers, controlling its entire network view"
  - "Enables manipulation of block/transaction data for double spends"
  - "Mitigated by peer diversification and robust node configurations"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - i2p-invisible-internet-project
  - node
  - race-attack
  - replay-attack
  - resource-exhaustion-attack
  - tor-hidden-service
liveWidget: ~
---

In an eclipse attack, an adversary surrounds a target node with malicious peers, blocking all genuine connections. Since the node has no contact with honest participants, the attacker can feed it false information: for instance, an outdated or forked chain. This can lead to double spends, as the victim node accepts invalid blocks or transactions.
Nodes reduce eclipse attack risk by diversifying their peer connections, limiting inbound slots from unknown IP ranges, or using Tor for randomized addresses. Bitcoin Core also employs asmap features to spread peers across different network routes. Although challenging to execute on well-connected nodes, eclipse attacks remain a real threat for isolated or poorly configured setups.
