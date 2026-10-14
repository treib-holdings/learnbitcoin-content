---
title: "Wallet"
slug: wallet
draft: false
updated: "2026-10-13"
shortDefinition: "Software or hardware managing private keys and addresses, enabling users to send/receive BTC."
keyTakeaways:
  - "Manages keys that control BTC outputs, not physical currency"
  - "Can be software-only, hardware-based, or multisig setups"
  - "Safety depends on careful backup and key protection"
sources:
  - { label: "bitcoin.org - Developer Guide, Wallets: wallet programs create public keys to receive satoshis and use the corresponding private keys to spend them; full-service, signing-only, offline and hardware wallets (accessed 2026-10-13)", url: "https://developer.bitcoin.org/devguide/wallets.html" }
  - { label: "bitcoin.org - Developer Guide, Operating Modes: a simplified payment verification client downloads block headers and requests transactions from full nodes as needed (accessed 2026-10-13)", url: "https://developer.bitcoin.org/devguide/operating_modes.html" }
  - { label: "Andreas M. Antonopoulos and David A. Harding - Mastering Bitcoin, chapter 5: a Bitcoin wallet contains only keys, associated with bitcoins recorded on the blockchain, and proving control of the keys is what lets you spend them (GitHub develop branch, accessed 2026-10-13)", url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05_wallets.adoc" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys: a mnemonic sentence for the generation of deterministic wallets, converted to a seed for BIP 32 (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Bitcoin Core - doc/external-signer.md: spending from a hardware wallet through an external signer and PSBT (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/external-signer.md" }
  - { label: "Bitcoin Core - doc/multisig-tutorial.md: a 2-of-3 multisig built from three signer wallets and one watch-only wallet, run inside the node (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/multisig-tutorial.md" }
  - { label: "Bitcoin Core - 0.9.0 release notes, GUI: Add Coin Control Features (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.9.0.md" }
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

- **Generates and stores keys**, typically by deriving them from a [BIP 39](/glossary/bip-39) seed phrase using a [hierarchical deterministic](/glossary/hierarchical-deterministic-wallet) structure.
- **Tracks the on-chain [UTXOs](/glossary/utxo-unspent-transaction-output) you can spend** - either by asking full nodes it doesn't run itself (the light-wallet model), or, with [Bitcoin Core](/glossary/bitcoin-core), from the full node its wallet is built into.
- **Constructs and signs [transactions](/glossary/transaction)** when you want to send.
- **Generates fresh receive [addresses](/glossary/address)** as you need them.

Wallets come in several archetypes, each with different security/convenience tradeoffs:

- **[Custodial wallets](/glossary/custodial-wallet)** - someone else holds your keys (an exchange or a payment app). Easiest to use, weakest property guarantees. Whoever holds the keys can spend the coins, so what you hold is the company's promise to pay, not Bitcoin; the linked entry records how often that promise has failed.
- **Mobile wallets** - you hold the keys on the phone itself. Convenient daily use, hot-wallet security model: the keys live on an internet-connected device.
- **Desktop wallets** - Bitcoin Core's own wallet and others. Often connect to your own node, and usually offer [coin control](/glossary/coin-control) (Bitcoin Core's GUI has had it since version 0.9.0).
- **[Hardware wallets](/glossary/hardware-wallet)** - keys stay on a dedicated signing device, never touching internet-connected machines. Your computer passes transactions in and out; the device signs.
- **[Multisig](/glossary/multisig) setups** - more than one key, usually on separate devices, required to authorize a transaction. Strongly recommended for significant amounts.

The right wallet depends on what you're holding and what you're doing. Spending money you'd carry as cash? A mobile wallet is fine. Long-term savings? Hardware, ideally multisig. The general rule: more value -> more friction -> more separation between keys and online surfaces.

See the [Journey: Be Your Own Bank](/journey/be-your-own-bank) chapter for the full walkthrough.
