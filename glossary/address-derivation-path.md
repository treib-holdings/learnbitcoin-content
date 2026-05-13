---
title: "Address Derivation Path"
slug: address-derivation-path
draft: false
shortDefinition: "A structured route in hierarchical deterministic (HD) wallets (e.g., m/44'/0'/0'/0/0) to generate a sequence of keys and addresses."
keyTakeaways:
  - "Structures how HD wallets generate multiple addresses"
  - "Specified in BIPs like BIP-32 and BIP-44"
  - "Ensures wallet interoperability and organization"
sources: []
relatedTerms:
  - address
  - address-indexing
  - chaincode
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-entropy-mixer
  - seed-phrase
  - seed-tool
liveWidget: ~
---

Address derivation paths are like treasure maps in a hierarchical deterministic wallet, detailing exactly where each key is buried. Defined in [BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) or [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki), these paths break down the process of generating many addresses from a single master seed. For instance, m/44'/0'/0'/0/0 points to the very first receiving address for Bitcoin under BIP-44’s guidelines.
They ensure uniformity and compatibility across different wallets so that if you import your seed words into another BIP-44-compatible wallet, you’ll see the same addresses. It’s a powerful system that keeps your funds organized, and it’s also the reason losing your seed phrase is a really bad day: the entire ‘map’ to all your keys depends on that one phrase.
