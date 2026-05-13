---
title: "Jammed HTLC Detector"
slug: jammed-htlc-detector
draft: false
shortDefinition: "A tool or node feature that identifies ongoing LN channel jamming, letting operators take remedial actions."
keyTakeaways:
  - "Monitors HTLC activity for suspicious patterns"
  - "Helps LN nodes fight against channel congestion attacks"
  - "Might trigger channel closures or peer blacklisting as countermeasures"
sources: []
relatedTerms:
  - eavesdropping-attack
  - htlc-preimage-manager
  - jamming-attack-ln
  - lightning-network
  - lightning-payment
  - lightning-routing
  - lightning-sphinx
liveWidget: ~
---

If a Lightning channel is packed with pending HTLCs that never settle, operators suspect a jamming attack. A ‘jammed HTLC detector’ flags channels showing unusual patterns—e.g., large numbers of small HTLCs or repeated payment timeouts without resolution. With detection, the node can penalize or disconnect from the offending peer, impose new fees, or close the channel altogether. Such detectors are still evolving, balancing false positives (legitimate but slow routes) against blocking real attacks. Ultimately, robust detection helps maintain LN liquidity for legitimate users.
