---
title: "Tracking Error"
slug: tracking-error
linkText:
  - "tracking error"
draft: false
updated: "2026-10-10"
published: "2026-06-15"
shortDefinition: "A measure of how closely an ETF's returns follow the returns of the asset it's designed to track. Lower is better, and for spot Bitcoin ETFs the annual gap is roughly the expense ratio plus a few basis points."
keyTakeaways:
  - "Driven by expense ratio, trading costs, and creation/redemption frictions"
  - "Tracking difference is the cumulative return gap; tracking error is its statistical volatility"
  - "Spot Bitcoin ETFs track tightly because creation/redemption arbitrage is profitable and APs are active"
sources:
  - { label: "iShares Bitcoin Trust ETF - Form 10-K for 2025: bitcoin valued with the CME CF Bitcoin Reference Rate - New York Variant (3:00-4:00 PM ET window) after 4:00 PM ET; 40,000-share baskets; the AP bears execution price differences on cash orders, and such costs may be passed on to shareholders in the secondary market; from listing through January 10, 2025 the fee was waived to 0.12% on the first $5.0 billion; the Sponsor's Fee covers the Custodians' Fee", url: "https://www.sec.gov/Archives/edgar/data/1980994/000143774926006058/bit20251231_10k.htm" }
  - { label: "Fidelity Wise Origin Bitcoin Fund - Form 10-K for 2025: Fidelity Bitcoin Reference Rate; shares valued daily as of 4:00 PM Eastern; core exchange trading typically closes at 4:00 PM", url: "https://www.sec.gov/Archives/edgar/data/1852317/000119312526071484/ck0001852317-20251231.htm" }
  - { label: "SEC press release 2025-101 - SEC Permits In-Kind Creations and Redemptions for Crypto ETPs (July 29, 2025)", url: "https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps" }
  - { label: "VanEck Bitcoin ETF (HODL) - Form 10-K for 2025: Sponsor Fee of 0.20% after a waiver on the first $2.5 billion that ran through July 31, 2026", url: "https://www.sec.gov/Archives/edgar/data/1838028/000093041326000746/c115591_10k-ixbrl.htm" }
  - { label: "WisdomTree Bitcoin Fund (BTCW) - Form 10-K for 2025: Sponsor Fee of 0.25% per annum; the fee was waived on the first $1 billion for six months after listing, a waiver that expired July 11, 2024; the Sponsor's Fee covers the Custodians' fees", url: "https://www.sec.gov/Archives/edgar/data/1850391/000121465926003899/wtb32026010k.htm" }
  - { label: "CoinShares Bitcoin ETF (BRRR) - Form 10-K for 2025: formerly CoinShares Valkyrie Bitcoin Fund; Sponsor Fee at a unified annual rate of 0.25%; the Sponsor assumes the Custodian Fee", url: "https://www.sec.gov/Archives/edgar/data/1841175/000199937126005527/brrr_10k-123125.htm" }
  - { label: "Grayscale Bitcoin Mini Trust ETF - Form 10-K for 2025: Sponsor's Fee at an annual rate of 0.15%; began trading July 31, 2024, when GBTC contributed about 10% of its bitcoin", url: "https://www.sec.gov/Archives/edgar/data/2015034/000119312526071952/btc-20251231.htm" }
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - nav-net-asset-value
  - authorized-participant
  - creation-redemption
  - premium-discount-to-nav
  - cme-cf-bitcoin-reference-rate
liveWidget: ~
---

Tracking error measures how faithfully an ETF reproduces the returns of what it claims to track. For a spot Bitcoin ETF, the target is the BTC price itself (the benchmark named in its prospectus, often the New York variant of the [CME CF Bitcoin Reference Rate](/glossary/cme-cf-bitcoin-reference-rate)). For an S&P 500 ETF, the target is the S&P 500 index. The closer the ETF's daily returns match the target's daily returns, the lower the tracking error.

