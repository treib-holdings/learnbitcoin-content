---
title: "Seed Phrase"
slug: seed-phrase
draft: false
shortDefinition: "A mnemonic phrase (BIP 39) encoding a wallet’s master private key. Identical concept to ‘mnemonic (seed) phrase.’"
keyTakeaways:
  - "All addresses/keys in an HD wallet derive from this phrase"
  - "Must be stored securely offline to prevent theft"
  - "Widely used across wallets for standard, portable backups"
sources: []
relatedTerms:
  - bip-44
  - bip-85
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - entropy-mixing-party
  - hardware-seed-vault
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - seed-entropy-mixer
  - seed-tool
  - security
liveWidget: ~
---

A seed phrase is 12-24 words representing binary entropy used to derive all wallet keys. This human-readable backup ensures that losing your hardware or software wallet doesn’t mean losing funds-as long as the phrase is safe. However, if anyone else sees it, they can restore and spend the wallet. Adding a passphrase (the ‘25th word’) can boost security further. Seed phrases dominate modern Bitcoin wallet backups, replacing older single-key or address-based approaches.
