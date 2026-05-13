---
title: "Coinbase (Transaction)"
slug: coinbase-transaction
draft: false
shortDefinition: "The first transaction in every block, minting new BTC (the block subsidy) and collecting transaction fees."
keyTakeaways:
  - "Generates newly minted BTC per block"
  - "Collects transaction fees from included transactions"
  - "Must mature 100 blocks before spending"
sources: []
relatedTerms:
  - block
  - block-reward
  - block-subsidy
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - miner
  - miner-capitulation
  - mining-pool
  - mining-subsidy
  - transaction
liveWidget: ~
---

A coinbase transaction is how newly created bitcoins enter circulation. Miners construct it as the first entry in a freshly mined block, listing themselves (or a mining pool) as the receiver of the block subsidy plus any fees from included transactions. Unlike normal transactions, it has no inputs from previous UTXOs.
The coinbase transaction often includes a coinbase field, which can store arbitrary data (like mining pool tags or messages). The block reward earned here is subject to a 100-block maturity rule, meaning miners can't spend those coins immediately. This mechanism steadily releases BTC into the ecosystem, continuing until the 21 million coin cap is reached.
