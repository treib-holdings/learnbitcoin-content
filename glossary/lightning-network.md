---
title: "Lightning Network"
slug: lightning-network
draft: false
shortDefinition: "A layer-2 system on top of Bitcoin enabling fast, low-fee payments through off-chain channels, settling on-chain only when necessary."
keyTakeaways:
  - "Solves high on-chain fees and slow confirmations for everyday payments"
  - "Uses payment channels to batch transactions off-chain"
  - "Relies on a global network of LN nodes interconnected by routes"
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
  - delayed-payment-channel
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
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
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - onion-routing-lightning
  - payment-channel
  - submarine-swap
  - wumbo-channels-lightning
liveWidget: ~
---

The Lightning Network addresses Bitcoin's scalability limits by letting parties open payment channels funded by on-chain transactions. Subsequent transfers occur off-chain, with each channel participant updating balances. When the channel closes-voluntarily or due to disputes-the final state is settled on the main blockchain. This approach allows near-instant payments and minimal fees, making microtransactions and everyday commerce feasible. LN uses hashed timelock contracts (HTLCs) to chain channels together, routing payments across multiple hops without requiring trust in intermediate nodes.
