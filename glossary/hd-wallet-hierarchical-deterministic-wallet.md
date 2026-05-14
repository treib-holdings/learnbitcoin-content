---
title: "HD Wallet (Hierarchical Deterministic Wallet)"
slug: hd-wallet-hierarchical-deterministic-wallet
draft: false
shortDefinition: "A wallet using BIP 32 derivation paths to create a structured key tree from one seed."
keyTakeaways:
  - "Allows all addresses to be recovered from one master seed"
  - "Follows standardized derivation paths (e.g., BIP 44)"
  - "A defining feature of modern Bitcoin wallet design"
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
  - gui-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - seed-phrase
  - wallet
  - wallet-import-format-wif
  - xpub-extended-public-key
liveWidget: ~
---

Hierarchical Deterministic (HD) wallets generate private/public key pairs on-the-fly from a single root seed, usually represented as mnemonic words (BIP 39) or raw entropy. This seed spawns a branching tree of child keys-like m/44'/0'/0'/0/0 for standard addresses-enabling easy backups and organization of multiple accounts or coins. If you lose your device, you can re-import the seed in any compatible wallet, restoring every sub-account, address, and balance. HD wallets have become a mainstream practice, simplifying key management for both new and experienced users.
