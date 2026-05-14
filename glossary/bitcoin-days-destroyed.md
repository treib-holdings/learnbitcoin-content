---
title: "Bitcoin Days Destroyed"
slug: bitcoin-days-destroyed
draft: false
shortDefinition: "An on-chain metric that multiplies the amount of BTC spent by how long it sat idle, reflecting 'value transacted' over time held."
keyTakeaways:
  - "Weights transaction volume by the holding period"
  - "High BDD may indicate long-held coins moving"
  - "Used by analysts to gauge long-term holder activity"
sources: []
relatedTerms:
  - coin-age
  - coin-control
  - colored-coins
  - transaction
  - transaction-chaining
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

Bitcoin Days Destroyed (BDD) is an on-chain metric introduced by ByteCoin on the Bitcoin Talk forum in 2011. It weights each transaction by the time its inputs sat idle before being spent: a 50 BTC output that hadn't moved in 100 days, when spent, "destroys" 50 * 100 = 5,000 bitcoin-days. Move 1 BTC that arrived in your wallet yesterday and you destroy 1 bitcoin-day.

The intuition: raw transaction volume (BTC moved per day) treats high-frequency trading on exchange hot wallets the same as a long-dormant coin finally moving. BDD distinguishes them. Coins that sit unmoved for years and then spend tell a different story than coins that bounce between exchange wallets every hour.

How analysts use it:

- **Long-term holder behavior.** Sustained increases in BDD often correlate with "long-term holders distributing" market tops, where coins held through prior cycles get sold.
- **Macro cycle markers.** BDD spikes have historically clustered near major price peaks (2013, 2017, 2021, 2024) and major capitulations (2018, 2022).
- **Combined with other metrics.** Glassnode, Coin Metrics, and others publish derivative metrics built on BDD: Value Days Destroyed, Reserve Risk, HODL Waves, etc.

What BDD doesn't tell you:

- **Why coins moved.** A coin moving to a new self-custody address looks identical to a coin moving to an exchange.
- **Who moved them.** Single-entity behavior is impossible to identify with certainty; chain-analysis heuristics group addresses but are imperfect.
- **What the move predicts.** Correlation with price tops is historical pattern, not causal. BDD is a signal, not a forecast.

For the casual observer, BDD is one of the better "is this just trading or are old holders moving" signals available on a public blockchain. It's not a price predictor but it's a useful contextualizer of market activity.
