---
title: "Merkleized Abstract Syntax Tree (MAST)"
slug: merkleized-abstract-syntax-tree-mast
draft: false
shortDefinition: "A Taproot-based technique placing each script branch in a Merkle tree, hiding unused branches for privacy and efficiency."
keyTakeaways:
  - "Allows separate script branches, revealing only the used path"
  - "Enhances privacy by hiding unused logic"
  - "Reduces on-chain footprint and fees for complex contracts"
sources: []
relatedTerms:
  - bip-341-taproot
  - bip-342-tapscript
  - bitcoin-script
  - merkle-tree-merkle-root
  - merkle-root
  - taproot
liveWidget: ~
---

MAST - **M**erkleized **A**bstract **S**yntax **T**ree - is a way of structuring complex [Bitcoin Scripts](/glossary/bitcoin-script) so that only the branch actually being executed at spend time needs to appear on-chain. The other branches stay hidden, committed cryptographically via a [Merkle root](/glossary/merkle-root) but never revealed unless used.

This is one of the two cryptographic ideas baked into [Taproot](/glossary/taproot). The other is [Schnorr signatures](/glossary/schnorr-signature) plus key aggregation.

Why MAST is useful: consider a vault script with multiple spending branches - "owner can spend after 1 confirmation," "owner + trusted backup can spend after 1 day," "trusted backup alone after 1 year." Without MAST, all three branches would be visible in every spend, taking up block space and revealing your security model. With MAST, only the branch you actually use is published. The rest is invisible to chain observers.

Combined with Taproot's "key path spending" (the cooperative-signature option), the privacy gain compounds: if all participants agree, the script never needs to be revealed at all. Observers see what looks like a single-signature spend. If cooperation breaks down, only one branch of the script is exposed.

MAST has been part of Bitcoin since the Taproot soft fork activated in November 2021 ([BIP-341 / BIP-342](/glossary/bip-341-taproot)). It's not a separate feature you opt into; it's the way Taproot script-path spending works.

The acronym is a mouthful and the explanation is dense, but the upshot is clean: Bitcoin can now have complex contracts that look the same on-chain as the simplest transactions, until they don't have to.
