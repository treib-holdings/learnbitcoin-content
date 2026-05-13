---
title: "Lightning Payment"
slug: lightning-payment
draft: false
shortDefinition: "An off-chain BTC transfer across one or more LN channels, typically near-instant and with minimal fees."
keyTakeaways:
  - "Uses channel balance updates for quick, cheap transfers"
  - "Multihop routing connects distant LN nodes seamlessly"
  - "Bypasses on-chain fees except when channels open/close"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - delayed-payment-channel
  - hash-locktime-contract-hlc
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-invoice
  - lightning-network
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - payment-channel
  - submarine-swap
liveWidget: ~
---

Lightning payments leverage channel states to update balances without touching the blockchain for every transaction. To pay someone not directly connected to your channel, the network finds a multi-hop route. Each hop sets an HTLC ensuring no trust is needed. If the recipient claims the payment, each intermediary gets a small routing fee. This significantly outperforms on-chain transactions for small or frequent transfers. While LN can fail if routes lack sufficient liquidity, successful payments are often near-instant and cost fractions of a cent in fees.
