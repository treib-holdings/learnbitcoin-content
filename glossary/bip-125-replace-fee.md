---
title: "BIP 125 (Replace-by-Fee)"
slug: bip-125-replace-fee
draft: false
updated: "2026-10-09"
shortDefinition: "Allows a sender to replace an unconfirmed transaction with a higher-fee version, accelerating confirmation."
keyTakeaways:
  - "Enables fee bumping on unconfirmed transactions"
  - "Improves confirmation times under heavy network load"
  - "Affects zero-conf assumptions for real-time payments"
sources:
  - { label: "Bitcoin Core 24.0.1 release notes (December 2022) - mempoolfullrbf option added, off by default", url: "https://bitcoincore.org/en/releases/24.0.1/" }
  - { label: "Bitcoin Core 28.0 release notes (October 2024) - mempoolfullrbf default changed from 0 to 1", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "BIP 125 - Opt-in Full Replace-by-Fee Signaling (the five replacement rules)", url: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki" }
  - { label: "Bitcoin Core 31.0 release notes (April 2026) - cluster mempool, replacements must improve the feerate diagram", url: "https://bitcoincore.org/en/releases/31.0/" }
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

BIP 125 specifies opt-in Replace-by-Fee (RBF): a transaction signals it can be replaced by setting at least one input's `nSequence` to a value less than `0xfffffffe`. Nodes and miners that honor the signal then accept a replacement transaction that meets specific policy rules.

The five rules BIP 125 sets for a replacement:

1. The original transaction signals that it can be replaced, either directly or by inheriting the signal from an unconfirmed ancestor.
2. The replacement may spend an unconfirmed input only if the original already spent it.
3. The replacement pays an absolute fee at least as large as the total fees of the transactions it replaces.
4. The extra fee also covers the replacement's own bandwidth, at the node's minimum relay fee rate or higher.
5. The originals plus the descendants that would be evicted with them add up to no more than 100 transactions.

Bitcoin Core no longer follows this list to the letter. Full RBF dropped the signaling rule, and since Bitcoin Core 31.0 (April 2026) a replacement is accepted only if it leaves the mempool's fee ordering strictly better (its "feerate diagram"). For a single transaction with no unconfirmed relatives, that check comes down to a higher fee and a higher feerate than the original.

This was opt-in RBF, the default behavior in Bitcoin Core 0.12 (2016) through 27.x (versions 24 to 27 offered full RBF only as an off-by-default option). The opt-in compromise was a 2016 concession: merchants who wanted to keep accepting zero-conf payments could refuse to honor RBF-flagged transactions, while users who wanted fee-bumping ability could opt in.

In 2024, Bitcoin Core 28.0 changed the default to full RBF: every unconfirmed transaction is replaceable regardless of the `nSequence` signal. The reasoning that finally won: zero-conf was never actually secure (see [race attack](/glossary/race-attack)), so the opt-in compromise was protecting a security model that didn't exist. Merchants who relied on zero-conf migrated to Lightning or started requiring confirmations.

In practice, as of October 2026, most wallets offer an RBF fee bump and Bitcoin Core nodes from 28.0 on relay full-RBF replacements by default, so "I forgot to set a high enough fee" is usually a one-click fee bump rather than a stuck transaction.

Spec: [BIP-125](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki).
