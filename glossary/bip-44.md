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
liveWidget: ~
---

BIP 44, outlined in [BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), expands on hierarchical deterministic wallets introduced by BIP 32. It defines a logical structure for multiple accounts and different cryptocurrencies within the same seed phrase, so you can easily manage Bitcoin, Litecoin, and other assets all in one organized approach.
By following a specific derivation path (e.g., m/44'/0'/0'/0/0 for Bitcoin's first receiving address), wallets ensure consistency, making it simpler to restore funds in another compatible wallet. BIP 44 plays a huge role in user-friendly wallet experiences, removing confusion around key management and boosting interoperability across the ecosystem.
