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
  - hash-locktime-contract-hlc
  - htlc-hashed-time-locked-contract
  - lightning-network
  - lightning-payment
  - payment-channel
  - security
liveWidget: ~
---

In a submarine swap, a user sends on-chain BTC to a special address controlled by an HTLC-like script, and upon seeing proof, an LN node releases LN BTC to the user’s channel (or vice versa). This ensures an atomic exchange: either both sides of the swap succeed or none does. It’s especially handy for replenishing or withdrawing LN liquidity without fully closing channels. Lightning Labs’ Loop In/Out is a prominent example, letting LN users move funds on- or off-chain in a trust-minimized way, just using scripts and preimages, not a centralized custodian.
