---
title: "BIP 32 (HD Wallets)"
slug: bip-32
draft: false
shortDefinition: "Pieter Wuille's 2012 standard for deterministic key derivation: one seed becomes a tree of keys, all reproducible from a single backup."
keyTakeaways:
  - "Defines extended keys (xpub / xprv) and child-key derivation via HMAC-SHA512"
  - "Hardened derivation (index >= 2^31) closes the parent-key recovery attack"
  - "Universally adopted; every modern Bitcoin wallet builds on BIP 32"
sources: []
relatedTerms:
  - bip-39
  - bip-44
  - bip-bitcoin-improvement-proposal
  - chaincode
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-aggregation
  - seed-phrase
  - xpub-extended-public-key
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
---

BIP 32, authored by Pieter Wuille in February 2012, is the foundational standard for hierarchical deterministic (HD) Bitcoin wallets. One 512-bit seed produces a tree of keys, all reproducible from that single seed. Back up the seed, and you've backed up every key your wallet will ever derive.

The construction is straightforward. The seed is split into a 256-bit master private key and a 256-bit [chaincode](/glossary/chaincode), bundled together as an extended private key (`xprv`). To derive a child key, HMAC-SHA512 is computed over the parent key, the chaincode, and the child index. The output gives the child's key and a new chaincode. Repeat at each level to walk the tree.

Two derivation modes matter:

- **Non-hardened** (child index < 2^31). The child public key can be derived from the parent public key plus the chaincode. This is what makes [xpub](/glossary/xpub-extended-public-key) useful: hand someone the xpub and they can derive every receive address without ever seeing the private side.
- **Hardened** (child index >= 2^31). The derivation requires the parent private key. An attacker who learns one hardened child private key cannot reconstruct the parent or its siblings. This closes a famous attack on non-hardened derivation. BIP 44 conventionally uses hardened derivation for account-level paths so a leaked account key doesn't compromise other accounts.

Why this matters in practice:

- **One backup, infinite addresses.** Generate a fresh address for every transaction without making more backups.
- **Watch-only wallets.** Import an xpub into a phone app to monitor a hardware wallet's balance without exposing any private key.
- **Multi-account separation.** [BIP 44](/glossary/bip-44) uses hardened account-level paths so an exposed account doesn't bleed into siblings.
- **Cross-wallet portability.** Restore a BIP 32 seed in any standard wallet and get the same addresses. The seed is the asset; the software is replaceable.

BIP 32 alone doesn't specify how the seed is created or backed up. That's [BIP 39](/glossary/bip-39): mnemonic seed phrases. Together they're the foundation of modern Bitcoin self-custody.

Spec: [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).
