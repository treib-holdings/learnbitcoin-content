---
title: "Tracking Error"
slug: tracking-error
draft: true
shortDefinition: "A measure of how closely an ETF's returns follow the returns of the asset it's designed to track. Lower is better, and for spot Bitcoin ETFs the annual gap is roughly the expense ratio plus a few basis points."
keyTakeaways:
  - "Driven by expense ratio, trading costs, cash drag, and creation/redemption frictions"
  - "Tracking difference is the cumulative return gap; tracking error is its statistical volatility"
  - "Spot Bitcoin ETFs track tightly because creation/redemption arbitrage is profitable and APs are active"
sources: []
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

Tracking error measures how faithfully an ETF reproduces the returns of what it claims to track. For a spot Bitcoin ETF, the target is the BTC price itself (typically the [CME CF Bitcoin Reference Rate](/glossary/cme-cf-bitcoin-reference-rate)). For an S&P 500 ETF, the target is the S&P 500 index. The closer the ETF's daily returns match the target's daily returns, the lower the tracking error.

Two related concepts often used interchangeably (but they are different):

- **Tracking difference.** The cumulative return gap. If BTC returned 50% over a year and the ETF returned 49.75%, tracking difference is -0.25%. This is the number that matters most for buy-and-hold investors.
- **Tracking error.** The standard deviation of the daily return difference between ETF and target. Measures how bumpy the tracking is, not just how much off. Important for traders and arbitrageurs.

Sources of tracking gap for a spot Bitcoin ETF:

**1. Expense ratio.** The issuer's annual fee, accrued daily out of the fund's BTC holdings. Current US spot Bitcoin ETF fees:

| Product | Ticker | Expense Ratio |
|---|---|---|
| Bitwise Bitcoin ETF | BITB | 0.20% |
| VanEck Bitcoin Trust | HODL | 0.20% |
| Franklin Bitcoin ETF | EZBC | 0.19% |
| Ark 21Shares Bitcoin ETF | ARKB | 0.21% |
| BlackRock iShares Bitcoin Trust | IBIT | 0.25% |
| Fidelity Wise Origin Bitcoin Fund | FBTC | 0.25% |
| Valkyrie Bitcoin Fund | BRRR | 0.25% |
| Invesco Galaxy Bitcoin ETF | BTCO | 0.25% |
| WisdomTree Bitcoin Fund | BTCW | 0.30% |
| Hashdex Bitcoin ETF | DEFI | 0.90% |
| Grayscale Bitcoin Trust | GBTC | 1.50% |

(Most issuers ran 0% fee waivers for the first six to twelve months after launch; the table reflects standing post-waiver rates.)

**2. Cash drag.** BTC not yet deployed earns nothing. Whenever the fund receives cash from a [creation](/glossary/creation-redemption) and has not yet executed the BTC trade, those dollars sit idle while still counted in NAV. In a strong BTC up-move, cash drag is a real (small) headwind.

**3. Trading costs.** When the issuer executes spot BTC trades to deploy creation cash or to liquidate for redemptions, spread and slippage flow into the fund. In-kind creation/redemption eliminates this entirely.

**4. Custody fees.** Typically baked into the expense ratio. For Coinbase Custody (which holds BTC for 8 of the 11 US spot ETFs), the fee is a small fraction of the expense ratio.

**5. Mid-day mark vs strike.** NAV strikes at 4 PM London; market price trades all day. Intraday returns don't perfectly match because they're being marked at different moments. This shows up as tracking-error volatility, not as a persistent tracking-difference bias.

**Roughly, for a spot Bitcoin ETF:**

```
Annual tracking difference ~ expense ratio + a few basis points
```

In practice, the major spot Bitcoin ETFs since their January 2024 launch have all tracked the underlying within their stated fee ranges. The wrapper works.

Why this matters when picking a Bitcoin ETF:

- **Expense ratio dominates.** Over a multi-year hold, a 0.20% ETF versus a 1.50% ETF compounds into a meaningful gap. For long-term exposure, the lowest-fee competent product wins.
- **In-kind vs cash creation/redemption affects tracking quality.** Once in-kind is available across the board, tracking error tightens further.
- **Don't confuse expense ratio with tracking quality.** A poorly run cheap ETF can track worse than a well-run expensive one. Compare actual tracking-difference history, not just headline fee.

Tracking error is the boring statistic that tells you whether the ETF is doing its job. For Bitcoin, the answer since launch has been: yes, almost annoyingly well.
