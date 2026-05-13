---
title: "Lightning Node"
slug: lightning-node
draft: false
shortDefinition: "Software that opens, maintains, and routes LN channels, securing off-chain transactions and forwarding payments."
keyTakeaways:
  - "Interfaces with the LN to send, receive, and route off-chain payments"
  - "Maintains state of channel balances and network topology"
  - "May generate routing fee revenue for connected node operators"
sources: []
relatedTerms:
  - autopilot-lightning
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - delayed-payment-channel
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - onion-routing-lightning
  - tor-hidden-service
  - wumbo-channels-lightning
liveWidget: ~
---

A Lightning node is your gateway to LN, maintaining a database of channels and participating in the network gossip protocol. It can create invoices, route third-party payments for fees, and manage local user balances. Nodes come in various forms: full-featured daemons like lnd or c-lightning, mobile clients, or specialized hardware. Running a node requires stable uptime (so channels remain reliably connected) and some on-chain capital for funding channels. By routing payments, node operators can earn small fees, contributing to LN’s decentralized ecosystem.
