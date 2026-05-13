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

The coinbase transaction is the first transaction in every Bitcoin block. It's how newly issued BTC enters circulation, and it's the only kind of transaction in Bitcoin that has no real inputs.

A miner who finds a valid block constructs the coinbase to pay themselves the [block reward](/glossary/block-reward): the [block subsidy](/glossary/block-subsidy) (currently 3.125 BTC) plus the sum of fees from every transaction packed into the block. The "input" of the coinbase is a placeholder; it doesn't reference any prior UTXO, because no prior UTXO is being spent. The output(s) become new UTXOs that the miner owns.

Two notable rules:

- **The coinbase scriptSig is a freeform field.** Miners can stuff arbitrary data here. Satoshi famously put a Times headline into the [genesis block](/glossary/genesis-block) coinbase: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks." Modern mining pools use it for pool tags and the [BIP 34](/glossary/bip-34) block-height marker.
- **100-block maturity.** Coinbase outputs can't be spent until 100 more blocks are mined on top of them. This prevents miners from spending newly-minted coins that might disappear in a chain reorganization.

The coinbase is the only place new BTC enters circulation. Every satoshi that exists today was originally paid out in a coinbase transaction. When the subsidy reaches zero around 2140, coinbase transactions will continue, just paying only fees.

See [Mining rabbit hole](/rabbit-hole/mining) for the full mining flow, and [Block Subsidy](/glossary/block-subsidy) for the issuance schedule.
