---
title: "Watch-Only Wallet"
slug: watch-only-wallet
draft: false
shortDefinition: "A wallet containing only public keys or addresses, letting users monitor balances without the ability to spend."
keyTakeaways:
  - "Provides visibility of funds without spending capability"
  - "Often uses xpub for derivation in HD setups"
  - "Useful for security audits, custody oversight, or accounting"
sources: []
relatedTerms:
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - garlium
  - gui-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - security
  - wallet
  - wallet-import-format-wif
liveWidget: ~
---

For security or convenience, you may track addresses in a wallet that lacks private keys. This is common for read-only access: a business accountant verifying incoming transactions or a user wanting to track funds from multiple sources. Watch-only wallets can’t sign transactions. To spend, you’d import or use the private keys in a fully capable wallet. Hierarchical Deterministic watch-only setups rely on extended public keys (xpub) to generate all receiving addresses but hide the corresponding private keys.
