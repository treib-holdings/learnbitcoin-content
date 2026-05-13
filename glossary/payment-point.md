---
title: "Payment Point"
slug: payment-point
draft: false
shortDefinition: "In LN, the public key derived from a payment’s secret hash preimage; the receiver must reveal that preimage to claim funds."
keyTakeaways:
  - "Ties to LN’s hashed timelock contracts (HTLCs)"
  - "Receiver claims payment by revealing preimage of the hashed secret"
  - "Ensures route-level security without revealing the entire payment path"
sources: []
relatedTerms: []
liveWidget: ~
---

Lightning Network payments revolve around hashed preimages. A ‘payment point’ is the public key you get by applying elliptic-curve multiplication to the preimage. The payee controls the private counterpart—i.e., the preimage. If a node along the route or the final recipient reveals the preimage, they can settle the payment and prove they’re entitled to the HTLC funds. This concept ensures hashed timelock contracts (HTLCs) remain trustless: participants only get paid upon revealing the correct secret, preventing fraudulent or partial claims along the route.
