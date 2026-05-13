---
title: "Tor Hidden Service"
slug: tor-hidden-service
draft: false
shortDefinition: "Hosting a Bitcoin node or service over Tor, hiding real IP addresses and enhancing privacy/censorship resistance."
keyTakeaways:
  - "Conceals node location and blocks direct IP correlation"
  - "Important for anonymity, avoids certain ISP or state-level blocking"
  - "Can be slower due to Tor’s layered encryption and relay hops"
sources: []
relatedTerms:
  - hidden-service-node
  - i2p-invisible-internet-project
  - lightning-node
  - onion-routing-lightning
liveWidget: ~
---

By running as a Tor hidden service, a node uses a ‘.onion’ address instead of a public IP. The node’s location remains masked, making it difficult for observers or ISPs to identify or block it. This setup is popular for privacy enthusiasts or those in restrictive jurisdictions. However, Tor adds latency, possibly slowing block/transaction relay. Many do it anyway to prevent malicious actors from IP-level attacks or traffic correlation. The P2P network supports onion addresses natively, letting them appear in node discovery lists just like normal IPs.
