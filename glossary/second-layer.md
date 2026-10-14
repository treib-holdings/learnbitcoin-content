---
title: "Second Layer"
slug: second-layer
draft: false
updated: "2026-10-13"
shortDefinition: "Networks built atop Bitcoin's main chain, like Lightning or sidechains, for improved scalability or features."
keyTakeaways:
  - "Eases load on the base chain for faster/cheaper payments"
  - "Examples include LN channels and pegged sidechains"
  - "Requires eventual settlement or peg-out to reconcile final states"
sources:
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, draft 0.5.9.2 (January 14, 2016): a network of payment channels whose transfers happen off-blockchain and are enforceable on the blockchain against uncooperative parties; both parties must watch the blockchain or delegate a third party to do so; the design needs a malleability soft fork", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "Liquid docs - Technical Overview: an open-source Bitcoin sidechain with a two-way peg, federated consensus (Strong Federations) run by functionary operators, and Confidential Transactions that hide amounts and asset types", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Rootstock docs - Fundamentals: an open-source, EVM-compatible Bitcoin sidechain, merge-mined with Bitcoin, with blocks every 30 seconds for smart contracts", url: "https://dev.rootstock.io/concepts/fundamentals/" }
  - { label: "Bitcoin Optech - Statechains topic: an offchain system for delegating the ability to spend a UTXO from one user to the next; a delegated signer can always spend onchain without the operator's permission; Mercury Layer announced as an implementation in 2024", url: "https://bitcoinops.org/en/topics/statechains/" }
  - { label: "Bitcoin Optech - Ark protocol topic: many users share onchain UTXOs through trees of pre-signed offchain transactions built in rounds with an Ark operator; VTXOs expire under an absolute timelock and must be refreshed; users can exit unilaterally", url: "https://bitcoinops.org/en/topics/ark/" }
  - { label: "Bitcoin Optech - Ecash topic: a mint issues blind-signed tokens so it cannot learn who paid whom; users need to trust the mint to store their money and honor redemptions", url: "https://bitcoinops.org/en/topics/ecash/" }
  - { label: "BIP 300 (Draft) - Hashrate Escrows: a layer whose withdrawals back to Bitcoin are governed by proof-of-work instead of a federation", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
relatedTerms:
  - atomic-swap
  - layer-1
  - lightning-channel
  - lightning-network
  - liquid-network
  - off-chain
  - payment-channel
  - sidechain
  - state-channel
liveWidget: ~
---

"Second layer" (or "layer 2") refers to any protocol built on top of Bitcoin's base chain that processes transactions outside the main chain while ultimately settling back to it. The goal is to add throughput, speed, or features without changing - and without burdening - the base layer.

The major second-layer designs for Bitcoin:

- **[Lightning Network](/glossary/lightning-network).** Off-chain payment channels secured by Bitcoin scripts, enforced on-chain only if a party misbehaves. Instant, cheap payments; periodic on-chain settlement. The best-known Bitcoin second layer.
- **[Sidechains](/glossary/sidechain)** like Liquid and Rootstock (RSK). Separate blockchains pegged to Bitcoin via federated or other peg mechanisms. Often used for features Bitcoin lacks (confidential transactions on Liquid, Ethereum-style smart contracts on Rootstock).
- **Statechains.** Off-chain transfer of the right to spend a UTXO from one user to the next, coordinated by an operator, with the current holder always able to settle on-chain without the operator's permission. Mercury Layer, announced in 2024, is one implementation.
- **Ark.** A newer design in which many users and an operator share on-chain UTXOs through trees of pre-signed off-chain transactions, built in periodic rounds. Users hold "virtual UTXOs" that expire unless refreshed into a new round, and can always exit to the chain on their own.
- **Chaumian e-cash** (Fedimint, Cashu). Mints that hold bitcoin and issue blind-signed tokens, so the mint cannot see who paid whom; the tokens can be redeemed with the mint for sats. Users trade self-custody for strong privacy and instant payments, and must trust the mint.
- **Drivechain (proposed).** A sidechain design from BIP-300 in which withdrawals back to Bitcoin are governed by miners' proof-of-work rather than a federation. Still a draft; not activated.

The shared logic of every second layer: Bitcoin's base chain is the global settlement layer - secure, immutable, expensive to use in volume. Second layers absorb the day-to-day transactional load and only settle back to the base chain when needed.

The trade-offs vary by design. Lightning needs no trusted third party, but it requires liquidity management and someone - you, or a third party you delegate - watching the chain for a cheating counterparty. Sidechains are easier to use but introduce trust in the federation that holds the peg. E-cash mints are convenient but require trusting the mint.

The base + layer model is how Bitcoin scales. The base layer doesn't need to handle every coffee purchase; it needs to settle the final state. See [Layer 1](/glossary/layer-1) for the base-chain view this builds on.
