---
title: "ETF (Exchange-Traded Fund)"
slug: etf-exchange-traded-fund
linkText:
  - "ETF"
  - "ETFs"
draft: false
updated: "2026-10-10"
published: "2026-06-15"
shortDefinition: "A pooled investment vehicle that trades on stock exchanges like a regular share, with units minted and destroyed by institutional brokers to keep the market price tied to the underlying asset's value."
keyTakeaways:
  - "Trades on traditional stock exchanges with a ticker symbol"
  - "Issuer holds the underlying asset; share count grows or shrinks to match demand"
  - "For Bitcoin, an ETF is a regulated wrapper that lets an ordinary brokerage account hold BTC exposure - not BTC itself"
sources:
  - { label: "SEC - Investor Bulletin: Exchange-Traded Funds (August 2012): ETF shares trade on a national stock exchange; authorized participants, typically large broker-dealers, create and redeem shares in large blocks called Creation Units; their arbitrage generally keeps the market price close to NAV; in-kind redemptions can make ETFs more tax efficient than mutual funds; the SPDR invests in most or all of the S&P 500 stocks", url: "https://www.sec.gov/investor/alerts/etfs.pdf" }
  - { label: "State Street - SPDR S&P 500 ETF Trust (SPY) fund page: listed January 22, 1993, the first exchange traded fund listed in the United States (fetched October 10, 2026)", url: "https://www.ssga.com/us/en/intermediary/etfs/state-street-spdr-sp-500-etf-trust-spy" }
  - { label: "Investment Company Institute - 2025 Investment Company Fact Book: 3,637 US ETFs at year-end 2024, in equity, bond, hybrid and commodity categories (commodity ETFs include funds investing in commodities, currencies and futures)", url: "https://www.ici.org/system/files/2025-05/2025-factbook.pdf" }
  - { label: "Investment Company Institute - Mutual Fund and ETF Fees Remained Near Historic Lows in 2025: average expense ratio of 0.14% for index equity ETFs and 0.40% for equity mutual funds in 2025 (March 25, 2026)", url: "https://www.ici.org/news-release/mutual-fund-and-etf-fees-remained-near-historic-lows-in-2025" }
  - { label: "iShares Gold Trust - Form 10-K for 2025: the trust's gold is physical gold held by its custodian in New York, London and other locations", url: "https://www.sec.gov/Archives/edgar/data/1278680/000143774926006055/iau20251231_10k.htm" }
  - { label: "iShares Bitcoin Trust ETF - Form 10-K for 2025: the sponsor is a consolidated subsidiary of BlackRock; investors can buy and sell shares through traditional brokerage accounts without managing wallets or private keys; the Bitcoin Custodian keeps the private keys for the trust's bitcoin; net asset value of $67,401,155,244 at December 31, 2025", url: "https://www.sec.gov/Archives/edgar/data/1980994/000143774926006058/bit20251231_10k.htm" }
  - { label: "ProShares - Bitcoin ETF (BITO) fund page: the first U.S. bitcoin-linked ETF; inception date October 18, 2021; invests in futures and swaps, not bitcoin directly; rolling futures has costs, and futures prices and performance should be expected to differ from spot prices (fetched October 10, 2026)", url: "https://www.proshares.com/our-etfs/strategic/bito" }
  - { label: "SEC - Order approving the first eleven spot bitcoin ETPs, including the iShares Bitcoin Trust, Fidelity Wise Origin Bitcoin Fund, Bitwise Bitcoin ETF, ARK 21Shares Bitcoin ETF, Grayscale Bitcoin Trust and Hashdex Bitcoin ETF (Release 34-99306, January 10, 2024)", url: "https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf" }
  - { label: "SEC - Statement by Chair Gary Gensler on the approval of spot bitcoin ETPs: from 2018 through March 2023 the Commission disapproved more than 20 exchange rule filings for spot bitcoin ETPs (January 10, 2024)", url: "https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023" }
  - { label: "Hashdex Bitcoin ETF - Form 10-K for 2025: formerly the Hashdex Bitcoin Futures ETF, holding CME bitcoin futures; permitted to hold spot bitcoin from March 27, 2024 (filed March 31, 2026)", url: "https://www.sec.gov/Archives/edgar/data/1985840/000199937126007288/defi-10k_123125.htm" }
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

An exchange-traded fund is a pooled investment that holds some underlying asset (or basket of assets) and issues shares that trade on a normal stock exchange. The first US ETF, the SPDR S&P 500 ETF Trust (ticker SPY), listed in January 1993. At the end of 2024 there were 3,637 ETFs in the United States, per the Investment Company Institute, covering stocks, bonds, commodities and currencies. Since January 2024 the US list has included spot Bitcoin funds.

How an ETF actually works:

- **Issuer holds the underlying.** A gold trust such as the iShares Gold Trust holds physical gold with a custodian. A spot Bitcoin ETF holds BTC at a custodian. An S&P 500 ETF such as SPY holds most or all of the stocks in the index.
- **Shares trade on a stock exchange.** Retail and institutional investors buy and sell ETF shares through their broker, the same way they trade Apple or Tesla stock.
- **[Authorized Participants](/glossary/authorized-participant)** (large broker-dealers) interact with the issuer directly to mint or burn shares in big blocks called creation units. When demand for shares outstrips supply, APs deliver cash (or the underlying asset) and receive new shares to sell. When supply exceeds demand, APs do the reverse.
- **Arbitrage keeps the price honest.** If the market price of the ETF drifts above the [Net Asset Value](/glossary/nav-net-asset-value) of its holdings, APs create new shares and sell them. If it drifts below, APs buy shares and redeem them for the underlying. The SEC describes the result as a market price that stays close to NAV.

Why ETFs exist as a structure:

- **Access.** ETF shares trade through an ordinary brokerage account, so the account can get exposure to an asset it could not easily hold itself. The iShares Bitcoin Trust's annual report, for instance, says investors can buy its shares through a brokerage account and skip managing wallets and private keys.
- **Tax.** Many ETFs redeem shares "in kind," handing securities to the AP instead of selling them, which avoids realizing capital gains inside the fund. The SEC says this can make ETFs more tax-efficient than mutual funds.
- **Cost.** In 2025 the average expense ratio for index equity ETFs was 0.14%, compared with 0.40% for equity mutual funds, according to the Investment Company Institute.

The Bitcoin context:

- **Futures-based first.** ProShares' BITO, which started in October 2021, was the first US bitcoin-linked ETF. It invests in bitcoin [futures](/glossary/futures) (and swaps), not in bitcoin itself. ProShares warns that the costs of rolling futures contracts can hurt performance, and that futures prices and performance should be expected to differ from spot prices.
- **Spot approval, January 10, 2024.** The SEC approved exchange listings for eleven [spot Bitcoin ETFs](/glossary/spot-bitcoin-etf) at once, after disapproving more than 20 earlier filings for spot bitcoin products between 2018 and March 2023. The eleven included products from BlackRock, Fidelity, Bitwise, ARK 21Shares, and the converted Grayscale GBTC. One of them, Hashdex's DEFI, held bitcoin futures until March 27, 2024, when it switched to holding spot BTC.
- **Scale.** By the end of 2025, the iShares Bitcoin Trust alone held about $67.4 billion in net assets, per its annual report.

Editorial: an ETF is a useful tool for accounts that cannot hold BTC directly, and a real on-ramp for institutional capital. It is not Bitcoin. The keys belong to the custodian. The shares are an IOU. For anyone who can self-custody, the ETF is a financial product to use deliberately, not a substitute for owning the asset.
