---
title: "CME CF Bitcoin Reference Rate"
slug: cme-cf-bitcoin-reference-rate
draft: true
shortDefinition: "The industry-standard daily reference price for Bitcoin, calculated from spot trades on a curated set of exchanges and published by CF Benchmarks. The number that US spot Bitcoin ETFs strike their NAV against."
keyTakeaways:
  - "Strikes once daily at 4:00 PM London time over a one-hour observation window"
  - "Used by CME Bitcoin futures, spot Bitcoin ETFs, and institutional settlement"
  - "Calculated from a constituent exchange list (currently Bitstamp, Coinbase, Gemini, itBit, Kraken, LMAX Digital)"
sources: []
relatedTerms:
  - spot-bitcoin-etf
  - nav-net-asset-value
  - futures
  - price-discovery
  - exchange
  - liquidity
  - clearing-price
liveWidget: ~
---

The CME CF Bitcoin Reference Rate (BRR) is the single most important "official" Bitcoin price in regulated financial products. It is the daily reference rate that [spot Bitcoin ETFs](/glossary/spot-bitcoin-etf) use to strike their [Net Asset Value](/glossary/nav-net-asset-value), that CME-listed Bitcoin futures settle against, and that custodians and institutions use to mark BTC positions.

The basics:

- **Strike time.** 4:00 PM London time, daily.
- **Observation window.** The one hour immediately preceding the strike (3:00 - 4:00 PM London).
- **Methodology.** A trade-weighted price across a list of constituent exchanges, with the observation window broken into 12 partitions of 5 minutes each. Each partition's volume-weighted median price is calculated; the BRR is the equal-weighted mean of those 12 partition medians. The partitioned structure resists manipulation by short bursts of trading.
- **Publisher.** CF Benchmarks, a UK-based benchmark administrator regulated under UK Benchmarks Regulation (BMR) by the FCA. Acquired by Kraken in August 2019.

History:

- **November 14, 2016.** BRR launched, alongside the BRTI (Real-Time Index).
- **December 17, 2017.** CME launched cash-settled Bitcoin futures, using BRR for daily and final settlement. The reference rate predates the futures product, which was a deliberate design choice - having an established benchmark made the futures launch credible to institutional traders.
- **January 10, 2024.** The eleven approved US spot Bitcoin ETFs nearly all use BRR (or a closely related CF Benchmarks rate) for NAV strike.

Constituent exchanges (as of 2026):

- Bitstamp
- Coinbase
- Gemini
- itBit
- Kraken
- LMAX Digital

CF Benchmarks reviews the constituent list periodically and can add or remove venues based on liquidity, regulation, and pricing data quality. Each constituent must meet criteria around trading volume, regulatory status, and price-formation integrity.

BRR vs BRTI:

- **BRR (Reference Rate).** Daily, single price, calculated over the 4 PM London window. Used for settlement and NAV.
- **BRTI (Real-Time Index).** Continuous, published every second, used for real-time marks and intraday risk management.

Why BRR matters for Bitcoin:

- **Single point of truth.** Before institutional adoption, "the Bitcoin price" was whatever you saw on whichever exchange you used. BRR creates an auditable, repeatable reference number that regulated products can settle against.
- **Manipulation resistance.** The partitioned methodology and constituent diversification make it harder to move BRR than to move any single exchange. The SEC explicitly cited BRR robustness in its 2024 spot ETF approval order.
- **Price discovery weight.** The 4 PM London strike is one of the most-watched moments in Bitcoin trading. Significant volume routinely happens in the run-up to the strike as ETF [Authorized Participants](/glossary/authorized-participant) and other institutions trade against the expected mark.

What BRR is not:

- **Not "the" price of Bitcoin.** Spot exchanges around the world continuously trade BTC at slightly different prices. BRR is one constructed reference; arbitrage keeps the constructed reference close to the global mid, but small dislocations are normal.
- **Not censorship-resistant.** BRR is a centrally administered benchmark, subject to UK regulation. CF Benchmarks (and Kraken as its parent) can change methodology, add/remove constituents, or pause publication. The benchmark is robust, not trustless.

For ETF investors and institutional traders, BRR is the number that matters. For Bitcoiners running nodes and wallets, it is one input among many - useful, official, regulated, and entirely separate from how Bitcoin itself actually settles.
