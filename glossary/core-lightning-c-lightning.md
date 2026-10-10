---
title: "Core Lightning (c-lightning)"
slug: core-lightning-c-lightning
draft: false
updated: "2026-10-10"
shortDefinition: "A major Lightning Network implementation by Blockstream, focused on modularity and command-line flexibility."
keyTakeaways:
  - "Implements LN with a modular, plugin-friendly design"
  - "Highly configurable for advanced or enterprise setups"
  - "One of the three major LN implementations (LND, Eclair, c-lightning)"
sources:
  - { label: "ACINQ lightning-kmp README - mobile-wallet implementation used in Phoenix; eclair is optimized for servers (routing nodes)", url: "https://github.com/ACINQ/lightning-kmp" }
  - { label: "Lightning Dev Kit - projects building with LDK (Cash App, Alby Hub, Lightspark, Lexe)", url: "https://lightningdevkit.org/" }
  - { label: "Core Lightning README - lightweight, highly customizable implementation in C, developed and maintained by Blockstream", url: "https://github.com/ElementsProject/lightning" }
  - { label: "Core Lightning docs - Plugin development: plugins are subprocesses that extend lightningd (modular architecture)", url: "https://github.com/ElementsProject/lightning/blob/master/doc/developers-guide/plugin-development.md" }
  - { label: "Core Lightning CHANGELOG - experimental offers (v0.9.3, January 2021), BOLT 12 on by default (v24.11, December 2024), experimental-splicing (v23.08, August 2023), splicing enabled by default (v26.04, April 2026), askrene, renepay and bookkeeper plugins", url: "https://github.com/ElementsProject/lightning/blob/master/CHANGELOG.md" }
  - { label: "lightningd/plugins - community plugins for Core Lightning, including rebalance, circular, sling and watchtower-client", url: "https://github.com/lightningd/plugins" }
  - { label: "Core Lightning source - plugins/spender/splice.c: the bundled spender plugin defines the splicein, spliceout and dev-splice commands, which call lightningd's splice_init, splice_update and splice_signed (October 2026)", url: "https://github.com/ElementsProject/lightning/blob/master/plugins/spender/splice.c" }
  - { label: "lnd README - Lightning Network Daemon, with two primary RPC interfaces, an HTTP REST API and a gRPC service", url: "https://github.com/lightningnetwork/lnd" }
  - { label: "lnd docs - Installation: lnd is written in Go", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/INSTALL.md" }
  - { label: "Zabka, Foerster, Schmid and Decker - Node Classification and Geographical Analysis of the Lightning Network: about 87% LND, 11% C-Lightning, 2% Eclair among public nodes, March 2018 to January 2020 (2021)", url: "https://eprints.cs.univie.ac.at/6512/1/icdcn21-31.pdf" }
  - { label: "LDK rust-lightning README - LDK is a generic library for building a Lightning node", url: "https://github.com/lightningdevkit/rust-lightning" }
  - { label: "Lightning Labs docs - LND is Lightning Labs' implementation of a Lightning Network node", url: "https://docs.lightning.engineering/lightning-network-tools/lnd" }
  - { label: "RaspiBlitz README - DIY Bitcoin and Lightning node on a Raspberry Pi 4 or 5", url: "https://github.com/raspiblitz/raspiblitz" }
  - { label: "RaspiBlitz docs - Core Lightning FAQ: LND and CLN can run in parallel on a RaspiBlitz", url: "https://docs.raspiblitz.org/docs/faq/cl" }
  - { label: "Umbrel App Store - Lightning Node app, powered by LND, an official app from Umbrel", url: "https://apps.umbrel.com/app/lightning" }
  - { label: "Umbrel App Store - Core Lightning app, submitted by Blockstream", url: "https://apps.umbrel.com/app/core-lightning" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
liveWidget: ~
---

Core Lightning (CLN), formerly **c-lightning**, is one of the major [Lightning Network](/glossary/lightning-network) implementations. Developed by [Blockstream](https://blockstream.com/), it's written in C and emphasizes modularity, minimal resource footprint, and a plugin architecture that lets developers extend functionality without forking the core daemon.

How it stacks up against the other main implementations:

- **CLN** - C, modular, plugin-first, built to be lightweight. Added experimental [BOLT-12 offers](/glossary/lightning-invoice) support in January 2021 and turned it on by default in December 2024.
- **LND** (Lightning Labs) - Go, monolithic, REST/gRPC APIs. In a study of public-network data from March 2018 to January 2020, about 87% of public nodes ran LND.
- **Eclair** (ACINQ) - Scala, aimed at server deployments such as routing nodes. ACINQ's mobile wallet runs on a separate ACINQ implementation, lightning-kmp.
- **LDK** - Library, not a daemon. Embedded into apps like Cash App and Alby Hub.

CLN's plugin system is the differentiator. Common plugins handle things like channel rebalancing, advanced routing strategies, watchtowers, and accounting. The model is "small core, many plugins" rather than "big monolith with feature flags." [Splicing](/glossary/lightning-channel-splicing) ships with CLN itself. Its everyday commands, splicein and spliceout, come from spender, a plugin bundled with CLN, which calls lower-level splice commands built into the daemon. Splicing was an experimental option from August 2023 until version 26.04 (April 2026) switched it on by default.

For self-hosted Lightning operators, that design shows up in a few places:

- It runs on small machines. RaspiBlitz, a do-it-yourself node built on a Raspberry Pi, can run CLN alongside LND.
- Routing nodes can add rebalancing through plugins such as rebalance, circular and sling.
- BOLT-12 support is built in, with no add-on needed.

Node-in-a-box products such as RaspiBlitz and Umbrel offer both daemons. Umbrel has its own LND-based Lightning Node app, and Blockstream publishes a Core Lightning app for it. See [Lightning Node](/glossary/lightning-node) for the broader landscape.
