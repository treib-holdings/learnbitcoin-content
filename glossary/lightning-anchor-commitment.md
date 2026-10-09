---
title: "Lightning Anchor Commitment"
slug: lightning-anchor-commitment
draft: false
updated: "2026-10-09"
shortDefinition: "A Lightning commitment transaction type with anchor outputs, enabling fee bumps after broadcast if mempool fees spike."
keyTakeaways:
  - "Makes LN channel closures more adaptable to fee market changes"
  - "Uses CPFP on special outputs to bump fees post-broadcast"
  - "Requires node implementations that support anchor outputs"
sources:
  - { label: "BOLT #3 - to_local_anchor and to_remote_anchor outputs (option_anchors)", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md#to_local_anchor-and-to_remote_anchor-output-option_anchors" }
  - { label: "Bitcoin Optech - Anchor outputs (topic page and implementation history)", url: "https://bitcoinops.org/en/topics/anchor-outputs/" }
  - { label: "LND v0.13.0-beta release notes - anchor channels become the default (June 2021)", url: "https://github.com/lightningnetwork/lnd/releases/tag/v0.13.0-beta" }
  - { label: "eclair v0.14.0 release notes - non-anchor channels removed, zero-fee commitments opt-in (May 2026)", url: "https://github.com/ACINQ/eclair/blob/master/docs/release-notes/eclair-v0.14.0.md" }
  - { label: "BOLTs PR #1228 - Zero-fee commitments using v3 transactions (merged May 2026)", url: "https://github.com/lightning/bolts/pull/1228" }
  - { label: "BOLT #3 - shared_anchor output (zero_fee_commitments, P2A)", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md#shared_anchor-output-zero_fee_commitments" }
  - { label: "BIP 431 - Topology Restrictions for Pinning (TRUC, version 3 transactions)", url: "https://github.com/bitcoin/bips/blob/master/bip-0431.mediawiki" }
relatedTerms:
  - fee-bumping
  - fee-rate-escalation
  - fraudulent-channel-close
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-network
sameAs:
  - "https://bitcoinops.org/en/topics/anchor-outputs/"
liveWidget: ~
---

Anchor commitments are a [Lightning channel](/glossary/lightning-channel) design pattern that solves a critical fee-rate problem in older channel designs.

The problem is that a Lightning channel's commitment transaction (the on-chain transaction that closes the channel and distributes funds) is **pre-signed**. Both sides sign a fresh one every time the channel balance changes, long before anyone knows whether it will be broadcast, and that signature locks in a fee.

If you sign with a 10 sat/vB fee in a low-congestion period and then need to broadcast it during a high-fee storm at 200 sat/vB, the transaction is uneconomical to mine and may sit in the [mempool](/glossary/mempool) for a long time, get evicted, or never be accepted at all. If payments are in flight, a stuck commitment can also miss their timelock deadlines, which can cost real money.

Pre-anchor designs handled this poorly. Channels could be effectively "stuck" if fees spiked, with no clean way to bump the commitment's fee post-signing.

Anchor outputs solve it. The commitment transaction is still signed in advance, with a modest fee that only needs to get it accepted into mempools, but it includes two small "anchor" outputs of 330 satoshis each, one per channel party. When either party broadcasts the commitment, they can use [CPFP (Child-Pays-for-Parent)](/glossary/fee-bumping) on their anchor output to attach an additional fee child transaction. The anchor child pays the real fee; the original commitment gets pulled along.

The benefits:

- **Channels stay closable when fees spike.** That holds as long as the node has some on-chain bitcoin to pay for the child transaction, which is why nodes with anchor channels keep a small on-chain reserve.
- **Less pre-signed fee waste.** Commitments can be signed with minimal fees, then bumped only when actually broadcast.
- **Better resilience.** Force-closes during fee storms are far more reliable, though not immune to every attack. One known weakness is transaction pinning, where an attacker uses mempool rules to stop a transaction from being accepted or fee-bumped in time.

Anchor outputs entered the BOLT spec in 2020. In 2021 the spec added a revised version, `option_anchors`, which also signs the channel's [HTLC](/glossary/htlc-hashed-time-locked-contract) transactions with zero fee. That revised version is the one implementations adopted. LND made anchor channels its default in June 2021 (version 0.13), eclair followed in 2022 and Core Lightning in 2024. A new channel uses anchors whenever both peers support them. Eclair version 0.14.0, released in May 2026, dropped support for non-anchor channels altogether.

Also in May 2026, the spec added a successor called zero-fee commitments. The two per-party anchors give way to a single shared anchor that anyone can spend, a standard output type called pay-to-anchor (P2A). The commitment is also built as a version 3 transaction, which opts it into stricter relay rules called TRUC (Topologically Restricted Until Confirmation) that are designed to make pinning harder. The commitment itself usually pays no fee, and the child transaction carries all of it.

Zero-fee commitments depend on relay rules added in [Bitcoin Core](/glossary/bitcoin-core) 28.0 and 29.0. As of October 2026 eclair offers them only as an opt-in feature.
