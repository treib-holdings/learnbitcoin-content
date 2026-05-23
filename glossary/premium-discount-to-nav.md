---
title: "Premium / Discount (to NAV)"
slug: premium-discount-to-nav
draft: true
shortDefinition: "The difference between an ETF's market price and its Net Asset Value per share, expressed as a percentage. Positive means premium, negative means discount."
keyTakeaways:
  - "Open-end ETFs stay within basis points of NAV thanks to creation/redemption arbitrage"
  - "Persistent large premiums or discounts mean the arbitrage mechanism is broken or blocked"
  - "Pre-conversion GBTC's 40% premium and later 50% discount is the canonical Bitcoin case study"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - nav-net-asset-value
  - authorized-participant
  - creation-redemption
  - tracking-error
  - price-discovery
liveWidget: ~
---

When an ETF trades on a stock exchange, two prices exist for the same share:

- **Market price.** Whatever the order book says right now.
- **[Net Asset Value](/glossary/nav-net-asset-value) per share.** The fund's underlying holdings divided by share count.

The percentage difference between them is the premium (market price above NAV) or discount (market price below NAV).

For a healthy open-end ETF:

- The gap is typically a few basis points - tighter than the bid/ask spread on most US stocks.
- [Authorized Participants](/glossary/authorized-participant) continuously arbitrage. If market price > NAV, an AP buys the underlying, delivers it to the issuer, receives shares at NAV, and sells at market price. The act of doing this closes the gap. Reverse for discount.
- Persistent premium or discount means the arbitrage is failing - either creation/redemption is blocked, the underlying is illiquid, or the AP cannot transact in the underlying.

The Bitcoin case study: GBTC (Grayscale Bitcoin Trust)

Before its January 2024 conversion to a [spot ETF](/glossary/spot-bitcoin-etf), GBTC was a closed-end trust, not an ETF. Crucial structural difference: closed-end funds have fixed share counts and no [creation/redemption](/glossary/creation-redemption) by APs. The wrapper has no arbitrage mechanism.

The GBTC premium/discount timeline:

- **2017-2021: large premium.** US accredited investors could subscribe to GBTC at NAV; after a six-month lockup, shares could be sold on the OTC market at whatever price the public would pay. With institutional demand for BTC exposure and no easy alternative, GBTC routinely traded at 20%-40% premiums. The premium itself became a yield strategy: subscribe at NAV, wait six months, sell into the premium.
- **February 2021: premium collapses.** As alternative wrappers proliferated (Canadian spot ETFs, futures-based US ETFs from October 2021), the GBTC premium collapsed to zero.
- **2022-2023: deep discount.** Grayscale's parent DCG had stress around the Genesis subsidiary (post-3AC, post-Celsius). Genesis ultimately filed for bankruptcy. Redemptions stayed blocked. The discount widened to 40%, then 50%. With no way for arbitrageurs to redeem shares for the underlying BTC, the discount persisted for over a year.
- **August 2023: court win.** Grayscale won its DC Circuit suit against the SEC's denial of spot ETF conversion. Discount began closing on expectation of approval.
- **January 10, 2024: conversion approved.** GBTC became a redeemable spot ETF. Discount closed to near zero.

What the GBTC arc shows:

- **Premium/discount is a wrapper-quality signal.** A persistent gap means something is structurally wrong with the product, not with the underlying asset.
- **Closed-end vs open-end matters enormously.** The same asset wrapped in a closed-end trust vs an ETF behaves very differently in stress.
- **Redemption rights are the load-bearing feature.** Without them, the AP arbitrage doesn't exist, and the wrapper's price can drift arbitrarily from its NAV.

For US spot Bitcoin ETFs since launch:

- IBIT, FBTC, BITB, ARKB and the others have traded within basis points of NAV. The creation/redemption mechanism is working as designed.
- Day-of and week-of large flow events occasionally show wider premiums or discounts intraday, but they compress quickly.
- This boring outcome is exactly what a healthy ETF looks like. The dramatic GBTC chart is the exception, not the rule.
