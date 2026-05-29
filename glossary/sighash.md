---
title: "SIGHASH"
slug: sighash
draft: false
shortDefinition: "Specifies which parts of a transaction are signed. Options include ALL, NONE, SINGLE, and ANYONECANPAY."
keyTakeaways:
  - "Controls how much of the transaction is locked by the signature"
  - "SIGHASH_ALL is default for typical transactions"
  - "Advanced flags enable partial or flexible transaction modifications"
sources: []
relatedTerms:
  - bitcoin-script
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - sighashanyonecanpay
  - sighashsingle
  - transaction
liveWidget: ~
---

SIGHASH flags tell the signing algorithm which parts of a transaction the signature commits to. The default is `SIGHASH_ALL`: the signature covers every input and every output, so any change anywhere invalidates it. That's what almost every Bitcoin transaction uses.

The non-default flags exist for specific construction patterns:

- `SIGHASH_NONE` - signature covers inputs but not outputs. Whoever finalizes the transaction can rewrite where the money goes. Niche, mostly cited in tutorials, rarely used in practice.
- `SIGHASH_SINGLE` - signature covers only the output at the same index as this input. Other outputs can change. Useful for offers and swaps where you only care about your own destination.
- `SIGHASH_ANYONECANPAY` (a modifier OR'd into another flag) - signature commits only to this input, not the other inputs. Anyone can add more inputs without breaking your signature. The foundation of crowdfund-style and PayJoin-style flows.

Taproot (BIP 341) reworked the sighash algorithm for the Schnorr era, fixed a long-standing `SIGHASH_SINGLE` bug, and added `SIGHASH_DEFAULT` (functionally `SIGHASH_ALL` but doesn't have to be encoded, saving a byte). SegWit's BIP 143 had already fixed the quadratic-hashing problem that made pre-SegWit sighash slow on transactions with many inputs.

Most users will never touch SIGHASH directly. Wallets pick `SIGHASH_ALL` (or `SIGHASH_DEFAULT` under Taproot) and that's the right answer.
