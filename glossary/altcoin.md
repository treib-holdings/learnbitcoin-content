---
title: "Altcoin"
slug: altcoin
draft: false
updated: "2026-10-13"
shortDefinition: "Any cryptocurrency that isn't Bitcoin, covering a huge range of coins with diverse features and goals."
keyTakeaways:
  - "Includes thousands of non-Bitcoin cryptocurrencies"
  - "Often introduces new features or use cases"
  - "Riskiest segment of the crypto market"
sources:
  - { label: "GitHub - litecoin-project/litecoin: the Litecoin source tree is a fork of bitcoin/bitcoin (repository created June 2012)", url: "https://github.com/litecoin-project/litecoin" }
  - { label: "Ledger - Shen Noether and Adam Mackenzie, Ring Confidential Transactions: the original Monero protocol was based on CryptoNote, which uses ring signatures and one-time keys to hide the destination and origin of transactions (2016)", url: "https://ledger.pitt.edu/ojs/ledger/article/view/34" }
  - { label: "Gavin Wood - Ethereum: A Secure Decentralised Generalised Transaction Ledger (yellow paper): a blockchain with a Turing-complete language, first proposed by Buterin in November 2013", url: "https://ethereum.github.io/yellowpaper/paper.pdf" }
  - { label: "Zcash - Protocol Specification: Zcash is an implementation of the Decentralized Anonymous Payment scheme Zerocash, with a shielded payment scheme secured by zk-SNARKs", url: "https://zips.z.cash/protocol/protocol.pdf" }
  - { label: "BIP-341 - Taproot, Motivation: Schnorr signatures (BIP340) and Merkle branches (MAST, BIP114, BIP117) were among the ideas previously proposed for improving Bitcoin's scripting (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Google Patents - US4995082A, Claus P. Schnorr, method for generating and verifying electronic signatures: filed 1990-02-23, published 1991-02-19", url: "https://patents.google.com/patent/US4995082A/en" }
relatedTerms:
  - alt-season
  - bitcoin-bridge
  - bitcoin-cash
  - bitcoin-dominance
  - fork
  - rug-pull
liveWidget: ~
---

An "altcoin" is any cryptocurrency that isn't Bitcoin. The term covers everything from genuinely novel research projects (Monero, for privacy) to forks of Bitcoin's code or chain with a few parameters changed (Litecoin, [Bitcoin Cash](/glossary/bitcoin-cash)) to pure marketing exercises with no technical substance (most of the long tail).

This site is Bitcoin-only. That's a deliberate editorial choice, not a slight against curiosity. The reasons we don't cover altcoins:

- **Bitcoin's monetary properties are different in kind, not degree.** A fixed-supply, permissionless, neutral, miner-secured base layer is the thing every alternative is implicitly competing with. Most of them either drop one of those properties (centralized issuance, mutable supply, controlled validator sets) or never had it. The exceptions are interesting; the bulk aren't.
- **Most altcoins are venture-funded equity in disguise.** Founders hold large pre-mine allocations. Token launches are often closer to an IPO than to a monetary innovation. The economic model rewards insiders first. The worst version of the pattern - founders dumping pre-mined supply onto the public after launch - is the canonical [rug pull](/glossary/rug-pull), repeated every cycle on whatever platform makes issuing a new token cheap.
- **Adoption time is finite.** Spending time learning Bitcoin deeply pays compounding dividends. Spending it cycling through altcoins doesn't.

What we will acknowledge:

- **Some altcoin engineering is genuinely novel.** Monero's ring signatures, Ethereum's smart-contract platform, Zcash's zk-SNARKs - these advanced the state of the art. Bitcoin takes in outside ideas only where they degrade its properties least, and slowly. Even the two big pieces of [Taproot](/glossary/taproot) were not altcoin imports: [Schnorr signatures](/glossary/schnorr-signature) go back to Claus Schnorr's patent filing in 1990, and the script trees come from Bitcoin's own earlier [MAST](/glossary/merkleized-abstract-syntax-tree-mast) proposals.
- **The "altcoin" label is doing work.** Many things sold as "crypto" don't claim to be alternative *money*; they're vehicles for speculation, governance experiments, or distributed-computing markets. Calling them altcoins lumps them with monetary alternatives they're not actually competing in.

The bridges that connect BTC to altcoin chains - [Bitcoin bridges](/glossary/bitcoin-bridge), wrapped BTC, custodial peg-ins - inherit those chains' trust assumptions and attack surfaces. BTC on Bitcoin is BTC. BTC on Ethereum is an IOU.

If you're learning Bitcoin and considering whether to broaden into altcoins: the honest answer is "later, if at all, and only after you've understood why Bitcoin's properties are hard to replicate." Most people who broaden too early end up with smaller stacks of everything.
