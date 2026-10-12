---
title: "Submarine Swap"
slug: submarine-swap
draft: false
updated: "2026-10-12"
shortDefinition: "A trust-minimized method to swap on-chain BTC with Lightning BTC, improving LN channel liquidity or enabling off-chain atomic exchanges."
keyTakeaways:
  - "Bridges on-chain BTC and LN BTC with HTLC-based atomicity"
  - "No custodial third party needed if executed carefully"
  - "Used for LN rebalancing or bridging to on-chain wallets"
sources:
  - { label: "Lightning Labs docs - Loop: Loop Out sends Lightning funds to an on-chain address, Loop In sends on-chain bitcoin into a channel; emptying a channel acquires inbound capacity (checked October 12, 2026)", url: "https://docs.lightning.engineering/lightning-network-tools/loop" }
  - { label: "Lightning Labs docs - How to Get Inbound Capacity on the Lightning Network: the channel opener starts with zero inbound capacity, every satoshi spent out becomes inbound capacity, Loop Out raises inbound capacity (checked October 12, 2026)", url: "https://docs.lightning.engineering/the-lightning-network/liquidity/how-to-get-inbound-capacity-on-the-lightning-network" }
  - { label: "Lightning Labs docs - The Loop CLI: Loop Out pays into an on-chain HTLC that you sweep after your Lightning payment; a failed payment refunds the server, a failed Loop In leaves your bitcoin locked up for the CLTV delta (checked October 12, 2026)", url: "https://docs.lightning.engineering/lightning-network-tools/loop/the-loop-cli" }
  - { label: "lightninglabs/loop README - non-custodial service; 'Convert outbound liquidity into inbound liquidity with Loop Out', 'Refill depleted Lightning channels with Loop In'; requires lnd (checked October 12, 2026)", url: "https://github.com/lightninglabs/loop" }
  - { label: "ElementsProject/peerswap README - swap-in trades an on-chain asset for Lightning outbound liquidity, swap-out for inbound liquidity; no centralized coordinator, no third-party rent collector (checked October 12, 2026)", url: "https://github.com/ElementsProject/peerswap" }
  - { label: "PeerSwap peer protocol spec - a Swap In shifts the channel balance toward the initiator, a Swap Out toward the responder (checked October 12, 2026)", url: "https://github.com/ElementsProject/peerswap/blob/master/docs/peer-protocol.md" }
  - { label: "Boltz backend docs - Swap lifecycle: Normal Submarine Swaps move bitcoin from chain to Lightning, Reverse Submarine Swaps from Lightning to chain; the chain can be Bitcoin or Liquid; in a normal swap the user sends bitcoin to a lockup address and Boltz sets up the Lightning payment; a failed swap is reclaimed with a refund transaction (checked October 12, 2026)", url: "https://github.com/BoltzExchange/boltz-backend/blob/master/docs/lifecycle.md" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bridge-node-lightning
  - htlc-hashed-time-locked-contract
  - lightning-network
  - lightning-payment
  - payment-channel
  - security
liveWidget: ~
---

A submarine swap is an [atomic swap](/glossary/atomic-swap) between on-chain Bitcoin and [Lightning](/glossary/lightning-network) Bitcoin. It lets you move BTC across the layer boundary trustlessly, without going through a custodian and without closing or opening a Lightning channel.

Two directions:

- **Submarine swap *in*.** You have on-chain BTC; you want Lightning BTC (e.g., to refill a channel you have been spending from, or to pay a Lightning invoice from on-chain coins without running a channel at all). The swap service takes your on-chain transaction and pays out over Lightning. When that payment lands in a channel of your own, the balance sits on your side, so a swap in adds outbound capacity and uses up room to receive. It does not buy inbound capacity; it spends it.
- **Submarine swap *out*.** You have Lightning BTC; you want it on-chain (e.g., to withdraw to cold storage). The service locks on-chain BTC in an HTLC, you pay a Lightning invoice, and you claim the coins. Your channel balance drops, which is exactly what makes room to receive again. This is the direction that frees up inbound capacity.

Both directions use [HTLCs](/glossary/htlc-hashed-time-locked-contract) on each side to enforce atomicity: the service can't take your BTC and not send the other side. If anything goes wrong, the timeouts kick in and you get refunded.

Why this matters in practice:

- **Lightning inbound capacity.** When you open a channel you fund it, so all the balance starts on your side and your inbound capacity is zero. A swap *out* pushes balance across to the other side without closing the channel. That is how a submarine swap "buys" inbound capacity; a swap in does the opposite.
- **Trust-minimized off-ramps.** Get Lightning balance back to on-chain cold storage without trusting an exchange.
- **Rebalancing with a direct peer.** PeerSwap runs the same idea between two channel partners with no coordinator in the middle, so a node can balance a channel straight with its peer.

Notable implementations: **Lightning Loop** (Lightning Labs' client, which runs alongside LND), **Boltz** (open source; swaps between Lightning and the Bitcoin chain or Liquid) and **PeerSwap** (peer-to-peer, no third party). A hosted service charges a swap fee on top of the on-chain transaction cost; in return you get cross-layer movement without custody risk.
