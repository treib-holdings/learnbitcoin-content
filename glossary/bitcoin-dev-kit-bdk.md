---
title: "Bitcoin Dev Kit (BDK)"
slug: bitcoin-dev-kit-bdk
draft: false
shortDefinition: "An open-source Rust library offering flexible tools for building custom Bitcoin wallets with descriptor-based key management."
keyTakeaways:
  - "Facilitates custom wallet building with Rust’s safety benefits"
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
liveWidget: ~
---

The Bitcoin Dev Kit, often called BDK, is like a toolbox for developers who want to craft their own wallets without starting from scratch. Built in Rust for safety and performance, it provides modular components for key handling, descriptor management, and script logic. By abstracting away low-level details, BDK makes it easier to implement advanced features such as multisig setups or coin selection strategies.
Developers can plug in their preferred data sources—like Electrum servers, Bitcoin Core nodes, or other backends—to query the blockchain. BDK’s descriptor-based approach ensures robust transaction creation, adhering to modern best practices for security and maintainability. It’s a go-to solution for those who need highly customized Bitcoin wallet functionality.
