---
title: "Bitcoin Dev Kit (BDK)"
slug: bitcoin-dev-kit-bdk
draft: false
shortDefinition: "An open-source Rust library offering flexible tools for building custom Bitcoin wallets with descriptor-based key management."
keyTakeaways:
  - "Facilitates custom wallet building with Rust's safety benefits"
  - "Leverages descriptors for precise key/script organization"
  - "Supports multiple backends (e.g., Electrum, Core)"
sources: []
relatedTerms:
  - bitcoin-core
  - bitcoin-knots
  - bitcoin-script
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - wallet
sameAs:
  - "https://github.com/bitcoindevkit/bdk"
  - "https://bitcoindevkit.org"
liveWidget: ~
---

The **Bitcoin Dev Kit (BDK)** is an open-source Rust library that provides modular building blocks for constructing Bitcoin wallets. Maintained by an active community of contributors, BDK powers a growing number of production wallets in 2026 - including major Lightning wallets that need on-chain functionality alongside off-chain.

What BDK provides:

- **Descriptor-based wallet primitives.** Output script descriptors (the modern way to specify "what scripts does this wallet use") let BDK handle complex setups - multisig, miniscript, custom locktime constructions - through a clean interface.
- **Pluggable backends.** Connect to a Bitcoin Core node, an Electrum server, an Esplora REST API, or run completely offline with PSBT-based workflows.
- **Coin selection algorithms.** Built-in strategies for picking UTXOs (largest-first, branch-and-bound, etc.).
- **PSBT support.** First-class [PSBT](/glossary/psbt) construction and finalization.
- **Cross-platform.** Rust core with FFI bindings for Swift, Kotlin, Python, JavaScript - so mobile and embedded wallets can use it.

Where BDK shines: anyone building a new Bitcoin wallet doesn't have to write descriptor parsing, PSBT logic, coin selection, fee estimation, and the rest from scratch. BDK handles the plumbing; the wallet builder focuses on UX and features.

Notable BDK-based wallets in 2026 include Mutiny Wallet, Cake Wallet's Bitcoin module, some Lightning Service Providers' onboarding flows, and various enterprise custody tools. The library has also been embedded into hardware wallet companion software.

For developers, BDK is one of two big Rust-based Bitcoin libraries (alongside [LDK](/glossary/lightning-network-daemon-lnd) for Lightning). Together they're the modern foundation of most new Bitcoin wallet development not based directly on Bitcoin Core's codebase.

See [bitcoindevkit.org](https://bitcoindevkit.org/) for documentation and [Wallet](/glossary/wallet) for the broader landscape.
