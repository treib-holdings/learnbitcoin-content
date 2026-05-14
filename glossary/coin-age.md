---
title: "Coin Age"
slug: coin-age
draft: false
shortDefinition: "A metric in some PoS systems tracking how long coins remain unspent; studied in Bitcoin analytics but not used in Bitcoin consensus."
keyTakeaways:
  - "Key in PoS networks, less relevant for Bitcoin's PoW"
  - "Used in analytics (e.g., measuring holder behavior)"
  - "No direct role in Bitcoin's mining consensus mechanism"
sources: []
relatedTerms:
  - bitcoin-days-destroyed
  - coin-control
  - consolidation-transaction
  - transaction
  - transaction-chaining
  - utxo-unspent-transaction-output
liveWidget: ~
---

Coin age is the time elapsed since a UTXO was created. In Bitcoin it has no consensus role - blocks are selected purely by proof-of-work, not by the age of coins included - but it's a key input to on-chain analytics.

Where coin age shows up:

- **[Bitcoin Days Destroyed](/glossary/bitcoin-days-destroyed)**: BDD weights each spend by the coin age of the inputs. A spend of coins that were dormant for years generates much higher BDD than a spend of recently-received coins.
- **[HODL Waves](/glossary/hodl-waves)**: visualization of the supply broken down by coin age bands. Glassnode's standard chart uses bands like <1m, 1-3m, 3-6m, 6-12m, 1-2y, 2-3y, 3-5y, 5-7y, 7-10y, 10y+.
- **Long-term-holder vs short-term-holder classifications.** Glassnode uses a 155-day threshold: UTXOs older than that are considered "long-term holder" supply. The split is a useful sentiment indicator.
- **"Realized cap"**: the sum of all UTXOs valued at the price they last moved at. Old coins contribute their original (lower) cost basis; recently-moved coins reflect current prices.

Coin age was also a central concept in proof-of-stake altcoins (Peercoin and successors) where the staking right was weighted by coin age. Critics noted this incentivized hoarding and centralization. Bitcoin avoids the entire issue by using proof-of-work instead.

For Bitcoin specifically: coin age is interesting because it's directly observable on-chain (anyone can compute it from any node), making it one of the few "wallet behavior" metrics that doesn't require trusting a third party's clustering heuristics. Whether the holders moving their coins are actually long-term-conviction holders or just exchange hot wallets is a separate question that requires more analysis.
