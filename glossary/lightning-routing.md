---
title: "Lightning Routing"
slug: lightning-routing
draft: false
shortDefinition: "Finding a path of LN channels from sender to recipient, potentially spanning multiple intermediaries."
keyTakeaways:
  - "Selects a route of connected channels with sufficient capacity"
  - "Uses LN gossip data for up-to-date channel states"
  - "Relies on ephemeral HTLCs ensuring trustless multi-hop payments"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - delayed-payment-channel
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-refund-invoice
  - lightning-sphinx
  - onion-routing-lightning
liveWidget: ~
---

Lightning routing is the process of finding a path through the network of [Lightning channels](/glossary/lightning-channel) that can carry your payment from sender to receiver, when no direct channel exists between them.

Most Lightning users don't have direct channels with the people they pay - that would require opening an [on-chain transaction](/glossary/transaction) with every counterparty, defeating the point. Instead, your [Lightning node](/glossary/lightning-node) routes payments through intermediate nodes that *do* have a path to the destination, atomically, via chained [HTLCs](/glossary/htlc-hashed-time-locked-contract).

How it works under the hood:

1. **Build the graph.** Lightning nodes share a [gossip protocol](/glossary/gossip-protocol-lightning) advertising which channels exist, their capacity, and their fee policies. Your node maintains a local view of this graph.
2. **Find a path.** Run a modified Dijkstra's algorithm to find a sequence of channels from you to the destination, with enough capacity on the relevant side of each channel, optimizing for fees and reliability.
3. **Onion-route the payment.** Each hop knows only the previous and next hop, not the full path. This is **[Sphinx](/glossary/lightning-sphinx) onion routing**, similar to Tor.
4. **HTLCs lock the payment** at every hop. If any hop fails, the whole payment unwinds atomically - you don't lose money in a partial route.
5. **If routing fails, retry.** Modern wallets retry with different paths or split the payment across multiple paths ([Atomic Multi-Path Payments / AMP](/glossary/atomic-multi-path-payment-amp)).

The hard problems in routing:

- **Liquidity is private.** Gossip tells you channels exist and their total capacity, but not which side has the balance. Routing has to probe or guess.
- **Channels deplete.** A channel that worked for routing a minute ago might be depleted on the relevant side after your payment passed through. Other people's payments are invisible to you.
- **Larger payments are harder.** Probability of finding a complete path drops as payment size approaches typical channel capacity. AMP and channel splicing help, but huge payments often require multiple attempts or out-of-band coordination.

Routing reliability has improved dramatically since 2020 - most everyday payments under a few hundred thousand sats route on the first try. Larger or more remote payments still occasionally fail, but the failure modes are recoverable and never lose funds.

See the [Lightning Routing rabbit hole](/rabbit-hole/lightning-routing) for the deeper treatment - source routing, onion encryption, multi-path payments, pathfinding heuristics, and the probing techniques wallets use to find liquidity.
