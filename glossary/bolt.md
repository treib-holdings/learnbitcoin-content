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

BOLT - **B**asis **O**f **L**ightning **T**echnology - is the specification series that defines how [Lightning Network](/glossary/lightning-network) implementations interoperate. It's to Lightning what [BIPs](/glossary/bip-bitcoin-improvement-proposal) are to Bitcoin: a set of versioned, community-reviewed documents that anyone building Lightning software is expected to follow.

The current BOLT documents (numbered 0 through 12 with some experimental additions) cover:

- **BOLT 1** - base protocol, message framing.
- **BOLT 2** - peer protocol for channel management (open, close, update).
- **BOLT 3** - transaction and script formats for on-chain channel state.
- **BOLT 4** - onion routing (the [Sphinx](/glossary/lightning-sphinx) packet format).
- **BOLT 5** - on-chain transactions and channel closure logic.
- **BOLT 7** - gossip protocol for advertising channel info.
- **BOLT 9** - feature flags.
- **[BOLT 11](/glossary/bolt-11)** - invoice format.
- **BOLT 12** - offers (the reusable-invoice successor to BOLT 11), merged 2024.

Maintained on [github.com/lightning/bolts](https://github.com/lightning/bolts) by representatives of the major implementations - Lightning Labs (LND), Blockstream (Core Lightning), ACINQ (Eclair), Spiral (LDK). Changes go through pull requests, review, and broad consensus across implementations.

This multi-vendor coordination is why a Phoenix wallet (Eclair) can open a channel with a Core Lightning node and route through LND-operated infrastructure to pay an LDK-based receiver. They all follow the same BOLTs.
