---
title: "CoinJoin"
slug: coinjoin
draft: false
shortDefinition: "A privacy method combining multiple users' inputs into a single transaction, obscuring which outputs belong to which inputs."
keyTakeaways:
  - "Blends multiple inputs/outputs in a single transaction"
  - "Weakens deterministic links between addresses"
  - "Not perfect privacy but a notable improvement over standard sends"
sources: []
relatedTerms:
  - address-clustering
  - address-reuse
  - chain-analysis
  - coin-control
  - mixing-service
  - payjoin
  - shielded-coinjoin
  - stealth-address
sameAs:
  - "https://en.bitcoin.it/wiki/CoinJoin"
  - "https://bitcoinops.org/en/topics/coinjoin/"
liveWidget: ~
---

CoinJoin is a technique for breaking the common-ownership assumption that [chain analysts](/glossary/chain-analysis) use to cluster [Bitcoin addresses](/glossary/address). Multiple users contribute [UTXOs](/glossary/utxo-unspent-transaction-output) to a single [transaction](/glossary/transaction) with equal-value outputs, so that an outside observer can no longer tell which output belongs to which input.

The simplest version: five participants each contribute 0.1 BTC. The transaction has five 0.1 BTC outputs, one for each participant, going to fresh addresses they each control. On-chain, the link between any input and its corresponding output is gone - the analyst's best guess is 1-in-5.

CoinJoin is genuinely useful and genuinely limited. It improves your [fungibility](/glossary/fungibility) by detaching coins from their historical clustering, but:

- **It's not magic.** Heuristics still find patterns (uneven coin values, certain output orderings, mix-and-spend correlations). Sophisticated analysts can sometimes unmix.
- **It only works for the specific inputs and outputs in the mix.** Other UTXOs in your wallet remain linked unless you mix them too.
- **The transaction itself is publicly visible.** Observers know you participated in a CoinJoin, even if they can't tell which output is yours. Some custodians treat CoinJoined coins as "tainted" - the worst form of fungibility erosion.

The implementation landscape changed dramatically in 2024. **Wasabi's coordinator** (run by zkSNACKs) shut down in mid-2024 amid regulatory pressure. **Samourai Whirlpool** went offline in April 2024 when its founders were indicted by the US DOJ on money-laundering conspiracy charges. As of 2026, the main remaining options are decentralized: **JoinMarket** (peer-to-peer coordination, no central operator) and newer Nostr-based variants like **Joinstr**.

[PayJoin](/glossary/payjoin) is a different, smaller-scale approach that achieves similar privacy goals without batched mixing.

Privacy on Bitcoin is achievable but requires deliberate effort. CoinJoin is one tool; address discipline, Tor, [Lightning](/glossary/lightning-network), and avoiding KYC choke points are others.
