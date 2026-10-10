---
title: "Decentralized Exchange (DEX)"
slug: decentralized-exchange-dex
draft: false
updated: "2026-10-10"
shortDefinition: "A trading platform without a central custodian, where users trade with each other through peer-to-peer order books or atomic swaps."
keyTakeaways:
  - "Users trade directly without surrendering private keys"
  - "Lower custody risk, but smaller trades and more manual steps"
  - "Implementation complexity varies depending on chain"
sources:
  - { label: "Bitcoin Wiki - Atomic swap: two parties swap coins on two chains without trusting a third party, using hash-locked transactions on each chain with time-locked refunds", url: "https://en.bitcoin.it/wiki/Atomic_swap" }
  - { label: "RoboSats README - exchange bitcoin for national currencies; Lightning hold invoices to minimize custody and trust; trade steps; avatars from a random token", url: "https://github.com/RoboSats/robosats" }
  - { label: "RoboSats docs - Trade Escrow: the escrow hold invoice is locked toward the coordinator node, which settles or cancels it; RoboSats holds the funds while paying the buyer; disputes go to RoboSats staff; irreversible payment methods advised", url: "https://learn.robosats.org/docs/escrow/" }
  - { label: "RoboSats docs - The TOR Network: access over Tor strongly recommended; I2P is a supported alternative", url: "https://learn.robosats.org/docs/tor/" }
  - { label: "RoboSats docs - Private: no registration; traders are advised to use a different robot identity for every trade", url: "https://learn.robosats.org/docs/private/" }
  - { label: "RoboSats docs - Exchange Limits: maximum single trade size, set so Lightning payments can find a route", url: "https://learn.robosats.org/docs/limits/" }
  - { label: "Bisq wiki - Introduction: a distributed peer-to-peer network that is hard for any single entity to shut down; no custody; no registration or KYC", url: "https://bisq.wiki/Introduction" }
  - { label: "Bisq wiki - Bisq 2: Bisq v1 launched on mainnet in April 2016; 2-of-2 multisig (Bisq 1) versus reputation-based Bisq Easy", url: "https://bisq.wiki/Bisq_2" }
  - { label: "Bisq wiki - Security deposit: buyer and seller lock deposits with the trade funds in a 2-of-2 multisig", url: "https://bisq.wiki/Security_deposit" }
  - { label: "Bisq wiki - Bisq Easy: no security deposits; security rests on the seller's reputation, so it suits small amounts; buyers may reveal bank details", url: "https://bisq.wiki/Bisq_Easy" }
  - { label: "Bisq wiki - Payment methods: national bank transfer, cash deposit, Zelle, SEPA and others", url: "https://bisq.wiki/Payment_methods" }
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

A decentralized exchange (DEX) is a trading venue where no central party holds users' balances. Trades happen peer-to-peer. Depending on the venue, they're secured by cryptographic contracts, deposits or the traders' reputations, rather than by an operator keeping everyone's money.

For Bitcoin specifically, the main DEX patterns are:

- **[Atomic swaps](/glossary/atomic-swap)** between BTC and other assets - HTLC-based trustless exchange. Slower than a centralized exchange, since each side needs a transaction on its own chain, but custody-free.
- **RoboSats** - a peer-to-peer marketplace built to run over Tor, using Lightning escrow. Its order book matches BTC against fiat (sent via local payment rails). The seller locks the bitcoin with a Lightning hold invoice to the coordinator's node: the payment can't be pulled back, but it isn't settled either. When the seller confirms the fiat arrived, the coordinator settles it and pays the buyer, briefly holding the funds while that payment goes through. If the trade goes wrong, RoboSats staff decide who gets the escrow. So the platform doesn't keep a balance for you, but it does control where the escrow ends up.
- **Bisq** - an older peer-to-peer marketplace, live since April 2016. Its original trade protocol (Bisq 1) locks the trade amount and both traders' security deposits in an on-chain 2-of-2 multisig until the trade is done. The newer Bisq 2 app offers Bisq Easy, which drops the deposits and relies on the seller's reputation instead, so it's meant for small amounts.
- **Submarine-swap providers** like Boltz Exchange, for non-custodial swaps between on-chain bitcoin and Lightning.

Strengths:

- **No custodial account.** You don't park a balance with the venue, so your exposure is limited to the trade in progress.
- **No KYC** on Bisq or RoboSats. Neither asks you to register, and RoboSats advises using a new robot avatar for each trade. The fiat payment itself can still show your name or bank details to the other trader.
- **Censorship resistance.** Bisq runs on a peer-to-peer network of its users' own computers, which makes it hard for any one party to shut down, and with no stored balance there's no account to freeze.

Tradeoffs:

- **Smaller trades.** RoboSats caps the size of any single trade so the Lightning payments can find a route, and Bisq Easy is meant for small amounts.
- **More manual steps.** You arrange the fiat payment with the other trader, send it yourself, and confirm receipt by hand, all against a timer. On RoboSats, a seller who lets the timer run out after the fiat has arrived risks losing the dispute and their bond.
- **Fiat ramps are local.** You're often paying via bank transfer, cash deposit, or local payment apps rather than a unified deposit flow. Some of those payments can be reversed after the bitcoin is gone, which is why RoboSats advises irreversible payment methods.

Whether the trade-off is worth it depends on what matters most to you. Decentralized venues lower the [counterparty risk](/glossary/counterparty-risk) of leaving funds with an exchange and usually skip [KYC](/glossary/kyc-know-your-customer), at the cost of more manual work and smaller trades. See [centralized exchange](/glossary/centralized-exchange-cex) for the other side of the comparison.
