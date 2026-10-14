---
title: "Watch-Only Wallet"
slug: watch-only-wallet
draft: false
updated: "2026-10-13"
shortDefinition: "A wallet containing only public keys or addresses, letting users monitor balances without the ability to spend."
keyTakeaways:
  - "Provides visibility of funds without spending capability"
  - "Often uses xpub for derivation in HD setups"
  - "Useful for security audits, custody oversight, or accounting"
sources:
  - { label: "bitcoin.org - Developer Guide, Wallets: a networked (watching-only) wallet derives child public keys from a parent public key, monitors for outputs, builds unsigned transactions and hands them to a signing-only wallet (accessed 2026-10-13)", url: "https://developer.bitcoin.org/devguide/wallets.html" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets, use case Audits: sharing account public extended keys lets an auditor see all transactions from and to the wallet, but not a single secret key (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Bitcoin Core - createwallet RPC, 29.0.0 docs: disable_private_keys, only watchonlys are possible in this mode", url: "https://bitcoincore.org/en/doc/29.0.0/rpc/wallet/createwallet/" }
  - { label: "Electrum - Cold Storage guide: an offline wallet plus a watching-only online wallet that views history and creates transactions to be signed offline (accessed 2026-10-13)", url: "https://electrum.readthedocs.io/en/latest/coldstorage.html" }
  - { label: "BIP-174 - Partially Signed Bitcoin Transaction Format: lets offline signers such as air-gapped wallets and hardware wallets sign without direct access to the UTXO set (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki" }
  - { label: "Bitcoin Core - doc/descriptors.md, multisig: every participant creates a watch-only descriptor wallet from the same descriptor and checks they derive the same addresses (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md" }
relatedTerms:
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - gui-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - security
  - wallet
  - wallet-import-format-wif
liveWidget: ~
---

A watch-only wallet contains [public keys](/glossary/public-key) or [extended public keys](/glossary/xpub-extended-public-key) but no [private keys](/glossary/private-key). It can show you balances, track incoming transactions, generate receive addresses, and build unsigned transactions - but it can't actually sign or spend.

The standard pattern: a [hardware wallet](/glossary/hardware-wallet) holds the private keys, and you load its **xpub** (extended public key) into a watch-only wallet on your laptop or phone. The watch-only wallet derives your receive and change addresses from that xpub, monitors them on-chain, and shows you the wallet state in real time. When you want to send, the watch-only wallet builds a [PSBT](/glossary/psbt) and hands it to the hardware wallet to sign.

Why this split is useful:

- **Daily monitoring without exposure.** Your phone shows your wallet balance without your keys ever being on your phone.
- **Auditing.** Accountants, business partners, or auditors can verify on-chain activity for a wallet without needing spending access.
- **Multisig coordination.** Each cosigner can keep a watch-only view of the shared wallet while their actual keys live on isolated hardware.
- **Backup verification.** Restore an xpub on a different machine to confirm your addresses match - sanity-checking your backup without exposing your [seed phrase](/glossary/seed-phrase).

Watch-only wallets are a standard feature, not a niche one. [Bitcoin Core](/glossary/bitcoin-core) creates one when you make a wallet with private keys disabled, Electrum's cold storage guide walks through the same split, and the bitcoin.org developer guide describes pairing a signing-only wallet with a networked "watching-only" one as a normal wallet design. A common self-custody setup pairs a hardware wallet with a watch-only desktop or mobile companion - it's the cleanest separation between "knowing your balance" and "having the keys."

See [Hardware Wallet](/glossary/hardware-wallet) for the signing-side device and [PSBT](/glossary/psbt) for how watch-only and signing wallets actually exchange transactions.
