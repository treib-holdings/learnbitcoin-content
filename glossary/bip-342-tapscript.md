---
title: "BIP 342 (Tapscript)"
slug: bip-342-tapscript
draft: false
shortDefinition: "Defines Taproot scripting logic, including opcodes and versioning for future expansions of Bitcoin smart contracts."
keyTakeaways:
  - "Introduces a new scripting version for Taproot"
  - "Supports additional opcodes and flexible upgrades"
  - "Ensures forward-compatibility for advanced smart contracts"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-16-p2sh
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-341-taproot
  - bitcoin-script
  - merkleized-abstract-syntax-tree-mast
  - script
  - taproot
liveWidget: ~
---

BIP 342, detailed in [BIP-342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki), complements Taproot by specifying Tapscript: an updated script version that supports new opcodes and execution rules. It ensures that the script logic under the Taproot umbrella remains flexible and forward-compatible.
This BIP provides the technical details on how Taproot outputs validate signatures and how new opcodes can be introduced. By designing Tapscript with versioning in mind, Bitcoin developers aim to avoid repeated soft forks for future expansions. It's a critical piece in the puzzle that lets Taproot evolve without constantly rewriting the protocol.
