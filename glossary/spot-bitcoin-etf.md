---
title: "Spot Bitcoin ETF"
slug: spot-bitcoin-etf
draft: true
shortDefinition: "An exchange-traded fund that holds actual BTC at a regulated custodian and trades on a traditional stock exchange. Approved by the US SEC on January 10, 2024 after eleven years of rejections."
keyTakeaways:
  - "Holds physical BTC, not futures contracts or other derivatives"
  - "Eleven US spot Bitcoin ETFs were approved simultaneously on Jan 10, 2024"
  - "A regulated wrapper around BTC, not BTC itself - the keys belong to the custodian"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - nav-net-asset-value
  - authorized-participant
  - creation-redemption
  - premium-discount-to-nav
  - tracking-error
  - cme-cf-bitcoin-reference-rate
  - futures
  - price-discovery
  - price-floor-btc
liveWidget: ~
---

A spot Bitcoin ETF is an [exchange-traded fund](/glossary/etf-exchange-traded-fund) that holds actual BTC at a regulated custodian. Each share represents a fractional claim on the BTC held by the fund. The shares trade on a stock exchange (NYSE Arca, Cboe BZX, Nasdaq) with normal tickers, market hours, and clearing.

The eleven-year fight:

- **2013** - Cameron and Tyler Winklevoss filed the first US Bitcoin ETF application. Rejected.
- **2017-2023** - Dozens of filings from Bitwise, VanEck, SolidX, Wilshire Phoenix, ARK, Valkyrie, others. All rejected. The SEC repeatedly cited "manipulation in the underlying market" as the basis for denial.
- **October 2021** - The SEC approved futures-based BTC ETFs (ProShares BITO, then others). These held CME [futures](/glossary/futures), not spot BTC.
- **August 2023** - Grayscale won a unanimous DC Circuit Court ruling that the SEC's denial of GBTC's conversion to a spot ETF was "arbitrary and capricious," given that futures-based ETFs had already been approved.
- **January 10, 2024** - Eleven spot Bitcoin ETFs approved together.

The eleven products that launched on day one:

- **BlackRock iShares Bitcoin Trust (IBIT)** - Coinbase Custody
- **Fidelity Wise Origin Bitcoin Fund (FBTC)** - Fidelity Digital Assets, self-custodied
- **Bitwise Bitcoin ETF (BITB)** - Coinbase Custody
- **Ark 21Shares Bitcoin ETF (ARKB)** - Coinbase Custody
- **Grayscale Bitcoin Trust (GBTC)** - Coinbase Custody, converted from the legacy closed-end trust
- **VanEck Bitcoin Trust (HODL)** - Gemini Trust
- **Valkyrie Bitcoin Fund (BRRR)** - Coinbase Custody
- **Franklin Bitcoin ETF (EZBC)** - Coinbase Custody
- **WisdomTree Bitcoin Fund (BTCW)** - Coinbase Custody
- **Invesco Galaxy Bitcoin ETF (BTCO)** - Coinbase Custody
- **Hashdex Bitcoin ETF (DEFI)** - BitGo, converted from the futures-based product

Eight of eleven custody at Coinbase Custody, which makes Coinbase Custody one of the largest concentrations of corporately-held BTC in the world. This concentration risk has been discussed publicly but not structurally addressed.

How the wrapper actually works:

- **NAV strikes daily** against the [CME CF Bitcoin Reference Rate](/glossary/cme-cf-bitcoin-reference-rate) at 4:00 PM London time.
- **[Authorized Participants](/glossary/authorized-participant)** create and redeem shares in large blocks. The mechanism keeps the market price within basis points of [NAV](/glossary/nav-net-asset-value).
- **[Creation/redemption](/glossary/creation-redemption)** was initially cash-only at SEC insistence; in-kind has since been approved.
- **Expense ratios** range from 0.19% to 0.30% for the major products, with GBTC charging 1.50% (legacy fee from its closed-end days).

What spot ETFs changed:

- **Brokerage and IRA access.** A retirement account that cannot hold BTC directly can hold IBIT or FBTC. This unlocked structural demand from RIAs, pension funds, endowments, and 401(k)-style accounts.
- **Price discovery.** Daily creation flows became a meaningful input to [price discovery](/glossary/price-discovery). The 4 PM London NAV strike is one of the most-watched moments in Bitcoin trading.
- **The basis trade.** Hedge funds run the spread between spot ETFs and CME futures as a yield strategy. Tight, real, and a major contributor to derivatives liquidity.
- **Legitimization.** "Bitcoin is an asset class" became defensible inside compliance departments that had previously banned it.

Editorial: spot ETFs were a structural win for Bitcoin's monetary thesis - regulated demand at scale, daily marks against a credible reference rate, and access from accounts that can never hold the asset directly. They are also not Bitcoin. The keys live at Coinbase Custody. The shares are an IOU on someone else's custody arrangement. The whole pitch of Bitcoin - censorship-resistant, bearer, verifiable - is exactly what the ETF wrapper removes. Use the ETF when the use case demands it. For long-term holders who can self-custody, owning the keys is the point.
