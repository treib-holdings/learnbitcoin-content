---
title: "Custodial Wallet"
slug: custodial-wallet
draft: false
updated: "2026-10-10"
shortDefinition: "A wallet where a third party holds private keys on the user's behalf, similar to a bank holding customer funds."
keyTakeaways:
  - "Funds controlled by a third-party entity"
  - "Convenient but introduces significant counterparty risk"
  - "Contrasts with the self-custody principles of Bitcoin"
sources:
  - { label: "Coinbase Global - 2025 annual report on Form 10-K (filed February 12, 2026): customer crypto held in omnibus wallets and recorded on its ledger; if technical issues can't be resolved, customer assets may be frozen or lost; theft or loss of private keys may be irreversible; in a bankruptcy, custodied crypto could be treated as estate property and customers as general unsecured creditors", url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000015/coin-20251231.htm" }
  - { label: "Block, Inc. - 2025 annual report on Form 10-K (filed February 26, 2026): Cash App customers can store bitcoin in Block's wallets; Block holds the keys and keeps the records, and its contracts say customers keep legal ownership", url: "https://www.sec.gov/Archives/edgar/data/1512673/000162828026012254/xyz-20251231.htm" }
  - { label: "Robinhood Markets - 2025 annual report on Form 10-K (filed February 18, 2026): Robinhood holds customers' settled crypto in custody in omnibus hot and cold wallets", url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000023/hood-20251231.htm" }
  - { label: "NPR - Mt. Gox files for bankruptcy, nearly $500M of bitcoins lost (February 28, 2014): 850,000 bitcoins missing", url: "https://www.npr.org/sections/thetwo-way/2014/02/28/283863219/mtgox-files-for-bankruptcy-nearly-500m-of-bitcoins-lost" }
  - { label: "NPR - QuadrigaCX says it can't access funds after its CEO died (February 4, 2019): the widow's court affidavit says only Gerald Cotten moved coins out of cold storage, which should hold more than CAD 180 million; he died December 9, 2018", url: "https://www.npr.org/2019/02/04/691296170/cryptocurrency-exchange-says-it-cant-access-millions-after-founder-s-unexpected" }
  - { label: "CBC - Quadriga's cold wallets come up empty (March 1, 2019): the court-appointed monitor, Ernst & Young, found they had been empty since April 2018", url: "https://www.cbc.ca/news/canada/nova-scotia/cryptocurrency-still-missing-quadriga-s-cold-wallets-1.5040099" }
  - { label: "Ontario Securities Commission - QuadrigaCX investigation report (2020): Quadriga operated like a Ponzi scheme; clients were owed CAD 215 million and the trustee recovered or identified CAD 46 million", url: "https://www.osc.ca/quadrigacxreport/" }
  - { label: "US DOJ, SDNY - founder of Celsius sentenced to 12 years (May 8, 2025): Celsius halted withdrawals on June 12, 2022 and filed for bankruptcy on July 13, 2022", url: "https://www.justice.gov/usao-sdny/pr/founder-celsius-sentenced-12-years-fraud-and-market-manipulation" }
  - { label: "CNBC - Voyager Digital files for Chapter 11 bankruptcy (July 6, 2022)", url: "https://www.cnbc.com/2022/07/06/crypto-firm-voyager-digital-files-for-chapter-11-bankruptcy-protection.html" }
  - { label: "CNBC - BlockFi files for bankruptcy as FTX fallout spreads (November 28, 2022)", url: "https://www.cnbc.com/2022/11/28/blockfi-files-for-bankruptcy-as-ftx-fallout-spreads.html" }
  - { label: "Genesis Global Holdco - first-day declaration of A. Derar Islim, In re Genesis (Bankr. S.D.N.Y. 23-10063), Doc 17 (January 20, 2023): lending and borrowing paused November 16, 2022", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.314889/gov.uscourts.nysb.314889.17.0.pdf" }
  - { label: "SEC v. Bankman-Fried (S.D.N.Y. 22-cv-10501), complaint (December 13, 2022): a shortfall at FTX of approximately $8 billion; FTX and affiliates filed for Chapter 11 on November 11, 2022", url: "https://www.sec.gov/files/litigation/complaints/2022/comp-pr2022-219.pdf" }
  - { label: "Voyager plan administrator - eighth status report, In re Voyager Digital Holdings (Bankr. S.D.N.Y. 22-10943), Doc 1785 (September 25, 2024): creditors of Voyager Digital, LLC have received 70% of their allowed claims", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.312840/gov.uscourts.nysb.312840.1785.0.pdf" }
relatedTerms:
  - counterparty-risk
  - custodial-lightning-wallet
  - deterministic-wallet
  - escrow
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - security
  - wallet
  - watch-only-wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
liveWidget: ~
---

A custodial wallet is one where a third party holds the [private keys](/glossary/private-key) and you hold an account balance. Bitcoin held in a Coinbase, Cash App or Robinhood account works this way: the company holds the keys, and you see a balance.

What this actually means: you don't hold any bitcoin yourself. The company holds it, usually pooled with other customers' coins, and records your share in its own books. Its terms may say the coins are legally yours, but getting them out depends on the company. If it's solvent and cooperative, that works just like owning Bitcoin. If it isn't, it may not. Coinbase's own annual report warns that in a bankruptcy, the crypto it holds for customers could be treated as part of the estate and the customers as general unsecured creditors.

Custodians fail more often than crypto promoters acknowledge. Mt. Gox reported about 850,000 BTC missing in 2014. QuadrigaCX told a court in early 2019 that its cold wallets were out of reach because its CEO, who had died in December 2018, was the only one who could open them. The court-appointed monitor then found those wallets had been empty since April 2018, and the Ontario Securities Commission later concluded that Quadriga had operated like a Ponzi scheme. The 2022 contagion took Celsius, BlockFi, Voyager, Genesis, and FTX inside the same calendar year, with an $8B customer shortfall at FTX alone. Customer recoveries take years and are often partial. Voyager's creditors had received 70 percent of their allowed claims by September 2024, more than two years after the freeze, and Quadriga's trustee found only about CAD 46 million for clients who were owed CAD 215 million.

Even a working custodian holds the keys, so a technical problem on its side can leave your coins frozen, and if its keys are stolen or lost, the loss may be permanent. Coinbase lists both risks in its own annual report.

"Not your keys, not your coins" is the response. It's not a slogan; it's the technical reality. Bitcoin only delivers its core property - censorship-resistant, seizure-resistant, debasement-resistant money - to the actual key holder. Anyone else is just using a high-friction bank.

Custodial wallets have legitimate uses: as on-ramps from fiat (you have to start somewhere), as venues for active trading, as occasional payment rails. Just don't confuse them with owning Bitcoin. Move out to self-custody (see [Wallet](/glossary/wallet), [Hardware Wallet](/glossary/hardware-wallet)) for anything you actually want to keep.
