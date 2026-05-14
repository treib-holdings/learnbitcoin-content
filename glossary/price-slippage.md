---
title: "Price Slippage"
slug: price-slippage
draft: false
shortDefinition: "The gap between an expected trade price and actual execution due to insufficient liquidity or large order size."
keyTakeaways:
  - "Occurs when order volume exceeds available orders at a desired price"
  - "Influenced by market liquidity and order book depth"
  - "A key factor in trading strategies, especially for large investors"
sources: []
relatedTerms:
  - bull-market
  - clearing-price
  - dca-dollar-cost-averaging
  - exchange
  - futures
  - golden-cross
  - iceberg-order
  - market-capitalization
  - market-depth
  - price-discovery
  - price-floor-btc
  - volatility
liveWidget: ~
---

Slippage is the difference between the expected price of a trade and the actual average execution price. It happens because a large enough order consumes multiple levels of the order book; the first portion fills at the best price, but subsequent portions fill at progressively worse prices.

A concrete example:

- BTC/USD order book shows: 0.5 BTC bid at $100,000; 1.0 BTC bid at $99,950; 2.0 BTC bid at $99,900; further down...
- You sell 3 BTC as a market order.
- The first 0.5 BTC fills at $100,000.
- The next 1.0 BTC fills at $99,950.
- The next 1.5 BTC fills at $99,900.
- Your average execution: ~$99,933 vs. the "headline" top-of-book of $100,000.
- Slippage: ~$67 per BTC, or about 0.07%.

What drives slippage:

- **Order book depth at each price level.** Deep books absorb large orders with minimal slippage; thin books slip significantly even on modest size.
- **Order size relative to typical volume.** A 1 BTC order on Binance or Coinbase is trivially absorbed. A 1,000 BTC market order anywhere will move the market.
- **Time of day / liquidity windows.** Crypto markets have liquidity cycles; weekend or off-hours trading sees worse slippage.
- **Exchange-specific liquidity.** Coinbase and Binance offer deep liquidity for BTC/USD and BTC/USDT. Smaller exchanges and exotic pairs have shallower books.

Defenses against slippage:

- **Limit orders.** Set a maximum acceptable execution price; the order rests on the book and only fills if the market comes to it. Trade execution time for slippage protection.
- **TWAP (time-weighted average price) algorithms.** Break a large order into smaller pieces executed over hours, getting an average price close to the period's VWAP.
- **Iceberg orders.** Hide the full order size to avoid signaling intent and triggering front-running.
- **OTC desks** for large size. Negotiate a single price for the full order, avoiding the public order book entirely.

For ordinary users buying or selling under $10K worth of BTC at a time, slippage is typically negligible (under 0.05%). For larger size, slippage becomes a meaningful cost component. For very large trades (multi-million USD), slippage management is a substantial portion of execution strategy.
