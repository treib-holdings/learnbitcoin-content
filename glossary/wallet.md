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
  - green-address
  - gui-wallet
  - hardware-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - hierarchical-multisig
  - security
  - wallet-import-format-wif
  - watch-only-wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
  - "https://en.bitcoin.it/wiki/Wallet"
liveWidget: ~
---

A Bitcoin wallet doesn't actually hold Bitcoin. Bitcoin lives on the chain. A wallet holds the [private keys](/glossary/private-key) that authorize moving it.

What a wallet does, mechanically:

- **Generates and stores keys**, typically by deriving them from a [BIP-39](/glossary/mnemonic-seed-phrase) seed phrase using a [hierarchical deterministic](/glossary/hierarchical-deterministic-wallet) structure.
- **Tracks the on-chain UTXOs you can spend** - either by querying a remote server, or, with a full-validation wallet like [Bitcoin Core](/glossary/bitcoin-core), by running a full node alongside.
- **Constructs and signs [transactions](/glossary/transaction)** when you want to send.
- **Generates fresh receive [addresses](/glossary/address)** as you need them.

Wallets come in several archetypes, each with different security/convenience tradeoffs:

- **[Custodial wallets](/glossary/custodial-wallet)** - someone else holds your keys (Coinbase, Cash App, Strike). Easiest to use, weakest property guarantees. You don't own Bitcoin; you own an IOU.
- **Mobile wallets** - Phoenix, Muun, BlueWallet, etc. You hold the keys, convenient daily use, hot-wallet security model.
- **Desktop wallets** - Sparrow, Bitcoin Core's own wallet, Wasabi. Often connect to your own node; more powerful coin control.
- **[Hardware wallets](/glossary/hardware-wallet)** - Trezor, ColdCard, Jade, BitBox, Ledger. Keys stay on a dedicated signing device, never touching internet-connected machines.
- **Multisig setups** - more than one device required to authorize a transaction. Strongly recommended for significant amounts.

The right wallet depends on what you're holding and what you're doing. Spending money you'd carry as cash? A mobile wallet is fine. Long-term savings? Hardware, ideally multisig. The general rule: more value → more friction → more separation between keys and online surfaces.

See the [Journey: Be Your Own Bank](/journey/be-your-own-bank) chapter for the full walkthrough.
