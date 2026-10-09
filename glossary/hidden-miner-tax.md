---
title: "Hidden Miner Tax"
slug: hidden-miner-tax
draft: false
updated: "2026-10-09"
shortDefinition: "A viewpoint interpreting block rewards (and missed fees) as an 'inflation tax' on BTC holders."
keyTakeaways:
  - "Treats newly minted BTC as diluting existing satoshis' value"
  - "Contrasts Bitcoin's pre-set issuance with fiat's variable inflation"
  - "Sparks debate on whether block rewards mirror a 'tax' on holders"
sources:
  - { label: "Bitcoin Core source - GetBlockSubsidy, the halving schedule every node enforces (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "mempool.space - block 969,999 (5 October 2026); 20,093,750 BTC issued by the schedule through this block", url: "https://mempool.space/block/000000000000000000001d95e5f7284cb199b8620eb6a7938dd9696f85751bb3" }
  - { label: "ChainQuery - circulating supply and annual inflation rate (live; 0.8173% on 9 October 2026, cross-checked against the GetBlockSubsidy schedule)", url: "https://chainquery.com/api/edu/supply" }
relatedTerms:
  - hidden-service-node
  - miner-extractable-value-mev
  - mining
  - mining-algorithm
  - mining-colocation
  - mining-centralization
  - retail-mining
liveWidget: ~
---

"Hidden miner tax" is a term used in some Bitcoin economic-theory discussions to describe the [block subsidy](/glossary/block-subsidy) as effectively a recurring tax on existing BTC holders, paid in the form of new BTC issuance diluting their share of the total supply.

The argument:

- As of October 2026, every block adds 3.125 BTC of new supply (the subsidy for the 2024-2028 era).
- This dilutes the supply share of every existing BTC holder, even if only marginally.
- The new BTC goes to miners as payment for [proof-of-work](/glossary/proof-work-pow) security.
- Therefore, *holders pay for network security through dilution*, regardless of whether they transact - it's a "tax" you can't opt out of.

This framing has some validity but also some significant differences from a literal tax:

- **The rate is publicly known and falling.** Annual issuance was about 0.82% as of October 2026, against the 20,093,750 BTC issued through block 969,999. It halves every ~4 years until it reaches zero around 2140. Predictable in a way no fiat inflation rate is.
- **The proceeds buy security, not government services.** The "tax" goes to miners who in turn secure the network that holders are using. It's an internal cost of decentralized consensus, not a transfer to an external party.
- **The rate ends at exactly zero.** Unlike fiat systems where inflation is open-ended, the dilution this framing describes stops completely at block 6,930,000. From around 2140 the entire model shifts to transaction-fee-funded security, with no further dilution.
- **You can opt out by selling.** Unlike state-imposed taxes, you can simply not hold BTC if you don't want to participate in the security-subsidy arrangement.

The "hidden tax" framing is most useful for thinking carefully about what current holders actually fund: ongoing network security via accepted dilution. It's least useful when pushed too hard toward "Bitcoin is just slow fiat inflation" - the structural difference (fixed cap, decreasing rate, no discretionary issuance) is large enough to be a difference in kind, not just degree.

See [Block Subsidy](/glossary/block-subsidy), [Inflation](/glossary/inflation), and [Disinflation](/glossary/disinflation) for the standard framings of the same underlying mechanism.
