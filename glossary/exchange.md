---
title: "Exchange"
slug: exchange
draft: false
updated: "2026-10-10"
shortDefinition: "A service or marketplace for trading BTC, whether centralized (CEX) or decentralized (DEX)."
keyTakeaways:
  - "Converts fiat-to-BTC or crypto-to-crypto trading"
  - "Centralized platforms hold user funds; decentralized ones do not"
  - "Liquidity, user experience, and regulatory features vary widely"
sources:
  - { label: "Coinbase Global - 2025 annual report on Form 10-K (filed February 12, 2026): customer crypto is held in omnibus wallets and recorded on Coinbase's ledger; trading runs on its order books", url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000015/coin-20251231.htm" }
  - { label: "US DOJ - Binance and its CEO plead guilty (November 21, 2023): Binance operates the world's largest cryptocurrency exchange, Binance.com", url: "https://www.justice.gov/archives/opa/pr/binance-and-ceo-plead-guilty-federal-charges-4b-resolution" }
  - { label: "Robinhood Markets - 2025 annual report on Form 10-K (filed February 18, 2026): Robinhood bought Bitstamp, a globally scaled crypto exchange, in June 2025; Bitstamp safeguards its private keys internally and with third-party custodians", url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000023/hood-20251231.htm" }
  - { label: "Bitcoin Wiki - Atomic swap: two parties swap coins on two chains without trusting a third party", url: "https://en.bitcoin.it/wiki/Atomic_swap" }
  - { label: "Bisq wiki - Introduction: a peer-to-peer exchange network; Bisq never holds user funds; no registration or KYC", url: "https://bisq.wiki/Introduction" }
  - { label: "Wired - The Rise and Fall of the World's Largest Bitcoin Exchange (November 6, 2013): Mt. Gox booked 70 percent of bitcoin trades in April 2013", url: "https://www.wired.com/2013/11/mtgox/" }
  - { label: "NPR - Mt. Gox files for bankruptcy, nearly $500M of bitcoins lost (February 28, 2014): 850,000 bitcoins missing", url: "https://www.npr.org/sections/thetwo-way/2014/02/28/283863219/mtgox-files-for-bankruptcy-nearly-500m-of-bitcoins-lost" }
  - { label: "WizSec - The missing MtGox bitcoins (April 19, 2015): most or all were stolen from the hot wallet over time, beginning in late 2011", url: "https://blog.wizsec.jp/2015/04/the-missing-mtgox-bitcoins.html" }
  - { label: "Mt. Gox Rehabilitation Trustee - first repayments in bitcoin and Bitcoin Cash (July 5, 2024)", url: "https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf" }
  - { label: "Mt. Gox Rehabilitation Trustee - notice changing the repayment deadline (October 27, 2025): repayments largely complete for creditors who finished the required procedures, many others still unpaid, deadline moved to October 31, 2026", url: "https://www.mtgox.com/img/pdf/20251027_1cc36334-e8b2-4fe4-8135-97d9a149e4f7_announcement_en.pdf" }
  - { label: "Ontario Securities Commission - QuadrigaCX investigation report (2020): Canada's largest crypto trading platform; operated like a Ponzi scheme; clients lost at least CAD 169 million", url: "https://www.osc.ca/quadrigacxreport/" }
  - { label: "NPR - QuadrigaCX says it can't access funds after its CEO died (February 4, 2019): the widow's court affidavit says only Gerald Cotten moved coins out of cold storage; he died December 9, 2018", url: "https://www.npr.org/2019/02/04/691296170/cryptocurrency-exchange-says-it-cant-access-millions-after-founder-s-unexpected" }
  - { label: "CBC - Quadriga's cold wallets come up empty (March 1, 2019): the court-appointed monitor, Ernst & Young, found they had been empty since April 2018", url: "https://www.cbc.ca/news/canada/nova-scotia/cryptocurrency-still-missing-quadriga-s-cold-wallets-1.5040099" }
  - { label: "US DOJ, SDNY - founder of Celsius sentenced to 12 years (May 8, 2025): Celsius halted withdrawals on June 12, 2022 with $4.7 billion of customers' assets on the platform, and filed for bankruptcy on July 13, 2022", url: "https://www.justice.gov/usao-sdny/pr/founder-celsius-sentenced-12-years-fraud-and-market-manipulation" }
  - { label: "SEC v. Bankman-Fried (S.D.N.Y. 22-cv-10501), complaint (December 13, 2022): FTX customer funds diverted to Alameda; a run in early November 2022; a shortfall of approximately $8 billion", url: "https://www.sec.gov/files/litigation/complaints/2022/comp-pr2022-219.pdf" }
  - { label: "Genesis Global Holdco - first-day declaration of A. Derar Islim, In re Genesis (Bankr. S.D.N.Y. 23-10063), Doc 17 (January 20, 2023): FTX was previously one of the world's largest and most respected exchanges; Genesis paused lending and borrowing on November 16, 2022", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.314889/gov.uscourts.nysb.314889.17.0.pdf" }
  - { label: "CNBC - BlockFi files for bankruptcy as FTX fallout spreads (November 28, 2022): BlockFi had already halted withdrawals", url: "https://www.cnbc.com/2022/11/28/blockfi-files-for-bankruptcy-as-ftx-fallout-spreads.html" }
  - { label: "Voyager Digital - first-day declaration of Stephen Ehrlich, In re Voyager Digital Holdings (Bankr. S.D.N.Y. 22-10943), Doc 15 (July 6, 2022): Voyager froze all withdrawals and trading on July 1, 2022", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.312840/gov.uscourts.nysb.312840.15.0.pdf" }
  - { label: "SEC - charges against Genesis and Gemini over Gemini Earn (January 12, 2023): in November 2022 Genesis stopped letting Gemini Earn investors withdraw", url: "https://www.sec.gov/newsroom/press-releases/2023-7" }
relatedTerms:
  - centralized-exchange-cex
  - clearing-price
  - decentralized-exchange-dex
  - exchange-api-key
  - futures
  - market-depth
  - price-discovery
  - price-slippage
liveWidget: ~
---

An exchange is any service that lets users trade Bitcoin for other assets (fiat currency, stablecoins, or other crypto). The two structural categories matter more than the brands:

- **Centralized exchange (CEX).** A company holds customer funds, matches orders on an internal order book, and settles trades on its own books. The exchange, or a custodian it hires, holds the private keys; customers hold a balance on the exchange's ledger. Coinbase, Binance and Bitstamp are examples, and there are dozens more.
- **Decentralized exchange (DEX).** Trading happens through smart contracts or peer-to-peer matching protocols; users keep custody of their own funds throughout. On Bitcoin specifically, atomic swaps and protocols like Bisq fall here.

The trust model is the dividing line. A CEX is a custodian: you trust them not to lose, freeze, or steal your coins. A DEX (in the strict sense) is a venue: you trust the protocol, but you keep your keys.

The CEX failure record is one of the most important things a new Bitcoiner should learn from. The major historical collapses:

- **Mt. Gox (2014)**: Tokyo-based exchange that handled about 70% of Bitcoin trades in April 2013; reported ~850,000 BTC missing in 2014, most of it stolen from its hot wallet over the years before. The trustee began repaying creditors in bitcoin in July 2024. In October 2025 it said repayments were largely done for creditors who had completed the paperwork, while many others were still unpaid, and it moved the deadline to October 31, 2026.
- **QuadrigaCX (2019)**: Canada's largest crypto exchange. After its CEO died in December 2018, the company said only he could reach its cold wallets. The court-appointed monitor found them empty since April 2018, and the Ontario Securities Commission concluded the exchange had operated like a Ponzi scheme. Clients lost at least CAD 169 million.
- **Celsius (2022)**: Crypto lender that froze withdrawals in June 2022 with $4.7 billion of customers' assets on the platform, and filed for bankruptcy a month later.
- **FTX (2022)**: One of the world's largest crypto exchanges; collapsed within days in November 2022, when a run on the exchange exposed that customer funds had been sent to its sister trading firm, Alameda Research. ~$8B customer shortfall.
- **BlockFi, Voyager, Genesis, Gemini Earn (2022-2023)**: Crypto lenders and lending products that froze withdrawals during the 2022 contagion.

The pattern is consistent: a CEX is only as safe as its operators' competence and honesty. Most users start on a CEX for convenience (KYC fiat on-ramps, simple UI, customer service), but the manifesto rule from chapter 4 still holds: not your keys, not your coins. Withdraw to self-custody for any amount that matters to you.
