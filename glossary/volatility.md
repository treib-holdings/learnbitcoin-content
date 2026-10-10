---
title: "Volatility"
slug: volatility
draft: false
updated: "2026-10-10"
shortDefinition: "A measure of how quickly and widely BTC's price swings over time, often higher than many traditional assets."
keyTakeaways:
  - "BTC frequently sees large price swings in short periods"
  - "Reflects a nascent market with evolving liquidity and sentiment"
  - "Can create high risk/high reward trading environments"
sources:
  - { label: "mempool.space - genesis block 0, mined January 3, 2009", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "CoinDesk - Bitcoin's volatility has plunged, but extreme price swings are more frequent than in 2018 (October 10, 2026): about 46% annualized in 2026, 84% in 2018, roughly 47% since 2024", url: "https://www.coindesk.com/markets/2026/10/09/bitcoin-s-volatility-has-plunged-but-extreme-price-swings-are-more-frequent-than-in-2018" }
  - { label: "Cboe - S&P 500 index daily closes (annualized volatility of daily returns, January 2024 to October 9, 2026: about 15%)", url: "https://cdn.cboe.com/api/global/us_indices/daily_prices/SPX_History.csv" }
  - { label: "Cboe - Gold ETF Volatility Index (GVZ) daily closes (averaged about 21 from January 2024 to October 9, 2026)", url: "https://cdn.cboe.com/api/global/us_indices/daily_prices/GVZ_History.csv" }
  - { label: "IMF Blog - Crypto prices move more in sync with stocks (January 11, 2022): bitcoin and S&P 500 returns correlated 0.01 in 2017-19, 0.36 in 2020-21", url: "https://www.imf.org/en/Blogs/Articles/2022/01/11/crypto-prices-move-more-in-sync-with-stocks-posing-new-risks" }
  - { label: "mempool.space API - bitcoin price history (weekly before 2023): falls of about 79% from December 2017 to January 2019, 76% from October 2021 to November 2022, and 54% from October 2025 to June 2026", url: "https://mempool.space/api/v1/historical-price?currency=USD" }
  - { label: "Brad Barber and Terrance Odean - Trading Is Hazardous to Your Wealth (Journal of Finance, April 2000): the most active households earned 11.4% a year against 17.9% for the market, 1991-1996", url: "https://faculty.haas.berkeley.edu/odean/papers%20current%20versions/individual_investor_performance_final.pdf" }
relatedTerms:
  - bear-market
  - bull-market
  - dca-dollar-cost-averaging
  - exchange
  - fiat
  - futures
  - hodl
  - hodl-waves
  - market-capitalization
  - market-depth
  - merchant-adoption
  - minsky-moment
  - paper-hands
  - price-discovery
  - price-floor-btc
  - price-slippage
liveWidget: ~
---

Volatility is the rate and magnitude at which Bitcoin's price changes over time. By any conventional measure, BTC is more volatile than gold or major stock indices. By no conventional measure is this surprising, given Bitcoin has been in a global monetization process since the network launched in January 2009, with an end point somewhere between zero and "replace gold as the dominant store of value."

A few practical facts:

- **How big the swings are.** Volatility is usually quoted as an annualized percentage. A CoinDesk analysis in October 2026 put bitcoin's at about 46% for 2026 through early October, and roughly 47% since the start of 2024, close to Nvidia's stock. Over the same stretch from January 2024, the S&P 500 index ran at about 15%, and Cboe's gold volatility index, which tracks the swings options traders expect in gold, averaged about 21%. Bitcoin moves more.
- **Long-term trend.** Volatility has been falling for years as market depth and institutional participation have grown. CoinDesk measured 84% for 2018, against about 46% for 2026 through early October. Big one-day jolts have not gone away, though. By early October 2026, CoinDesk had counted 10 days that year with moves of at least three times recent volatility, more than in all of 2018.
- **Correlation with traditional assets changes over time.** An IMF study found that bitcoin's returns had almost no link to the S&P 500's in 2017-2019 (a correlation of 0.01). In 2020-2021 the figure rose to 0.36, and the two moved more in step.

The honest framing: Bitcoin's price is a multi-decade information-discovery process. Markets are slowly figuring out what a fixed-supply, permissionless, neutral monetary asset is worth in a world that didn't have one before. That process is bumpy by definition. The bumps are not bugs. Some of the larger ones are [Minsky moments](/glossary/minsky-moment) - leverage cascades where futures positions and lending exposures liquidate together, producing 50-80% drawdowns that say more about Bitcoin's derivative ecosystem than about Bitcoin itself.

For users, this means:

- **Don't trade if you can help it.** In a classic study of 66,465 US households investing in stocks from 1991 to 1996, the ones that traded most earned 11.4% a year, against 17.9% for the market.
- **[DCA](/glossary/dca-dollar-cost-averaging)** is the practical defense against trying to time the volatility. Buy on a schedule; ignore the price.
- **Hold what you can afford to hold.** If volatility makes you sleep poorly, you have too much in BTC. Right-sizing the position to your tolerance is more important than predicting the next move.

People who held through the 2018 and 2022 crashes without selling are the ones who learned to ignore the volatility. The asset moves; the protocol doesn't. See [HODL](/glossary/hodl) for the cultural shorthand.
