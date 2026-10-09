---
title: "Spot Bitcoin ETF"
slug: spot-bitcoin-etf
linkText:
  - "spot Bitcoin ETF"
  - "spot Bitcoin ETFs"
  - "spot ETF"
  - "spot ETFs"
  - "Bitcoin ETF"
  - "Bitcoin ETFs"
draft: false
published: "2026-06-15"
updated: "2026-10-09"
shortDefinition: "An exchange-traded fund that holds actual BTC at a regulated custodian and trades on a traditional stock exchange. Approved by the US SEC on January 10, 2024 after eleven years of rejections."
keyTakeaways:
  - "Holds physical BTC, not futures contracts or other derivatives"
  - "Eleven US spot Bitcoin ETFs were approved simultaneously on Jan 10, 2024"
  - "A regulated wrapper around BTC, not BTC itself - the keys belong to the custodian"
sources:
  - { label: "iShares Bitcoin Trust ETF - Form 10-K for 2025: bitcoin valued with the CME CF Bitcoin Reference Rate - New York Variant (3:00-4:00 PM ET window) after 4:00 PM ET; 40,000-share baskets; the AP bears execution price differences on cash orders", url: "https://www.sec.gov/Archives/edgar/data/1980994/000143774926006058/bit20251231_10k.htm" }
  - { label: "Fidelity Wise Origin Bitcoin Fund - Form 10-K for 2025: Fidelity Bitcoin Reference Rate; shares valued daily as of 4:00 PM Eastern", url: "https://www.sec.gov/Archives/edgar/data/1852317/000119312526071484/ck0001852317-20251231.htm" }
  - { label: "Franklin Bitcoin ETF - Form 10-K for the fiscal year ended March 31, 2026: NAV from the CME CF Bitcoin Reference Rate - New York Variant after 4:00 PM ET", url: "https://www.sec.gov/Archives/edgar/data/1992870/000114036126026744/ef20070486_10k.htm" }
  - { label: "SEC press release 2025-101 - SEC Permits In-Kind Creations and Redemptions for Crypto ETPs (July 29, 2025)", url: "https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps" }
  - { label: "Deloitte - The ETP breakthrough (March 19, 2024): most initial spot bitcoin ETP applications planned in-kind creations; all were revised to cash-only during the SEC comment period", url: "https://www.deloitte.com/us/en/services/tax/articles/etp-breakthrough-cryptos-regulatory-milestone.html" }
  - { label: "WisdomTree Bitcoin Fund - Form 10-K for 2025: Sponsor Fee of 0.25% per annum", url: "https://www.sec.gov/Archives/edgar/data/1850391/000121465926003899/wtb32026010k.htm" }
  - { label: "Grayscale Bitcoin Mini Trust ETF - Form 10-K for 2025: Sponsor's Fee at an annual rate of 0.15%", url: "https://www.sec.gov/Archives/edgar/data/2015034/000119312526071952/btc-20251231.htm" }
  - { label: "Grayscale Bitcoin Trust ETF - Form 10-K for 2025: Sponsor's Fee at an annual rate of 1.5%", url: "https://www.sec.gov/Archives/edgar/data/1588489/000119312526071956/gbtc-20251231.htm" }
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
- **Fidelity Wise Origin Bitcoin Fund (FBTC)** - Fidelity Digital Assets (Fidelity's own custodian)
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

- **NAV strikes daily** as of 4:00 PM New York time. Several funds, including the iShares Bitcoin Trust, use the New York variant of the [CME CF Bitcoin Reference Rate](/glossary/cme-cf-bitcoin-reference-rate) (BRRNY); others use different benchmarks, such as the Fidelity Bitcoin Reference Rate.
- **[Authorized Participants](/glossary/authorized-participant)** create and redeem shares in large blocks. The mechanism keeps the market price within basis points of [NAV](/glossary/nav-net-asset-value).
- **[Creation/redemption](/glossary/creation-redemption)** was cash-only at launch. Most of the applications had planned for in-kind creation, but all were revised to cash-only during SEC review. On July 29, 2025 the SEC, under Chair Paul Atkins, voted to allow in-kind.
- **Expense ratios** in the funds' annual reports filed in 2026 run from 0.19% to 0.25% for most products. The exceptions are Grayscale's Bitcoin Mini Trust (BTC, launched 2024), the cheapest at 0.15%, and GBTC at 1.50% (legacy fee from its closed-end days).

What spot ETFs changed:

- **Brokerage and IRA access.** A retirement account that cannot hold BTC directly can hold IBIT or FBTC. This unlocked structural demand from RIAs, pension funds, endowments, and 401(k)-style accounts.
- **Price discovery.** Daily creation flows became a meaningful input to [price discovery](/glossary/price-discovery). For funds on BRRNY, the NAV price comes from spot trades between 3:00 and 4:00 PM New York.
- **The basis trade.** Hedge funds run the spread between spot ETFs and CME futures as a yield strategy. Tight, real, and a major contributor to derivatives liquidity.
- **Legitimization.** "Bitcoin is an asset class" became defensible inside compliance departments that had previously banned it.

Editorial: spot ETFs were a structural win for Bitcoin's monetary thesis - regulated demand at scale, daily marks against a credible reference rate, and access from accounts that can never hold the asset directly. They are also not Bitcoin. The keys sit with a custodian. The shares are an IOU on someone else's custody arrangement. The whole pitch of Bitcoin - censorship-resistant, bearer, verifiable - is exactly what the ETF wrapper removes. Use the ETF when the use case demands it. For long-term holders who can self-custody, owning the keys is the point.
