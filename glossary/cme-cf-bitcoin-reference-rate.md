---
title: "CME CF Bitcoin Reference Rate"
slug: cme-cf-bitcoin-reference-rate
linkText:
  - "CME CF Bitcoin Reference Rate"
draft: false
published: "2026-06-15"
updated: "2026-10-09"
shortDefinition: "A once-a-day US dollar price for Bitcoin, set at 4:00 PM London time from trades on a vetted list of exchanges and published by CF Benchmarks. CME Bitcoin futures settle against it at expiry, and its New York variant (BRRNY) is the NAV benchmark for several US spot Bitcoin ETFs."
keyTakeaways:
  - "Strikes once daily at 4:00 PM London time over a one-hour observation window"
  - "Final settlement price for CME Bitcoin futures; a 4:00 PM New York variant (BRRNY) is the NAV benchmark for several US spot Bitcoin ETFs"
  - "Calculated from a constituent exchange list (as of August 2026: Bitstamp, Bullish, Coinbase, Crypto.com, Gemini, Kraken, LMAX Digital)"
sources:
  - { label: "CF Benchmarks - CME CF Reference Rates Methodology Guide (version 17.4, August 24, 2026): BRR and BRRNY windows, 12 five-minute partitions, volume-weighted medians", url: "https://docs.cfbenchmarks.com/CME%20CF%20Reference%20Rates%20Methodology.pdf" }
  - { label: "CF Benchmarks - CME CF Constituent Exchanges list (version 13.7, August 24, 2026): BRR constituents, additions and suspensions, Payward group disclosure", url: "https://docs.cfbenchmarks.com/CME%20CF%20Constituent%20Exchanges.pdf" }
  - { label: "CF Benchmarks - CME CF Bitcoin Reference Rate (BRR) index page: launched November 14, 2016; settlement index for CME futures; products that price off it", url: "https://www.cfbenchmarks.com/data/indices/BRR" }
  - { label: "SEC notice on the Teucrium Bitcoin Futures Fund (Federal Register, August 11, 2021): CME Bitcoin futures expire on the last Friday of the month and settle to the BRR at 4:00 PM London", url: "https://www.govinfo.gov/content/pkg/FR-2021-08-11/pdf/2021-17078.pdf" }
  - { label: "iShares Bitcoin Trust ETF - Form 10-K for 2025: bitcoin valued with the CME CF Bitcoin Reference Rate - New York Variant, 3:00-4:00 PM ET window", url: "https://www.sec.gov/Archives/edgar/data/1980994/000143774926006058/bit20251231_10k.htm" }
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

The CME CF Bitcoin Reference Rate (BRR) is one of the most widely used "official" Bitcoin prices in regulated financial products. CME-listed Bitcoin futures settle against it when they expire, and exchange-traded products in Europe, Canada and Brazil use it to value their BTC. Several US [spot Bitcoin ETFs](/glossary/spot-bitcoin-etf) strike their [Net Asset Value](/glossary/nav-net-asset-value) against a sister rate, the BRR New York variant (BRRNY).

The basics:

- **Strike time.** 4:00 PM London time, daily.
- **Observation window.** The one hour immediately preceding the strike (3:00 - 4:00 PM London).
- **Methodology.** A trade-weighted price across a list of constituent exchanges, with the observation window broken into 12 partitions of 5 minutes each. Each partition's volume-weighted median price is calculated; the BRR is the equal-weighted mean of those 12 partition medians. The partitioned structure resists manipulation by short bursts of trading.
- **New York variant.** BRRNY runs the same calculation over 3:00 - 4:00 PM New York time and strikes at 4:00 PM New York. CF Benchmarks added it in February 2022.
- **Publisher.** CF Benchmarks, a UK-based benchmark administrator authorized by the FCA under the UK Benchmarks Regulation (BMR). CF Benchmarks is part of the Payward, Inc. group of companies, and Payward owns and runs the Kraken exchange.

History:

- **November 14, 2016.** BRR launched, alongside the BRTI (Real-Time Index).
- **December 17, 2017.** CME launched cash-settled Bitcoin futures. A contract expires on the last Friday of its month, and its final settlement price is the BRR at 4:00 PM London that day; daily settlement prices come from trading in the futures themselves. The reference rate had been published every day for 13 months before the first contract traded.
- **January 10, 2024.** The SEC approved the first eleven US spot Bitcoin ETFs. Several of them, including the iShares Bitcoin Trust, value their BTC with the New York variant (BRRNY) at 4:00 PM New York time rather than with the London BRR.

Constituent exchanges (as of the August 24, 2026 list):

- Bitstamp
- Bullish (added December 2024)
- Coinbase
- Crypto.com (added March 2025)
- Gemini
- Kraken
- LMAX Digital

itBit, a constituent since the 2016 launch, was suspended in July 2026. CF Benchmarks reviews the constituent list periodically and can add or remove venues based on liquidity, regulation, and pricing data quality. Each constituent must meet criteria around trading volume, regulatory status, and price-formation integrity.

BRR vs BRTI:

- **BRR (Reference Rate).** Daily, single price, calculated over the 3:00 - 4:00 PM London window. Used to settle CME futures and to value the exchange-traded products that reference it.
- **BRTI (Real-Time Index).** Continuous, published every second, used for real-time marks and intraday risk management.

Why BRR matters for Bitcoin:

- **Single point of truth.** Before institutional adoption, "the Bitcoin price" was whatever you saw on whichever exchange you used. BRR creates an auditable, repeatable reference number that regulated products can settle against.
- **Manipulation resistance.** The partitioned methodology and constituent diversification make it harder to move BRR than to move any single exchange. Each of the 12 partitions counts equally and uses a volume-weighted median, so a single large trade or cluster of trades in one partition has only a limited effect on the result.
- **Replicable by design.** Equal weighting means a trader who needs to match the rate can spread the trade evenly across the 12 partitions. For expiring CME futures, the window that matters is 3:00 - 4:00 PM London on the last Friday of the month. For US spot Bitcoin ETFs valued on BRRNY, such as the iShares Bitcoin Trust, the NAV price comes from trades between 3:00 and 4:00 PM New York.

What BRR is not:

- **Not "the" price of Bitcoin.** Spot exchanges around the world continuously trade BTC at slightly different prices. BRR is one constructed reference; arbitrage keeps the constructed reference close to the global mid, but small dislocations are normal.
- **Not censorship-resistant.** BRR is a centrally administered benchmark, subject to UK regulation. CF Benchmarks, part of the same corporate group as the Kraken exchange, can change methodology, add or suspend constituents, or pause publication. The benchmark is robust, not trustless.

For futures traders and the funds that reference it, BRR (or its New York variant) is the number that matters. For Bitcoiners running nodes and wallets, it is one input among many - useful, official, regulated, and entirely separate from how Bitcoin itself actually settles.
