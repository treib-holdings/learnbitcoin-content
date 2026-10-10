---
title: "Premium / Discount (to NAV)"
slug: premium-discount-to-nav
linkText:
  - "premium/discount"
draft: false
updated: "2026-10-10"
published: "2026-06-15"
shortDefinition: "The difference between an ETF's market price and its Net Asset Value per share, expressed as a percentage. Positive means premium, negative means discount."
keyTakeaways:
  - "Creation and redemption by authorized participants generally keeps an ETF's market price close to its NAV"
  - "A large gap that lasts for months means the arbitrage is blocked or broken"
  - "Before it became an ETF in January 2024, GBTC closed as much as 142% above NAV and as much as 49% below it"
sources:
  - { label: "Grayscale Bitcoin Trust ETF - Form 10-K for 2025: before the January 11, 2024 uplisting, shares were sold to accredited investors at prices based on NAV; from May 5, 2015 to January 10, 2024 the OTCQX closing price was as much as 142% above NAV (average premium 37%) and as much as 49% below (average discount 25%); the Sponsor blames the gaps in part on the Rule 144 holding period for private placement shares and the lack of a redemption program; a redemption program started January 10, 2024, and since the uplisting the trust has issued shares continuously under a registration statement on Form S-3; from January 11, 2024 to December 31, 2025 the maximum premium was 1.68% (average 0.06%) and the maximum discount 1.56% (average 0.08%)", url: "https://www.sec.gov/Archives/edgar/data/1588489/000119312526071956/gbtc-20251231.htm" }
  - { label: "Grayscale Bitcoin Trust - Form 10 information statement (filed November 19, 2019): under Rule 144, a one-year minimum holding period for shares bought from the trust until it has been an SEC reporting company for 90 days, six months after that", url: "https://www.sec.gov/Archives/edgar/data/1588489/000119312519295206/d735049dex991.htm" }
  - { label: "Grayscale Bitcoin Trust - Form 10-K for 2020 (filed March 5, 2021): six-month minimum holding period; through December 31, 2020 the shares had closed at a discount only on October 28, 2015; 17% premium at December 31, 2020", url: "https://www.sec.gov/Archives/edgar/data/1588489/000156459021011121/gbtc-10k_20201231.htm" }
  - { label: "Grayscale Bitcoin Trust - Form 10-K for 2021 (filed February 25, 2022): redemption program suspended effective October 28, 2014; maximum discount through 2021 of 21%; 20% discount at December 31, 2021", url: "https://www.sec.gov/Archives/edgar/data/1588489/000119312522053501/d289251d10k.htm" }
  - { label: "Grayscale Bitcoin Trust - Form 10-K for 2022 (filed March 1, 2023): maximum discount of 49% from May 5, 2015 to December 31, 2022; 45% discount at December 30, 2022", url: "https://www.sec.gov/Archives/edgar/data/1588489/000119312523054302/d453116d10k.htm" }
  - { label: "Grayscale Bitcoin Trust - Form 10-K for 2023 (filed February 23, 2024): 8% discount at December 29, 2023", url: "https://www.sec.gov/Archives/edgar/data/1588489/000119312524043678/d736998d10k.htm" }
  - { label: "U.S. Court of Appeals for the D.C. Circuit - Grayscale Investments, LLC v. SEC, No. 22-1142: the denial of Grayscale's proposal was arbitrary and capricious; order vacated (decided August 29, 2023)", url: "https://media.cadc.uscourts.gov/opinions/docs/2023/08/22-1142-2014527.pdf" }
  - { label: "SEC - Investor Bulletin: Exchange-Traded Funds (August 2012): authorized participants create and redeem shares in large blocks; their arbitrage generally keeps an ETF's market price close to its NAV", url: "https://www.sec.gov/investor/alerts/etfs.pdf" }
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

- The gap is usually small. The SEC's investor bulletin on ETFs says arbitrage by authorized participants generally keeps the market price close to NAV.
- [Authorized Participants](/glossary/authorized-participant) arbitrage the gap. If market price > NAV, an AP buys the underlying, delivers it to the issuer, receives shares at NAV, and sells at market price. The act of doing this closes the gap. Reverse for discount.
- Persistent premium or discount means the arbitrage is failing - either creation/redemption is blocked, the underlying is illiquid, or the AP cannot transact in the underlying.

The Bitcoin case study: GBTC (Grayscale Bitcoin Trust)

Before its January 2024 conversion to a [spot ETF](/glossary/spot-bitcoin-etf), GBTC was a trust quoted over the counter on OTCQX, not an ETF. It did issue new shares: accredited investors bought them in private placements at prices based on NAV. But buyers had to hold those shares for a set period under SEC Rule 144 before reselling them, and the trust had suspended its redemption program in October 2014, so APs could not [redeem](/glossary/creation-redemption) shares for bitcoin when the price strayed from NAV. Grayscale's annual report blames the gaps to NAV in part on those two things.

The GBTC premium/discount timeline, from the trust's annual reports (closing prices):

- **2015-2020: a premium almost every day.** Shares bought in the private placement had to be held for a year before resale until the trust had been an SEC reporting company for 90 days, and for six months after that. (It filed to register with the SEC in November 2019.) Through 2020 the shares closed below NAV on only one day, October 28, 2015. From May 2015 to January 2024, on days the shares closed above NAV, the premium averaged 37% and peaked at 142%. A buyer who paid NAV in the private placement could sell into that premium once the holding period ended, if it was still there.
- **2021: premium turns to discount.** The shares ended 2020 at a 17% premium to NAV and ended 2021 at a 20% discount.
- **2022: the discount deepens.** During 2022 the discount reached 49%, the widest its annual reports record, and the shares ended the year 45% below NAV. With redemptions still suspended, arbitrageurs had no way to swap shares for the bitcoin behind them.
- **August 2023: court win.** A three-judge panel of the D.C. Circuit ruled that the SEC's 2022 denial of the proposal to list GBTC on NYSE Arca was "arbitrary and capricious" and vacated it. The discount was 8% at the end of 2023.
- **January 10, 2024: approval.** The SEC approved the listing, and Grayscale started a redemption program that day. GBTC began trading on NYSE Arca as an ETF on January 11, 2024.

What the GBTC arc shows:

- **Premium/discount is a wrapper-quality signal.** A persistent gap means something is structurally wrong with the product, not with the underlying asset.
- **Structure matters.** The same trust holding the same asset traded far from NAV for years, then close to it once shares could be redeemed.
- **Redemption rights are the load-bearing feature.** Without them, the AP arbitrage doesn't exist, and the wrapper's price can drift arbitrarily from its NAV.

Since the conversion:

- From January 11, 2024 to December 31, 2025, GBTC's closing price averaged 0.06% above NAV on the days it traded at a premium and 0.08% below on the days it traded at a discount, per its annual report. The widest gaps were 1.68% above and 1.56% below.
- The trust still held bitcoin, as before. From January 2024, APs could redeem shares, and new shares were issued under an SEC registration statement instead of in private placements.
- This boring outcome is what a healthy ETF looks like.
