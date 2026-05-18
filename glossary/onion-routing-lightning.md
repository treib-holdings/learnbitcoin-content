---
title: "Onion Routing (Lightning)"
slug: onion-routing-lightning
draft: false
shortDefinition: "LN's privacy technique using layers of encryption so each routing hop only knows the next destination, hiding full paths."
keyTakeaways:
  - "Each node peels one layer, forwarding to the next hop"
  - "Protects sender and receiver identities in LN payment routing"
  - "Modeled after Tor's onion encryption concept"
sources: []
relatedTerms:
  - eavesdropping-attack
  - gossip-protocol-lightning
  - i2p-invisible-internet-project
  - lightning-network
  - lightning-node
  - lightning-routing
  - lightning-sphinx
  - tor-hidden-service
liveWidget: ~
---

Onion routing is the privacy technique [Lightning](/glossary/lightning-network) uses to keep intermediate routing nodes from knowing the full path a payment is taking. Each routing hop knows only its previous and next hop, never the original sender or final recipient.

The mechanism: the sending wallet wraps the payment instructions in nested layers of encryption, like an onion. Each routing node decrypts (peels) one layer to learn where to forward the payment next, but cannot see deeper into the onion. After forwarding, the node knows only "I got this from X, and forwarded it to Y" - not who's at either end of the chain.

This is the same general idea as the **Tor** anonymity network (which actually inspired Lightning's choice). The specific Lightning protocol is called **[Sphinx](/glossary/lightning-sphinx)** and is defined in [BOLT-4](https://github.com/lightning/bolts/blob/master/04-onion-routing.md).

What onion routing achieves:

- **Sender privacy.** The destination node doesn't know who sent the payment - only that *some* upstream hop did.
- **Receiver privacy from the sender's view of the graph.** The sender doesn't reveal to intermediate hops who the final recipient is.
- **Hop unlinkability.** Intermediate hops can't tell if they're forwarding a 2-hop or 7-hop payment, beyond modest timing-analysis hints.

What it doesn't fully achieve:

- **Total privacy.** Sophisticated adversaries running many Lightning nodes can correlate timing and amount data across the network.
- **Receiver anonymity from the sender.** The sender knows who they're paying (they decoded the invoice).
- **Protection against the channel counterparties.** The sender's immediate channel partner sees that you initiated *some* payment, even if not the destination.

Onion routing is one of the meaningful privacy advantages Lightning has over on-chain Bitcoin. Combined with Lightning's off-chain nature (payments aren't broadcast publicly at all), it's a substantial improvement - though not anonymous in the strict sense.
