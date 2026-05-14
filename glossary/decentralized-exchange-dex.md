---
title: "Decentralized Exchange (DEX)"
slug: decentralized-exchange-dex
draft: false
shortDefinition: "A trading platform without a central custodian, often using on-chain order books or atomic swaps for peer-to-peer trades."
keyTakeaways:
  - "Users trade directly without surrendering private keys"
  - "Lower counterparty risk but often lower liquidity"
  - "Implementation complexity varies depending on chain"
sources: []
relatedTerms:
  - bitlicense
  - centralized-exchange-cex
  - decentralization
  - exchange
  - exchange-api-key
liveWidget: ~
---

A decentralized exchange (DEX) is a trading venue where no central party holds user funds. Trades happen peer-to-peer, secured by cryptographic protocols rather than by trusting an operator.

For Bitcoin specifically, the main DEX patterns are:

- **[Atomic swaps](/glossary/atomic-swap)** between BTC and other assets - HTLC-based trustless exchange. Slower than centralized order books but custody-free.
- **Robosats** - a Tor-only peer-to-peer marketplace using Lightning escrow. Order book matches BTC against fiat (sent via local payment rails); escrow is held by a Lightning HTLC, not by the platform.
- **Bisq** - longer-established peer-to-peer marketplace with on-chain multisig escrow. Slower than Robosats but more flexible payment methods.
- **Submarine-swap providers** like Boltz Exchange for trustless on-chain ↔ Lightning conversion.

Strengths:

- **No custodian.** You never hand your keys to a service. Counterparty risk is bounded to the specific trade and protected by escrow.
- **No KYC** in most cases. Some peer-to-peer venues operate fully anonymously; others let you choose your level of identification.
- **Censorship resistance.** No central operator to be subpoenaed or pressured into freezing your account.

Tradeoffs:

- **Liquidity is thinner.** Centralized exchanges have deeper order books for almost every pair.
- **UX is rougher.** DEX interfaces are typically less polished than commercial exchanges.
- **Fiat ramps are local.** You're often paying via bank transfer, cash deposit, or local payment apps rather than a unified deposit flow.

For users who care about avoiding [counterparty risk](/glossary/counterparty-risk) and [KYC](/glossary/kyc-know-your-customer), DEXs are the principled answer. They're not as smooth as Coinbase, but they preserve the properties that brought you to Bitcoin in the first place.
