---
title: "Transaction Finality"
slug: transaction-finality
draft: false
updated: "2026-10-09"
shortDefinition: "After several confirmations, reversing a transaction by reorg becomes highly improbable, ensuring practical finality."
keyTakeaways:
  - "Every new block reduces the chance of a successful reorg attack"
  - "No absolute guarantee, but risk diminishes rapidly"
  - "Higher-value transactions typically wait more confirmations"
sources:
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (between 28 and 93 a year from 2022 through 2025, as of October 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
  - { label: "bitcoin.org alert - July 2015 chain forks (a 6-block invalid chain on July 4, 2015)", url: "https://bitcoin.org/en/alert/2015-07-04-spv-mining" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double spending (2012), Table 1: 0.059% for a 10% attacker at six confirmations; success falls exponentially with confirmations", url: "https://arxiv.org/abs/1402.2009" }
relatedTerms:
  - double-spend
  - proof-work-pow
  - race-attack
  - reorg-reorganization
liveWidget: ~
---

Bitcoin transactions don't have absolute finality. Probability of reversal drops sharply with each confirmation, but never reaches zero. The right number of confirmations to wait depends on the value at stake and the threat model.

How the math works. To reverse a transaction with N confirmations, an attacker needs to mine a competing chain at least N+1 blocks long so other nodes switch to it. Each block stands for about 10 minutes of the whole network's work. Below half the hash rate, an attacker's chance of catching up shrinks exponentially with N. Meni Rosenfeld's 2012 analysis puts it at about 1 in 1,700 for a 10% attacker at six confirmations. For any honest-majority assumption, deep confirmations are effectively final.

Practical confirmation conventions:

- **0 conf (mempool).** Not final at all. Can be replaced (with RBF) or double-spent (race attack). Acceptable for sub-$10 retail in some workflows, increasingly migrated to Lightning instead.
- **1 confirmation (~10 min average).** Final for everyday consumer use. Coffee, retail, payroll. 1-block reorgs happen dozens of times a year, but the probability of any specific 1-conf transaction being reversed is small.
- **3 confirmations (~30 min).** Common exchange deposit threshold for small accounts.
- **6 confirmations (~1 hour).** The Satoshi-era default. Exchange deposit threshold for larger amounts; quoted in most beginner Bitcoin material.
- **100 confirmations (~17 hours).** Coinbase transaction maturity: newly-mined block rewards can't be spent until 100 blocks pass. Hard rule, encoded in consensus, not a wait-time convention.
- **N >> 6.** For nation-state-attacker threat models or extremely high-value transfers, wait days. The exponential decay makes a sufficiently old transaction effectively unreversible.

Reorg history in practice. Bitcoin has experienced 1-block reorgs routinely (dozens a year from 2022 through 2025), 2-block reorgs rarely, and 3-block reorgs only a handful of times. The deeper ones on record came from software bugs and upgrade trouble, such as the 6-block invalid chain that miners who skipped validation built in July 2015.

The most famous deep reorg is the 25-block reorganization that ended the [March 2013 chain fork](/rabbit-hole/2013-chain-fork), documented in [BIP 50](/glossary/bip-50), during which one payment with more than six confirmations was reversed and later refunded. Outside of software-bug incidents like that one, no reorg has overturned a transaction with 6+ confirmations.

Lightning Network offers near-instant settlement within a channel; the underlying channel state still ultimately settles on the base chain, inheriting whatever finality the base layer provides. For the user, a Lightning payment is final the moment it settles; for the channel's funds, the on-chain anchor is what matters in the long run.
