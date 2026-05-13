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
liveWidget: ~
---

A custodial wallet is one where a third party holds the [private keys](/glossary/private-key) and you hold an account balance. Coinbase, Binance, Cash App, Robinhood - any service where you "have BTC" but never see a seed phrase is custodial.

What this actually means: you don't own Bitcoin. You own a *claim* on Bitcoin held by a company, recorded in that company's internal database. If they're solvent and cooperative, that claim works just like owning Bitcoin. If they're not, it doesn't.

The historical record of custodians failing is long:

- **Mt. Gox** (2014) - 850,000 BTC lost in a slow-rolling hack. Customers got partial reimbursement starting in 2024, after a decade of bankruptcy proceedings.
- **QuadrigaCX** (2019) - $190M CAD gone when the CEO died (or allegedly died) with the keys.
- **Celsius / BlockFi / Voyager / Genesis** (2022) - all collapsed within months of each other when the "yield" they paid customers turned out to be funded by lending into a leveraged bubble.
- **FTX** (2022) - $8B customer shortfall. CEO Sam Bankman-Fried convicted of fraud.

Even working custodians can freeze your account, demand additional KYC, restrict withdrawals during volatility, or simply lose access to their own hot wallets via internal compromise. The risks are not theoretical and not rare.

"Not your keys, not your coins" is the response. It's not a slogan; it's the technical reality. Bitcoin only delivers its core property - censorship-resistant, seizure-resistant, debasement-resistant money - to the actual key holder. Anyone else is just using a high-friction bank.

Custodial wallets have legitimate uses: as on-ramps from fiat (you have to start somewhere), as venues for active trading, as occasional payment rails. Just don't confuse them with owning Bitcoin. Move out to self-custody (see [Wallet](/glossary/wallet), [Hardware Wallet](/glossary/hardware-wallet)) for anything you actually want to keep.
