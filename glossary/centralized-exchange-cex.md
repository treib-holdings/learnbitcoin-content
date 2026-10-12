---
title: "Centralized Exchange (CEX)"
slug: centralized-exchange-cex
draft: false
updated: "2026-10-12"
shortDefinition: "A crypto trading platform run by a single company, holding user funds and matching orders internally."
keyTakeaways:
  - "Easier user experience but custodial by nature"
  - "Subject to hacks or withdrawal restrictions"
  - "High liquidity and broad coin offerings"
sources:
  - { label: "NPR - Mt. Gox files for bankruptcy, nearly $500M of bitcoins lost (February 28, 2014): Mt. Gox, once the world's largest bitcoin exchange, filed for bankruptcy protection in Japan", url: "https://www.npr.org/sections/thetwo-way/2014/02/28/283863219/mtgox-files-for-bankruptcy-nearly-500m-of-bitcoins-lost" }
  - { label: "Ontario Securities Commission - QuadrigaCX: A Review by Staff of the Ontario Securities Commission (2020): on January 14, 2019 Quadriga announced that its CEO, Gerald Cotten, had died; over 76,000 clients were owed $215 million and lost at least $169 million, most of it to Cotten's fraud", url: "https://www.osc.ca/quadrigacxreport/" }
  - { label: "US DOJ, SDNY - founder of Celsius sentenced to 12 years (May 8, 2025): Celsius halted customer withdrawals on June 12, 2022, when hundreds of thousands of customers had $4.7 billion in inaccessible assets on the platform; it filed for bankruptcy on July 13, 2022", url: "https://www.justice.gov/usao-sdny/pr/founder-celsius-sentenced-12-years-fraud-and-market-manipulation" }
  - { label: "Voyager Digital - first-day declaration of Stephen Ehrlich, In re Voyager Digital Holdings (Bankr. S.D.N.Y. 22-10943), Doc 15 (July 6, 2022): on July 1, 2022 the company froze all withdrawals and trading on its platform; the petition date was July 5, 2022", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.312840/gov.uscourts.nysb.312840.15.0.pdf" }
  - { label: "CNBC - BlockFi files for bankruptcy as FTX fallout spreads (November 28, 2022): BlockFi filed for Chapter 11 in the District of New Jersey after the implosion of FTX, listing more than 100,000 creditors", url: "https://www.cnbc.com/2022/11/28/blockfi-files-for-bankruptcy-as-ftx-fallout-spreads.html" }
  - { label: "Kroll, FTX case information: FTX Trading Ltd. and its affiliated debtors filed for Chapter 11 on November 11 and 14, 2022; the plan became effective on January 3, 2025", url: "https://restructuring.ra.kroll.com/FTX/" }
  - { label: "Genesis Global Holdco - first-day declaration of A. Derar Islim, In re Genesis (Bankr. S.D.N.Y. 23-10063), Doc 17 (January 20, 2023): Genesis paused all lending and borrowing on November 16, 2022 and filed for Chapter 11 on January 19, 2023", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.314889/gov.uscourts.nysb.314889.17.0.pdf" }
  - { label: "SEC v. Bankman-Fried (S.D.N.Y. 22-cv-10501), complaint (December 13, 2022): FTX customers withdrew about $5 billion in a day; Bankman-Fried sought emergency funding to cover a shortfall at FTX of approximately $8 billion", url: "https://www.sec.gov/files/litigation/complaints/2022/comp-pr2022-219.pdf" }
relatedTerms:
  - aml-anti-money-laundering
  - bitlicense
  - decentralized-exchange-dex
  - exchange
  - exchange-api-key
  - kyc-know-your-customer
liveWidget: ~
---

A centralized exchange (CEX) is a company that operates as a custodian, order book, and matching engine for cryptocurrency trades. Coinbase, Binance, Kraken, Cash App, and a long tail of others. You deposit BTC; they hold it; you trade on their internal ledger; you withdraw if and when they let you.

What CEXs are good at:

- **Liquidity.** Major CEXs match hundreds of millions to billions of dollars of daily volume, so you can buy or sell large amounts without moving the price significantly.
- **Fiat on-ramps.** Bank transfers, debit cards, and other off-ramp infrastructure that decentralized alternatives can't match.
- **User experience.** Polished apps, customer support, and integration with other financial services.
- **Trading features.** Limit orders, futures, options, margin - the full traditional-finance toolkit.

What CEXs are not:

- **Where you should keep Bitcoin you actually want to own.** A CEX balance is a *claim* on Bitcoin, not Bitcoin itself. The exchange's solvency, custody practices, and regulatory good standing are all between you and your money.

The historical record on CEXs failing is long and continuing: [Mt. Gox](/glossary/mt-gox) (2014), QuadrigaCX (2019), Celsius, Voyager, BlockFi and [FTX](/glossary/ftx) (2022), Genesis (froze in 2022, filed in 2023). The [2022 contagion](/glossary/celsius-genesis-3ac-cluster) alone locked up billions of dollars of customer balances for years. Celsius halted withdrawals with $4.7 billion of customer assets on its platform, and FTX turned out to have a hole of about $8 billion where customer money should have been. See [Counterparty Risk](/glossary/counterparty-risk) for the broader framing and for what customers eventually got back.

The pragmatic approach: CEXs are useful on-ramps. Use one to convert fiat to BTC. Withdraw to a self-custody [wallet](/glossary/wallet) (ideally a [hardware wallet](/glossary/hardware-wallet)) for any meaningful amount. Don't treat the exchange balance as savings.

See [Decentralized Exchange (DEX)](/glossary/decentralized-exchange-dex) for the non-custodial alternative.
