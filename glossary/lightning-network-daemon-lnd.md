---
title: "Lightning Network Daemon (lnd)"
slug: lightning-network-daemon-lnd
draft: false
updated: "2026-10-09"
shortDefinition: "A leading LN software implementation by Lightning Labs, alongside Core Lightning (Blockstream), Eclair (ACINQ), and LDK."
keyTakeaways:
  - "One of the most widely used LN node implementations"
  - "Provides APIs for easy integration into wallets and services"
  - "Compatible with other LN implementations via BOLT specifications"
sources:
  - { label: "ACINQ lightning-kmp README - mobile-wallet implementation used in Phoenix; eclair is optimized for servers (routing nodes)", url: "https://github.com/ACINQ/lightning-kmp" }
  - { label: "Lightning Dev Kit - projects building with LDK (Cash App, Alby Hub, Lightspark, Lexe)", url: "https://lightningdevkit.org/" }
  - { label: "LND docs - Private altruist watchtowers (watchtower server and client built into lnd)", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/watchtower.md" }
relatedTerms:
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - fraudulent-channel-close
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-routing
liveWidget: ~
---

LND (Lightning Network Daemon) is one of the major [Lightning Network](/glossary/lightning-network) implementations, developed by Lightning Labs since 2016. Written in Go, it's the most widely deployed Lightning node software, especially in turnkey "node-in-a-box" products (Umbrel, Start9, MyNode, RaspiBlitz) where most users never see the underlying daemon.

How it compares to the other major implementations:

- **LND (Lightning Labs)** - Go, REST + gRPC APIs, monolithic. Largest user base. Strong tooling and integrations.
- **[Core Lightning](/glossary/core-lightning-c-lightning)** (Blockstream) - C, plugin-first architecture, minimal resource footprint. Often the choice for advanced users and routing operators.
- **Eclair** (ACINQ) - Scala, aimed at server deployments such as high-volume routing nodes. ACINQ's mobile wallet runs on a separate ACINQ implementation, lightning-kmp.
- **LDK** (Spiral) - a library you embed in your own app rather than running as a daemon. Used by Cash App and Alby Hub, among others.

LND specifics:

- **APIs.** REST and gRPC interfaces make integration straightforward for wallets and services. Most Lightning-aware applications target LND first.
- **Watchtower support.** LND can run a watchtower for others, or hand a tower encrypted penalty transactions for its own channels, so a cheating channel partner can still be punished while you're offline.
- **Macaroon-based auth.** Fine-grained capability tokens for delegated access (e.g., letting a wallet query balance but not spend).
- **One notable caveat:** LND does not yet natively support [BOLT-12 offers](/glossary/lightning-invoice). The LNDK shim project enables BOLT-12 alongside an LND deployment, but native support is still in progress.

LND covers most use cases and has broad ecosystem compatibility. [CLN](/glossary/core-lightning-c-lightning) uses fewer resources and supports BOLT-12 natively.
