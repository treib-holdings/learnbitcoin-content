---
title: "BIP 85"
slug: bip-85
draft: false
shortDefinition: "Defines a standard for creating multiple deterministic child seeds from a single master seed, improving backup convenience."
keyTakeaways:
  - "Allows generating multiple mnemonic seeds from one root"
  - "Simplifies backups for multiple wallets"
  - "Expands on the hierarchical approach of HD wallets"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-bitcoin-improvement-proposal
  - bip-44
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - seed-phrase
  - xpub-extended-public-key
liveWidget: ~
---

BIP 85, found in [BIP-85](https://github.com/bitcoin/bips/blob/master/bip-0085.mediawiki), provides a structured way to generate multiple child seeds (e.g., mnemonic phrases) from one master seed. It’s akin to using one ‘master key’ for everything, yet each child wallet remains distinct and compartmentalized.
This is particularly useful for people or organizations who need multiple independent seeds—say, for different use cases or different family members—but only want to secure one master backup. By deriving additional seeds from an already backed-up root, users reduce the complexity of maintaining multiple passphrases. BIP 85 extends the convenience of hierarchical deterministic wallets, making multi-wallet management more efficient.
