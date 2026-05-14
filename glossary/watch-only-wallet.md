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
  - gui-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - security
  - wallet
  - wallet-import-format-wif
liveWidget: ~
---

A watch-only wallet contains [public keys](/glossary/public-key) or [extended public keys](/glossary/xpub-extended-public-key) but no [private keys](/glossary/private-key). It can show you balances, track incoming transactions, generate receive addresses, and build unsigned transactions - but it can't actually sign or spend.

The standard pattern: a [hardware wallet](/glossary/hardware-wallet) holds the private keys, and you load its **xpub** (extended public key) into a watch-only wallet on your laptop or phone. The watch-only wallet derives every address you'll ever use from that xpub, monitors them on-chain, and shows you the wallet state in real time. When you want to send, the watch-only wallet builds a [PSBT](/glossary/partially-signed-bitcoin-transaction-psbt) and hands it to the hardware wallet to sign.

Why this split is useful:

- **Daily monitoring without exposure.** Your phone shows your wallet balance without your keys ever being on your phone.
- **Auditing.** Accountants, business partners, or auditors can verify on-chain activity for a wallet without needing spending access.
- **Multisig coordination.** Each cosigner can keep a watch-only view of the shared wallet while their actual keys live on isolated hardware.
- **Backup verification.** Restore an xpub on a different machine to confirm your addresses match - sanity-checking your backup without exposing your seed.

Watch-only wallets are widely supported. Sparrow, Electrum, Bitcoin Core, Specter Desktop, Nunchuk, BlueWallet, and others all handle xpubs natively. Modern self-custody workflows almost always pair a hardware wallet with a watch-only desktop or mobile companion - it's the cleanest separation between "knowing your balance" and "having the keys."

See [Hardware Wallet](/glossary/hardware-wallet) for the signing-side device and [PSBT](/glossary/partially-signed-bitcoin-transaction-psbt) for how watch-only and signing wallets actually exchange transactions.
