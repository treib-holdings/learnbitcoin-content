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

MAST breaks a Bitcoin script into distinct branches, each hashed into a Merkle tree. Only the executed branch is revealed on-chain, while others remain hidden. Combined with Taproot's key path spending, MAST helps scripts appear like regular single-sig spends unless alternative branches are used. This improves privacy (unexecuted conditions aren't exposed) and reduces on-chain data, lowering fees. Though not mandatory, MAST is part of Bitcoin's ongoing move toward more flexible smart contracts under the Taproot upgrade (BIP 341/342).
