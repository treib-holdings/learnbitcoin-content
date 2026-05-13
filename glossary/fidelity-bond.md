---
title: "Fidelity Bond"
slug: fidelity-bond
draft: false
shortDefinition: "A mechanism (e.g., used in JoinMarket) where participants time-lock or stake BTC to prove commitment and reduce Sybil attacks."
keyTakeaways:
  - "Locks BTC to deter fake or spammy participants"
  - "Used in privacy tools like JoinMarket to raise attack costs"
  - "Strikes a balance between anonymity and accountability"
sources: []
relatedTerms:
  - counterparty-risk
  - custodial-wallet
  - escrow
  - escrowed-lightning-channel
  - hierarchical-multisig
  - m-n
  - quorum-signatures
liveWidget: ~
---

Fidelity bonds lock up some BTC for a period, creating a financial cost to maliciously spin up fake identities. In JoinMarket, for instance, participants can demonstrate they have 'skin in the game,' making Sybil attacks more expensive and thus less likely. The longer or larger the bond, the higher the trust participants might place in you.
This approach balances anonymity with accountability: you remain pseudonymous, but your locked BTC proves economic sincerity. If you misbehave or try to cheat, you forfeit time or potential opportunity costs. Fidelity bonds represent one of several innovations aimed at improving privacy protocols by hardening them against cheap sybil tactics.
