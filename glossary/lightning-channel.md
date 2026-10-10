---
title: "Lightning Channel"
slug: lightning-channel
draft: false
updated: "2026-10-10"
shortDefinition: "A two-party off-chain payment channel on the Lightning Network, allowing rapid, low-fee transactions prior to on-chain settlement."
keyTakeaways:
  - "Locks BTC in a 2-of-2 multi-sig address for off-chain transfers"
  - "Allows near-instant, fee-efficient payments"
  - "Eventually settles on-chain when the channel is closed"
sources:
  - { label: "BOLT #2 - Peer Protocol for Channel Management (the funder opens and funds a v1 channel; v2 adds dual funding; mutual close; splicing replaces the funding transaction and sets a new channel capacity)", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md" }
  - { label: "BOLT #3 - Bitcoin Transaction and Script Formats (2-of-2 funding output, commitment transactions, revocation keys, to_self_delay for penalty transactions)", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md" }
  - { label: "BOLT #5 - On-chain Transaction Handling (unilateral close; on a revoked commitment the other node can claim all the channel's funds)", url: "https://github.com/lightning/bolts/blob/master/05-onchain.md" }
  - { label: "Poon and Dryja - The Bitcoin Lightning Network paper: if both parties cooperate, a channel can remain open indefinitely (2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "LND docs - Private altruist watchtowers (watch for a breach and publish the penalty transaction while the user is offline)", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/watchtower.md" }
  - { label: "Lightning Labs docs - Managing liquidity: --local-amt sets a channel's full capacity; Loop refills or empties channels without opening new ones", url: "https://docs.lightning.engineering/the-lightning-network/liquidity/manage-liquidity" }
  - { label: "Lightning Labs docs - Loop: submarine swaps that empty out or refill a channel", url: "https://docs.lightning.engineering/lightning-network-tools/loop" }
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

A Lightning channel is a payment pipe between two parties on the [Lightning Network](/glossary/lightning-network). Bitcoin is locked into a shared 2-of-2 multisig on-chain output (the **funding transaction**), and from there the two parties can exchange unlimited off-chain payments by signing successive **commitment transactions** that update the channel's balance allocation. Usually the side that opens the channel puts up all of that bitcoin.

How a channel works, end to end:

1. **Opening.** Alice funds a 2-of-2 multisig that needs both her signature and Bob's. (With dual funding, a newer option, Bob can add funds too.) The funding transaction goes on-chain and confirms.
2. **Transacting.** To pay Bob, Alice constructs a new commitment transaction that allocates less of the channel's balance to herself and more to Bob, signs it, and shares it. Bob signs and stores it too. The old commitment is invalidated using a revocation key. The new state is now the "current truth" between them, even though nothing is on-chain.
3. **Many updates.** They can repeat this back and forth, in either direction, thousands of times. Each update is just a signed transaction sitting in their wallets.
4. **Closing.** Either party can broadcast the latest commitment to the chain at any time. The commitment itself is a kind of [rescue transaction](/glossary/rescue-transaction) - pre-signed at every state update, ready to broadcast if the channel partner goes offline or misbehaves. The funds settle according to the latest state. **Cooperative close** is signed by both and clean. **Force close** is unilateral and includes a delay window during which the other party can punish a cheating counterparty (broadcasting an outdated state) using the revocation key.

The cheating protection is what makes Lightning trustless. If Bob ever tries to broadcast an old commitment that favored him more, Alice can use the revocation key to claim *all* of the channel's funds, including Bob's. The mechanism is mutually assured destruction at the channel level.

A few practical realities:

- **Channels don't expire.** As long as neither side closes it, a channel can stay open indefinitely. One that hasn't been used in months still works, and you can come back to it.
- **You must watch for cheating.** If you're offline when your counterparty cheats, you miss the dispute window. Watchtower services exist for this.
- **Capacity is set by the funding transaction.** A channel funded with 0.05 BTC holds 0.05 BTC in total, split between the two sides. Swap services like [Loop In/Out](/glossary/loop-inout) shift that split, refilling or emptying one side, but the total stays the same. Only [splicing](/glossary/lightning-channel-splicing), which replaces the funding transaction with a new one, changes a channel's capacity. The other way to get more room is to open another channel.

See [Lightning Network](/glossary/lightning-network) for the network-level view and HTLC routing.
