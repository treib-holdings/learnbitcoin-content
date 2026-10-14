---
title: "Coin Control"
slug: coin-control
draft: false
updated: "2026-10-13"
shortDefinition: "A wallet feature allowing users to manually select which UTXOs to spend, aiding privacy and fee optimization."
keyTakeaways:
  - "Allows precise selection of specific UTXOs for transactions"
  - "Improves privacy by limiting unnecessary input merging"
  - "Can optimize fees and avoid dust buildup"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 10, Privacy: some linking is still unavoidable with multi-input transactions, which necessarily reveal that their inputs were owned by the same owner (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Privacy: the common-input-ownership heuristic, and coin control as a feature of some wallets that lets the user choose which coins are spent as inputs", url: "https://en.bitcoin.it/wiki/Privacy" }
  - { label: "Bitcoin Optech - Output linking topic (dust attacks, and coin control as a wallet defense against spending the dust)", url: "https://bitcoinops.org/en/topics/output-linking/" }
  - { label: "Bitcoin Core 0.9.0 release notes - Add Coin Control Features (19 March 2014)", url: "https://bitcoin.org/en/release/v0.9.0" }
  - { label: "Bitcoin Optech - Transaction size calculator (a P2WPKH input is 68 vbytes: 36-byte outpoint, 1-byte scriptSig length, 4-byte sequence and 27 vbytes of witness)", url: "https://bitcoinops.org/en/tools/calc-size/" }
relatedTerms:
  - address-clustering
  - bitcoin-days-destroyed
  - bitcoin-vault
  - clawback-mechanism
  - coin-age
  - coin-freeze
  - coin-selection
  - coinjoin
  - deterministic-wallet
  - difficulty
  - security
  - utxo-unspent-transaction-output
  - vanity-address
  - wallet
liveWidget: ~
---

Coin control is the wallet feature that lets you manually choose which [UTXOs](/glossary/utxo-unspent-transaction-output) to spend when constructing a [transaction](/glossary/transaction), rather than leaving [coin selection](/glossary/coin-selection) to the wallet's algorithm. It's the wallet equivalent of deliberately picking specific dollar bills out of your physical wallet for a transaction.

Why coin control matters:

- **Privacy.** [Address clustering](/glossary/address-clustering) heuristics depend on the common-input-ownership heuristic: all UTXOs spent in one transaction share an owner. The whitepaper itself flagged that leak. By manually choosing which UTXOs to combine, you can avoid linking addresses that you'd rather keep separate.
- **Fees.** Fewer inputs = smaller transaction = lower fees at any given sat/vB (each P2WPKH input adds about 68 vbytes). If you have many small UTXOs and one large one, sometimes spending the large one alone is much cheaper.
- **Dust management.** You can deliberately [consolidate](/glossary/consolidation-transaction) small UTXOs ([dust](/glossary/dust)) during low-fee periods, or avoid combining them with valuable UTXOs that you don't want linked to dust sources.
- **Source-of-funds tagging.** If you've labeled UTXOs by source (KYC vs non-KYC, business vs personal), you can selectively spend from the appropriate bucket without crossing streams.

The basic operation:

1. Wallet shows your UTXOs as individual line items with amounts, addresses, and (sometimes) labels.
2. You manually select which ones to spend in the current transaction.
3. The wallet uses only those for inputs.

Bitcoin Core has shipped coin control since version 0.9.0 (March 2014). Other wallets vary: some put it a click away, some hide it to keep the interface simple, and some don't offer it at all, so check before you commit to one.

The general guidance: if you care about privacy or fee optimization, learn coin control. If you're using Bitcoin as casual spending money, the auto-select default is fine. The control is there when you need it.

See [UTXO](/glossary/utxo-unspent-transaction-output) for the underlying concept and [Address Clustering](/glossary/address-clustering) for the privacy concern this addresses.

See [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for why merging coins is the leak coin control exists to prevent.
