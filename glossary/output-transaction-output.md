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
relatedTerms:
  - bitcoin-script
  - input-transaction-input
  - opreturn
  - p2pkh-pay-public-key-hash
  - p2sh
  - taproot
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
---

A transaction output specifies an amount of BTC and a **locking script** (technically the *scriptPubKey*) that defines what's required to spend it later. Once the transaction confirms, the output becomes a [UTXO](/glossary/utxo-unspent-transaction-output) in the global unspent set, sitting on the chain until someone produces a [transaction input](/glossary/input-transaction-input) that satisfies its script.

On the wire, each output is two fields: an 8-byte value in satoshis, followed by a length-prefixed locking script. Outputs are ordered within a transaction; the position of each output (the **vout** index, starting at 0) becomes part of its permanent identity. Future spends reference an output as the pair `(txid, vout)`.

The locking script can be simple ("the holder of this private key can spend") or arbitrarily complex (multisig, time-locked, hash-locked, or general [Bitcoin Script](/glossary/bitcoin-script) logic). A handful of standard patterns dominate practice:

- **[P2PKH](/glossary/p2pkh-pay-public-key-hash)** - legacy addresses starting with `1`. Spend by revealing a public key plus a matching signature.
- **[P2SH](/glossary/p2sh)** - addresses starting with `3`. Spend by revealing a redeem script (which itself defines the real spending conditions) and its satisfying data.
- **[P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)** - SegWit addresses starting with `bc1q...`. Native-SegWit equivalent of P2PKH.
- **[P2WSH](/glossary/p2wsh-pay-witness-script-hash)** - SegWit addresses starting with `bc1q...` (longer). Native-SegWit equivalent of P2SH.
- **[Taproot](/glossary/taproot) (P2TR)** - addresses starting with `bc1p...`. Adds key-path and script-path spending with Schnorr signatures.

Outputs are *indivisible*. You can't spend half a UTXO; you spend the whole thing and direct the leftover back to yourself in a new **change** output. This is why most [transactions](/glossary/transaction) you make have two outputs: one to the actual recipient, one back to your own wallet.

Two special cases worth knowing:

- **Dust outputs.** Outputs below a relay-fee-dependent threshold (commonly ~546 sats for legacy types, smaller for SegWit and Taproot) are non-standard - the default mempool policy refuses to relay them. Wallets won't create them.
- **[OP_RETURN](/glossary/opreturn) outputs.** A locking script starting with `OP_RETURN` is provably unspendable. They carry zero satoshis and exist only to embed small data commitments - protocol metadata, attestations, sidechain anchors - without bloating the UTXO set.
