---
title: "Lightning Node"
slug: lightning-node
draft: false
updated: "2026-10-09"
shortDefinition: "Software that opens and maintains Lightning channels, sends and receives off-chain payments, and forwards payments for others."
keyTakeaways:
  - "Interfaces with the LN to send, receive, and route off-chain payments"
  - "Maintains state of channel balances and network topology"
  - "May generate routing fee revenue for connected node operators"
sources:
  - { label: "BOLT #2 - The open_channel message (to_self_delay)", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md#the-open_channel-message" }
  - { label: "LND source - funding/manager.go (MinBtcRemoteDelay 144, MaxBtcRemoteDelay 2016)", url: "https://github.com/lightningnetwork/lnd/blob/master/funding/manager.go" }
  - { label: "LND source - server.go (remote CSV delay scales with channel size)", url: "https://github.com/lightningnetwork/lnd/blob/master/server.go" }
  - { label: "BOLT #2 - cltv_expiry_delta selection (deadlines for forwarded payments)", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md#cltv_expiry_delta-selection" }
  - { label: "BOLTs PR #1160 - Channel splicing (merged March 2026)", url: "https://github.com/lightning/bolts/pull/1160" }
  - { label: "Core Lightning README - C implementation maintained by Blockstream", url: "https://github.com/ElementsProject/lightning" }
  - { label: "ACINQ Phoenix README - self-custodial wallet built on lightning-kmp", url: "https://github.com/ACINQ/phoenix" }
  - { label: "Lightning Dev Kit - case studies (projects building with LDK)", url: "https://lightningdevkit.org/case-studies" }
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

A Lightning node is a piece of software that participates in the [Lightning Network](/glossary/lightning-network). It manages your [payment channels](/glossary/lightning-channel), tracks the network gossip graph, routes payments through itself when asked, and lets you send and receive instant off-chain payments.

The major implementations as of October 2026:

- **LND** (Lightning Labs) - written in Go, widely used in node-in-a-box products like Umbrel, Start9, MyNode.
- **[Core Lightning](/glossary/core-lightning-c-lightning)** (Blockstream, formerly c-lightning) - written in C, modular plugin architecture, lightweight.
- **Eclair** (ACINQ) - written in Scala. Phoenix, ACINQ's mobile wallet, is built on lightning-kmp, a separate implementation from the same company, rather than on eclair.
- **LDK** (Lightning Dev Kit, Spiral) - a library you embed into your own application rather than a standalone daemon. Used by Cash App, Bitkit, Alby Hub and others.

What running a Lightning node costs you operationally:

- **Uptime.** A node must be online to send, receive, and watch for fraud attempts. If a peer broadcasts an old state and you stay offline past the channel's dispute window, you can lose funds. By default LND scales that window with channel size, from 144 blocks (about a day) for small channels to 2,016 blocks (about two weeks) for large ones. Payments forwarded through your node have shorter deadlines, often a matter of hours, and a routing node that is offline when one comes due can lose that payment.
- **On-chain capital.** Channels are funded by on-chain Bitcoin. Opening a channel locks up that BTC until you close the channel. Where both nodes support [splicing](/glossary/lightning-channel-splicing), which was added to the spec in March 2026, you can also take some of it back out without closing.
- **Active liquidity management.** Inbound liquidity (your counterparties having balance on their side of your channels) doesn't appear by default and often has to be purchased or earned via routing.
- **Watching for fraud.** If a channel counterparty broadcasts an old state, you have a fixed window to penalize them. Watchtower services exist for this.

What you might earn: small **routing fees** when your node forwards payments along a multi-hop route. In practice these are tiny per-payment but accumulate if you run a well-connected node. Most home Lightning operators don't earn meaningful revenue; commercial routing nodes are a different category.

You can use Lightning without setting up and managing a node yourself. A [custodial Lightning wallet](/glossary/custodial-lightning-wallet) leaves the node and the funds with a company. Some self-custodial mobile wallets keep the keys on your phone and run a small node there for you, leaning on a service provider for channels and liquidity. Running a node you manage yourself is the sovereign answer and is well worth doing for users who care about that property. See [Lightning Network](/glossary/lightning-network) for the protocol view.
