---
title: "Dedicated IP (for Nodes)"
slug: dedicated-ip-nodes
draft: false
shortDefinition: "Running a Bitcoin node on a unique, static IP address, improving connectivity but potentially revealing your identity or location."
keyTakeaways:
  - "Allows stable inbound connections, boosting node utility"
  - "Could expose your location or identity"
  - "Alternative: run over Tor/VPN for privacy trade-offs"
sources: []
relatedTerms:
  - asmap
  - bitcoin-satellite
  - i2p-invisible-internet-project
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
  - tor-hidden-service
liveWidget: ~
---

"Dedicated IP" for a Bitcoin node means running on a stable, public, reachable IP address - one that doesn't change and isn't behind NAT (network address translation) or a dynamic residential IP. With a dedicated IP, your node can accept *inbound* connections from peers, which makes it more useful to the network at the cost of more visibility.

The trade-off:

**For the network:** more inbound-reachable nodes = stronger overall network resilience. The Bitcoin gossip layer benefits from a healthy population of listening nodes; nodes that only make outbound connections are still validating, but they're not directly relaying to others looking for fresh peers.

**For you:** running on a dedicated IP makes your node identifiable. Anyone scanning the network sees your IP, your software version, your connection patterns. If that IP is correlated with personally identifying information (your home address, your business, your name), your Bitcoin activity is harder to keep private.

The dial of choices:

- **Dedicated public IP, clearnet.** Maximum network usefulness, minimum privacy. Reasonable for businesses, public-facing services, dedicated relay operators.
- **Dedicated IP behind reverse proxy.** Public IP but on a third party's infrastructure (VPS, dedicated server). Trades home-IP exposure for service-provider visibility.
- **[Tor](/glossary/tor-hidden-service) onion service.** No clearnet IP exposed; reachable via `.onion`. Less performance overhead than you'd think; meaningful privacy gain.
- **Behind NAT, outbound-only.** Your node connects to others but doesn't accept inbound. Less useful to the network, but doesn't expose your IP to scanning.

For most self-custody users, the right answer is "Tor (or I2P) behind NAT" - you accept inbound only via onion, and your real IP isn't directly exposed. For commercial operators with public-facing services, dedicated public IPs are the default. Both are valid; the choice maps to your threat model.

See [Tor Hidden Service](/glossary/tor-hidden-service) for the most common privacy-preserving alternative and [Asmap](/glossary/asmap) for diversification of outbound connections regardless of inbound model.
