---
title: "Decentralized Exchange (DEX)"
slug: decentralized-exchange-dex
draft: false
updated: "2026-11-17"
shortDefinition: "A trading platform without a central custodian, where users trade with each other through peer-to-peer order books or atomic swaps."
keyTakeaways:
  - "Users trade directly without surrendering private keys"
  - "Lower custody risk, but more manual steps and a stranger on the other side"
  - "Implementation complexity varies depending on chain"
sources:
  - { label: "Bitcoin Wiki - Atomic swap: two parties swap coins on two chains without trusting a third party, using hash-locked transactions on each chain with time-locked refunds", url: "https://en.bitcoin.it/wiki/Atomic_swap" }
  - { label: "FinCEN - FIN-2019-G001 (May 9, 2019), sections 2.1, 4.1 and 5.1: peer-to-peer trading platforms let buyers and sellers find each other, and some also act as an intermediary; a platform that is only a forum, where the two settle between their own wallets, is not a money transmitter; a person who buys and sells as a business is one, and must register and verify customers' identity, unless the trading is infrequent and not for profit", url: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" }
  - { label: "Bitcoin Wiki - Contract, example 2: escrow and dispute mediation: for a trade with somebody the buyer does not know or trust, buyer, merchant and mediator each provide a key to a 2-of-3 multisig; any two of them can spend, so the mediator decides only if there is a dispute", url: "https://en.bitcoin.it/wiki/Contract" }
  - { label: "Bitcoin Optech - Hold invoices: Lightning invoices where the receiver does not release the preimage at once on receiving a payment, and then accepts the payment, rejects it or lets it time out", url: "https://bitcoinops.org/en/topics/hold-invoices/" }
  - { label: "US Federal Trade Commission - What To Know About Cryptocurrency and Scams: scams often start on social media or a dating app, or with an unexpected text, email or call; credit and debit cards have legal protections if something goes wrong, and cryptocurrency payments typically are not reversible", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }
  - { label: "Boltz backend README - non-custodial swaps between different Bitcoin layers", url: "https://github.com/BoltzExchange/boltz-backend" }
  - { label: "Boltz docs - Swap types: submarine swaps move bitcoin from the chain to Lightning, reverse submarine swaps from Lightning to the chain", url: "https://github.com/BoltzExchange/boltz-backend/blob/master/docs/lifecycle.md" }
relatedTerms:
  - bitlicense
  - centralized-exchange-cex
  - decentralization
  - exchange
  - exchange-api-key
liveWidget: ~
---

A decentralized exchange (DEX) is a trading venue where no central party holds users' balances. Trades happen peer-to-peer. Depending on the venue, they're secured by cryptographic contracts or by an escrow that a third party can settle, rather than by an operator keeping everyone's money.

For Bitcoin specifically, the main DEX patterns are:

- **[Atomic swaps](/glossary/atomic-swap)** between BTC and other assets - HTLC-based trustless exchange. Slower than a centralized exchange, since each side needs a transaction on its own chain, but custody-free.
- **Peer-to-peer marketplaces** - trading platforms where a buyer and a seller of bitcoin find each other and settle the trade between themselves, bitcoin one way and ordinary money the other. Some platforms only match the two; others also step into the trade as an intermediary. The bitcoin can sit in [escrow](/glossary/escrow) while the money moves: locked so that any two of the buyer, the seller and a mediator must sign to release it, or, on Lightning, paid with a hold invoice, which lets the receiving node take a payment without settling it and then accept it or let it go back. In a dispute it is the mediator, or whoever runs that node, who decides where the coins go.
- **Submarine-swap providers** like Boltz Exchange, for non-custodial swaps between on-chain bitcoin and Lightning.

Strengths:

- **No custodial account.** You don't park a balance with the venue, so your exposure is limited to the trade in progress.
- **No identity check required of the venue.** Under US federal rules, a platform that only gives buyers and sellers a place to post offers, and leaves them to settle between their own wallets, is not a money transmitter, so the duty to verify customers' identity that binds an exchange does not fall on it. It does fall on anyone who buys and sells bitcoin as a business, however they find their customers; only a person who trades infrequently and not for profit is exempt.
- **No account to freeze.** With no stored balance, the venue holds nothing of yours that it could freeze.

Tradeoffs:

- **A stranger on the other side.** You are trading with someone you do not know, and dealing with strangers is how many scams begin.
- **More manual steps.** You arrange the fiat payment with the other trader, send it yourself, and confirm receipt by hand.
- **Payments that don't match.** A card payment has legal protections if something goes wrong. A bitcoin payment typically cannot be reversed: you usually get the money back only if the person you paid sends it back. In a trade between strangers, one side can be final while the other is not.

Decentralized venues lower the [counterparty risk](/glossary/counterparty-risk) of leaving funds with an exchange, at the cost of more manual work and a stranger on the other side. This site recommends no marketplace: [If You Decide to Hold Some](/journey/using-bitcoin) shows the careful way to buy, and [KYC](/glossary/kyc-know-your-customer) explains the identity checks. See [centralized exchange](/glossary/centralized-exchange-cex) for the other side of the comparison.
