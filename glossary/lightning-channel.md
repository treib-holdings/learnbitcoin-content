---
title: "Lightning Channel"
slug: lightning-channel
draft: false
shortDefinition: "A two-party off-chain payment channel on the Lightning Network, allowing rapid, low-fee transactions prior to on-chain settlement."
keyTakeaways:
  - "Locks BTC in a 2-of-2 multi-sig address for off-chain transfers"
  - "Allows near-instant, fee-efficient payments"
  - "Eventually settles on-chain when the channel is closed"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - hash-locktime-contract-hlc
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - inactive-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
  - payment-channel
  - wumbo-channels-lightning
liveWidget: ~
---

A Lightning channel is like a direct tunnel between two participants. They lock a certain amount of BTC into a multi-signature address and can then transact instantly by updating the channel's balance allocation. These updates happen off-chain, so they're not visible to the main Bitcoin ledger. When either party decides or is forced to settle, the final balance is written back to layer-1 via a commitment transaction. Channels form the basis of LN's 'mesh' topology, routing payments through connected nodes without cluttering the main blockchain.
