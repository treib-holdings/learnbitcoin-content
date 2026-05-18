---
title: "Mining Subsidy"
slug: mining-subsidy
draft: false
shortDefinition: "Equivalent to the block subsidy-the newly generated BTC portion of the block reward."
keyTakeaways:
  - "Part of each block reward, halving every 210,000 blocks"
  - "Drives new BTC issuance until the 21M cap is reached"
  - "Eventually diminishes, with fees expected to sustain miners"
sources: []
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
| Era 5 | 840,000 - 1,049,999 | 3.125 BTC (current as of 2026) |
| Era 6 | 1,050,000 - 1,259,999 | 1.5625 BTC (next halving ~April 2028) |
| ... | ... | ... |
| Era 33+ | block ~6,930,000+ | 0 (full reduction to zero satoshis) |

Each era halves the subsidy, hence "halving" or "halvening" (block 210,000 in November 2012 was the first). The integer-truncation arithmetic means the total ever issued is exactly 20,999,999.9769 BTC, slightly under the round-number 21 million (see [asymptote](/glossary/asymptote)).

What this means for the long-term economics:

- **Today (2026)**, the subsidy is 3.125 BTC per block. At ~144 blocks per day, that's ~450 BTC of new supply daily, ~164,250 BTC per year, ~0.83% annual inflation against the ~19.7M circulating.
- **After April 2028's halving**, subsidy drops to 1.5625 BTC; inflation halves to ~0.4%.
- **Around 2140**, the subsidy rounds to zero. Miners earn only transaction fees from that point onward.

The subsidy is what bootstrapped Bitcoin's security: high enough rewards to attract massive hash power even before fees became meaningful. The transition from subsidy-dominated revenue to fee-dominated revenue is one of the most discussed open questions in Bitcoin economics, but the math is fixed and not subject to debate.
