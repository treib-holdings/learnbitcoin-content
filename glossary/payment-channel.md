---
title: "Payment Channel"
slug: payment-channel
draft: false
shortDefinition: "An off-chain mechanism (e.g., Lightning) allowing repeated transactions between two parties without constantly touching the blockchain."
keyTakeaways:
  - "Enables frequent transactions without multiple on-chain fees"
  - "Uses a multi-sig output that only settles on-chain at open/close"
  - "Forms the basis of second-layer scaling (e.g., LN)"
sources: []
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

The mechanism solves Bitcoin's scaling tradeoff. On-chain, every payment costs block space, takes ~10 minutes to confirm, and pays a fee. Off-chain inside a channel, every payment is instant, costs nothing on-chain, and is enforced cryptographically rather than via the [proof-of-work](/glossary/proof-work-pow) chain.

The minimum building blocks for a payment channel:

1. **A 2-of-2 multisig output** locking both parties' funds, opened with one on-chain [transaction](/glossary/transaction).
2. **Commitment transactions** - signed but unbroadcast transactions that each represent the current balance allocation. Each new transfer creates a new commitment that supersedes the previous one.
3. **A revocation mechanism** so that broadcasting an old (favored-to-me) commitment is severely punished. Without this, parties could cheat by reverting to a state they liked better.
4. **A timeout mechanism** so that no party can be permanently held hostage if the other goes offline.

The Lightning-specific implementation uses [HTLCs](/glossary/htlc-hashed-time-locked-contract) and asymmetric revocation keys to make this trustless. See [Lightning Channel](/glossary/lightning-channel) for the Lightning-flavored details.

Other payment-channel designs exist or have been proposed - **Eltoo** is a notable proposal that simplifies the channel state model using `SIGHASH_ANYPREVOUT`, which would require a soft fork. As of 2026, the BOLT-spec Lightning channel design is what's actually deployed at scale.

Payment channels are how Bitcoin scales without enlarging the base chain. The [Lightning Network](/glossary/lightning-network) is the practical realization of this idea.
