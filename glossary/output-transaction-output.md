---
title: "Output (Transaction Output)"
slug: output-transaction-output
draft: false
updated: "2026-10-13"
shortDefinition: "Specifies an amount of BTC and a script (locking script) determining how it can be spent. Outputs become UTXOs until spent."
keyTakeaways:
  - "Defines the recipient and spending conditions"
  - "Becomes a UTXO once confirmed, awaiting future spending"
  - "ScriptPubKey can be single-sig, multisig, or advanced script"
sources:
  - { label: "Bitcoin developer reference - Raw Transaction Format: TxOut (8-byte value, compactSize-prefixed pubkey script) and Outpoint (TXID plus output index, first output is 0)", url: "https://developer.bitcoin.org/reference/transactions.html" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 9, Combining and Splitting Value: at most two outputs, one for the payment and one returning the change (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP-13 - Address Format for pay-to-script-hash: version byte 5 becomes the leading character 3 (2011)", url: "https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki" }
  - { label: "BIP-173 - Base32 address format for native v0-16 witness outputs: bc1 prefix, version 0 addresses are 42 or 62 characters (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules, key path and script path spending (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Core - GetDustThreshold in src/policy/policy.cpp: 546 sat for a legacy output and 294 sat for P2WPKH at the default 3000 sat/kvB dust rate; unspendable outputs have no dust threshold", url: "https://github.com/bitcoin/bitcoin/blob/master/src/policy/policy.cpp" }
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
- **[P2WSH](/glossary/p2wsh-pay-witness-script-hash)** - SegWit addresses starting with `bc1q...` (longer: 62 characters instead of 42). Native-SegWit equivalent of P2SH.
- **[Taproot](/glossary/taproot) (P2TR)** - addresses starting with `bc1p...`. Adds key-path and script-path spending with Schnorr signatures.

Outputs are *indivisible*. You can't spend half a UTXO; you spend the whole thing and direct the leftover back to yourself in a new **[change output](/glossary/change-output)**. This is why most [transactions](/glossary/transaction) you make have two outputs: one to the actual recipient, one back to your own wallet.

Two special cases worth knowing:

- **[Dust](/glossary/dust) outputs.** Outputs worth less than the fee it would take to spend them (546 sats for a legacy output, 294 for P2WPKH, 330 for Taproot at Bitcoin Core's default dust rate of 3 sat/vB) are non-standard - the default relay policy refuses to relay or mine them. See [dust limit](/glossary/dust-limit).
- **[OP_RETURN](/glossary/opreturn) outputs.** A locking script starting with `OP_RETURN` is provably unspendable. They normally carry zero satoshis and exist only to embed data - protocol metadata, attestations, sidechain anchors - without bloating the UTXO set.
