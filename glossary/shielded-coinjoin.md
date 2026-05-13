---
title: "Shielded CoinJoin"
slug: shielded-coinjoin
draft: false
shortDefinition: "A hypothetical or future approach merging CoinJoin with zero-knowledge proofs to further obscure transaction details."
keyTakeaways:
  - "Further obfuscates data within a CoinJoin beyond typical input-output mixing"
  - "May need new cryptographic primitives or chain upgrades"
  - "Represents a potential future direction for privacy enhancements in Bitcoin"
sources: []
relatedTerms:
  - coin-plasma
  - coinjoin
  - fungibility
  - gadget-utxo
  - mixing-service
  - payjoin
  - stealth-address
liveWidget: ~
---

CoinJoin already blends multiple users’ inputs/outputs, but leftover metadata can still be analyzed by advanced chain analysis. A ‘shielded CoinJoin’ proposes using zk-proofs or similar cryptographic techniques to hide amounts or ownership more robustly-akin to how Zcash’s ‘shielded’ transactions hide details. Implementing such privacy in Bitcoin is non-trivial, requiring new opcodes or consensus changes. While not part of Bitcoin’s protocol today, ongoing research explores ways to combine off-chain or second-layer solutions with advanced cryptography for deeper anonymity without sacrificing consensus or auditing.
