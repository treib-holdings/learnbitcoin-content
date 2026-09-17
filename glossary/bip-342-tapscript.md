---
title: "BIP 342 (Tapscript)"
slug: bip-342-tapscript
draft: false
updated: "2026-09-17"
shortDefinition: "Defines Taproot scripting logic, including opcodes and versioning for future expansions of Bitcoin smart contracts."
keyTakeaways:
  - "Introduces a new scripting version for Taproot"
  - "Supports additional opcodes and flexible upgrades"
  - "Ensures forward-compatibility for advanced smart contracts"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - p2sh
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - taproot
  - bitcoin-script
  - merkleized-abstract-syntax-tree-mast
  - script
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0342"
  - "https://bitcoinops.org/en/topics/tapscript/"
liveWidget: ~
---

[BIP-342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki) defines **Tapscript** - the version of [Bitcoin Script](/glossary/bitcoin-script) used by [Taproot](/glossary/taproot) outputs when they're spent via the script-path branch (as opposed to the cooperative key-path branch). Activated as a [soft fork](/glossary/soft-fork) in November 2021 alongside BIP-340 and BIP-341.

Tapscript is mostly the same Bitcoin Script you already know, but with several improvements:

- **New signature [opcodes](/glossary/op-code-operation-code).** `OP_CHECKSIGADD` replaces `OP_CHECKMULTISIG` (which is disabled in Tapscript, along with `OP_CHECKMULTISIGVERIFY`: executing either fails the script) with a cleaner per-signature accumulator pattern that keeps batch verification possible.
- **[Schnorr signatures](/glossary/schnorr-signature) for `OP_CHECKSIG`** within Tapscript, matching the rest of Taproot's signature scheme.
- **Disabled and reserved opcodes.** Only `OP_CHECKMULTISIG` and `OP_CHECKMULTISIGVERIFY` are disabled in Tapscript. A block of otherwise unused opcode values became [`OP_SUCCESS`](/glossary/op-success) opcodes, which make a script unconditionally valid today and are reserved so a future soft fork can give them new meaning.
- **Versioning.** Tapscript is "leaf version 0xC0" in Taproot; future leaf versions can introduce *more* opcodes (or different rules) without requiring another full protocol upgrade. This is the future-proofing piece.
- **Cleaner resource accounting.** Tapscript meters resource usage differently from legacy script, with cleaner upper bounds on validation cost.

The versioning aspect is the under-discussed win. Adding a new opcode to legacy Bitcoin Script meant repurposing one of the reserved `OP_NOP` opcodes, which can only read the stack - cumbersome. Tapscript reserves a set of `OP_SUCCESS` opcodes that a soft fork can give any meaning, including writing to the stack, and a new leaf version can introduce a different opcode set entirely while leaving existing leaf versions untouched. Future capability extensions (covenants, new signature schemes, etc.) can use this slot.

For most users, Tapscript is invisible. When you spend a Taproot output cooperatively (the "key-path" spend), Tapscript isn't involved - just a Schnorr signature. Tapscript only comes into play if you need to use the script-path branch (an alternative branch in a [MAST](/glossary/merkleized-abstract-syntax-tree-mast)). Even then, your wallet handles it.

See [Taproot](/glossary/taproot) for the broader upgrade and [Bitcoin Script](/glossary/bitcoin-script) for the legacy scripting language Tapscript extends.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for what Tapscript changed and the upgrade hooks it left open.
