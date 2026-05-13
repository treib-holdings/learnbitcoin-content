---
title: "Lightning Sphinx"
slug: lightning-sphinx
draft: false
shortDefinition: "The onion-routing protocol LN uses to obscure each hop's identity, preserving routing privacy."
keyTakeaways:
  - "Implements onion-style encryption to hide full route details"
  - "Each hop only sees enough data to forward payment"
  - "Protects LN users from linkability and censorship"
sources: []
relatedTerms:
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-routing
  - onion-routing-lightning
liveWidget: ~
---

Sphinx is LN's privacy layer for routing. Each hop in the payment path only knows the next node to forward to, not the entire route or the final destination. This is achieved via layered encryption-onion packets-where each hop peels one layer to find forwarding instructions. This design prevents intermediate nodes from correlating senders with recipients, boosting LN's censorship resistance and privacy. However, some advanced transaction analysis can still glean patterns, so Sphinx isn't bulletproof, but it's a notable improvement over straightforward routing disclosures.
