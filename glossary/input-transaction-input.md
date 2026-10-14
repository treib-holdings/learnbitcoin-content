---
title: "Input (Transaction Input)"
slug: input-transaction-input
draft: false
updated: "2026-10-13"
shortDefinition: "A reference to a specific UTXO being spent, including a signature unlocking those funds."
keyTakeaways:
  - "Identifies which UTXO is being spent"
  - "Must contain valid signature/witness data"
  - "Multiple inputs can fund one transaction"
sources:
  - { label: "Bitcoin Core - src/primitives/transaction.h, COutPoint and CTxIn (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/primitives/transaction.h" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 9, Combining and Splitting Value (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP 141 - Segregated Witness (Consensus layer) (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin developer reference - Raw Transaction Format, TxIn (accessed 2026-10-13)", url: "https://developer.bitcoin.org/reference/transactions.html" }
  - { label: "Bitcoin Core - src/consensus/tx_verify.cpp, CheckTxInputs (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/tx_verify.cpp" }
  - { label: "Bitcoin Core - src/validation.cpp, CheckInputScripts (master, accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
relatedTerms:
  - bitcoin-script
  - coinbase-transaction
  - nsequence
  - output-transaction-output
  - segwit-segregated-witness-bip-141
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
---

A transaction input is a pointer to a [UTXO](/glossary/utxo-unspent-transaction-output) being spent, plus the proof that the spender is allowed to spend it.

Each input references the UTXO by its source **txid** (the transaction that created it) and **output index** (which output of that transaction). It also carries unlocking data that satisfies the UTXO's locking script: a signature script (scriptSig) for legacy outputs, or witness data for [SegWit](/glossary/segwit-segregated-witness-bip-141) outputs, which moved the signature and public key out of the scriptSig and into the witness. A third field, the [sequence number](/glossary/nsequence), is normally left at its default but can encode a relative time lock.

A single [transaction](/glossary/transaction) can have many inputs. Spending three UTXOs in one transaction means three inputs, each needing to satisfy its own locking script. If any one input fails to validate, the entire transaction is rejected by every node - inputs are atomic with the transaction containing them.

Once a transaction confirms, every input it referenced is permanently consumed. Trying to reuse an already-spent UTXO is what makes a [double spend](/glossary/double-spend) attempt; a node checks that every referenced output still exists and is unspent before it bothers verifying any signatures, and rejects the transaction if not.

The one exception to all of this is the [coinbase transaction](/glossary/coinbase-transaction) that starts each block. Its single input points at no previous output at all (an all-zero txid and an index of all ones), because the block subsidy and fees it pays out are created by the block itself rather than spent from the chain.
