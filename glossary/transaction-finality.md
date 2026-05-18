---
title: "Transaction Finality"
slug: transaction-finality
draft: false
shortDefinition: "After several confirmations, reversing a transaction by reorg becomes highly improbable, ensuring practical finality."
keyTakeaways:
  - "Every new block reduces the chance of a successful reorg attack"
  - "No absolute guarantee, but risk diminishes rapidly"
  - "Higher-value transactions typically wait more confirmations"
sources: []
relatedTerms: []
liveWidget: ~
---

Bitcoin transactions don't have absolute finality. Probability of reversal drops sharply with each confirmation, but never reaches zero. The right number of confirmations to wait depends on the value at stake and the threat model.

How the math works. To reverse a transaction with N confirmations, an attacker needs to mine a competing chain N+1 blocks long and have other nodes accept it as the canonical chain. The cost grows exponentially with N because each block requires proof of work equal to roughly the network's average hash rate for ~10 minutes. The probability of an attacker with fraction `q` of network hash rate succeeding falls off as roughly `q^N` for `q < 0.5`. For any honest-majority assumption, deep confirmations are effectively final.

Practical confirmation conventions:

- **0 conf (mempool).** Not final at all. Can be replaced (with RBF) or double-spent (race attack). Acceptable for sub-$10 retail in some workflows, increasingly migrated to Lightning instead.
- **1 confirmation (~10 min average).** Final for everyday consumer use. Coffee, retail, payroll. Reorgs of 1 block happen a few times a year but the probability of any specific 1-conf transaction being reversed is small.
- **3 confirmations (~30 min).** Common exchange deposit threshold for small accounts.
- **6 confirmations (~1 hour).** The Satoshi-era default. Exchange deposit threshold for larger amounts; quoted in most beginner Bitcoin material.
- **100 confirmations (~17 hours).** Coinbase transaction maturity: newly-mined block rewards can't be spent until 100 blocks pass. Hard rule, encoded in consensus, not a wait-time convention.
- **N >> 6.** For nation-state-attacker threat models or extremely high-value transfers, wait days. The exponential decay makes a sufficiently old transaction effectively unreversible.

Reorg history in practice. Bitcoin has experienced reorgs of 1-2 blocks routinely (a few times a year), 3-block reorgs occasionally, and only a handful of 4+-block reorgs in its history (most famously the March 2013 chain split documented in [BIP 50](/glossary/bip-50)). No reorg has ever overturned a transaction with 6+ confirmations in normal network operation.

Lightning Network offers near-instant settlement within a channel; the underlying channel state still ultimately settles on the base chain, inheriting whatever finality the base layer provides. For the user, a Lightning payment is final the moment it settles; for the channel's funds, the on-chain anchor is what matters in the long run.
