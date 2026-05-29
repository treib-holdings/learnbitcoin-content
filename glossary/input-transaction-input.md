---
title: "Input (Transaction Input)"
slug: input-transaction-input
draft: false
shortDefinition: "A reference to a specific UTXO being spent, including a signature unlocking those funds."
keyTakeaways:
  - "Identifies which UTXO is being spent"
  - "Must contain valid signature/witness data"
  - "Multiple inputs can fund one transaction"
sources: []
relatedTerms:
  - bitcoin-script
  - coinbase-transaction
  - output-transaction-output
  - segwit-segregated-witness-bip-141
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
---

A transaction input is a pointer to a [UTXO](/glossary/utxo-unspent-transaction-output) being spent, plus the proof that the spender is allowed to spend it.

Each input references the UTXO by its source **txid** (the transaction that created it) and **output index** (which output of that transaction). It also carries unlocking data - a digital signature for legacy transactions, or witness data for SegWit transactions - that satisfies the UTXO's locking script.

A single [transaction](/glossary/transaction) can have many inputs. Spending three UTXOs in one transaction means three inputs, each needing its own valid signature. If any one input fails to validate, the entire transaction is rejected by every node - inputs are atomic with the transaction containing them.

Once a transaction confirms, every input it referenced is permanently consumed. Trying to reuse an already-spent UTXO is what makes a [double spend](/glossary/double-spend) attempt; the network rejects it.
