---
title: "BIP 125 (Replace-by-Fee)"
slug: bip-125-replace-fee
draft: false
shortDefinition: "Allows a sender to replace an unconfirmed transaction with a higher-fee version, accelerating confirmation."
keyTakeaways:
  - "Enables fee bumping on unconfirmed transactions"
  - "Improves confirmation times under heavy network load"
  - "Affects zero-conf assumptions for real-time payments"
sources: []
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

BIP 125 specifies opt-in Replace-by-Fee (RBF): a transaction signals it can be replaced by setting at least one input's `nSequence` to a value less than `0xfffffffe`. Wallets and miners that honor the signal then accept a replacement transaction that meets specific policy rules.

The five "BIP 125 conditions" a replacement must satisfy:

1. The replacement pays a higher absolute fee than the original.
2. The replacement pays a higher feerate (sats per vbyte).
3. The replacement pays at least the minimum incremental relay fee.
4. The replacement doesn't add inputs that weren't visible (unconfirmed) to the original.
5. The replacement evicts at most 100 transactions total (including descendants).

This was opt-in RBF, the default behavior in Bitcoin Core 0.12 (2016) through 23.x. The opt-in compromise was a 2016 concession: merchants who wanted to keep accepting zero-conf payments could refuse to honor RBF-flagged transactions, while users who wanted fee-bumping ability could opt in.

In 2024, Bitcoin Core 28.0 changed the default to full RBF: every unconfirmed transaction is replaceable regardless of the `nSequence` signal. The reasoning that finally won: zero-conf was never actually secure (see [race attack](/glossary/race-attack)), so the opt-in compromise was protecting a security model that didn't exist. Merchants who relied on zero-conf migrated to Lightning or started requiring confirmations.

In practice now: every modern wallet supports RBF, every modern node will relay full-RBF replacements, and "I forgot to set a high enough fee" is no longer a stuck transaction. It's a one-click fee bump.

Spec: [BIP-125](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki).
