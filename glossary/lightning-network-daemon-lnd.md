---
title: "Lightning Network Daemon (lnd)"
slug: lightning-network-daemon-lnd
draft: false
updated: "2026-10-10"
shortDefinition: "A leading LN software implementation by Lightning Labs, alongside Core Lightning (Blockstream), Eclair (ACINQ), and LDK."
keyTakeaways:
  - "One of the most widely used LN node implementations"
  - "Provides APIs for easy integration into wallets and services"
  - "Compatible with other LN implementations via BOLT specifications"
sources:
  - { label: "ACINQ lightning-kmp README - mobile-wallet implementation used in Phoenix; eclair is optimized for servers (routing nodes)", url: "https://github.com/ACINQ/lightning-kmp" }
  - { label: "Lightning Dev Kit - projects building with LDK (Cash App, Alby Hub, Lightspark, Lexe)", url: "https://lightningdevkit.org/" }
  - { label: "LND docs - Private altruist watchtowers (watchtower server and client built into lnd)", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/watchtower.md" }
  - { label: "Lightning Labs docs - LND is Lightning Labs' implementation of a Lightning Network node", url: "https://docs.lightning.engineering/lightning-network-tools/lnd" }
  - { label: "lnd v0.1-alpha release on GitHub (January 2017)", url: "https://github.com/lightningnetwork/lnd/releases/tag/v0.1-alpha" }
  - { label: "lnd README - designed to be developer friendly, with two primary RPC interfaces, an HTTP REST API and a gRPC service", url: "https://github.com/lightningnetwork/lnd" }
  - { label: "lnd docs - Installation: lnd is written in Go", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/INSTALL.md" }
  - { label: "Zabka, Foerster, Schmid and Decker - Node Classification and Geographical Analysis of the Lightning Network: about 87% LND, 11% C-Lightning, 2% Eclair among public nodes, March 2018 to January 2020 (2021)", url: "https://eprints.cs.univie.ac.at/6512/1/icdcn21-31.pdf" }
  - { label: "Umbrel App Store - Lightning Node app, powered by LND", url: "https://apps.umbrel.com/app/lightning" }
  - { label: "RaspiBlitz docs - Core Lightning FAQ: LND and CLN can run in parallel on a RaspiBlitz", url: "https://docs.raspiblitz.org/docs/faq/cl" }
  - { label: "Core Lightning README - lightweight implementation in C, developed and maintained by Blockstream", url: "https://github.com/ElementsProject/lightning" }
  - { label: "Core Lightning CHANGELOG - BOLT 12 enabled by default in v24.11 (December 2024)", url: "https://github.com/ElementsProject/lightning/blob/master/CHANGELOG.md" }
  - { label: "LDK rust-lightning README - LDK is a generic library for building a Lightning node", url: "https://github.com/lightningdevkit/rust-lightning" }
  - { label: "LND docs - Macaroons: delegated, restricted credentials such as readonly.macaroon", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/macaroons.md" }
  - { label: "LNDK README - experimental daemon that adds BOLT 12 to LND from outside it, using LDK", url: "https://github.com/lndk-org/lndk" }
  - { label: "lnd 0.22.0 release notes (in development, October 2026) - initial BOLT 12 offer, invoice request and invoice codecs", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/release-notes/release-notes-0.22.0.md" }
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

LND (Lightning Network Daemon) is one of the major [Lightning Network](/glossary/lightning-network) implementations, developed by Lightning Labs. Its first alpha release came out in January 2017, and it is written in Go. In a study of public-network data from March 2018 to January 2020, about 87% of public nodes ran LND. "Node-in-a-box" products package it too: Umbrel's own Lightning Node app runs LND, and RaspiBlitz can run it alongside Core Lightning.

How it compares to the other major implementations:

- **LND (Lightning Labs)** - Go, REST + gRPC APIs, monolithic. The largest share of public nodes in the study above.
- **[Core Lightning](/glossary/core-lightning-c-lightning)** (Blockstream) - C, plugin-first architecture, built to be lightweight.
- **Eclair** (ACINQ) - Scala, aimed at server deployments such as routing nodes. ACINQ's mobile wallet runs on a separate ACINQ implementation, lightning-kmp.
- **LDK** - a library you embed in your own app rather than running as a daemon. Used by Cash App and Alby Hub, among others.

LND specifics:

- **APIs.** REST and gRPC interfaces make integration straightforward for wallets and services.
- **Watchtower support.** LND can run a watchtower for others, or hand a tower encrypted penalty transactions for its own channels, so a cheating channel partner can still be punished while you're offline.
- **Macaroon-based auth.** Fine-grained capability tokens for delegated access (e.g., letting a wallet query balance but not spend).
- **One notable caveat:** as of October 2026, LND does not natively support [BOLT-12 offers](/glossary/lightning-invoice). The LNDK shim project enables BOLT-12 alongside an LND deployment, but native support is still in progress.

[CLN](/glossary/core-lightning-c-lightning), by contrast, has had BOLT-12 offers switched on by default since December 2024.
