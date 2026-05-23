---
title: "ETF (Exchange-Traded Fund)"
slug: etf-exchange-traded-fund
draft: true
shortDefinition: "A pooled investment vehicle that trades on stock exchanges like a regular share, with units minted and destroyed by institutional brokers to keep the market price tied to the underlying asset's value."
keyTakeaways:
  - "Trades on traditional stock exchanges with a ticker symbol"
  - "Issuer holds the underlying asset; share count grows or shrinks to match demand"
  - "For Bitcoin, an ETF is a regulated wrapper that lets brokerage and retirement accounts hold BTC exposure - not BTC itself"
sources: []
relatedTerms:
  - spot-bitcoin-etf
  - nav-net-asset-value
  - authorized-participant
  - creation-redemption
  - premium-discount-to-nav
  - tracking-error
  - futures
  - price-discovery
  - exchange
liveWidget: ~
---

An exchange-traded fund is a pooled investment that holds some underlying asset (or basket of assets) and issues shares that trade on a normal stock exchange. The structure was invented in 1993 with the SPDR S&P 500 ETF (ticker SPY), which is still the largest ETF in the world. Today there are thousands of ETFs covering equity indexes, bonds, commodities, currencies, and - since January 2024 in the United States - spot Bitcoin.

How an ETF actually works:

- **Issuer holds the underlying.** A spot gold ETF holds gold bars in a vault. A spot Bitcoin ETF holds BTC at a custodian. An S&P 500 ETF holds the 500 underlying stocks.
- **Shares trade on a stock exchange.** Retail and institutional investors buy and sell ETF shares through their broker, the same way they trade Apple or Tesla stock.
- **[Authorized Participants](/glossary/authorized-participant)** (large broker-dealers) interact with the issuer directly to mint or burn shares in big blocks called creation units. When demand for shares outstrips supply, APs deliver cash (or the underlying asset) and receive new shares to sell. When supply exceeds demand, APs do the reverse.
- **Arbitrage keeps the price honest.** If the market price of the ETF drifts above the [Net Asset Value](/glossary/nav-net-asset-value) of its holdings, APs create new shares and sell them. If it drifts below, APs buy shares and redeem them for the underlying. The gap closes within basis points.

Why ETFs exist as a structure:

- **Access.** A brokerage account can hold ETF shares but often cannot hold the underlying directly (commodities, foreign equities, BTC). The ETF wrapper translates "I have a brokerage account" into "I have exposure to X."
- **Tax and accounting.** In-kind creation/redemption avoids realizing capital gains at the fund level, which makes ETFs structurally more tax-efficient than mutual funds in the United States.
- **Cost.** Index ETFs typically charge 0.03% to 0.25% per year, dramatically cheaper than traditional mutual funds or closed-end products.

The Bitcoin context:

- **Futures-based first.** The first US Bitcoin ETF was ProShares BITO in October 2021, which held CME Bitcoin [futures](/glossary/futures), not spot BTC. Useful for some accounts, but it suffered roll costs and tracking drift from the futures basis.
- **Spot approval, January 10, 2024.** Eleven [spot Bitcoin ETFs](/glossary/spot-bitcoin-etf) launched simultaneously after an eleven-year fight with the SEC, including products from BlackRock, Fidelity, Bitwise, Ark, and the converted Grayscale GBTC.
- **Structural demand.** Spot ETF flows now move meaningful BTC volume daily, becoming a recognized input to [price discovery](/glossary/price-discovery).

Editorial: an ETF is a useful tool for accounts that cannot hold BTC directly, and a real on-ramp for institutional capital. It is not Bitcoin. The keys belong to the custodian. The shares are an IOU. For anyone who can self-custody, the ETF is a financial product to use deliberately, not a substitute for owning the asset.
