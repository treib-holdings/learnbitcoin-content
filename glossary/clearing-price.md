---
title: "Clearing Price"
slug: clearing-price
draft: false
shortDefinition: "The market equilibrium price where BTC's available supply meets current demand."
keyTakeaways:
  - "Represents the real-time equilibrium of BTC's market valuation"
  - "Influenced by supply/demand, liquidity, and market sentiment"
  - "Varies across exchanges but typically converges globally"
sources: []
relatedTerms:
  - bull-market
  - exchange
  - market-capitalization
  - market-depth
  - merchant-adoption
  - price-discovery
  - price-slippage
liveWidget: ~
---

The clearing price is the market equilibrium where buy and sell orders cross: at that price, willing buyers and willing sellers actually transact. It's what you see ticking on exchanges: "BTC/USD at $X" is the current clearing price.

Mechanically, on a continuous order-book exchange:

- **The bid side** is buyers' orders, sorted highest first.
- **The ask side** is sellers' orders, sorted lowest first.
- **The clearing price** is wherever the highest bid meets (or crosses) the lowest ask. When they cross, a trade executes and the order book updates.

This is the price-discovery mechanism in real time. Multiple things complicate the picture:

- **Multiple exchanges, slightly different prices.** Arbitrage flows close gaps but don't eliminate them. Coinbase, Kraken, Binance, Bitfinex, Bitstamp typically agree within a few basis points; smaller venues can diverge meaningfully.
- **OTC desks and large block trades** clear off the public order book at negotiated prices, sometimes meaningfully different from the public clearing price for size that would otherwise move the visible book.
- **Local fiat pairs** (CNY, INR, NGN, ARS) can show large premiums or discounts to USD-denominated prices, reflecting capital controls and arbitrage friction.

For users, "the price of Bitcoin" usually means the consolidated mid-price across major USD exchanges, weighted by volume. Index sources like the CME CF Bitcoin Reference Rate, Coinbase's price index, and Coingecko aggregate this for downstream consumers.

Clearing price is one of the most cited Bitcoin metrics and one of the most context-dependent. It's a useful daily reference and a misleading metric for "what is Bitcoin worth" - the answer depends on size, venue, and time horizon.
