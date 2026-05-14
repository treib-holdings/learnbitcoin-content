---
title: "AML (Anti-Money Laundering)"
slug: aml-anti-money-laundering
draft: false
shortDefinition: "Regulatory measures designed to prevent criminals from converting illicit funds into legitimate assets, often enforced by exchanges."
keyTakeaways:
  - "Regulations to detect and report illicit funds"
  - "Often paired with KYC checks at exchanges"
  - "Balances legal compliance with user privacy"
sources: []
relatedTerms:
  - bitlicense
  - fincen
  - kyc-know-your-customer
liveWidget: ~
---

Anti-Money Laundering (AML) refers to the body of laws, regulations, and procedures designed to detect and prevent the conversion of illicit funds into legitimate financial flows. In Bitcoin practice, AML rules apply to the on-ramps and off-ramps (exchanges, custodial wallets, OTC desks, payment processors), not to the protocol itself or to self-hosted wallets.

The major regulatory frameworks Bitcoin businesses navigate:

- **Bank Secrecy Act (US, 1970)** establishes the basic obligations for financial institutions. FinCEN's 2013 guidance brought crypto exchanges in scope as Money Services Businesses.
- **FATF Recommendations (2019, "Travel Rule")** require Virtual Asset Service Providers to share originator and beneficiary information for transfers above thresholds. Adoption varies by jurisdiction.
- **EU AMLD5 / AMLD6 / MiCA** progressively pulled crypto custodial services into the same supervisory regime as banks.
- **National frameworks** range from light-touch (Switzerland, Singapore) to heavy (US, EU, much of Latin America).

The honest dual-use framing:

- **What AML legitimately deters:** the simplest kinds of money laundering and the obvious cases of bad actors moving large sums through licensed venues. Sanctions enforcement against publicly-listed addresses works.
- **What AML costs:** every customer who passes KYC creates a database row that gets breached, sold, or subpoenaed. Major exchange data breaches (Coinbase, Binance, Ledger's customer leak) are direct consequences of mandatory KYC. The data is also weaponized by chain-analysis firms (Chainalysis, Elliptic, TRM) that link real identities to on-chain activity, eroding the pseudonymity that's part of Bitcoin's design.
- **What AML doesn't deter:** sophisticated actors who use mixers, peer-to-peer trades, non-KYC venues, or jurisdictions outside the FATF perimeter. The compliance regime hits casual users harder than sophisticated criminals.

For an individual Bitcoiner, the practical takeaways are: assume any exchange interaction is logged and may be shared with governments; consider non-KYC alternatives (peer-to-peer trading, lightning-LSP-anonymous channels, Bitcoin ATMs in some jurisdictions) for amounts where the surveillance burden outweighs the convenience.
