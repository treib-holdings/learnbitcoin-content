---
title: "BIP 85"
slug: bip-85
draft: false
shortDefinition: "Defines a standard for creating multiple deterministic child seeds from a single master seed, improving backup convenience."
keyTakeaways:
  - "Allows generating multiple mnemonic seeds from one root"
  - "Simplifies backups for multiple wallets"
  - "Expands on the hierarchical approach of HD wallets"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-bitcoin-improvement-proposal
  - bip-44
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - seed-phrase
  - xpub-extended-public-key
liveWidget: ~
---

[BIP-85](https://github.com/bitcoin/bips/blob/master/bip-0085.mediawiki) defines a deterministic way to generate child secrets (typically new BIP-39 mnemonics, but also other formats like WIF private keys, HD seed bytes, or generic 256-bit entropy) from a single master BIP-32 wallet. Each child derivation is fully independent in terms of resulting wallet operation, but reproducible from the master plus a derivation path.

Why this is useful:

- **One backup, many wallets.** A user with a single carefully-protected master seed can deterministically generate seeds for separate "sub-wallets" - one for daily spending, one for savings, one to give to a family member, etc. Backups consolidate to the master.
- **Recoverable secrets, not random ones.** If you lose a sub-wallet's mnemonic, you can re-derive it from the master + path. No need to back up each sub-wallet independently.
- **General-purpose entropy generation.** BIP-85 supports deriving non-mnemonic outputs too - PGP keys, password seeds, arbitrary bytes for any application that wants deterministic randomness anchored to a backed-up source.

The downside: **the master seed becomes a single point of catastrophic failure.** If the master leaks, every sub-wallet is compromised at once. For users with serious operational security (hardware wallets, secure backup storage), this concentration can be acceptable. For users with weaker key hygiene, it can be worse than independent seeds.

BIP-85 is widely supported in Bitcoin Core, hardware wallets (ColdCard, Trezor, Foundation Passport), and several wallet stacks. It's the standard for "I want multiple wallets but only one backup to safeguard."

See [Hierarchical Deterministic Wallet](/glossary/hierarchical-deterministic-wallet) for the BIP-32 framework this builds on.
