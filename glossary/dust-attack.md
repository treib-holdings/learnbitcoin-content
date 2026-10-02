---
title: "Dust Attack"
slug: dust-attack
draft: false
updated: "2026-10-02"
shortDefinition: "Sending tiny BTC amounts to addresses in an attempt to track them when they're later consolidated, revealing wallet clusters."
keyTakeaways:
  - "Exploits dust consolidation to deanonymize addresses"
  - "Users can freeze or ignore dust to preserve privacy"
  - "Highlighting suspiciously small UTXOs helps reduce risk"
sources:
  - { label: "Bitcoin Optech - Output linking topic (address reuse and dust attacks)", url: "https://bitcoinops.org/en/topics/output-linking/" }
  - { label: "Bitcoin Wiki - Privacy: forced address reuse", url: "https://en.bitcoin.it/wiki/Privacy#Forced_address_reuse" }
  - { label: "Bitcoin Optech Newsletter #391 - Discussion of dust attack mitigations (February 2026)", url: "https://bitcoinops.org/en/newsletters/2026/02/06/#discussion-of-dust-attack-mitigations" }
  - { label: "crypto.news - Bitcoin Wallet Samourai Warns Users of Dusting Attack (October 2018)", url: "https://crypto.news/bitcoin-wallet-samourai-dusting-attack/" }
relatedTerms:
  - address-reuse
  - discard-threshold
  - dust
  - dust-limit
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

A dust attack is a privacy-degradation tactic where an adversary sends tiny amounts of BTC (dust) to many addresses they want to track. When the recipient eventually consolidates those dust outputs with other coins in a transaction, the adversary can link all the inputs together as belonging to the same wallet.

How the attack works:

1. The attacker sends a few hundred sats, just above the [dust limit](/glossary/dust-limit), to thousands of addresses that have already appeared on the chain and look interesting (from chain analysis, leaked databases, etc.).
2. Some recipients ignore the dust; some don't notice; some intentionally sweep it up later thinking it's "free money."
3. Whenever the recipient signs a transaction that includes the dust as one of the inputs, the wallet has effectively declared "these inputs belong to the same entity." Chain analysis algorithms cluster the inputs into a single owner's wallet.
4. The attacker now knows the cluster's other addresses, can track its activity, and potentially identify the real-world owner.

Modern defenses:

- **Coin control.** Bitcoin Core, Sparrow, and most serious self-custody wallets let users select which UTXOs to spend. Excluding suspicious dust from a transaction preserves the privacy boundary.
- **UTXO labels and freezing.** Some wallets automatically flag small payments that land on addresses you have already used. Sparrow lets you freeze such a UTXO so it is never spent; Samourai Wallet called the same feature "Do Not Spend".
- **Spend it alone.** You can also spend a dust coin by itself entirely to miner fees, so it never shares a transaction with your other coins.
- **Just don't spend it.** A dust coin is worth little more than the fee to spend it, and when fees are high it is worth less. Leaving it in the wallet costs nothing and prevents the cluster-merge.

The attack has been documented repeatedly. In October 2018 Samourai Wallet warned its users that Bitcoin addresses were being dusted and told them to mark those coins "Do Not Spend". The defense isn't difficult once you know to look; the attack succeeds against users who don't.

For ordinary users: don't sweep random small UTXOs into your main wallet. If you didn't send it to yourself or recognize the source, treat it as a tracking attempt.
