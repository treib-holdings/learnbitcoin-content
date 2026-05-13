---
title: "Output (Transaction Output)"
slug: output-transaction-output
draft: false
shortDefinition: "Specifies an amount of BTC and a script (locking script) determining how it can be spent. Outputs become UTXOs until spent."
keyTakeaways:
  - "Defines the recipient and spending conditions"
  - "Becomes a UTXO once confirmed, awaiting future spending"
  - "ScriptPubKey can be single-sig, multisig, or advanced script"
sources: []
relatedTerms: []
liveWidget: ~
---

A transaction output specifies an amount of BTC and a **locking script** (technically the *scriptPubKey*) that defines what's required to spend it later. Once the transaction confirms, the output becomes a [UTXO](/glossary/utxo-unspent-transaction-output) in the global unspent set, sitting on the chain until someone produces a [transaction input](/glossary/input-transaction-input) that satisfies its script.

The locking script can be simple ("the holder of this private key can spend") or complex (multisig, time-locked, hash-locked, or arbitrary [Bitcoin Script](/glossary/bitcoin-script) logic). The script determines who - or what conditions - can move the money next.

Outputs are *indivisible*. You can't spend half a UTXO; you spend the whole thing and direct the leftover back to yourself in a new **change** output. This is why most [transactions](/glossary/transaction) you make have two outputs: one to the actual recipient, one back to your own wallet.
