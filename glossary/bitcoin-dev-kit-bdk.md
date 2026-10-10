---
title: "Bitcoin Dev Kit (BDK)"
slug: bitcoin-dev-kit-bdk
draft: false
updated: "2026-10-10"
shortDefinition: "An open-source Rust library offering flexible tools for building custom Bitcoin wallets with descriptor-based key management."
keyTakeaways:
  - "Facilitates custom wallet building with Rust's safety benefits"
  - "Leverages descriptors for precise key/script organization"
  - "Supports multiple backends (e.g., Electrum, Core)"
sources:
  - { label: "Bitcoin Dev Kit - adoption list, projects built with BDK (October 2026)", url: "https://bitcoindevkit.org/adoption/all/" }
  - { label: "BDK on GitHub - suite of Rust libraries for descriptor-based wallets, with Esplora, Electrum and Bitcoin Core (bitcoind RPC) chain sources", url: "https://github.com/bitcoindevkit/bdk" }
  - { label: "bdk_wallet README - Wallet type built on miniscript descriptors; creates and signs transactions", url: "https://github.com/bitcoindevkit/bdk_wallet" }
  - { label: "bdk_wallet source - coin_selection.rs: largest-first, oldest-first and branch-and-bound (default) coin selection", url: "https://github.com/bitcoindevkit/bdk_wallet/blob/master/src/wallet/coin_selection.rs" }
  - { label: "bdk_wallet source - tx_builder.rs: building a transaction returns a PSBT per BIP 174", url: "https://github.com/bitcoindevkit/bdk_wallet/blob/master/src/wallet/tx_builder.rs" }
  - { label: "bdk-ffi README - Kotlin (Android) and Swift (iOS, macOS) bindings, plus separately maintained Python, Dart, Kotlin JVM and TypeScript (React Native) bindings built on the same code", url: "https://github.com/bitcoindevkit/bdk-ffi" }
  - { label: "rust-esplora-client source (used by bdk_esplora) - get_fee_estimates fetches fee-rate estimates from an Esplora server", url: "https://github.com/bitcoindevkit/rust-esplora-client/blob/master/src/blocking.rs" }
  - { label: "Lightning Dev Kit homepage - Bitcoin Dev Kit, the on-chain companion to LDK", url: "https://lightningdevkit.org/" }
  - { label: "LDK rust-lightning README - LDK is a Rust library for building a Lightning node", url: "https://github.com/lightningdevkit/rust-lightning" }
  - { label: "LDK Node README - a ready-to-go Lightning node library built using LDK and BDK, with an integrated on-chain wallet", url: "https://github.com/lightningdevkit/ldk-node" }
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

The **Bitcoin Dev Kit (BDK)** is an open-source Rust library that provides modular building blocks for constructing Bitcoin wallets. Maintained by an active community of contributors, BDK sits under a number of production wallets, including some Lightning wallets that need on-chain functionality alongside their channels.

What BDK provides:

- **Descriptor-based wallet primitives.** Output script descriptors (the modern way to specify "what scripts does this wallet use") let BDK handle complex setups - multisig, miniscript, custom locktime constructions - through a clean interface.
- **Pluggable backends.** Connect to a Bitcoin Core node, an Electrum server, an Esplora REST API, or run completely offline with PSBT-based workflows.
- **Coin selection algorithms.** Built-in strategies for picking UTXOs (largest-first, branch-and-bound, etc.).
- **PSBT support.** First-class [PSBT](/glossary/psbt) construction and finalization.
- **Cross-platform.** Rust core with bindings for Swift and Kotlin, plus separately maintained ones for Python, Dart and TypeScript (React Native), so mobile and desktop wallets can use it.

Where BDK shines: anyone building a new Bitcoin wallet doesn't have to write descriptor parsing, PSBT logic, coin selection, fee estimation, and the rest from scratch. BDK handles the plumbing; the wallet builder focuses on UX and features.

BDK keeps a list of projects built on it. As of October 2026 that list includes the Bitkey, Proton Wallet, Bull Bitcoin and Liana wallets and Envoy, Foundation's companion app for its hardware wallets. It also includes infrastructure projects such as Fedimint and LDK Node.

BDK's Lightning counterpart is LDK, the Lightning Dev Kit, also written in Rust, which calls BDK its on-chain companion. LDK Node, a ready-made Lightning node library, is built on both.

See [bitcoindevkit.org](https://bitcoindevkit.org/) for documentation and [Wallet](/glossary/wallet) for the broader landscape.
