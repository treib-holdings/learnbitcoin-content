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

A Bitcoin transaction comprises inputs (where BTC is coming from) and outputs (where BTC goes). Each output includes an amount in satoshis and a scriptPubKey, which defines conditions for spending (e.g., 'must prove ownership of this public key hash'). Once created, an output becomes an unspent transaction output (UTXO) until another transaction references it as an input and provides the correct signature or other unlocking data. Outputs cannot be partially spent; it's an all-or-nothing approach, requiring new outputs to return 'change' if needed.
