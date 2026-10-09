---
title: "Halving (Halvening)"
slug: halving-halvening
draft: false
updated: "2026-10-09"
shortDefinition: "Every 210,000 blocks (~4 years), Bitcoin's block subsidy is reduced by 50%, curbing new BTC issuance."
keyTakeaways:
  - "Occurs roughly every four years, reducing new BTC rewards"
  - "Central to Bitcoin's fixed supply design"
  - "Can influence miner profits and market sentiment"
sources:
  - { label: "Halvings rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/halvings" }
  - { label: "ChainQuery - halving history, current subsidy and next halving estimate (cross-checked with mempool.space)", url: "https://chainquery.com/api/edu/halving" }
  - { label: "Bitcoin Core GetBlockSubsidy (permalink, Oct 2026)", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
relatedTerms:
  - asymptote
  - bip-42
  - block-height
  - block-reward
  - block-size
  - block-subsidy
  - coinbase-transaction
  - difficulty-retargeting
  - disinflation
  - hal-finneys-running-bitcoin
  - mining-subsidy
  - revenue-ths
  - reward-era
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_protocol"
  - "https://www.wikidata.org/wiki/Q17001427"
  - "https://en.bitcoin.it/wiki/Controlled_supply"
liveWidget: ~
---

Every 210,000 blocks - about every 4 years - the block subsidy paid to Bitcoin miners is cut in half. The event is called a halving, or, in older meme form, the "halvening."

The subsidy started at 50 BTC per block when the network launched in January 2009. It dropped to 25 at block 210,000 (November 2012), to 12.5 at block 420,000 (July 2016), to 6.25 at 630,000 (May 2020) and to 3.125 at 840,000 (April 2024), which is still the subsidy as of October 2026. The next halving will be at block 1,050,000, expected around April 2028, dropping the subsidy to 1.5625 BTC.

Each interval between halvings - 210,000 blocks at a fixed subsidy - is called a [reward era](/glossary/reward-era) (or "epoch" by some analysts).

The halving is the central mechanism of Bitcoin's monetary policy. It enforces the 21 million supply cap, halves the rate of new issuance every four years, and creates regular pressure on miner economics that the network has weathered four times as of October 2026 (2012, 2016, 2020 and 2024).

See the [Halvings rabbit hole](/rabbit-hole/halvings) for the full history and a live countdown to the next one. See [Disinflation](/glossary/disinflation) for what the halving schedule means for Bitcoin's inflation rate over time.
