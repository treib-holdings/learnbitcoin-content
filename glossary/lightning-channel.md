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
  - loop-inout
  - payment-channel
  - rescue-transaction
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
  - "https://en.bitcoin.it/wiki/Payment_channels"
liveWidget: ~
---

A Lightning channel is a payment pipe between two parties on the [Lightning Network](/glossary/lightning-network). Both parties lock funds into a shared 2-of-2 multisig on-chain output (the **funding transaction**), and from there they can exchange unlimited off-chain payments by signing successive **commitment transactions** that update the channel's balance allocation.

How a channel works, end to end:

1. **Opening.** Alice and Bob both contribute (or one contributes, depending on the protocol variant) to a 2-of-2 multisig. The funding transaction goes on-chain and confirms.
2. **Transacting.** To pay Bob, Alice constructs a new commitment transaction that allocates less of the channel's balance to herself and more to Bob, signs it, and shares it. Bob signs and stores it too. The old commitment is invalidated using a revocation key. The new state is now the "current truth" between them, even though nothing is on-chain.
3. **Many updates.** They can repeat this back and forth, in either direction, thousands of times. Each update is just a signed transaction sitting in their wallets.
4. **Closing.** Either party can broadcast the latest commitment to the chain at any time. The commitment itself is a kind of [rescue transaction](/glossary/rescue-transaction) - pre-signed at every state update, ready to broadcast if the channel partner goes offline or misbehaves. The funds settle according to the latest state. **Cooperative close** is signed by both and clean. **Force close** is unilateral and includes a delay window during which the other party can punish a cheating counterparty (broadcasting an outdated state) using the revocation key.

The cheating protection is what makes Lightning trustless. If Bob ever tries to broadcast an old commitment that favored him more, Alice can use the revocation key to claim *all* of the channel's funds, including Bob's. The mechanism is mutually assured destruction at the channel level. In practice, attempted cheating is extremely rare.

A few practical realities:

- **Inactive channels expose nothing.** A channel that hasn't been updated in months still works fine. You can come back to it.
- **You must watch for cheating.** If you're offline when your counterparty cheats, you miss the dispute window. Watchtower services exist for this.
- **Capacity is fixed at open time.** A channel funded with 0.05 BTC can route up to 0.05 BTC; rebalancing (via submarine-swap services like [Loop In/Out](/glossary/loop-inout)) or splicing is required for more.

See [Lightning Network](/glossary/lightning-network) for the network-level view and HTLC routing.
