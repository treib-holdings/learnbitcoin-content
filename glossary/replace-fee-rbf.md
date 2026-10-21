---
title: "Replace-by-Fee (RBF)"
slug: replace-fee-rbf
draft: false
updated: "2026-10-21"
shortDefinition: "A mechanism allowing a sender to rebroadcast an unconfirmed TX with higher fees, replacing the original transaction in the mempool."
keyTakeaways:
  - "Allows fee bumping on unconfirmed transactions"
  - "Enhances user control in congested mempool conditions"
  - "Reduces reliability of zero-conf payments"
sources:
  - { label: "BIP 125 - Opt-in Full Replace-by-Fee Signaling: a transaction opts in if any input has an nSequence less than 0xffffffff - 1; a replacement must pay at least the absolute fee of the originals plus enough to cover its own bandwidth at the minimum relay fee; no known wallet signaled by default when the BIP was written", url: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki" }
  - { label: "Bitcoin Core - doc/policy/mempool-replacements.md: the current rules (absolute fee, incremental relay feerate, cluster limit, and from 31.0 a strictly improved feerate diagram), with the signaling and new-unconfirmed-input rules removed; opt-in RBF honoured in mempool and mining since 0.12.0; full RBF the default since 28.0", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/policy/mempool-replacements.md" }
  - { label: "Bitcoin Optech - Replace-by-fee (RBF) topic: a node policy that lets an unconfirmed transaction be replaced by one that spends at least one of the same inputs and pays a higher fee; full-RBF replaces whether or not the original signaled", url: "https://bitcoinops.org/en/topics/replace-by-fee/" }
  - { label: "Bitcoin Core 0.16.0 release notes (February 26, 2018): the GUI send screen uses BIP 125 RBF by default", url: "https://bitcoincore.org/en/releases/0.16.0/" }
  - { label: "Bitcoin Core - src/wallet/wallet.h (DEFAULT_WALLET_RBF true: the wallet signals replace-by-fee by default)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/wallet.h" }
  - { label: "Bitcoin Core 28.0 release notes (October 2, 2024): the default of -mempoolfullrbf changed from 0 to 1", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core 29.0 release notes (April 14, 2025): the -mempoolfullrbf option removed, making full replace-by-fee the standard behavior", url: "https://bitcoincore.org/en/releases/29.0/" }
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - delayed-justice-transaction
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - transaction
  - transaction-fee
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
  - "https://bitcoinops.org/en/topics/replace-by-fee/"
liveWidget: ~
---

Replace-by-Fee (RBF) is a [mempool](/glossary/mempool) policy that lets a sender rebroadcast a stuck [transaction](/glossary/transaction) with a higher [fee](/glossary/fee-estimation), replacing the original.

Defined in [BIP-125](/glossary/bip-125-replace-fee) and shipped in Bitcoin Core 0.12.0, opt-in RBF works like this: the original transaction signals it's replaceable by giving at least one input an `nSequence` value of 0xfffffffd or lower (at least two below the maximum). If congestion makes your transaction stall, you can construct a new transaction that:

- Spends at least one of the same UTXOs.
- Pays at least as much absolute fee as everything it replaces, plus enough extra to cover its own relay bandwidth.
- Pays a higher fee *rate* than the original. (This one is Bitcoin Core policy rather than a BIP 125 rule; since Bitcoin Core 31.0 the formal test is that the replacement must leave the mempool's feerate diagram strictly better than before.)

Nodes that accept the replacement drop the old transaction from their mempool and take the new one. Miners, looking for the highest fee rate, are more likely to pick yours up.

What RBF buys you:

- **Recovery from fee underestimation.** You miscalculated fees during a quiet period and got caught when congestion hit; bump and proceed.
- **Faster confirmation when urgency changes.** You needed it confirmed cheaply, then suddenly you need it confirmed now.

What it costs:

- **Zero-confirmation reliability.** A recipient looking at "unconfirmed in the mempool" can no longer assume the transaction won't be replaced. RBF-signaled transactions explicitly admit this. (Transactions that did not signal once had somewhat stronger zero-conf standing, but Bitcoin Core has relayed replacements of unsignaled transactions by default since 28.0 in October 2024, and 29.0 removed the switch; see [Full RBF](/glossary/full-rbf).)

Bitcoin Core's wallet GUI has signaled RBF by default since 0.16.0 (2018), and the wallet signals on every transaction it builds unless told otherwise (`DEFAULT_WALLET_RBF` in `src/wallet/wallet.h`). Merchants who once accepted zero-conf payments only from non-signaling transactions lost that protection when full RBF became the default; the safe choice is to wait for the first confirmation. See [Fee Bumping](/glossary/fee-bumping) for the broader concept (RBF is one method; CPFP is the other).
