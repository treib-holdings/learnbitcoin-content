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

Sphinx is the specific cryptographic packet format Lightning uses for [onion routing](/glossary/onion-routing-lightning). Defined in [BOLT-4](https://github.com/lightning/bolts/blob/master/04-onion-routing.md), it's the data structure that travels with each Lightning payment, telling each routing hop the next destination without revealing the full path.

The Sphinx packet is a fixed size (1,300 bytes for the standard format) regardless of how many hops the payment will traverse. This is by design: if packet size varied with hop count, observers could infer route length. Padding keeps every onion the same width.

Each layer of the onion is encrypted with a key derived from the public key of the corresponding hop. When a hop receives a Sphinx packet:

1. It decrypts the outermost layer using its private key.
2. It reads the forwarding instructions (next hop, amount, timeout).
3. It re-pads the remainder and forwards it to the next hop.

The next hop sees an onion that looks identical in size and structure to what the first hop received - it can't tell whether it's 2 hops in or 5 hops in.

Sphinx was originally designed by George Danezis and Ian Goldberg in 2009, for mixnets and onion-routing systems generally. Lightning adopted and adapted it for payment routing specifically. The same underlying cryptography is used in other privacy systems.

Sphinx is what makes Lightning's privacy claims credible. It's also why Lightning is a strict privacy upgrade over on-chain Bitcoin: not only do payments not hit the public chain, the routing path is hidden from anyone except direct neighbors.
