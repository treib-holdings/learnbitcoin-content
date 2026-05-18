---
title: "Custodial Wallet"
slug: custodial-wallet
draft: false
shortDefinition: "A wallet where a third party holds private keys on the user's behalf, similar to a bank holding customer funds."
keyTakeaways:
  - "Funds controlled by a third-party entity"
  - "Convenient but introduces significant counterparty risk"
  - "Contrasts with the self-custody principles of Bitcoin"
sources: []
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

A custodial wallet is one where a third party holds the [private keys](/glossary/private-key) and you hold an account balance. Coinbase, Binance, Cash App, Robinhood - any service where you "have BTC" but never see a seed phrase is custodial.

What this actually means: you don't own Bitcoin. You own a *claim* on Bitcoin held by a company, recorded in that company's internal database. If they're solvent and cooperative, that claim works just like owning Bitcoin. If they're not, it doesn't.

Custodians fail more often than crypto promoters acknowledge. Mt. Gox lost 850,000 BTC in 2014. QuadrigaCX lost the keys with its CEO in 2019. The 2022 contagion took Celsius, BlockFi, Voyager, Genesis, and FTX inside the same calendar year, with an $8B customer shortfall at FTX alone. Customer recoveries take years and are usually partial.

Even working custodians can freeze your account, demand additional KYC, restrict withdrawals during volatility, or quietly lose access to their own hot wallets via internal compromise. The risk pattern is structural, not theoretical.

"Not your keys, not your coins" is the response. It's not a slogan; it's the technical reality. Bitcoin only delivers its core property - censorship-resistant, seizure-resistant, debasement-resistant money - to the actual key holder. Anyone else is just using a high-friction bank.

Custodial wallets have legitimate uses: as on-ramps from fiat (you have to start somewhere), as venues for active trading, as occasional payment rails. Just don't confuse them with owning Bitcoin. Move out to self-custody (see [Wallet](/glossary/wallet), [Hardware Wallet](/glossary/hardware-wallet)) for anything you actually want to keep.
