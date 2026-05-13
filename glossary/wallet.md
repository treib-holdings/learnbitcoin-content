---
title: "Wallet"
slug: wallet
draft: false
shortDefinition: "Software or hardware managing private keys and addresses, enabling users to send/receive BTC."
keyTakeaways:
  - "Manages keys that control BTC outputs, not physical currency"
  - "Can be software-only, hardware-based, or multi-sig setups"
  - "Safety depends on careful backup and key protection"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-dev-kit-bdk
  - bitcoin-vault
  - coin-control
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - garlium
  - green-address
  - gui-wallet
  - hardware-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - hierarchical-multisig
  - security
  - wallet-import-format-wif
  - watch-only-wallet
liveWidget: ~
---

A Bitcoin wallet doesn’t literally store ‘coins’ but holds private keys that authorize spending. It typically also handles address creation (to receive BTC) and transaction signing. Wallet types range from simple mobile apps to hardened hardware devices, to advanced multi-sig or cold storage solutions. Many wallets implement hierarchical deterministic frameworks (BIP 32/39/44) so backups are simple (seed phrase). Security practices vary widely. Lost or compromised wallet keys mean irrecoverable BTC, so best practices include backups, passphrases, and hardware isolation.
