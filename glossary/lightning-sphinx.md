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
ogImage: "/diagrams/og/onion-routing.png"
ogImageAlt: "A frame from LearnBitcoin's onion routing animation. Bob (highlighted in orange) is peeling the outermost layer of a three-ring onion with an orange preimage payload at its center. A 'knows: prev = Alice, next = Carol / nothing else' callout sits above the onion, with the caption 'Bob sees: forward to Carol. Nothing else.' below it. Visualizes Sphinx onion routing: each hop sees only its own layer."
---

<figure>
  <video
    src="/videos/onion-routing.mp4"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animated walkthrough of Lightning's Sphinx onion routing protocol. Alice constructs a four-layer onion inside out: an orange preimage payload for Dave at the center, then a wrap for Eve, a wrap for Carol, and an outermost wrap for Bob. Each route node flashes orange as Alice writes its layer. The onion travels Alice to Bob; Bob peels his outer layer with a callout 'knows: prev = Alice, next = Carol, nothing else.' Then Carol peels, then Eve peels, each with their own privacy callout showing what they can and cannot see. Dave receives just the payload and reveals the preimage. Closes with the pillars 'Onion routing. The privacy is the peeling.'"
  ></video>
  <figcaption>Three intermediate hops, three wraps. Each node sees only its own layer.</figcaption>
</figure>

Sphinx is the specific cryptographic packet format Lightning uses for [onion routing](/glossary/onion-routing-lightning). Defined in [BOLT-4](https://github.com/lightning/bolts/blob/master/04-onion-routing.md), it's the data structure that travels with each Lightning payment, telling each routing hop the next destination without revealing the full path.

The Sphinx packet is a fixed size (1,300 bytes for the standard format) regardless of how many hops the payment will traverse. This is by design: if packet size varied with hop count, observers could infer route length. Padding keeps every onion the same width.

Each layer of the onion is encrypted with a key derived from the public key of the corresponding hop. When a hop receives a Sphinx packet:

1. It decrypts the outermost layer using its private key.
2. It reads the forwarding instructions (next hop, amount, timeout).
3. It re-pads the remainder and forwards it to the next hop.

The next hop sees an onion that looks identical in size and structure to what the first hop received - it can't tell whether it's 2 hops in or 5 hops in.

Sphinx was originally designed by George Danezis and Ian Goldberg in 2009, for mixnets and onion-routing systems generally. Lightning adopted and adapted it for payment routing specifically. The same underlying cryptography is used in other privacy systems.

Sphinx is what makes Lightning's privacy claims credible. It's also why Lightning is a strict privacy upgrade over on-chain Bitcoin: not only do payments not hit the public chain, the routing path is hidden from anyone except direct neighbors.
