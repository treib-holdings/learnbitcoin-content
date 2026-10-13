---
title: "BIP 32 (HD Wallets)"
slug: bip-32
draft: false
updated: "2026-10-13"
shortDefinition: "Pieter Wuille's 2012 standard for deterministic key derivation: one seed becomes a tree of keys, all reproducible from a single backup."
keyTakeaways:
  - "Defines extended keys (xpub / xprv) and child-key derivation via HMAC-SHA512"
  - "Hardened derivation (index >= 2^31) closes the parent-key recovery attack"
  - "Widely adopted: Bitcoin Core has derived keys this way since 0.13 (2016), and BIP 39 and BIP 44 build on it"
sources:
  - { label: "BIP-32 - Hierarchical Deterministic Wallets (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets: hardened derivation at the purpose, coin type and account levels (2014)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys: the derived seed is 512 bits and feeds BIP-32 (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Bitcoin Core - 0.13.0 release notes: newly created wallets use hierarchical deterministic key generation according to BIP32 (2016-08-23)", url: "https://bitcoincore.org/en/releases/0.13.0/" }
  - { label: "BIP-380 - Output Script Descriptors General Operation, Motivation: not all wallets support or use the standard derivation paths (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki" }
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

BIP 32, authored by Pieter Wuille in February 2012, is the foundational standard for hierarchical deterministic (HD) Bitcoin wallets. One seed of 128 to 512 bits (the BIP 39 seed is 512) produces a tree of keys, all reproducible from that single seed. Back up the seed, and you've backed up every key your wallet will ever derive.

The construction is straightforward. The seed is run through HMAC-SHA512 with the fixed key "Bitcoin seed", and the 512-bit result is split into a 256-bit master private key and a 256-bit [chaincode](/glossary/chaincode), bundled together as an extended private key (`xprv`). To derive a child key, HMAC-SHA512 is computed over the parent key and the child index, with the chaincode as the HMAC key. The left half of the output, added to the parent key, gives the child's key; the right half is the new chaincode. Repeat at each level to walk the tree.

Two derivation modes matter:

- **Non-hardened** (child index < 2^31). The child public key can be derived from the parent public key plus the chaincode. This is what makes [xpub](/glossary/xpub-extended-public-key) useful: hand someone the xpub and they can derive every receive address without ever seeing the private side.
- **Hardened** (child index >= 2^31). The derivation requires the parent private key. An attacker who learns one hardened child private key cannot reconstruct the parent or its siblings. This closes a famous attack on non-hardened derivation. BIP 44 conventionally uses hardened derivation for account-level paths so a leaked account key doesn't compromise other accounts.

Why this matters in practice:

- **One backup, infinite addresses.** Generate a fresh address for every transaction without making more backups.
- **Watch-only wallets.** Import an xpub into a phone app to monitor a hardware wallet's balance without exposing any private key.
- **Multi-account separation.** [BIP 44](/glossary/bip-44) uses hardened account-level paths so an exposed account doesn't bleed into siblings.
- **Cross-wallet portability.** Restore the seed in another wallet that uses the same derivation path and script type and you get the same addresses; BIP 32 leaves the tree layout advisory, which is why [BIP 44](/glossary/bip-44) and output descriptors pin it down. The seed is the asset; the software is replaceable.

BIP 32 alone says only that the seed is random bytes; it doesn't specify how to back it up in a form humans can write down. That's [BIP 39](/glossary/bip-39): mnemonic seed phrases. Together they're the foundation of modern Bitcoin self-custody.

Spec: [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).
