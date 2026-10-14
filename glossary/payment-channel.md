---
title: "Payment Channel"
slug: payment-channel
draft: false
updated: "2026-10-13"
shortDefinition: "An off-chain mechanism (e.g., Lightning) allowing repeated transactions between two parties without constantly touching the blockchain."
keyTakeaways:
  - "Enables frequent transactions without multiple on-chain fees"
  - "Uses a multi-sig output that only settles on-chain at open/close"
  - "Forms the basis of second-layer scaling (e.g., LN)"
sources:
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, sections 2 and 3: 2-of-2 multisignature funding output, old states invalidated by penalty, balance reflected on the blockchain only when a party disagrees (14 January 2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "Lightning BOLT #0 - Introduction and Index: channels, commitment transactions, commitment revocation keys, penalty transactions", url: "https://github.com/lightning/bolts/blob/master/00-introduction.md" }
  - { label: "Lightning BOLT #3 - Bitcoin Transaction and Script Formats: funding output is a P2WSH 2-of-2 multisig; to_self_delay and penalty transactions", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md" }
  - { label: "BIP-118 - SIGHASH_ANYPREVOUT for Taproot Scripts, consensus soft fork, status Draft", url: "https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki" }
  - { label: "Christian Decker, Rusty Russell and Olaoluwa Osuntokun - eltoo: A Simple Layer2 Protocol for Bitcoin (2018)", url: "https://blockstream.com/eltoo.pdf" }
  - { label: "Bitcoin Optech - Eltoo (LN-Symmetry) topic: lets any later channel state replace any earlier one without a penalty mechanism", url: "https://bitcoinops.org/en/topics/eltoo/" }
relatedTerms:
  - delayed-payment-channel
  - eltoo
  - escrow
  - escrowed-lightning-channel
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - locktime
  - submarine-swap
liveWidget: ~
---

A payment channel is the general concept of two parties locking up Bitcoin in a shared on-chain output and exchanging signed balance updates between themselves, off-chain, without broadcasting each one. The chain sees two transactions total - one to open, one to close - while potentially thousands of transfers happen in between.

The mechanism solves Bitcoin's scaling tradeoff. On-chain, every payment costs block space, takes [~10 minutes on average](/glossary/block-time) to confirm, and pays a fee. Off-chain inside a channel, every payment is instant and costs nothing on-chain. What keeps both sides honest is that either one can take the latest signed state to the [proof-of-work](/glossary/proof-work-pow) chain at any time: the chain is the court of last resort, not the venue for every payment.

The minimum building blocks for a payment channel:

1. **A 2-of-2 [multisig](/glossary/multisig) output** locking both parties' funds, created by one on-chain funding [transaction](/glossary/transaction).
2. **Commitment transactions** - signed but unbroadcast transactions that each represent the current balance allocation. Each new transfer creates a new commitment that supersedes the previous one.
3. **A revocation mechanism** so that broadcasting an old commitment that favors you is punished: in Lightning, the cheated party can claim the channel's entire balance with a [penalty transaction](/glossary/penalty-transaction). Without this, parties could cheat by reverting to a state they liked better.
4. **A timeout mechanism** so that no party can be permanently held hostage if the other goes offline.

The Lightning implementation uses [HTLCs](/glossary/htlc-hashed-time-locked-contract) for conditional payments and a fresh revocation key for every commitment, handed over once the next state is signed, to make this trustless. See [Lightning Channel](/glossary/lightning-channel) for the Lightning-flavored details.

Other payment-channel designs exist or have been proposed. **[Eltoo](/glossary/eltoo)** (also called LN-Symmetry), proposed in 2018 by Christian Decker, Rusty Russell and Olaoluwa Osuntokun, lets any later channel state replace any earlier one, so the penalty machinery is no longer needed; it depends on the [`SIGHASH_ANYPREVOUT`](/glossary/anyprevout) signature mode of BIP-118, which is still a draft soft fork. As of 2026, the BOLT-specified Lightning channel is what's actually deployed at scale.

Payment channels are how Bitcoin scales without enlarging the base chain. The [Lightning Network](/glossary/lightning-network) is the practical realization of this idea.
