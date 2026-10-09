---
title: "NAV (Net Asset Value)"
slug: nav-net-asset-value
linkText:
  - "NAV"
draft: false
updated: "2026-10-09"
published: "2026-06-15"
shortDefinition: "The per-share value of an ETF's underlying holdings, calculated as (total assets minus liabilities) divided by shares outstanding. The anchor that creation/redemption arbitrage keeps the market price tied to."
keyTakeaways:
  - "Calculated each trading day at market close against a reference price"
  - "For a spot Bitcoin ETF: total BTC holdings priced at the daily reference rate, divided by share count"
  - "Market price drifts from NAV intraday; arbitrage usually pulls it back within basis points"
sources:
  - { label: "iShares Bitcoin Trust ETF - Form 10-K for 2025: bitcoin valued with the CME CF Bitcoin Reference Rate - New York Variant (3:00-4:00 PM ET window) after 4:00 PM ET; 40,000-share baskets; the AP bears execution price differences on cash orders", url: "https://www.sec.gov/Archives/edgar/data/1980994/000143774926006058/bit20251231_10k.htm" }
  - { label: "Fidelity Wise Origin Bitcoin Fund - Form 10-K for 2025: Fidelity Bitcoin Reference Rate; shares valued daily as of 4:00 PM Eastern", url: "https://www.sec.gov/Archives/edgar/data/1852317/000119312526071484/ck0001852317-20251231.htm" }
  - { label: "Franklin Bitcoin ETF - Form 10-K for the fiscal year ended March 31, 2026: NAV from the CME CF Bitcoin Reference Rate - New York Variant after 4:00 PM ET", url: "https://www.sec.gov/Archives/edgar/data/1992870/000114036126026744/ef20070486_10k.htm" }
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

- **Strike time.** US spot Bitcoin ETFs strike NAV daily as of 4:00 PM New York time. Several, including the iShares Bitcoin Trust, use the New York variant of the [CME CF Bitcoin Reference Rate](/glossary/cme-cf-bitcoin-reference-rate) (BRRNY), which measures trades from 3:00 to 4:00 PM New York. Others use different benchmarks, such as the Fidelity Bitcoin Reference Rate.
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
- **Cash creation vs in-kind.** In a cash creation, the fund buys BTC through its trading counterparties, and the execution price may differ from the rate used for NAV. At the iShares Bitcoin Trust the AP covers any shortfall and keeps any gain, so the difference stays out of the fund. In-kind delivery takes the fund out of the trade.
- **Cash drag.** BTC not yet deployed (in transit, awaiting settlement) earns nothing while still counted in NAV. A small contributor to [tracking error](/glossary/tracking-error).

NAV is the boring but load-bearing number in ETF structure. When NAV behaves as expected and the market price tracks it within basis points, the wrapper is working. When it doesn't, something is broken - and the size of the gap is exactly what [premium/discount](/glossary/premium-discount-to-nav) measures.
