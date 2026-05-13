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

Previously known as ‘Elements Project’s c-lightning,’ now simply ‘Core Lightning,’ it’s an LN node software that interacts with Bitcoin Core. Written in C, it aims for a lightweight, highly customizable approach. Power users can manage channels via a robust command-line tool and plug in extra functionality with an extensive plugin system.
Compared to LND (Lightning Labs) or Eclair (ACINQ), c-lightning emphasizes minimal resource usage and script-based extensibility. It’s well-suited for advanced deployments, offering granular control over channel states, routing, and billing. Those comfortable with terminal commands often pick c-lightning for a more “under the hood” LN experience.
