---
title: "Counterparty Risk"
slug: counterparty-risk
draft: false
shortDefinition: "The possibility that the other party in a deal fails to fulfill their obligations, reduced if you hold your own keys."
keyTakeaways:
  - "Exists whenever you rely on a third party to hold funds"
  - "Self-custody in Bitcoin drastically reduces this risk"
  - "Multisig and trustless contracts can further protect both sides"
sources: []
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

The 2022 contagion was a real-world stress test: Celsius, BlockFi, Voyager, Genesis, and FTX all collapsed inside one year, with billions in customer counterparty exposure becoming partial bankruptcy claims that take years to resolve. Customers who had moved BTC into "yield" arrangements lost most of it. Customers who held their own keys lost nothing.

The mantra is "not your keys, not your coins." It's not metaphor; it's the precise, technical reality. See [Custodial Wallet](/glossary/custodial-wallet) and [Wallet](/glossary/wallet) for the practical path out.
