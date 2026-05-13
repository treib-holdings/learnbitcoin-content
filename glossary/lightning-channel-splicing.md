---
title: "Lightning Channel Splicing"
slug: lightning-channel-splicing
draft: false
shortDefinition: "Modifying a channel's on-chain funds (increase/decrease capacity) without fully closing or reopening it."
keyTakeaways:
  - "Prevents channel closures when adjusting capacity"
  - "Saves on fees and maintains uninterrupted LN usage"
  - "Requires on-chain interaction but keeps off-chain states intact"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - custodial-lightning-wallet
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - hash-locktime-contract-hlc
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - inactive-channel
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
  - payment-channel
  - wumbo-channels-lightning
liveWidget: ~
---

Splicing is like expanding or shrinking a Lightning channel's 'wallet' without tearing it down. Instead of ending the channel and losing off-chain state, the participants create a new transaction that updates the channel's on-chain funding and merges existing off-chain balances seamlessly. This saves fees and time compared to closing and reopening a channel while maintaining ongoing LN relationships. For instance, you can add more BTC if you anticipate higher payment needs or withdraw some satoshis if the channel is overfunded.
