---
title: "Futures"
slug: futures
draft: false
shortDefinition: "Financial contracts allowing speculation on Bitcoin's future price, settling on a set date at a pre-agreed rate."
keyTakeaways:
  - "Let traders bet on or hedge BTC price without holding spot BTC"
  - "Regulated futures exist on traditional markets (e.g., CME)"
  - "Can increase liquidity but also risk leveraged blowups"
sources: []
relatedTerms:
  - bear-market
  - bull-market
  - exchange
  - market-capitalization
  - market-depth
  - price-discovery
  - volatility
liveWidget: ~
---

A futures contract is an agreement to buy or sell Bitcoin at a fixed price on (or before) a specified future date. Bitcoin futures markets are deep, liquid, and where a large fraction of price discovery actually happens day to day.

Two main flavors:

- **Standardized futures with expiration** (CME, Bakkt, ICE). Quarterly or monthly contracts that cash-settle (or in some cases physically deliver) at expiration. Used heavily by institutional traders and hedgers. The CME launched cash-settled BTC futures in December 2017; physically-delivered futures followed.
- **Perpetual futures (perps).** Crypto-native invention, pioneered by BitMEX in 2016. No expiration date; the price is kept anchored to spot via a "funding rate" payment between long and short holders every 8 hours. Perps dominate crypto derivatives volume on Binance, Bybit, OKX, Deribit, and dYdX.

Why futures matter beyond speculation:

- **Hedging.** A miner with future BTC production can lock in today's price; a treasury holding BTC can hedge downside without selling spot.
- **Price discovery.** Futures markets often lead spot in reacting to news; the basis (futures - spot) signals market expectations.
- **Leverage.** Most crypto futures offer 10x-100x leverage. This is great for sophisticated traders, ruinous for everyone else. Liquidation cascades during volatile moves are a defining feature of crypto market structure.
- **Institutional access.** Regulated futures gave traditional firms a way to gain BTC exposure before spot ETFs existed. The CME futures market predates the US spot Bitcoin ETF by six years.

The risks are real. Leveraged positions can be liquidated in seconds during volatile moves; funding rates can swing aggressively; exchange counterparty risk applies (perpetual futures live on the exchanges that issue them). For most retail users, perps are a fast way to lose money. For institutional treasury management and miner hedging, they're useful instruments. Spot Bitcoin without leverage remains the conservative default.
