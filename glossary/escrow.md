---
title: "Escrow"
slug: escrow
draft: false
updated: "2026-11-17"
shortDefinition: "Funds held by a neutral party or mechanism until certain conditions are fulfilled."
keyTakeaways:
  - "Protects both buyer and seller in uncertain transactions"
  - "Can use a third party or a multisig script"
  - "Reduces fraud risk by withholding payment until agreed conditions"
sources:
  - { label: "Bitcoin Wiki - Contract, example 2: escrow and dispute mediation: buyer, merchant and mediator each provide a key to a 2-of-3 multisig; any two of them can spend, so the mediator decides only if there is a dispute", url: "https://en.bitcoin.it/wiki/Contract" }
  - { label: "BIP 65 - OP_CHECKLOCKTIMEVERIFY, escrow example: two business partners keep funds in a 2-of-2 multisig and want a backup plan in case one is hit by a bus; with a standard 2-of-3 their lawyer could conspire with either partner to steal the funds, so a timelock lets the lawyer sign with one partner only after three months", url: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" }
  - { label: "BIP 199 - Hashed Time-Locked Contract transactions: the seller can spend by disclosing the preimage of a hash, and the buyer can take the funds back after a timeout; a method of exchanging secrets for money", url: "https://github.com/bitcoin/bips/blob/master/bip-0199.mediawiki" }
  - { label: "Bitcoin Wiki - Atomic swap: two parties swap coins on two chains without trusting a third party, using hash-locked transactions on each chain with time-locked refunds", url: "https://en.bitcoin.it/wiki/Atomic_swap" }
  - { label: "Boltz docs - Swap types: in a submarine swap the user locks bitcoin on the chain, and Boltz claims it with the preimage revealed when the user's Lightning invoice is paid; if the payment fails, the user takes a refund", url: "https://github.com/BoltzExchange/boltz-backend/blob/master/docs/lifecycle.md" }
  - { label: "Bitcoin Wiki - Zero Knowledge Contingent Payment: a payment released if and only if the payee discloses some knowledge, using a hash-locked transaction plus a zero-knowledge proof, so neither payer nor payee can cheat", url: "https://en.bitcoin.it/wiki/Zero_Knowledge_Contingent_Payment" }
  - { label: "Bitcoin Optech - Hold invoices: Lightning invoices where the receiver does not release the preimage at once on receiving a payment, and then accepts the payment, rejects it or lets it time out", url: "https://bitcoinops.org/en/topics/hold-invoices/" }
  - { label: "Goldfeder, Bonneau, Gennaro and Narayanan - Escrow protocols for cryptocurrencies: How to buy physical goods using Bitcoin (2017 conference paper, author's copy), appendix D, Paying the mediator: an escrow service can negotiate its fees and be paid up front, or charge for resolving a dispute", url: "https://www.jbonneau.com/doc/GBGN17-FC-physical_escrow.pdf" }
relatedTerms:
  - clawback-mechanism
  - coin-freeze
  - counterparty-risk
  - custodial-wallet
  - escrowed-lightning-channel
  - htlc-hashed-time-locked-contract
  - payment-channel
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

Escrow is the practice of holding funds in a neutral arrangement until specific conditions are met. In Bitcoin, escrow can mean trusting a third party to hold the coins (custodial escrow), or locking the coins in a script that limits what any one party can do with them. Script-based escrow cuts down how much you have to trust the escrow agent, though in most setups it doesn't remove that trust entirely.

The Bitcoin-native escrow patterns:

- **2-of-3 multisig.** Buyer, seller, and an arbitrator each hold one key, and any two keys can release the funds. In the normal case, buyer and seller sign together to pay the seller. If there's a dispute, the arbitrator decides who gets the coins by signing with that person.
- **[HTLC-based escrow](/glossary/htlc-hashed-time-locked-contract).** The seller can claim the funds by revealing a secret (a preimage) before a deadline. After the deadline, the buyer can take them back. The script can't tell whether any goods arrived, so this works as escrow when the thing being bought is the secret itself or is unlocked by it, as in [atomic swaps](/glossary/atomic-swap) and [submarine swaps](/glossary/submarine-swap).
- **[ZKCP](/glossary/zkcp-zero-knowledge-contingent-payment).** For buying digital data. The seller proves, without revealing it, that the secret which unlocks the payment is also what the buyer needs to get the data, so neither side can cheat.
- **Time-locked escrow.** A timelock keeps a key from being used until a deadline. In BIP 65's example, two business partners hold funds in a 2-of-2 multisig, and their lawyer can step in and sign with one of them only after three months. Useful for deadlines, and as a backup plan in case a key holder disappears.

What script-based escrow improves, and what it doesn't:

- **No one party can run off with the money.** With a 2-of-3, the arbitrator only ever has one signature, never enough to spend alone. The arbitrator could still side with one trader unfairly or collude with them, so you're trusting the arbitrator less, not zero.
- **No custodial account.** The escrow agent holds a signing key, not the coins. It can't move them without one of the traders, and if something happens to the agent, the coins are still sitting in the multisig.
- **Rules you can check.** The spending conditions are written in the script and enforced by the network. In a dispute, though, the outcome still comes down to the arbitrator's judgment.
- **Not always cheaper.** The script itself only costs normal transaction fees, but an escrow service has to be paid: it can take its fee up front on each trade, or charge when it is called on to settle a dispute.

Escrow does not have to be a script on the chain. On Lightning a hold invoice can do a similar job: the node that receives the payment holds it without settling it. Later it either accepts the payment, or rejects it or lets it time out, in which case the sender keeps the money. Whoever runs that node makes the choice, so a service that takes the hold invoice on its own node decides where the money goes. See [Decentralized Exchange (DEX)](/glossary/decentralized-exchange-dex) for more on how these venues compare.

See [HTLC](/glossary/htlc-hashed-time-locked-contract) for the primitive underlying Lightning-based escrow and [Multisig](/glossary/multisig) for the multisig setups underlying on-chain escrow.
