---
title: "Lightning Network Daemon (lnd)"
slug: lightning-network-daemon-lnd
draft: false
shortDefinition: "A leading LN software implementation by Lightning Labs, alongside Core Lightning (Blockstream), Eclair (ACINQ), and LDK."
keyTakeaways:
  - "One of the most widely used LN node implementations"
  - "Provides APIs for easy integration into wallets and services"
  - "Compatible with other LN implementations via BOLT specifications"
sources: []
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
- **Eclair** (ACINQ) - Scala, optimized for mobile (powers Phoenix wallet) and high-volume routing.
- **LDK** (Spiral) - a library you embed in your own app rather than running as a daemon. Used by Cash App, Mutiny, Mercury Layer.

LND specifics:

- **APIs.** REST and gRPC interfaces make integration straightforward for wallets and services. Most Lightning-aware applications target LND first.
- **Watchtower support.** Built-in eltoo-style watchtowers help guard channels when you're offline.
- **Macaroon-based auth.** Fine-grained capability tokens for delegated access (e.g., letting a wallet query balance but not spend).
- **One notable caveat:** LND does not yet natively support [BOLT-12 offers](/glossary/lightning-invoice). The LNDK shim project enables BOLT-12 alongside an LND deployment, but native support is still in progress.

LND is fine for most use cases. Pick it if you want broad ecosystem compatibility. Pick [CLN](/glossary/core-lightning-c-lightning) if you want native BOLT-12 or a smaller resource footprint.
