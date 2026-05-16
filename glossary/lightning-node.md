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
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
liveWidget: ~
---

A Lightning node is a piece of software that participates in the [Lightning Network](/glossary/lightning-network). It manages your [payment channels](/glossary/lightning-channel), tracks the network gossip graph, routes payments through itself when asked, and lets you send and receive instant off-chain payments.

The major implementations as of 2026:

- **LND** (Lightning Labs) - written in Go, widely used in node-in-a-box products like Umbrel, Start9, MyNode.
- **[Core Lightning](/glossary/core-lightning-c-lightning)** (Blockstream, formerly c-lightning) - written in C, modular plugin architecture, lightweight.
- **Eclair** (ACINQ) - written in Scala, powers the Phoenix mobile wallet.
- **LDK** (Lightning Dev Kit, Spiral) - a library you embed into your own application rather than a standalone daemon. Used by Cash App, Mutiny, Mercury Layer, others.

What running a Lightning node costs you operationally:

- **Uptime.** A node must be online to send, receive, and watch for fraud attempts. Even short downtime is fine, but extended absence (weeks) starts to cause issues.
- **On-chain capital.** Channels are funded by on-chain Bitcoin. Opening a channel locks up that BTC until you close.
- **Active liquidity management.** Inbound liquidity (your counterparties having balance on their side of your channels) doesn't appear by default and often has to be purchased or earned via routing.
- **Watching for fraud.** If a channel counterparty broadcasts an old state, you have a fixed window to penalize them. Watchtower services exist for this.

What you might earn: small **routing fees** when your node forwards payments along a multi-hop route. In practice these are tiny per-payment but accumulate if you run a well-connected node. Most home Lightning operators don't earn meaningful revenue; commercial routing nodes are a different category.

For most users in 2026, a custodial Lightning wallet (Phoenix, Wallet of Satoshi, etc.) is the practical entry point. Running your own node is the sovereign answer and is well worth doing for users who care about that property. See [Lightning Network](/glossary/lightning-network) for the protocol view.
