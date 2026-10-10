---
title: "Balanced Channel (Lightning)"
slug: balanced-channel-lightning
draft: false
updated: "2026-10-10"
shortDefinition: "A Lightning channel whose capacity is split roughly equally between both participants, allowing seamless sending and receiving."
keyTakeaways:
  - "Equal distribution of funds between channel partners"
  - "Reduces payment failures for both sending and receiving"
  - "Can require active monitoring or rebalancing tools"
sources:
  - { label: "Lightning Labs docs - Managing liquidity: local and remote balance; routing shifts balance between channels; ideally public channels hold enough on both sides; circular rebalancing and its costs; tools such as rebalance-lnd; Loop In or rebalancing to refill a drained channel", url: "https://docs.lightning.engineering/the-lightning-network/liquidity/manage-liquidity" }
  - { label: "Lightning Labs docs - Loop: submarine swaps that empty out or refill a channel without opening a new one", url: "https://docs.lightning.engineering/lightning-network-tools/loop" }
  - { label: "PeerSwap README - balances channels with atomic swaps between direct peers (swap-in and swap-out)", url: "https://github.com/ElementsProject/peerswap" }
  - { label: "Bitcoin Optech - Submarine swaps: trust-minimized swaps of offchain bitcoin for onchain bitcoin", url: "https://bitcoinops.org/en/topics/submarine-swaps/" }
  - { label: "ACINQ - Introducing the new Phoenix: a splice-out shrinks the channel, while a swap keeps the channel as-is and adds inbound liquidity; Phoenix uses automated channel management (July 2023, updated December 2023)", url: "https://acinq.co/blog/phoenix-splicing-update" }
  - { label: "BOLT #2 - Peer Protocol for Channel Management (the funder puts funding_satoshis into a v1 channel; splicing replaces the funding transaction and sets a new channel capacity)", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md" }
  - { label: "Bitcoin Optech - Liquidity advertisements: an experimental feature where a node offers, for a fee, to put its own funds into a new channel with a peer", url: "https://bitcoinops.org/en/topics/liquidity-advertisements/" }
relatedTerms:
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-node
  - lightning-routing
  - liquidity
  - liquidity-ads
  - lockup-period-lightning
  - locked-period-soft-fork
liveWidget: ~
---

A balanced channel is a Lightning channel where local and remote balance are roughly equal: both sides have meaningful capacity to send to the other. This is what routing nodes want for most channels, because a balanced channel can forward payments in either direction.

Why balance matters:

- **For routing nodes.** A 10M-sat channel split 5M / 5M can forward up to 5M in either direction. The same 10M channel skewed 9M / 1M can only forward 1M one way and 9M the other; the long-tail capacity is unusable until balance shifts back.
- **For users.** Skew has a direction. A new channel funded entirely by you (10M / 0M) lets you send but not receive. A channel funded entirely by your peer (0M / 10M) lets you receive but not send.

How balance gets out of whack:

- **Asymmetric payment flow.** Users send more than they receive (or vice versa); balance drifts to one side.
- **Routing imbalance.** Forwarded payments through a routing node shift balance toward the receiving side.
- **One-sided channel funding.** New channels usually start fully on one side.

How operators restore balance:

- **Circular rebalancing.** Pay yourself in a loop through other nodes, paying small routing fees to shift balance between your own channels.
- **Submarine swaps** (Loop, PeerSwap). Trade Lightning balance for on-chain bitcoin, or the other way around, without closing the channel. This shifts balance from one side of the channel to the other. The channel's total capacity stays the same.
- **Splicing.** Use Lightning channel [splicing](/glossary/lightning-channel-splicing) to add or remove on-chain funds from an existing channel. Unlike a swap, this changes the size of the channel itself.
- **Liquidity ads / channel purchase.** Open a fresh channel with the balance shape you need.

Some end-user wallets handle all of this for you; Phoenix, for example, is built around automated channel management. For routing nodes it's ongoing work. A channel that has run dry on one side can't forward payments in that direction, so it earns no fees there until balance is restored, and rebalancing has costs of its own that can eat into what the channel earns.
