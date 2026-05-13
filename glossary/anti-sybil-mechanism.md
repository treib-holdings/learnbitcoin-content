---
title: "Anti-Sybil Mechanism"
slug: anti-sybil-mechanism
draft: false
shortDefinition: "Any technique preventing an attacker from cheaply spinning up numerous nodes or identities, thus maintaining fair consensus."
keyTakeaways:
  - "Stops attackers from creating infinite fake identities"
  - "Proof-of-work is Bitcoin's main anti-Sybil method"
  - "Crucial for maintaining decentralized consensus"
sources: []
relatedTerms:
  - byzantine-fault-tolerance
  - decentralization
  - proof-work-pow
liveWidget: ~
---

An anti-sybil mechanism is any system designed to prevent an attacker from gaining disproportionate influence by creating many fake identities. The name comes from a 2002 paper by John Douceur describing the "Sybil attack" - named after the multiple-personality case study.

In open distributed systems where anyone can join, sybil attacks are the central security problem. If creating a new identity is free, an attacker can create unlimited identities and dominate any voting or consensus process. Anti-sybil mechanisms make identities *costly* in a way that bounds an attacker's influence by their resources rather than by their willingness to register accounts.

Bitcoin's primary anti-sybil mechanism is **[proof-of-work](/glossary/proof-work-pow)**. Each "vote" (block) requires real computational work and real energy expenditure. An attacker can't pretend to be many [miners](/glossary/miner) - they have to actually do the work. To get 51% of voting power, they need 51% of global hash rate, which requires 51% of global mining infrastructure. The cost is staggering and growing.

Other anti-sybil approaches used in different systems:

- **Proof-of-stake.** Identities are weighted by economic stake in the system. An attacker has to acquire significant amounts of the underlying asset, which is publicly visible and expensive.
- **Identity verification.** Real-world ID checks ([KYC](/glossary/kyc-know-your-customer)-style). Strong but compromises privacy and adds trusted third parties.
- **Web of trust.** Identities are vouched for by other identities. Brittle but used by PGP-era systems.
- **[Fidelity bonds](/glossary/fidelity-bond).** Time-locked capital deposits. Used in protocols like JoinMarket for sybil resistance without a central authority.
- **Captchas / proof-of-personhood.** Various weak proxies for "is this a unique human." Generally cheap to defeat at scale.

Bitcoin's choice of proof-of-work has trade-offs (energy use, centralization pressure toward cheap-power regions) but solves the open-membership sybil problem cleanly. Many of the cryptocurrencies that exist today are essentially experiments in alternative anti-sybil mechanisms - with mixed results on whether the alternatives actually hold up under adversarial conditions.

See [Byzantine Fault Tolerance](/glossary/byzantine-fault-tolerance) for the broader consensus problem this is a piece of.
