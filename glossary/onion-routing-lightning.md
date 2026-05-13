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

Similar to Tor's onion routing, LN encloses payment instructions in multiple encryption layers. Each node peels off one layer to uncover the next hop's address, forwarding the HTLC onward. At the final node, the payment is redeemed by revealing the preimage. Since no single intermediary sees the entire route or final recipient, LN achieves a higher degree of privacy. This method is codified in the Sphinx packet format, ensuring that intermediate nodes can't trivially link senders to receivers or glean the payment's total path length.
