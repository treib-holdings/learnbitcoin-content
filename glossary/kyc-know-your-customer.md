---
title: "KYC (Know Your Customer)"
slug: kyc-know-your-customer
draft: false
shortDefinition: "Regulations requiring businesses to verify user identities, aimed at preventing money laundering and financial crime."
keyTakeaways:
  - "Mandates user ID checks before providing financial services"
  - "Aims to fight crime but intrudes on personal privacy"
  - "Spurs demand for decentralized or non-KYC alternatives"
sources: []
relatedTerms:
  - aml-anti-money-laundering
  - bitlicense
  - cbdc-central-bank-digital-currency
  - centralized-exchange-cex
  - fiat
  - fincen
  - greenlist
  - security
liveWidget: ~
---

KYC - **K**now **Y**our **C**ustomer - is the regulatory regime requiring financial service providers to verify the identity of their users. For Bitcoin, this typically means [centralized exchanges](/glossary/centralized-exchange-cex), [custodial wallets](/glossary/custodial-wallet), and on-ramp services collect government-issued ID, photos, addresses, and often more before letting you transact.

The official rationale: prevent money laundering and terrorism financing. The unofficial reality is more nuanced.

Two honest observations about KYC in practice:

- **It does deter casual crime.** Petty fraudsters who would have used Bitcoin's pseudonymity for trivial scams find the on-ramp friction discouraging. Some.
- **It does almost nothing against serious crime.** Sophisticated criminals route around KYC easily. The Lazarus Group doesn't sign up to Coinbase with their real names. Meanwhile, KYC databases become honeypots: every exchange that's been hacked since 2014 has leaked KYC data, including passport scans and home addresses, to attackers who use it for targeted physical attacks ("wrench attacks") on Bitcoin holders.

For ordinary users, KYC creates several real costs:

- **Surveillance.** Your on-chain history becomes legally linked to your real-world identity at the moment you withdraw from a KYC venue. Once linked, it stays linked.
- **Censorship vector.** A KYC-bound exchange can freeze your account, demand additional verification on withdrawal, refuse to release funds, or close your account for any reason.
- **Data risk.** Your ID photos are stored on servers that get hacked.
- **Geographic asymmetry.** KYC requirements vary wildly. The same activity that's frictionless in one country is heavily regulated in another.

Non-KYC options exist for Bitcoin specifically: peer-to-peer markets (Robosats, Bisq), mining your own BTC, accepting Bitcoin as payment, [submarine swaps](/glossary/submarine-swap), and decentralized exchange venues. They're more friction than the giants but preserve the properties most people came to Bitcoin for.

A defensible Bitcoiner approach: KYC is sometimes the only available on-ramp, and that's fine to use deliberately. But minimize how much of your stack ever touches it, and avoid making KYC venues the long-term custody point.
