---
title: "Hierarchical Deterministic Wallet"
slug: hierarchical-deterministic-wallet
draft: false
shortDefinition: "A wallet where all addresses and private keys derive from a single mnemonic or master seed (synonym: HD wallet)."
keyTakeaways:
  - "Single seed phrase controls an entire tree of keys"
  - "Enables straightforward backup and restoration"
  - "Based on BIPs 32, 44, and (often) 39 for mnemonics"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-44
  - bip-85
  - bitcoin-dev-kit-bdk
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - chaincode
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - garlium
  - gui-wallet
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - inheritance-seed-backup
  - seed-phrase
  - wallet
  - wallet-import-format-wif
  - xpub-extended-public-key
liveWidget: ~
---

Sometimes abbreviated ‘HD wallet,’ this design is defined by BIP 32 (with BIP 44 for multi-account structures). Instead of manually managing numerous private keys, the user secures one seed phrase, from which all child keys are algorithmically generated. If you back up the seed once, you can restore every address that might be created in the future. This approach has become the norm for modern Bitcoin wallets-fostering ease of backup, multi-account setups, and compatibility across multiple wallet implementations.