Two related concepts often used interchangeably (but they are different):

- **Tracking difference.** The cumulative return gap. If BTC returned 50% over a year and the ETF returned 49.75%, tracking difference is -0.25%. This is the number that matters most for buy-and-hold investors.
- **Tracking error.** The standard deviation of the daily return difference between ETF and target. Measures how bumpy the tracking is, not just how much off. Important for traders and arbitrageurs.

Sources of tracking gap for a spot Bitcoin ETF:

**1. Expense ratio.** The issuer's annual fee, accrued daily out of the fund's BTC holdings. US spot Bitcoin ETF fees, per the funds' annual reports filed in 2026:

| Product | Ticker | Expense Ratio |
|---|---|---|
| Grayscale Bitcoin Mini Trust | BTC | 0.15% |
| Franklin Bitcoin ETF | EZBC | 0.19% |
| Bitwise Bitcoin ETF | BITB | 0.20% |
| VanEck Bitcoin ETF | HODL | 0.20% |
| Ark 21Shares Bitcoin ETF | ARKB | 0.21% |
| BlackRock iShares Bitcoin Trust | IBIT | 0.25% |
| Fidelity Wise Origin Bitcoin Fund | FBTC | 0.25% |
| CoinShares Bitcoin ETF (formerly Valkyrie) | BRRR | 0.25% |
| Invesco Galaxy Bitcoin ETF | BTCO | 0.25% |
| Hashdex Bitcoin ETF | DEFI | 0.25% |
| WisdomTree Bitcoin Fund | BTCW | 0.25% |
| Grayscale Bitcoin Trust | GBTC | 1.50% |

The Grayscale Bitcoin Mini Trust (BTC) launched in mid-2024 as Grayscale's cheaper sibling product to GBTC, seeded with a portion of GBTC's BTC. At 0.15% it has the lowest fee in the table. (Several issuers cut or waived their fee for a while after launch. iShares charged 0.12% on its first $5 billion for a year, and WisdomTree charged nothing on its first $1 billion for six months. The table shows the standing rates.)

**2. Trading costs.** When the fund buys or sells BTC for cash creations and redemptions, its execution price can differ from the price used for NAV. At the iShares Bitcoin Trust the AP covers any shortfall rather than the fund, and the fund's annual report notes that such costs may reach shareholders through the share's market price. In-kind creation/redemption takes the fund out of the trade.

**3. Custody fees.** Typically paid by the sponsor out of the expense ratio rather than charged to the fund on top. The iShares and WisdomTree annual reports, for example, both list the custodians' fees among the costs the sponsor's fee covers.

**4. Closing price vs strike.** NAV strikes as of 4:00 PM New York (for funds on BRRNY, from trades between 3:00 and 4:00 PM), while the shares trade all day and close at 4:00 PM on the exchange. The two prices are set in different ways, so daily returns on market price and on NAV don't match exactly. This shows up as tracking-error volatility, not as a persistent tracking-difference bias.

**Roughly, for a spot Bitcoin ETF:**

```
Annual tracking difference ~ expense ratio + a few basis points
```

In practice, the major spot Bitcoin ETFs since their January 2024 launch have all tracked the underlying within their stated fee ranges. The wrapper works.

Why this matters when picking a Bitcoin ETF:

- **Expense ratio dominates.** Over a multi-year hold, a 0.20% ETF versus a 1.50% ETF compounds into a meaningful gap. For long-term exposure, the lowest-fee competent product wins.
- **In-kind vs cash creation/redemption affects trading costs.** In-kind, allowed by the SEC on July 29, 2025, takes the fund out of BTC trades when shares are created or redeemed that way.
- **Don't confuse expense ratio with tracking quality.** A poorly run cheap ETF can track worse than a well-run expensive one. Compare actual tracking-difference history, not just headline fee.

Tracking error is the boring statistic that tells you whether the ETF is doing its job. For Bitcoin, the answer since launch has been: yes, almost annoyingly well.
