---
title: "Control Block"
slug: control-block
draft: false
published: "2026-09-17"
shortDefinition: "The last witness element in a Taproot script-path spend: one byte of leaf version and parity, the 32-byte internal key, and the Merkle path from the revealed leaf to the root. It lets a node prove the script was committed in the output key."
keyTakeaways:
  - "Exactly 33 + 32m bytes for a leaf at depth m, with m from 0 to 128; a single-leaf tree has a 33-byte control block and the maximum is 4,129 bytes"
  - "The first byte is leaf_version | parity: Tapscript's version is 0xc0, so a Tapscript control block starts with 0xc0 or 0xc1 depending on whether the output key's Y coordinate is even or odd"
  - "The Merkle path carries no left-or-right markers because siblings are sorted before hashing; the verifier just compares each pair and hashes the smaller first"
sources:
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-342 - Validation of Taproot Scripts (leaf version 0xc0)", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "Bitcoin Core source - src/script/interpreter.h (TAPROOT_CONTROL constants)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/script/interpreter.h" }
relatedTerms:
  - script-path-spend
  - taproot
  - taproot-tweak
  - x-only-public-key
  - bip-342-tapscript
  - merkle-proof
  - merkleized-abstract-syntax-tree-mast
liveWidget: ~
---

When a [Taproot](/glossary/taproot) output is spent through the [script path](/glossary/script-path-spend), the spender has to show that the script being run was genuinely one of the leaves committed to in the output key. The control block is that showing. It is always the final item in the witness, after the script's inputs and the script itself.

Its layout is fixed. Byte zero is the leaf version with its lowest bit replaced by the parity of the output key's Y coordinate. [Tapscript](/glossary/bip-342-tapscript) is leaf version 0xc0, so a Tapscript control block begins with 0xc0 or 0xc1. Bytes one through thirty-two are the internal key, the [x-only key](/glossary/x-only-public-key) that the output key was built from. Everything after that is the Merkle path: the 32-byte hash of the sibling at each level from the leaf up to the root, so a leaf at depth m adds 32m bytes and the whole block is 33 + 32m bytes. A tree with one leaf has an empty path and a 33-byte block. The depth is capped at 128, which bounds the block at 4,129 bytes.

A verifying node uses it in three steps. It hashes the revealed script together with the leaf version to get the leaf's hash. It then combines that hash with each sibling in turn to reach a root, and because [BIP-341](/glossary/bip-341) sorts every pair of siblings before hashing them, the path needs no markers for which side each sibling sat on. Finally it computes the [tweak](/glossary/taproot-tweak) from the internal key and that root, adds it to the internal key, and checks that the result matches the output key on the chain, using the parity bit to reconstruct the exact point. Only if all of that holds does the script run.

The parity bit exists for a subtle reason. The verifier needs to lift the output key's X coordinate to one specific point, and doing so unambiguously is what keeps batch verification possible. Without the bit, a wallet would have to keep retrying internal keys until the output key happened to have an even Y.

The control block is also where a script-path spend leaks. It publishes the internal key, which a key-path spend never does, and its length reveals how deep the leaf sat, which says something about the shape of the tree. Neither reveals the other leaves.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for the control block in context.
