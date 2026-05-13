---
title: "Transaction"
slug: transaction
draft: false
shortDefinition: "A data structure moving BTC from inputs (referencing UTXOs) to outputs (locking scripts). Signed by private keys."
keyTakeaways:
  - "Consists of inputs, outputs, signatures, and optional scripts/data"
  - "Consumes existing UTXOs and creates new ones, forming the ledger’s flow"
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
  - gadget-utxo
  - nlocktime
  - nsequence
  - replace-fee-rbf
  - satoshi-unit
  - transaction-chaining
  - transaction-fee
  - transaction-index-txindex
  - utxo-unspent-transaction-output
liveWidget: ~
---

A Bitcoin transaction collects one or more unspent outputs as inputs, each requiring a valid scriptSig or witness signature. It creates new outputs specifying how funds can be spent later (often by a single address or script). Transactions are broadcast to the P2P network, awaiting miner inclusion in a block. Once confirmed, their outputs become the next set of UTXOs for future spending. Transactions can include multiple inputs and outputs, carry arbitrary data in OP_RETURN, or enforce advanced scripts (multisig/time locks). The final hash (TXID) identifies it on the blockchain.
