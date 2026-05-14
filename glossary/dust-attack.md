---
title: "Dust Attack"
slug: dust-attack
draft: false
shortDefinition: "Sending tiny BTC amounts to addresses in an attempt to track them when they're later consolidated, revealing wallet clusters."
keyTakeaways:
  - "Exploits dust consolidation to deanonymize addresses"
  - "Users can freeze or ignore dust to preserve privacy"
  - "Highlighting suspiciously small UTXOs helps reduce risk"
sources: []
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

1. The attacker sends 1,000 or so sats to thousands of addresses they've identified as potentially interesting (from chain analysis, leaked databases, etc.).
2. Some recipients ignore the dust; some don't notice; some intentionally sweep it up later thinking it's "free money."
3. Whenever the recipient signs a transaction that includes the dust as one of the inputs, the wallet has effectively declared "these inputs belong to the same entity." Chain analysis algorithms cluster the inputs into a single owner's wallet.
4. The attacker now knows the cluster's other addresses, can track its activity, and potentially identify the real-world owner.

Modern defenses:

- **Coin control.** Bitcoin Core, Sparrow, and most serious self-custody wallets let users select which UTXOs to spend. Excluding suspicious dust from a transaction preserves the privacy boundary.
- **UTXO labels and freezing.** Some wallets automatically flag UTXOs received from unfamiliar sources as suspicious. Sparrow's "Do Not Spend" flag is the canonical pattern.
- **CoinJoin.** Mixing dust through a CoinJoin breaks the deanonymization link.
- **Just don't spend it.** A 1,000-sat UTXO is worth less than the marginal fee to include it. Leaving it in the wallet costs nothing and prevents the cluster-merge.

The attack has been documented against high-value targets repeatedly. Binance addresses received a high-profile dust attack in 2019; users of various exchanges have been targeted periodically. The defense isn't difficult once you know to look; the attack succeeds against users who don't.

For ordinary users: don't sweep random small UTXOs into your main wallet. If you didn't send it to yourself or recognize the source, treat it as a tracking attempt.
