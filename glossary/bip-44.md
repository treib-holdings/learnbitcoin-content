---
title: "BIP 44"
slug: bip-44
draft: false
shortDefinition: "Extends BIP 32's HD wallet framework to support multiple accounts, coin types, and organizational structures."
keyTakeaways:
  - "Gives a standard multi-account layout for HD wallets"
  - "Allows multiple coin types under one seed phrase"
  - "Improves cross-compatibility between different wallets"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-bitcoin-improvement-proposal
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - seed-phrase
  - xpub-extended-public-key
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0044"
liveWidget: ~
---

[BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) defines the standard derivation-path structure for [hierarchical deterministic wallets](/glossary/hierarchical-deterministic-wallet). It's the convention that lets you back up a [seed phrase](/glossary/seed-phrase) in one wallet and restore the same accounts in any other BIP-44-compliant wallet.

The path structure is:

```
m / purpose' / coin_type' / account' / change / address_index
```

Concretely, the first receive address of the first Bitcoin account would be:

```
m / 44' / 0' / 0' / 0 / 0
```

What each level means:

- **44'** - purpose number, fixed at 44 for BIP-44-style derivation. (Other purposes exist: 49' for P2SH-wrapped SegWit, 84' for native SegWit, 86' for Taproot.)
- **0'** - coin type, where Bitcoin is 0. Other chains have their own numbers per [SLIP-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).
- **0'** - account number. Lets you have separate "accounts" within one wallet (e.g., savings vs spending).
- **0** - change indicator. 0 = receive addresses, 1 = internal change addresses.
- **0** - address index. Incremented for each fresh address.

The apostrophes mean "hardened" derivation - a level that can't be derived from a parent extended *public* key alone. This prevents an exposed xpub from compromising the rest of the wallet hierarchy.

BIP-44 is the spec that turned "back up your seed phrase" into a portable, reliable, multi-implementation standard. Almost every modern wallet follows it (or a BIP-49 / BIP-84 / BIP-86 variant for different address types). See [Hierarchical Deterministic Wallet](/glossary/hierarchical-deterministic-wallet) for the underlying BIP-32 framework this builds on.
