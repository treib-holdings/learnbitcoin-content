---
title: "BOLT"
slug: bolt
draft: false
shortDefinition: "Short for 'Basis of Lightning Technology,' these specs define how Lightning Network implementations interact and remain compatible."
keyTakeaways:
  - "Defines core LN protocol mechanics"
  - "Allows different LN implementations to interoperate"
  - "Covers channel setup, routing, security, and more"
sources: []
relatedTerms:
  - bolt-11
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-refund-invoice
  - lightning-routing
liveWidget: ~
---

BOLT specifications are like the rulebook for Lightning Network clients, ensuring they speak the same language and follow the same protocols. Co-authored by different developer groups, the BOLT documents cover everything from how payment channels are established and closed, to the cryptographic details for routing payments.
By adhering to these standards, different Lightning node implementations (like LND, c-lightning, and Eclair) can interoperate seamlessly. This open, collaborative process mirrors Bitcoin's ethos: no single company controls the LN, and anyone can build a BOLT-compliant client to join the network. Over time, BOLT updates introduce refinements such as better routing or new features like multi-path payments.
