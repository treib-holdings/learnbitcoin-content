---
title: "Deterministic Wallet"
slug: deterministic-wallet
draft: false
shortDefinition: "A wallet using a single seed phrase to derive all child keys (BIP 32/44), simplifying backups and key management."
keyTakeaways:
  - "One seed phrase can recreate all derived addresses"
  - "Follows HD standards (BIP 32/44) for broad compatibility"
  - "Greatly simplifies backups and restoration"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-44
  - bip-85
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - chaincode
  - coin-control
  - custodial-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - seed-phrase
  - wallet-import-format-wif
  - xpub-extended-public-key
liveWidget: ~
---

A deterministic wallet is one where every [private key](/glossary/private-key) is derived algorithmically from a single starting secret. Same seed in, same keys out, on any compatible software, forever. It's the defining property of every modern Bitcoin wallet.

Before deterministic wallets, you had a *random* wallet: each new address came from an independently-generated private key, and your wallet backup had to include all of them. Spend, generate a new address, you needed a new backup. Forget to back up after a transaction? Lose those funds. Real users lost real Bitcoin this way in 2010-2012.

The deterministic fix: one master seed (entropy), one derivation algorithm, infinite child keys. Back up the seed once; the keys can be re-derived on demand.

The dominant standard is [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki), which adds the **hierarchical** structure ([HD wallets](/glossary/hierarchical-deterministic-wallet)) on top of basic determinism. In practice "deterministic wallet" and "HD wallet" are used almost interchangeably in 2026 because virtually all deterministic wallets in production use the hierarchical extension.

The minimum properties:

- **Single backup.** Back up the [seed phrase](/glossary/seed-phrase) once, recover everything.
- **Portable.** Same seed restores the same wallet on different software (Sparrow, Electrum, Bitcoin Core, hardware wallets) as long as both implement the standard.
- **Reproducible.** Two different wallets can independently derive the same addresses if given the same seed. Useful for verification, recovery, and watch-only setups.

The major non-HD design that's still occasionally seen is **JBOK** ("Just a Bunch Of Keys") - the random-wallet pattern. It exists mostly as a historical curiosity and a warning. Use HD.

See [Hierarchical Deterministic Wallet](/glossary/hierarchical-deterministic-wallet) for the dominant BIP-32 flavor and [Seed Phrase](/glossary/seed-phrase) for the human-readable backup that drives it all.
