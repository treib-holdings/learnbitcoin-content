---
title: "Liquidity Ads"
slug: liquidity-ads
draft: false
shortDefinition: "A c-lightning plugin allowing node operators to advertise LN channel liquidity for lease, facilitating inbound capacity."
keyTakeaways:
  - "Offers a decentralized marketplace for LN channel capacity"
  - "Helps new merchants or heavy receivers get inbound liquidity"
  - "Implemented as a plugin for c-lightning to automate channel leasing"
sources: []
relatedTerms:
  - lightning-channel
  - lightning-channel-capacity
  - liquidity
  - loop-inout
  - routing-node
liveWidget: ~
---

Liquidity Ads is the Lightning protocol for advertising channel-opening offers: a routing node publishes "I'll open a channel with X sats of inbound liquidity for Y sats in fees, locked for Z blocks." A node that needs inbound capacity finds an ad it likes and accepts; the routing node opens a channel funded mostly on its side.

Originally a Core Lightning plugin (Lisa Neigut's design, 2021), liquidity ads landed in the official Lightning specification (BOLT 2 channel-establishment v2) and are supported by Core Lightning, Eclair, and increasingly LND. It's now part of the protocol rather than a single implementation's feature.

What problem it solves. New Lightning users (especially merchants and service nodes) need inbound liquidity from day one. The traditional options were:

- **Spend down first** to free up inbound. Requires already having spending capacity, which new users don't.
- **Find peers manually.** "Anyone out there willing to open a channel to me?" Hit and miss; doesn't scale.
- **Use a commercial service** like Lightning Labs Pool (now retired) or Voltage. Worked but centralized the inbound-liquidity market on a few providers.

Liquidity ads decentralizes the marketplace. Any node can advertise; any node can shop. The pricing is set per-routing-node, so a competitive market emerges naturally. Channel terms (size, duration, fees) are explicit upfront.

In practice, the ecosystem is still maturing. Discovery is gossip-based, so finding the right ad isn't quite "open the marketplace and browse." Tools like `lncli` and CLN's `bkpr` plus third-party explorers expose ads to operators, but UX for end users (just clicking "I need inbound, find me a channel") is improving slowly.

The protocol replaces a centralized custody trust ("trust this Lightning service to give me a channel") with a marketplace match. That's the more decentralized, more Bitcoin-shaped answer to the inbound-liquidity problem.
