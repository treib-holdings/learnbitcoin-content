---
title: "Transaction"
slug: transaction
draft: false
shortDefinition: "A data structure moving BTC from inputs (referencing UTXOs) to outputs (locking scripts). Signed by private keys."
keyTakeaways:
  - "Consists of inputs, outputs, signatures, and optional scripts/data"
  - "Consumes existing UTXOs and creates new ones, forming the ledger's flow"
  - "Valid transactions must satisfy script constraints for each input"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - batch-transaction
  - bip-174-psbt
  - coin-age
  - coin-control
  - coinbase-transaction
  - consolidation-transaction
  - double-spend
  - double-spend-relay
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - nlocktime
  - nsequence
  - replace-fee-rbf
  - satoshi-unit
  - transaction-chaining
  - transaction-fee
  - transaction-index-txindex
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_protocol"
  - "https://www.wikidata.org/wiki/Q17001427"
  - "https://en.bitcoin.it/wiki/Transaction"
liveWidget: ~
---

A Bitcoin transaction is a data structure that moves BTC from one set of owners to another. It does this by consuming existing [unspent outputs](/glossary/utxo-unspent-transaction-output) (UTXOs) as **inputs** and creating new **outputs** that lock the funds to new spending conditions.

The structure is atomic: a transaction either succeeds entirely or fails entirely. Every input must produce a valid signature (or script witness) proving the spender controls the UTXO being consumed. If even one input fails, the whole transaction is invalid. The sum of input values must be at least the sum of output values; the difference is the [transaction fee](/glossary/fee-estimation) paid to the miner.

A typical send works like this: your wallet picks one or more of your UTXOs whose value adds up to at least what you want to send, signs them as inputs, creates an output paying the recipient, and creates a *change* output paying any remainder back to yourself. The whole package gets broadcast to the peer-to-peer network, where it sits in [mempools](/glossary/mempool) until a miner includes it in a block.

Once confirmed, the transaction is identified forever by its **txid** - the double-SHA256 hash of its serialized form. The outputs it created become new UTXOs in the global set, available to be spent in future transactions, and the inputs it consumed are gone for good.

See the [Mining rabbit hole §6](/rabbit-hole/mining) for how miners decide which transactions to pack into a block, and [UTXO](/glossary/utxo-unspent-transaction-output) for the "coin object" model that underlies Bitcoin's accounting.
