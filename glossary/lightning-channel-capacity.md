---
title: "Lightning Channel Capacity"
slug: lightning-channel-capacity
draft: false
shortDefinition: "The amount of BTC locked in a Lightning channel, determining how much can be sent or received via that channel."
keyTakeaways:
  - "Represents total locked funds available for off-chain payments"
  - "Imbalance in capacity distribution can hamper sending or receiving"
  - "Rebalancing strategies keep channels usable for both directions"
sources: []
relatedTerms:
  - bolt
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - inactive-channel
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-routing
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
liveWidget: ~
---

Channel capacity is the total amount of Bitcoin locked in a [Lightning channel](/glossary/lightning-channel)'s 2-of-2 multisig - the upper bound on what can flow through that channel in either direction over its lifetime.

The often-misunderstood part: **capacity isn't the same as how much you can send**. A 1 BTC channel can route at most 1 BTC total, but only as much as is currently allocated to the *paying* side. If all 1 BTC sits on Alice's side, Bob can't pay through that channel - he has no outbound liquidity. Capacity is the budget; *side balance* is what you can actually spend.

Two related concepts that come up constantly:

- **Outbound liquidity** - balance on your side of channels. Determines how much you can *pay*.
- **Inbound liquidity** - balance on your channel counterparties' sides. Determines how much you can *receive*.

For users who only send (e.g., shopping on Lightning), outbound matters. For users who also receive (merchants, content creators getting zaps), inbound matters too. The asymmetry is a real pain point for new Lightning users: when you open a channel by funding it yourself, you start with all outbound and zero inbound. Receiving any meaningful amount requires either:

- Routing some payments outbound first, shifting balance to the other side.
- A [submarine swap](/glossary/submarine-swap) that "buys" inbound liquidity.
- A liquidity service like Lightning Pool, Magma, or LSP-based onboarding (Phoenix, Breez do this automatically).
- [Channel splicing](/glossary/lightning-channel-splicing) to expand capacity while you're at it.

Modern wallets hide most of this from end users. Power users running their own routing nodes work with capacity and rebalancing more directly. Either way, channel capacity is the foundational quantity behind everything in Lightning routing.
