---
title: "Submarine Swap"
slug: submarine-swap
draft: false
shortDefinition: "A trust-minimized method to swap on-chain BTC with Lightning BTC, improving LN channel liquidity or enabling off-chain atomic exchanges."
keyTakeaways:
  - "Bridges on-chain BTC and LN BTC with HTLC-based atomicity"
  - "No custodial third party needed if executed carefully"
  - "Used for LN rebalancing or bridging to on-chain wallets"
sources: []
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

- **Submarine swap *in*.** You have on-chain BTC; you want Lightning BTC (e.g., to fund inbound liquidity on a Lightning channel, or to pay a Lightning invoice without first opening a channel). The swap service receives your on-chain transaction and sends you Lightning BTC.
- **Submarine swap *out*.** You have Lightning BTC; you want it on-chain (e.g., to withdraw to cold storage). The swap service sends you on-chain BTC after you complete a Lightning payment.

Both directions use [HTLCs](/glossary/htlc-hashed-time-locked-contract) on each side to enforce atomicity: the service can't take your BTC and not send the other side. If anything goes wrong, the timeouts kick in and you get refunded.

Why this matters in practice:

- **Lightning inbound liquidity.** Opening a Lightning channel funds your side by default; the other side starts at zero. Submarine swaps are a clean way to "buy" inbound liquidity without closing and reopening.
- **Trust-minimized off-ramps.** Get Lightning balance back to on-chain cold storage without trusting an exchange.
- **Lightning-to-Lightning across implementations.** Useful when network conditions or liquidity issues make direct routing unreliable.

Notable services: **Lightning Loop** (Lightning Labs), **Boltz Exchange** (open-source, multi-chain), and various wallet-integrated swap features. The service charges a small fee plus the on-chain transaction cost; in return you get cross-layer movement without custody risk.
