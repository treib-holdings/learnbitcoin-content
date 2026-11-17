---
title: "AML (Anti-Money Laundering)"
slug: aml-anti-money-laundering
draft: false
updated: "2026-11-17"
shortDefinition: "Regulatory measures designed to prevent criminals from converting illicit funds into legitimate assets, often enforced by exchanges."
keyTakeaways:
  - "Regulations to detect and report illicit funds"
  - "Often paired with KYC checks at exchanges"
  - "Balances legal compliance with user privacy"
sources:
  - { label: "FinCEN - FIN-2013-G001 (March 18, 2013): an exchanger of virtual currency is a money services business, with registration, reporting and recordkeeping duties; a user is not, and that includes a person who creates the coins by their own computing effort and spends them", url: "https://www.fincen.gov/sites/default/files/shared/FIN-2013-G001.pdf" }
  - { label: "US Federal Trade Commission - What To Know About Cryptocurrency and Scams: scams often start on social media or a dating app, or with an unexpected text, email or call", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }
  - { label: "CNBC - Coinbase says hackers bribed staff to steal customer data and are demanding $20 million ransom (2025-05-15)", url: "https://www.cnbc.com/2025/05/15/coinbase-says-hackers-bribed-staff-to-steal-customer-data-and-are-demanding-20-million-ransom.html" }
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
- **What AML costs:** every customer who passes KYC creates a database row that gets breached, sold, or subpoenaed. The records leak: in May 2025 Coinbase said that criminals had bribed support staff to take customers' data. The data is also weaponized by chain-analysis firms (Chainalysis, Elliptic, TRM) that link real identities to on-chain activity, eroding the pseudonymity that's part of Bitcoin's design.
- **What AML doesn't deter:** sophisticated actors who use mixers, peer-to-peer trades, non-KYC venues, or jurisdictions outside the FATF perimeter. The compliance regime hits casual users harder than sophisticated criminals.

For an individual Bitcoiner, the practical takeaway is: assume any exchange interaction is logged and may be shared with governments. The ways to get bitcoin without that record are to mine it, to earn it or to be given it by someone you know in person; buying from a stranger is how many scams begin (see [KYC](/glossary/kyc-know-your-customer)).

See [Rat Poison, Tulips and a Pet Rock](/rabbit-hole/bitcoin-is-dead) for the 'money laundering' label: who used it, what the Treasury later wrote, and where the label is partly right.
