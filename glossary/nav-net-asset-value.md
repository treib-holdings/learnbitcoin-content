---
title: "NAV (Net Asset Value)"
slug: nav-net-asset-value
draft: true
shortDefinition: "The per-share value of an ETF's underlying holdings, calculated as (total assets minus liabilities) divided by shares outstanding. The anchor that creation/redemption arbitrage keeps the market price tied to."
keyTakeaways:
  - "Calculated each trading day at market close against a reference price"
  - "For a spot Bitcoin ETF: total BTC holdings priced at the daily reference rate, divided by share count"
  - "Market price drifts from NAV intraday; arbitrage usually pulls it back within basis points"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - authorized-participant
  - creation-redemption
  - premium-discount-to-nav
  - tracking-error
  - cme-cf-bitcoin-reference-rate
liveWidget: ~
---

Net Asset Value is the per-share value of an ETF's underlying holdings. For a spot Bitcoin ETF, NAV is computed daily:

```
NAV per share = (BTC held x reference rate - liabilities) / shares outstanding
```

The mechanics:

- **Strike time.** US spot Bitcoin ETFs strike NAV daily at 4:00 PM London time using the [CME CF Bitcoin Reference Rate](/glossary/cme-cf-bitcoin-reference-rate) (BRR). The choice of London 4 PM rather than New York close aligns with the established institutional benchmark and overlaps with both London and US trading hours.
- **Liabilities** include accrued management fees, custody fees, and any other operational costs - typically small for a passive Bitcoin product.
- **Share count** changes daily through [creation and redemption](/glossary/creation-redemption) by [Authorized Participants](/glossary/authorized-participant).

Two related figures show up in ETF disclosures:

- **NAV per share (end-of-day).** The official figure published after market close. Used for performance reporting, accounting, and fee calculations.
- **iNAV (Indicative NAV).** A continuously-updated estimate of NAV, calculated and published roughly every 15 seconds during trading hours. iNAV is what traders watch to spot premium/discount opportunities in real time.

Why NAV matters:

- **Arbitrage anchor.** When market price > NAV, APs create new shares (deliver BTC or cash to the issuer, receive shares at NAV, sell at market price). When market price < NAV, APs redeem (buy shares at market price, deliver to issuer, receive BTC or cash at NAV). The gap closes.
- **Fee basis.** Management fees are charged as a percentage of NAV per year, accrued daily.
- **Regulatory reference.** Disclosures, prospectus calculations, and tax basis all key off NAV.

Where NAV gets interesting:

- **Closed-end funds (legacy GBTC pre-conversion).** Without creation/redemption, share count was fixed. NAV moved with the BTC price; market price moved with investor demand for the wrapper. The two diverged dramatically - 40% premium in 2020-2021, 50% discount in 2022-2023.
- **Cash creation vs in-kind.** When creation is cash-only, the issuer (or its custodian) must execute BTC trades to deploy new cash. The execution price may differ from the NAV strike rate. In-kind delivery sidesteps this entirely.
- **Cash drag.** BTC not yet deployed (in transit, awaiting settlement) earns nothing while still counted in NAV. A small contributor to [tracking error](/glossary/tracking-error).

NAV is the boring but load-bearing number in ETF structure. When NAV behaves as expected and the market price tracks it within basis points, the wrapper is working. When it doesn't, something is broken - and the size of the gap is exactly what [premium/discount](/glossary/premium-discount-to-nav) measures.
