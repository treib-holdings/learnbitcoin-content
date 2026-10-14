---
title: "BIP 44"
slug: bip-44
draft: false
updated: "2026-10-15"
shortDefinition: "Extends BIP 32's HD wallet framework to support multiple accounts, coin types, and organizational structures."
keyTakeaways:
  - "Gives a standard multi-account layout for HD wallets"
  - "Allows multiple coin types under one seed phrase"
  - "Improves cross-compatibility between different wallets"
sources:
  - { label: "BIP 44 - Multi-Account Hierarchy for Deterministic Wallets, by Marek Palatinus and Pavol Rusnak (the m / purpose' / coin_type' / account' / change / address_index layout, hardened at the first three levels, change 0 for receiving and 1 for change; status Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "BIP 32 - Hierarchical Deterministic Wallets (hardened child keys cannot be derived from an extended public key; a parent xpub plus any non-hardened child private key is equivalent to the parent xprv, which is why the account level is hardened)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "SLIP-0044 - Registered coin types for BIP-0044 (coin type 0 is Bitcoin; created 2014-07-09)", url: "https://github.com/satoshilabs/slips/blob/master/slip-0044.md" }
  - { label: "BIP 49 - Derivation scheme for P2WPKH-nested-in-P2SH based accounts (purpose 49'; status Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki" }
  - { label: "BIP 84 - Derivation scheme for P2WPKH based accounts (purpose 84'; status Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki" }
  - { label: "BIP 86 - Key Derivation for Single Key P2TR Outputs (purpose 86'; status Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki" }
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

The apostrophes mean "hardened" derivation - a level that can't be derived from a parent extended *public* key, only from the private one. BIP-32 hardens the account level for a reason: an extended public key plus any one non-hardened private key below it gives away the parent extended private key, so with the account level hardened (and the two levels above it), a leak inside one account can't reach the master key or the other accounts.

BIP-44 is the spec that turned "back up your seed phrase" into a portable, reliable, multi-implementation standard. Most seed-phrase wallets follow it or one of its siblings for other address types (BIP-49, BIP-84, BIP-86), all of which the BIPs repository marks as deployed. See [Hierarchical Deterministic Wallet](/glossary/hierarchical-deterministic-wallet) for the underlying [BIP-32](/glossary/bip-32) framework this builds on.
