---
title: "Core Lightning (c-lightning)"
slug: core-lightning-c-lightning
draft: false
shortDefinition: "A major Lightning Network implementation by Blockstream, focused on modularity and command-line flexibility."
keyTakeaways:
  - "Implements LN with a modular, plugin-friendly design"
  - "Highly configurable for advanced or enterprise setups"
  - "One of the three major LN implementations (LND, Eclair, c-lightning)"
sources: []
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

- **CLN** - C, modular, plugin-first. Strong on advanced workflows and resource efficiency. Notable for shipping [BOLT-12 offers](/glossary/lightning-invoice) support early.
- **LND** (Lightning Labs) - Go, monolithic, REST/gRPC APIs. Most common in turnkey node-in-a-box products. Largest user base.
- **Eclair** (ACINQ) - Scala, powers the Phoenix mobile wallet. Strong on mobile/embedded use cases.
- **LDK** (Spiral) - Library, not a daemon. Embedded into apps like Cash App, Mutiny.

CLN's plugin system is the differentiator. Common plugins handle things like channel rebalancing, advanced routing strategies, [splicing](/glossary/lightning-channel-splicing), watchtowers, and accounting. The model is "small core, many plugins" rather than "big monolith with feature flags."

For self-hosted Lightning operators in 2026, CLN is a strong choice especially for:

- Operators who want minimal resource use on cheap hardware (Raspberry Pi, low-end VPS).
- Routing nodes that benefit from plugin-based rebalancing.
- Anyone wanting native BOLT-12 support.

Less ideal for users who want a click-to-install graphical experience - Umbrel and similar node distributions historically defaulted to LND, though many now offer CLN as an option. See [Lightning Node](/glossary/lightning-node) for the broader landscape.
