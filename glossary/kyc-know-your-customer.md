---
title: "KYC (Know Your Customer)"
slug: kyc-know-your-customer
draft: false
updated: "2026-10-13"
shortDefinition: "Regulations requiring businesses to verify user identities, aimed at preventing money laundering and financial crime."
keyTakeaways:
  - "Mandates user ID checks before providing financial services"
  - "Aims to fight crime but intrudes on personal privacy"
  - "Spurs demand for decentralized or non-KYC alternatives"
sources:
  - { label: "FinCEN - FIN-2013-G001, Application of FinCEN's Regulations to Persons Administering, Exchanging, or Using Virtual Currencies (2013-03-18)", url: "https://www.fincen.gov/sites/default/files/shared/FIN-2013-G001.pdf" }
  - { label: "FinCEN - FIN-2019-G001, Application of FinCEN's Regulations to Certain Business Models Involving Convertible Virtual Currencies (2019-05-09)", url: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" }
  - { label: "eCFR - 31 CFR 1022.210, Anti-money laundering programs for money services businesses (accessed 2026-10-13)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-B/section-1022.210" }
  - { label: "EUR-Lex - Directive (EU) 2018/843 (AMLD5), bringing virtual currency exchange and custodian wallet providers under EU anti-money laundering rules (2018-05-30)", url: "https://eur-lex.europa.eu/eli/dir/2018/843/oj" }
  - { label: "U.S. Department of the Treasury - Treasury Sanctions Notorious Virtual Currency Mixer Tornado Cash (2022-08-08)", url: "https://home.treasury.gov/news/press-releases/jy0916" }
  - { label: "CNBC - Coinbase says hackers bribed staff to steal customer data and are demanding $20 million ransom (2025-05-15)", url: "https://www.cnbc.com/2025/05/15/coinbase-says-hackers-bribed-staff-to-steal-customer-data-and-are-demanding-20-million-ransom.html" }
relatedTerms:
  - aml-anti-money-laundering
  - bitlicense
  - cbdc-central-bank-digital-currency
  - centralized-exchange-cex
  - chain-analysis
  - custodial-wallet
  - fiat
  - fincen
  - greenlist
  - security
liveWidget: ~
---

KYC - **K**now **Y**our **C**ustomer - is the regulatory regime requiring financial service providers to verify the identity of their users. In the US it comes out of the Bank Secrecy Act: [FinCEN](/glossary/fincen) said in its 2013 guidance that anyone exchanging bitcoin for dollars as a business is a money services business, which means registering, running an [anti-money laundering](/glossary/aml-anti-money-laundering) program that verifies customer identity, keeping records, and filing reports. The EU reached the same place in 2018. For Bitcoin, this typically means [centralized exchanges](/glossary/centralized-exchange-cex), [custodial wallets](/glossary/custodial-wallet), and on-ramp services collect government-issued ID, photos, addresses, and often more before letting you transact.

The official rationale: prevent money laundering and terrorism financing. The unofficial reality is more nuanced.

Two honest observations about KYC in practice:

- **It raises the cost of casual fraud.** A scammer who has to show a passport to cash out has one more thing to lose.
- **It is weak against serious crime.** Sophisticated criminals route around it. When the US Treasury sanctioned the Tornado Cash mixer in 2022, it said the service had laundered more than $7 billion since 2019, including over $455 million stolen by North Korea's Lazarus Group - money that never passed through a verified account in the thieves' own names. Meanwhile, KYC databases become honeypots. In May 2025 Coinbase disclosed that criminals had bribed overseas support agents to pull customer names, addresses, phone numbers, partial Social Security numbers, government ID images, and account balances, then used the data in social-engineering attacks that tricked customers into sending funds to the attackers; the company put the cleanup cost at up to $400 million. A name, a home address, and a balance is also the shopping list for an in-person robbery, the so-called wrench attack.

For ordinary users, KYC creates several real costs:

- **Surveillance.** Your on-chain history becomes linked to your real-world identity at the moment you withdraw from a KYC venue, and the venue is required to keep the records. Once linked, it stays linked.
- **Censorship vector.** A KYC-bound exchange can freeze your account, demand additional verification on withdrawal, refuse to release funds, or close your account for any reason.
- **Data risk.** Your ID photos sit on servers, and on the screens of support contractors, that get breached.
- **Geographic asymmetry.** KYC rules differ from country to country and change over time. The US regime dates from 2013, the EU's from 2018, and the thresholds and paperwork vary with them.

Non-KYC ways to get bitcoin exist: mining it, earning it as payment for your work or goods, and buying it from another person directly. FinCEN's own guidance keeps the small cases outside the regulated zone: a person who obtains bitcoin and spends it on goods and services is a "user", not a money transmitter, and so is someone who sells a little on an infrequent basis and not for profit. Peer-to-peer marketplaces that put buyers and sellers in direct contact are the organized form of that last option. They're more friction than the giants but preserve the properties most people came to Bitcoin for.

A defensible Bitcoiner approach: KYC is sometimes the only available on-ramp, and that's fine to use deliberately. But minimize how much of your stack ever touches it, and avoid making KYC venues the long-term custody point.

See [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for how the exchange record becomes the anchor that names an entire address cluster.
