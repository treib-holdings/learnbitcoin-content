---
title: "UTXO (Unspent Transaction Output)"
slug: utxo-unspent-transaction-output
draft: false
shortDefinition: "A spendable piece of BTC recorded on-chain. Each transaction input consumes one or more UTXOs."
keyTakeaways:
  - "Reflects the ‘coin’ concept in Bitcoin’s ledger model"
  - "Must be fully spent; leftover must go to a ‘change’ output"
  - "Fundamental to on-chain transaction logic and privacy"
sources: []
relatedTerms:
  - absolute-fee
  - coin-age
  - coin-control
  - coin-plasma
  - coinbase-transaction
  - consolidation-transaction
  - gadget-utxo
  - mutxo
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - transaction
  - transaction-index-txindex
  - vanity-address
liveWidget: ~
---

In Bitcoin’s model, transactions use existing UTXOs as inputs, then produce new outputs (UTXOs). Each UTXO has a specific amount of BTC and a script locking it. Once spent, it’s no longer valid. This approach simplifies account tracking: no single ‘balance’ per address is stored on-chain, only these discrete coins. Wallets sum relevant UTXOs to display the user’s total. Managing UTXOs well can optimize fees (consolidating small outputs during low-fee times) and bolster privacy (avoiding unnecessary merges that reveal address clusters).
