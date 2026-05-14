---
title: "Iceberg Order"
slug: iceberg-order
draft: false
shortDefinition: "A trading strategy that breaks a large order into smaller, sequential chunks to mask its total size."
keyTakeaways:
  - "Masks the true size of large trades by partial display"
  - "Helps traders avoid sudden price swings from big orders"
  - "Widely employed by institutions or large holders"
sources: []
relatedTerms:
  - exchange
  - golden-cross
  - price-discovery
  - price-slippage
liveWidget: ~
---

An iceberg order is an order type where only a small portion is publicly visible on the exchange's order book at any given time, with the bulk of the order hidden. As the visible portion fills, the next chunk is automatically revealed.

How it works:

1. Trader places an iceberg order for, say, 100 BTC at $X with a visible size of 5 BTC.
2. The order book displays only the 5 BTC slice.
3. As that 5 BTC fills, the exchange's matching engine automatically posts the next 5 BTC chunk at the same price.
4. Continues until the full 100 BTC is filled (or the trader cancels).

Why traders use them:

- **Reduce market impact.** A visible 100 BTC bid would signal large buy intent and likely move the market against the trader (sellers raise prices, other buyers front-run). The iceberg structure hides total size.
- **Hide identity.** Whale orders are watched. Breaking a big order into smaller visible chunks makes it harder to identify who's behind the trade.
- **Improve execution quality.** Better average fill price than a market order that would chew through multiple price levels.

Where they're available:

- **Centralized exchanges**: Coinbase Pro, Kraken, Binance, Bitfinex, OKX, and most major venues offer iceberg or "hidden quantity" orders. Sometimes called "reserve orders."
- **Derivatives venues** (CME, Bakkt): iceberg orders are standard institutional order types.
- **Some DEXs**: limited support; the on-chain mechanics make truly hidden orders hard.

Tradeoffs:

- **Worse priority.** Most exchanges put hidden orders behind visible orders at the same price level in the queue. You may fill slower than fully-visible orders.
- **Detectable patterns.** Sophisticated market makers can sometimes detect iceberg structure from repeated identical-size refills at the same price. The hiding isn't perfect.
- **Counter-strategy by others.** Other large traders may try to detect and trade against iceberg flow. The cat-and-mouse continues.

For ordinary traders, iceberg orders aren't relevant - your transactions don't move markets. For institutional flow (over-the-counter desks, large funds, market-making operations), they're a standard tool for executing without telegraphing the full position.
