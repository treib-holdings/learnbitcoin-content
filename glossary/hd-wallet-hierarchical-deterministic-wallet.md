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

A Hierarchical Deterministic (HD) wallet is the standard Bitcoin wallet design where every key the wallet will ever need is deterministically derived from a single root seed. Back up the seed; you've backed up everything.

The structure, defined in [BIP 32](/glossary/bip-32):

- A single seed (typically 12 or 24 [BIP 39](/glossary/bip-39) words) plus optional passphrase produces a 512-bit master seed.
- The master seed splits into a master private key and a master chaincode.
- Children are derived by HMAC-SHA512 of (parent key, chaincode, index). Each child is itself a parent that can derive its own children. This forms the tree.
- Standardized paths (BIP 44 for legacy, BIP 49 for wrapped SegWit, BIP 84 for native SegWit, BIP 86 for Taproot) tell wallets exactly where to look for addresses.

Why HD wallets dominate:

- **One backup covers everything.** Write down 12 or 24 words, and you've backed up every address your wallet will ever generate, across every account, indefinitely.
- **Cross-wallet portability.** Import a BIP 39 seed into any standards-compliant wallet (Sparrow, BlueWallet, Electrum, Trezor, ColdCard, anything) and get the same addresses.
- **Watch-only support.** Hand someone the xpub (extended public key) and they can derive every receive address without ever seeing private keys. Useful for accounting, monitoring, watch-only mobile apps backed by hardware wallets.
- **Multi-account separation.** The BIP 44/84/86 path structure includes an account level so users can maintain logically separated wallets (`account 0` for personal, `account 1` for business, etc.) from a single seed.
- **Hardware wallet integration.** The hardware device holds the seed; software wallets only see the xpub. The standardized derivation paths mean any compatible software pairs with any compatible hardware.

What HD wallets aren't:

- **A privacy panacea.** All children share the same chaincode at each branch; if someone obtains an xpub, they can derive all non-hardened children. Hardened derivation (used for top-level paths) prevents this from extending up the tree.
- **A backup replacement.** The seed is still a single point of failure. Lose the seed, lose everything. Hardware wallets and multisig setups add resilience layers on top of HD.

HD wallets became universal around 2014-2016 as BIP 32 / 39 / 44 implementations matured. Today, essentially every wallet worth using is an HD wallet, and "the seed" is the universal backup primitive.
