---
title: "Escrow"
slug: escrow
draft: false
updated: "2026-10-10"
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
  - { label: "Hodl Hodl FAQ - a P2P trading platform that locks each trade in a multisig escrow needing 2 of 3 keys, so no transaction can happen without one of the traders signing; trading fee of up to 0.75% per party", url: "https://hodlhodl.com/pages/faq" }
  - { label: "Bisq wiki - Security deposit: buyer and seller lock their deposits with the trade amount in a 2-of-2 multisig", url: "https://bisq.wiki/Security_deposit" }
  - { label: "Bisq wiki - Dispute resolution: mediators don't hold a key in the multisig escrow; if mediation fails, a time-locked transaction sends the escrowed funds to Bisq contributors and an arbitrator reimburses the winning trader", url: "https://bisq.wiki/Dispute_resolution" }
  - { label: "Bisq wiki - Trading fees: makers and takers pay trading fees to the Bisq DAO on every trade", url: "https://bisq.wiki/Trading_fees" }
  - { label: "RoboSats docs - Trade Escrow: the seller's escrow is a Lightning hold invoice locked toward the coordinator node; until it settles, the payment can't be revoked and the funds are locked in the seller's wallet but have not left it; the coordinator settles it when the seller confirms the fiat arrived; RoboSats has the funds while it pays the buyer; disputes go to RoboSats staff", url: "https://learn.robosats.org/docs/escrow/" }
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

- **2-of-3 multisig.** Buyer, seller, and an arbitrator each hold one key, and any two keys can release the funds. In the normal case, buyer and seller sign together to pay the seller. If there's a dispute, the arbitrator decides who gets the coins by signing with that person. Hodl Hodl, a peer-to-peer trading site, locks each trade in a 2-of-3 multisig escrow.
- **2-of-2 multisig with deposits.** Bisq's multisig trade protocol locks the bitcoin being sold, plus a security deposit from each trader, in a 2-of-2 multisig, so neither trader can move it alone. Its mediators don't hold a key. If a dispute can't be settled, a time-locked backup transaction sends the escrowed funds to a group of Bisq contributors, and an arbitrator pays back the trader who wins.
- **[HTLC-based escrow](/glossary/htlc-hashed-time-locked-contract).** The seller can claim the funds by revealing a secret (a preimage) before a deadline. After the deadline, the buyer can take them back. The script can't tell whether any goods arrived, so this works as escrow when the thing being bought is the secret itself or is unlocked by it, as in [atomic swaps](/glossary/atomic-swap) and [submarine swaps](/glossary/submarine-swap).
- **[ZKCP](/glossary/zkcp-zero-knowledge-contingent-payment).** For buying digital data. The seller proves, without revealing it, that the secret which unlocks the payment is also what the buyer needs to get the data, so neither side can cheat.
- **Time-locked escrow.** A timelock keeps a key from being used until a deadline. In BIP 65's example, two business partners hold funds in a 2-of-2 multisig, and their lawyer can step in and sign with one of them only after three months. Useful for deadlines, and as a backup plan in case a key holder disappears.

What script-based escrow improves, and what it doesn't:

- **No one party can run off with the money.** With a 2-of-3, the arbitrator only ever has one signature, never enough to spend alone. The arbitrator could still side with one trader unfairly or collude with them, so you're trusting the arbitrator less, not zero.
- **No custodial account.** The escrow agent holds a signing key, not the coins. It can't move them without one of the traders, and if something happens to the agent, the coins are still sitting in the multisig.
- **Rules you can check.** The spending conditions are written in the script and enforced by the network. In a dispute, though, the outcome still comes down to the arbitrator's judgment.
- **Not always cheaper.** The script itself only costs normal transaction fees, but trading platforms that supply the software or the arbitrator usually charge their own fees, as Bisq and Hodl Hodl do.

Not every peer-to-peer service works this way. On RoboSats, a peer-to-peer market that runs on Lightning, the seller locks the coins with a hold invoice to the RoboSats coordinator node. Until the seller confirms the fiat arrived, the coins haven't left the seller's wallet, though the seller can't pull them back. Once the seller confirms, the coordinator settles that invoice and pays the buyer, holding the funds while that payment goes through, and if the trade is disputed, RoboSats staff decide who gets the escrow. So you aren't handing RoboSats a balance to look after, but you are trusting it with the escrow. See [Decentralized Exchange (DEX)](/glossary/decentralized-exchange-dex) for more on how these venues compare.

See [HTLC](/glossary/htlc-hashed-time-locked-contract) for the primitive underlying Lightning-based escrow and [Multisig](/glossary/multisig) for the multisig setups underlying on-chain escrow.
