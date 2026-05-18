---
title: "Autopilot (Lightning)"
slug: autopilot-lightning
draft: false
shortDefinition: "An LN feature that automatically opens and manages channels based on connectivity and capacity heuristics."
keyTakeaways:
  - "Automates channel creation and management"
  - "Uses heuristics to choose ideal peers"
  - "Helps newcomers onboard without deep LN knowledge"
sources: []
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

The original autopilot feature appeared in [LND](/glossary/lightning-network-daemon-lnd) and tries to:

- **Identify well-connected nodes** in the gossip graph that could provide good routing paths.
- **Pick channel sizes** based on configured budgets and network conditions.
- **Periodically rebalance or close** channels that aren't working out.

The honest assessment of autopilot in practice:

- **It works, sort of, for new users.** Onboarding goes from "pick channels manually, hope they route well" to "click a button, get channels." That's a real UX improvement.
- **The heuristics aren't great.** Autopilot tends to pick big well-connected nodes, which works but contributes to centralization pressure - everyone connecting to the same few hubs creates a hub-and-spoke topology.
- **Serious operators don't use it.** Routing-node operators who care about earning fees pick channels deliberately based on their own analysis. Casual users who just want to send payments are increasingly served by [custodial wallets](/glossary/custodial-lightning-wallet) or LSP-based wallets (Phoenix, Mutiny) that handle channel management entirely behind the UI.

Where autopilot fits in 2026: a middle-ground tool for self-custody operators who run their own Lightning node but don't want to manage it actively. Modern LSP-based onboarding has largely supplanted it for non-technical users; manual channel selection has supplanted it for serious operators.

The honest take: autopilot was a useful first attempt at automating Lightning channel management. It's neither the worst nor the best approach. If you're running your own LND node and don't have strong opinions about channels, autopilot is a reasonable default. If you have strong opinions, you'll bypass it.
