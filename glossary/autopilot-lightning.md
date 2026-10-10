---
title: "Autopilot (Lightning)"
slug: autopilot-lightning
draft: false
updated: "2026-10-10"
shortDefinition: "An LN feature that automatically opens channels within a set budget, choosing peers with graph-connectivity heuristics."
keyTakeaways:
  - "Automates opening channels within a budget"
  - "Uses heuristics to choose peers"
  - "Helps newcomers onboard without deep LN knowledge"
sources:
  - { label: "lnd sample-lnd.conf - [autopilot] section: off by default, 60% allocation, up to 5 channels, min and max channel size, default heuristic top_centrality", url: "https://github.com/lightningnetwork/lnd/blob/master/sample-lnd.conf" }
  - { label: "lnd source - autopilot/agent.go: the agent calls OpenChannel and treats a closed channel as freed-up budget (October 2026)", url: "https://github.com/lightningnetwork/lnd/blob/master/autopilot/agent.go" }
  - { label: "lnd source - pilot.go: the autopilot channel controller's CloseChannel returns nil without closing anything (October 2026)", url: "https://github.com/lightningnetwork/lnd/blob/master/pilot.go" }
  - { label: "lnd source - autopilot/top_centrality.go: opens channels to the nodes with the top betweenness centrality", url: "https://github.com/lightningnetwork/lnd/blob/master/autopilot/top_centrality.go" }
  - { label: "lnd source - autopilot/prefattach.go: preferential attachment heuristic favoring nodes with more channels", url: "https://github.com/lightningnetwork/lnd/blob/master/autopilot/prefattach.go" }
  - { label: "Rene Pickhardt - lnd issue 677: is the Barabasi Albert model a reasonable choice for the autopilot? (January 2018)", url: "https://github.com/lightningnetwork/lnd/issues/677" }
  - { label: "Lightning Labs docs - Understanding Liquidity: a routing node needs inbound and outbound capacity and some way to rebalance", url: "https://docs.lightning.engineering/the-lightning-network/liquidity/understanding-liquidity" }
  - { label: "bLIP 52 - LSPS2 JIT Channel Negotiation: an LSP opens a channel to a client in response to an incoming payment", url: "https://github.com/lightning/blips/blob/master/blip-0052.md" }
  - { label: "Lightning Labs docs - AutoOpen, part of Lightning Terminal's Autopilot: betweenness centrality, shares the node's channels, does not close channels", url: "https://docs.lightning.engineering/lightning-network-tools/lightning-terminal/autoopen" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - core-lightning-c-lightning
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-node
  - lightning-node-alias
  - lightning-routing
liveWidget: ~
---

Lightning Autopilot is a feature in some [Lightning](/glossary/lightning-network) implementations that automatically selects channel peers and opens channels on your behalf, based on graph-connectivity heuristics rather than manual choice. It exists to lower the operational barrier for new Lightning node operators.

[LND](/glossary/lightning-network-daemon-lnd) has an autopilot agent built in, switched off by default. When turned on, it tries to:

- **Identify well-connected nodes** in the gossip graph that could provide good routing paths.
- **Stay within a budget.** By default it commits up to 60% of the wallet's funds across at most five channels, within minimum and maximum channel sizes the operator can change.
- **Replace closed channels.** When a channel closes, the freed-up slot and funds go back into its budget for new channels.

It does not rebalance or close channels. As of October 2026, LND's agent only ever opens channels, and the hook it has for closing one does nothing.

How it has worked out in practice:

- **It makes a first setup easier.** Instead of picking peers by hand and hoping they route well, the operator switches it on and sets a budget.
- **Its picks lean toward hubs.** LND's default heuristic favors the nodes with the highest betweenness centrality, meaning the ones that sit on the most paths between other nodes. An older option favors nodes that already have many channels. In January 2018, when LND's autopilot worked that way, researcher Rene Pickhardt warned that it would create a few "power nodes" with huge numbers of channels, and that the network's connectivity could break if one of them failed. If everyone connects to the same few hubs, the network takes on a hub-and-spoke shape.
- **Routing nodes need more than it offers.** Lightning Labs' own guide says a routing node needs both inbound and outbound capacity in each channel, plus some way, automated or manual, to watch traffic and rebalance. The autopilot does not rebalance.

[Custodial wallets](/glossary/custodial-lightning-wallet) and wallets built around a Lightning service provider (LSP) take channel choices away from the user altogether. With "just-in-time" channels, for example, the provider opens a channel to the wallet when a payment for it arrives.

Lightning Labs also uses the Autopilot name for a separate feature of its Lightning Terminal software. Its AutoOpen tool also scores peers by betweenness centrality, but it aims to connect nodes that do not yet share peers, which Lightning Labs expects to spread connections away from the biggest hubs. Turning it on shares the node's public key and its current and past channels with the service, and like LND's agent, it does not close channels.
