---
title: "Mixing Service"
slug: mixing-service
draft: false
shortDefinition: "A third-party or protocol-based solution (e.g., CoinJoin) to blend users' transactions for improved privacy."
keyTakeaways:
  - "Obfuscates coin origins by blending multiple inputs/outputs"
  - "CoinJoin and other trustless protocols reduce reliance on custodial mixers"
  - "Enhances privacy but may face regulatory scrutiny"
sources: []
relatedTerms:
  - address-clustering
  - coinjoin
  - paper-wallet
  - payjoin
  - shielded-coinjoin
  - stealth-address
liveWidget: ~
---

A mixing service is any system that combines multiple users' Bitcoin transactions to break the on-chain link between input and output addresses. The umbrella term covers a wide range of designs with very different trust assumptions.

Two distinct categories:

**Custodial mixers.** Users send coins to a service, which holds them temporarily and later sends back "equivalent" coins from a different pool. The user trusts the operator to (a) actually return funds, (b) not log who deposited what, and (c) not be a honeypot. Historically these mixers (Bitcoin Fog, Helix, ChipMixer) have repeatedly been seized, prosecuted, or revealed to be law-enforcement honeypots. As of 2026, custodial mixers are essentially dead as a privacy tool - the legal and operational risk is overwhelming.

**Non-custodial coordination protocols** like [CoinJoin](/glossary/coinjoin). Users collaboratively build a single transaction that pools their inputs. No third party ever holds the funds; the mixing is done by cryptographic protocol, not by trust. JoinMarket, Joinstr, and similar decentralized protocols are the practical 2026 options after the 2024 shutdowns of Wasabi and Whirlpool's centralized coordinators.

**[PayJoin](/glossary/payjoin)** is a smaller-scale two-party variant that achieves similar privacy goals through ordinary-looking transactions.

The practical landscape:

- Custodial mixers: legally hazardous, demonstrably risky, mostly avoid.
- CoinJoin coordinators run by central operators: same trajectory as custodial; the Wasabi/Whirlpool shutdowns showed the legal pressure.
- Decentralized CoinJoin protocols: alive but smaller-scale than the centralized ones used to be.
- PayJoin: small but practical for two-party privacy.
- [Lightning](/glossary/lightning-network) routing: arguably the most-used "mixing" mechanism in Bitcoin today, since Lightning payments don't appear on the public chain at all.

If you're considering using a mixer, do your research on the specific service's history, legal jurisdiction, and trust assumptions. The category includes legitimate privacy tools, ineffective theater, and outright traps.
