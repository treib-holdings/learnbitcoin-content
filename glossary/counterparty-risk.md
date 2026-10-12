---
title: "Counterparty Risk"
slug: counterparty-risk
draft: false
updated: "2026-10-12"
shortDefinition: "The possibility that the other party in a deal fails to fulfill their obligations, reduced if you hold your own keys."
keyTakeaways:
  - "Exists whenever you rely on a third party to hold funds"
  - "Self-custody in Bitcoin drastically reduces this risk"
  - "Multisig and trustless contracts can further protect both sides"
sources:
  - { label: "US DOJ, SDNY - founder of Celsius sentenced to 12 years (May 8, 2025): Celsius halted customer withdrawals on June 12, 2022, when hundreds of thousands of customers had $4.7 billion in inaccessible assets on the platform; it filed for bankruptcy on July 13, 2022", url: "https://www.justice.gov/usao-sdny/pr/founder-celsius-sentenced-12-years-fraud-and-market-manipulation" }
  - { label: "Voyager Digital - first-day declaration of Stephen Ehrlich, In re Voyager Digital Holdings (Bankr. S.D.N.Y. 22-10943), Doc 15 (July 6, 2022): on July 1, 2022 the company froze all withdrawals and trading on its platform; the petition date was July 5, 2022", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.312840/gov.uscourts.nysb.312840.15.0.pdf" }
  - { label: "CNBC - BlockFi files for bankruptcy as FTX fallout spreads (November 28, 2022): BlockFi filed for Chapter 11 in the District of New Jersey after the implosion of FTX, listing more than 100,000 creditors", url: "https://www.cnbc.com/2022/11/28/blockfi-files-for-bankruptcy-as-ftx-fallout-spreads.html" }
  - { label: "Kroll, FTX case information: FTX Trading Ltd. and its affiliated debtors filed for Chapter 11 on November 11 and 14, 2022; the plan became effective on January 3, 2025", url: "https://restructuring.ra.kroll.com/FTX/" }
  - { label: "Genesis Global Holdco - first-day declaration of A. Derar Islim, In re Genesis (Bankr. S.D.N.Y. 23-10063), Doc 17 (January 20, 2023): Genesis paused all lending and borrowing on November 16, 2022 and filed for Chapter 11 on January 19, 2023", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.314889/gov.uscourts.nysb.314889.17.0.pdf" }
  - { label: "Voyager plan administrator - eighth status report, In re Voyager Digital Holdings (Bankr. S.D.N.Y. 22-10943), Doc 1785 (September 25, 2024): with the second distribution, creditors of Voyager Digital, LLC have received a total of 70% of their allowed claims", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.312840/gov.uscourts.nysb.312840.1785.0.pdf" }
  - { label: "Celsius Network - notice of effective date and commencement of distributions, In re Celsius Network (Bankr. S.D.N.Y. 22-10964), Doc 4298 (January 31, 2024): allowed claims were valued as of the petition date, July 13, 2022; the illustrative initial distribution was 57.9% in liquid cryptocurrency plus 14.9% in stock of the new mining company", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.312902/gov.uscourts.nysb.312902.4298.0.pdf" }
  - { label: "Celsius Network - notice of commencement of second plan distribution, Doc 7871 (November 27, 2024): with the second distribution, each eligible creditor will have received cash or liquid cryptocurrency equal to about 60.4% of the value of its claims as of the petition date", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.312902/gov.uscourts.nysb.312902.7871.0.pdf" }
  - { label: "BlockFi plan administrator - third status report and announcement of planned 100% distribution on customer claims, In re BlockFi (Bankr. D.N.J. 22-19361), Doc 2357 (July 22, 2024): a deal monetizing its claims against FTX is sufficient to fund a distribution of 100% of the allowed dollar amount of all allowed customer claims", url: "https://storage.courtlistener.com/recap/gov.uscourts.njb.1094078/gov.uscourts.njb.1094078.2357.0.pdf" }
  - { label: "In re FTX Trading (D. Del. 22-11068), Doc 7090-1 - Digital Assets Conversion Table (filed February 7, 2024): BTC at $16,871.63", url: "https://restructuring.ra.kroll.com/FTX/ExternalCall-DownloadPDF?id1=MzA1ODIxOA%3D%3D&id2=0" }
  - { label: "In re FTX Trading (D. Del. 22-11068), Doc 36154 - FTX Recovery Trust financial report, Q2 2026 (filed August 17, 2026): the plan became effective January 3, 2025; interest on convenience claims accrued from the petition date through their distribution date, February 18, 2025; as of the July 31, 2026 distribution, all allowed interest-bearing claims had received, or been reserved for, a cumulative recovery of at least 100%", url: "https://restructuring.ra.kroll.com/FTX/ExternalCall-DownloadPDF?id1=NDA5NDM1MQ%3D%3D&id2=0" }
  - { label: "mempool.space API - bitcoin price on February 18, 2025 (about $95,800)", url: "https://mempool.space/api/v1/historical-price?currency=USD&timestamp=1739836800" }
relatedTerms:
  - clawback-mechanism
  - covenants
  - custodial-lightning-wallet
  - custodial-wallet
  - escrow
  - escrowed-lightning-channel
  - mining-colocation
  - one-way-peg
  - sidechain
liveWidget: ~
---

Counterparty risk is the risk that someone you depend on - to hold money, complete a trade, or honor a contract - fails to do so. In traditional finance it's everywhere: bank deposits depend on bank solvency, securities depend on broker integrity, derivatives depend on the writer being able to pay.

Bitcoin's defining property is that you can eliminate counterparty risk for the asset itself. When you hold the [private keys](/glossary/private-key) to your own BTC, no third party can stop you from spending it, freeze your access, demand permission, or go bankrupt and take it with them. The BTC is yours in a way that very few other financial instruments allow.

You introduce counterparty risk the moment you hand keys to anyone else:

- **Exchange accounts** ([custodial wallets](/glossary/custodial-wallet)) - depend on the exchange's solvency, custody practices, and willingness to release your funds.
- **Lending platforms** - depend on the platform's ability to recover from defaulting borrowers and avoid being a Ponzi.
- **"Yield" products** - depend on someone, somewhere, generating that yield without blowing up.
- **Wrapped or pegged Bitcoin on other chains** - depend on the bridge custodian or smart contract being honest and uncompromised.

The [2022 contagion](/glossary/celsius-genesis-3ac-cluster) was a real-world stress test. Celsius froze withdrawals in June 2022 and [Voyager](/glossary/voyager-digital) did in July. [BlockFi](/glossary/blockfi) and [FTX](/glossary/ftx) filed for bankruptcy that November, and Genesis, which froze its lending business the same month, filed in January 2023. Billions of dollars of customer balances became bankruptcy claims that took years to pay out.

Customers who had moved BTC into "yield" arrangements got some or all of it back, but on the bankruptcy's terms, not theirs. Voyager's creditors had received 70 percent of their allowed claims by September 2024. Celsius creditors got about 60 percent back in cash and crypto over two distributions in 2024, plus shares in a new mining company. BlockFi announced in 2024 that it would pay customer claims in full, and FTX had paid or set aside 100 percent of every allowed customer claim by July 2026. "In full" meant in dollars, though, and 2022 dollars at that. Claims were fixed as of the day each platform filed: Celsius valued its customers' claims as of 13 July 2022, and FTX's conversion table priced bitcoin at $16,871. FTX's first payouts came in 2025, when bitcoin was trading above $90,000. Customers who held their own keys lost nothing.

The mantra is "not your keys, not your coins." It's not metaphor; it's the precise, technical reality. See [Custodial Wallet](/glossary/custodial-wallet) and [Wallet](/glossary/wallet) for the practical path out.
