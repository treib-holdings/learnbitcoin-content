---
title: "Creation / Redemption (Cash vs In-Kind)"
slug: creation-redemption
linkText:
  - "creation/redemption"
  - "in-kind creation"
  - "cash creation"
  - "creation unit"
  - "creation units"
draft: false
published: "2026-06-15"
updated: "2026-10-09"
shortDefinition: "The process by which ETF shares are minted (creation) or destroyed (redemption) through Authorized Participants, in exchange for either cash or the underlying asset. The core arbitrage mechanism that keeps ETFs tracking their NAV."
keyTakeaways:
  - "Cash creation: AP delivers USD, the fund executes the BTC trade"
  - "In-kind creation: AP delivers BTC directly to the fund"
  - "US spot Bitcoin ETFs launched cash-only in January 2024; the SEC approved in-kind creation and redemption on July 29, 2025"
sources:
  - { label: "SEC - Order approving the first eleven spot bitcoin ETPs (Release 34-99306, January 10, 2024); footnote 77: the proposals only contemplate cash creation and redemption by authorized participants", url: "https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf" }
  - { label: "SEC press release 2025-101 - SEC Permits In-Kind Creations and Redemptions for Crypto ETPs (July 29, 2025)", url: "https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps" }
  - { label: "iShares Bitcoin Trust ETF - Form 10-K for 2025: 40,000-share baskets, cash and in-kind orders, APs do not buy or sell bitcoin in cash orders, AP pays execution price differences (costs may pass to shareholders in the secondary market), grantor trust tax treatment", url: "https://www.sec.gov/Archives/edgar/data/1980994/000143774926006058/bit20251231_10k.htm" }
  - { label: "iShares Bitcoin Trust ETF - Form 10-K for 2024 (filed March 5, 2025, during the cash-only period): the Trust trades bitcoin with Bitcoin Trading Counterparties, two of them affiliates of Authorized Participants Jane Street and Virtu", url: "https://www.sec.gov/Archives/edgar/data/1980994/000143774925006260/bit20241231_10k.htm" }
  - { label: "Deloitte - The ETP breakthrough (March 19, 2024): spot bitcoin ETP applications revised from in-kind to cash-only during SEC review", url: "https://www.deloitte.com/us/en/services/tax/articles/etp-breakthrough-cryptos-regulatory-milestone.html" }
  - { label: "Latham & Watkins - SEC Issues Omnibus Approval for Spot Bitcoin ETPs (January 24, 2024): in-kind unworkable while broker-dealers could not deal in bitcoin", url: "https://www.fintechanddigitalassets.com/2024/01/sec-issues-omnibus-approval-for-spot-bitcoin-exchange-traded-products/" }
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - authorized-participant
  - nav-net-asset-value
  - premium-discount-to-nav
  - tracking-error
liveWidget: ~
---

Creation and redemption are how ETF shares are minted and destroyed. The process happens between the fund and an [Authorized Participant](/glossary/authorized-participant), not on the open market. It is the mechanism that lets ETFs track their [Net Asset Value](/glossary/nav-net-asset-value) so closely.

**Creation (shares get minted):**

1. AP wants to create a creation unit - a large block of shares whose size each fund sets (40,000 for the iShares Bitcoin Trust, per its annual report for 2025).
2. AP delivers the agreed basket to the fund.
3. The fund credits the AP with the new shares.
4. AP sells shares into the market or holds as inventory.

**Redemption (shares get destroyed):**

1. AP wants to redeem.
2. AP delivers the shares back to the fund.
3. The fund delivers the basket (cash or underlying) back to the AP.
4. Shares are destroyed; share count drops.

The "basket" can take two forms:

**Cash creation/redemption:**

The AP delivers USD equal to NAV times unit size. The fund buys the BTC through its own trading counterparties. The iShares Bitcoin Trust's annual reports for 2024 and 2025 list two counterparties from the same corporate groups as two of its APs, Jane Street and Virtu. Redemption runs in reverse: the fund sells BTC and delivers USD to the AP.

- **Pro:** simpler for APs that lack their own BTC trading desk.
- **Con:** the fund has to buy or sell BTC on every day that APs create or redeem shares, and its execution price can differ from the price used for NAV. At the iShares Bitcoin Trust, the AP pays that difference, and the fund's filing says the cost may be passed on to investors who trade the shares on the exchange.

**In-kind creation/redemption:**

The AP (or its agent) delivers BTC directly to the fund. The fund takes the BTC into custody and credits the AP with shares. Redemption is the reverse.

- **Pro:** the fund does not have to buy or sell BTC when shares are created or redeemed. Per the iShares filing, an in-kind creation is not a taxable event for the shareholder, and an in-kind redemption generally is not one either.
- **Con:** AP needs the operational capability to handle BTC custody, transfers, and settlement at institutional scale.

The Bitcoin-specific history:

- **January 2024 launch - cash-only.** When the US SEC approved the first eleven [spot Bitcoin ETFs](/glossary/spot-bitcoin-etf) on January 10, 2024, every approved proposal used cash-only creation and redemption. Most applications had started out with in-kind plans and were revised to cash during the SEC's review. The approval order does not give a reason. The common explanation at the time was that the SEC did not let broker-dealers acting as APs deal in BTC. Under cash-only, APs paid in and took out only dollars.
- **July 29, 2025 - in-kind approval.** The SEC, under Chair Paul Atkins, voted to approve orders that let APs create and redeem shares of crypto exchange-traded products (ETPs) in kind. Before that, these products allowed only cash creations and redemptions (release [2025-101](https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps)). The change brought spot Bitcoin ETFs into line with how other commodity-based ETPs already operated.

Why this matters:

- **Trading costs.** With cash orders, the fund itself buys or sells BTC whenever shares are created or redeemed, and the AP is charged for any [slippage](/glossary/price-slippage). In-kind takes the fund out of that trade.
- **Tax efficiency.** In-kind creation/redemption is the central reason ETFs are more tax-efficient than mutual funds in the US. US spot Bitcoin ETFs such as the iShares Bitcoin Trust are set up differently, as grantor trusts, so each holder is treated as owning a share of the fund's BTC directly. The iShares filing says gains from BTC sold to fund a cash redemption are expected to fall on the redeeming shareholder. If that treatment holds, the cash-only period did not pass those gains to the holders who stayed.
- **AP economics.** Cash creation is easier for APs to operate, but the AP still pays for the fund's execution slippage. In-kind lets APs source BTC themselves and rewards APs that can do it efficiently.

For a retail buyer, the mechanism is invisible. Only APs create and redeem shares, in cash or in BTC, and an investor who buys and sells the shares on an exchange is taxed on those trades the same way under either model.
