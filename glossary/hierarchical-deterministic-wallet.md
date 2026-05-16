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
sameAs:
  - "https://en.bitcoin.it/wiki/Hierarchical_deterministic_wallet"
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
---

A hierarchical deterministic (HD) wallet is one where every [private key](/glossary/private-key) and every [address](/glossary/address) is derived deterministically from a single master seed. Back up the seed once and you've backed up every key the wallet has ever generated, and every key it will ever generate in the future.

The HD design is specified across three [BIPs](/glossary/bip-bitcoin-improvement-proposal):

- **BIP-32** - the master derivation algorithm. Defines how to turn a master seed into a tree of child keys, using HMAC-SHA-512 to derive deterministically without leaking the parent.
- **[BIP-39](/glossary/mnemonic-seed-phrase)** - the seed-to-words encoding (the 12/24-word [seed phrase](/glossary/seed-phrase)).
- **[BIP-44](/glossary/bip-44)** - a standardized derivation path structure (`m/purpose'/coin'/account'/change/index`) that lets different wallet software discover each other's accounts and addresses.

Why this matters in practice:

- **Backup is trivial.** Write down 12 or 24 words. Done. That covers all current and future keys.
- **Each transaction gets a fresh address.** No reuse, better privacy, no extra backup burden.
- **The seed is portable.** Restore your wallet in completely different software (Sparrow, Electrum, Bitcoin Core, Trezor Suite) and it can re-derive the same keys and find the same coins.
- **Watch-only mode is possible.** You can share an extended *public* key (xpub) with another tool to derive receive addresses without exposing any private keys.

Almost every modern Bitcoin wallet is HD. Pre-2013 wallets (early Bitcoin Core, Bitcoin-Qt) generated random standalone keys and required backing up the wallet file after every transaction - a much worse user experience that's been fully obsolete for over a decade.
