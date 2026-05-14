---
title: "Exchange"
slug: exchange
draft: false
shortDefinition: "A service or marketplace for trading BTC, whether centralized (CEX) or decentralized (DEX)."
keyTakeaways:
  - "Converts fiat-to-BTC or crypto-to-crypto trading"
  - "Centralized platforms hold user funds; decentralized ones do not"
  - "Liquidity, user experience, and regulatory features vary widely"
sources: []
relatedTerms:
  - centralized-exchange-cex
  - clearing-price
  - decentralized-exchange-dex
  - exchange-api-key
  - futures
  - market-depth
  - price-discovery
  - price-slippage
liveWidget: ~
---

An exchange is any service that lets users trade Bitcoin for other assets (fiat currency, stablecoins, or other crypto). The two structural categories matter more than the brands:

- **Centralized exchange (CEX).** A company holds customer funds, matches orders on an internal order book, and settles trades on its own books. The exchange holds the private keys; customers hold IOUs in the exchange's database. Coinbase, Kraken, Binance, Bitstamp, Bitfinex, and dozens more.
- **Decentralized exchange (DEX).** Trading happens through smart contracts or peer-to-peer matching protocols; users keep custody of their own funds throughout. On Bitcoin specifically, atomic swaps and protocols like Bisq fall here; most "DEX" volume happens on other chains (Uniswap, etc.) and isn't directly Bitcoin trading.

The trust model is the dividing line. A CEX is a custodian: you trust them not to lose, freeze, or steal your coins. A DEX (in the strict sense) is a venue: you trust the protocol, but you keep your keys.

The CEX failure record is one of the most important things a new Bitcoiner should learn from. The major historical collapses:

- **Mt. Gox (2014)**: Tokyo-based exchange that handled ~70% of global Bitcoin volume; lost or had stolen ~850,000 BTC. Customers still being made partially whole more than a decade later.
- **QuadrigaCX (2019)**: Canadian exchange whose CEO died (or "died") with the only access to the cold wallets; ~$190M customer funds gone.
- **Celsius (2022)**: Crypto lender that froze withdrawals, declared bankruptcy. Customer funds locked for years.
- **FTX (2022)**: Second-largest crypto exchange globally at peak; collapsed in days after revelations of misuse of customer funds. ~$8B customer shortfall.
- **BlockFi, Voyager, Genesis, Gemini Earn (2022-2023)**: Crypto lenders and lending products that froze withdrawals during the 2022 contagion.

The pattern is consistent: a CEX is only as safe as its operators' competence and honesty. Most users start on a CEX for convenience (KYC fiat on-ramps, simple UI, customer service), but the manifesto rule from chapter 4 still holds: not your keys, not your coins. Withdraw to self-custody for any amount that matters to you.
