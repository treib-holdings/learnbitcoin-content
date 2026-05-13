---
title: "Neutrino"
slug: neutrino
draft: false
shortDefinition: "A privacy-preserving lightweight protocol (BIP 157/158) using block filters, replacing older Bloom filter–based SPV."
keyTakeaways:
  - "Uses BIP 157/158 compact filters for SPV"
  - "Clients selectively download only blocks containing relevant transactions"
  - "Improves privacy and bandwidth efficiency over Bloom filters"
sources: []
relatedTerms: []
liveWidget: ~
---

Neutrino clients download compact block filters (BIP 157/158) from full nodes to determine which blocks might contain relevant transactions, drastically reducing bandwidth and improving privacy compared to Bloom filters (BIP 37). Under Bloom-based SPV, the server learned which addresses a user was interested in, but Neutrino flips it: users retrieve filters for all blocks, then locally check which blocks matter to them, avoiding address leaks. This approach significantly boosts privacy and scalability for light clients while retaining a trust-minimized approach.
