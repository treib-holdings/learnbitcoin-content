---
title: "Coin Control"
slug: coin-control
draft: false
shortDefinition: "A wallet feature allowing users to manually select which UTXOs to spend, aiding privacy and fee optimization."
keyTakeaways:
  - "Allows precise selection of specific UTXOs for transactions"
  - "Improves privacy by limiting unnecessary input merging"
  - "Can optimize fees and avoid dust buildup"
sources: []
relatedTerms:
  - address-clustering
  - bitcoin-days-destroyed
  - bitcoin-vault
  - clawback-mechanism
  - coin-age
  - coin-freeze
  - coinjoin
  - deterministic-wallet
  - difficulty
  - security
  - utxo-unspent-transaction-output
  - vanity-address
  - wallet
liveWidget: ~
---

Coin control is the wallet feature that lets you manually choose which [UTXOs](/glossary/utxo-unspent-transaction-output) to spend when constructing a [transaction](/glossary/transaction), rather than letting the wallet auto-select them. It's the wallet equivalent of deliberately picking specific dollar bills out of your physical wallet for a transaction.

Why coin control matters:

- **Privacy.** [Address clustering](/glossary/address-clustering) heuristics depend on the common-input assumption: all UTXOs spent in one transaction share an owner. By manually choosing which UTXOs to combine, you can avoid linking addresses that you'd rather keep separate.
- **Fees.** Fewer inputs = smaller transaction = lower fees at any given sat/vB. If you have many small UTXOs and one large one, sometimes spending the large one alone is much cheaper.
- **Dust management.** You can deliberately consolidate small UTXOs ([dust](/glossary/dust)) during low-fee periods, or avoid combining them with valuable UTXOs that you don't want linked to dust sources.
- **Source-of-funds tagging.** If you've labeled UTXOs by source (KYC vs non-KYC, business vs personal), you can selectively spend from the appropriate bucket without crossing streams.

The basic operation:

1. Wallet shows your UTXOs as individual line items with amounts, addresses, and (sometimes) labels.
2. You manually select which ones to spend in the current transaction.
3. The wallet uses only those for inputs.

Wallets that expose coin control well: Sparrow, Bitcoin Core, Electrum, Specter Desktop, Nunchuk. Most mobile wallets hide it by default to keep UX simple.

The general guidance: if you care about privacy or fee optimization, learn coin control. If you're using Bitcoin as casual spending money, the auto-select default is fine. The control is there when you need it.

See [UTXO](/glossary/utxo-unspent-transaction-output) for the underlying concept and [Address Clustering](/glossary/address-clustering) for the privacy concern this addresses.
