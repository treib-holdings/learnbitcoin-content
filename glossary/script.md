---
title: "Script"
slug: script
draft: false
shortDefinition: "Bitcoin's stack-based, programmable instruction set defining how outputs can be spent (e.g., single-sig, multisig)."
keyTakeaways:
  - "Operates via a last-in-first-out stack model"
  - "Restrictive design helps security and determinism"
  - "Used to implement multisig, pay-to-hash, time locks, etc."
sources: []
relatedTerms:
  - bitcoin-script
  - checktemplateverify-ctv
  - covenants
  - op-code-operation-code
  - opreturn
  - scriptless-scripts
liveWidget: ~
---

Bitcoin Script is the stack-based programming language that defines how outputs can be spent. Every UTXO has a locking script (`scriptPubKey`); spending it requires providing an unlocking script (`scriptSig` for legacy inputs, the witness for SegWit and Taproot) that, combined with the lock script and executed, leaves a single non-zero value on the stack.

The design is deliberately constrained:

- **Not Turing-complete.** No loops, no general recursion. Every script halts in bounded time and bounded memory. This is a feature: every full node validates every script, so unbounded computation would be a denial-of-service vector for the whole network.
- **Stack-based.** Operations push to and pop from a single stack. Easy to validate, easy to reason about, harder to write expressively (which is partly why Lightning and other layers handle complex contracts off-chain).
- **Opcodes are restricted.** Many opcodes have been disabled over Bitcoin's history (`OP_CAT`, `OP_MUL`, the `OP_NOP`-prefixed reservations). The active set is small enough to fit in your head.

The common script templates that cover the vast majority of UTXOs:

- **P2PK** (`<pubkey> OP_CHECKSIG`). The original. Almost extinct on mainnet outside Satoshi-era coins.
- **P2PKH** (`OP_DUP OP_HASH160 <hash> OP_EQUALVERIFY OP_CHECKSIG`). Legacy `1...` addresses.
- **P2SH** (`OP_HASH160 <hash> OP_EQUAL`). `3...` addresses; wraps any redeem script behind a hash.
- **P2WPKH / P2WSH** ([native SegWit](/glossary/native-segwit), witness version 0). `bc1q...` addresses; same logic as P2PKH / P2SH but in the witness portion.
- **P2TR** ([Taproot](/glossary/bip-341-taproot), witness version 1). `bc1p...` addresses; Schnorr signatures, key-path or script-path spending, MAST trees in the script path.

What lives on top of plain Script: time locks via `OP_CHECKLOCKTIMEVERIFY` and `OP_CHECKSEQUENCEVERIFY` (the foundation of Lightning HTLCs), multisig via `OP_CHECKMULTISIG` or aggregated Schnorr, hash-preimage commitments, and various policy combinators stitched together to form vaults, swaps, and channels.

Tapscript (BIP 342) extends classic Script with Schnorr signature opcodes and unblocks future upgrades via versioned opcode space, but the structural design - stack-based, bounded, simple - hasn't changed.
