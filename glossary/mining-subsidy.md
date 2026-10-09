---
title: "Mining Subsidy"
slug: mining-subsidy
draft: false
updated: "2026-10-09"
shortDefinition: "Equivalent to the block subsidy-the newly generated BTC portion of the block reward."
keyTakeaways:
  - "Part of each block reward, halving every 210,000 blocks"
  - "Drives new BTC issuance until the 21M cap is reached"
  - "Eventually diminishes, with fees expected to sustain miners"
sources:
  - { label: "Bitcoin Core GetBlockSubsidy (permalink, Oct 2026) - halves the subsidy every 210,000 blocks, counted in whole satoshis", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
  - { label: "ChainQuery - circulating supply and annual inflation rate (cross-checked with blockchain.info)", url: "https://chainquery.com/api/edu/supply" }
  - { label: "blockchain.info - total bitcoin issued, in satoshis", url: "https://blockchain.info/q/totalbc" }
  - { label: "ChainQuery - next halving estimate (cross-checked with mempool.space)", url: "https://chainquery.com/api/edu/halving" }
relatedTerms:
  - block-reward
  - difficulty
  - transaction-fee
liveWidget: ~
---

The mining subsidy is the freshly-minted BTC portion of each block's reward. It's distinct from the transaction fees in the block; together, subsidy plus fees make up the block reward that the miner who found the block claims.

The schedule is deterministic and built into the protocol:

| Era | Block range | Subsidy per block |
|---|---|---|
| Era 1 | 0 - 209,999 | 50 BTC |
| Era 2 | 210,000 - 419,999 | 25 BTC |
| Era 3 | 420,000 - 629,999 | 12.5 BTC |
| Era 4 | 630,000 - 839,999 | 6.25 BTC |
| Era 5 | 840,000 - 1,049,999 | 3.125 BTC (in force as of October 2026) |
| Era 6 | 1,050,000 - 1,259,999 | 1.5625 BTC (from the halving expected around April 2028) |
| ... | ... | ... |
| Era 33 | 6,720,000 - 6,929,999 | 1 satoshi (the last era with any subsidy) |
| Era 34 and later | 6,930,000 onward | 0 (the subsidy rounds down to zero satoshis) |

Each era halves the subsidy, hence "halving" or "halvening" (block 210,000 in November 2012 was the first). Because the subsidy is counted in whole satoshis and every halving rounds down, the most the rules can ever issue is 20,999,999.9769 BTC, slightly under the round-number 21 million (see the [Supply Schedule rabbit hole](/rabbit-hole/supply)).

What this means for the long-term economics:

- **As of October 2026**, the subsidy is 3.125 BTC per block. At ~144 blocks per day, that's ~450 BTC of new supply daily and ~164,250 BTC per year, about 0.82% annual inflation against the roughly 20.1M BTC issued by then.
- **After the fifth halving, expected around April 2028**, the subsidy drops to 1.5625 BTC and inflation halves to ~0.4%.
- **Around 2140**, the subsidy rounds to zero. Miners earn only transaction fees from that point onward.

The subsidy is what bootstrapped Bitcoin's security: high enough rewards to attract massive hash power even before fees became meaningful. The transition from subsidy-dominated revenue to fee-dominated revenue is one of the most discussed open questions in Bitcoin economics, but the math is fixed and not subject to debate.
