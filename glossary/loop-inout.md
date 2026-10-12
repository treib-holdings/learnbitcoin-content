---
title: "Loop In/Out"
slug: loop-inout
draft: false
updated: "2026-10-12"
shortDefinition: "Lightning Labs' non-custodial service for swapping between on-chain BTC and LN channel liquidity (inbound or outbound)."
keyTakeaways:
  - "Provides liquidity balancing without channel closures"
  - "Uses atomic swaps for trust-minimized on-chain / off-chain transfers"
  - "Useful for merchants, large LN users, or node operators rebalancing channels"
sources:
  - { label: "Lightning Labs docs - Loop: Loop Out sends Lightning funds to an on-chain address, Loop In sends on-chain bitcoin into a channel; Loop Out transactions are batched to save on fees (checked October 12, 2026)", url: "https://docs.lightning.engineering/lightning-network-tools/loop" }
  - { label: "Lightning Labs docs - The Loop CLI: fees are quoted per swap; worked example of a 1,000,000 sat Loop Out costing 3,260 sat to the server, 6,802 sat on-chain and 2,524 sat in routing fees, plus a 30,000 sat prepayment that counts toward the swap (checked October 12, 2026)", url: "https://docs.lightning.engineering/lightning-network-tools/loop/the-loop-cli" }
  - { label: "Lightning Labs docs - Loop, Get Started: Loop comes bundled with Lightning Terminal (litd) and requires LND (checked October 12, 2026)", url: "https://docs.lightning.engineering/lightning-network-tools/loop/get-started" }
  - { label: "lightninglabs/loop docs - FAQ: what the Loop Out and Loop In fee lines mean; the prepay is counted toward the swap amount if the swap completes (checked October 12, 2026)", url: "https://github.com/lightninglabs/loop/blob/master/docs/faqs.md" }
  - { label: "lightninglabs/loop README - non-custodial service; Loop Out converts outbound into inbound liquidity, Loop In refills depleted channels; requires lnd (checked October 12, 2026)", url: "https://github.com/lightninglabs/loop" }
  - { label: "ElementsProject/peerswap README - atomic swaps with direct peers, no centralized coordinator, no third-party rent collector (checked October 12, 2026)", url: "https://github.com/ElementsProject/peerswap" }
  - { label: "BoltzExchange/boltz-client docs - Boltz Client: daemon and CLI for channel rebalancing and trustless submarine swaps via CLN or LND (checked October 12, 2026)", url: "https://github.com/BoltzExchange/boltz-client/blob/master/docs/index.md" }
relatedTerms:
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - liquidity
  - liquidity-ads
  - submarine-swap
liveWidget: ~
---

Loop In and Loop Out are Lightning Labs' non-custodial swap service for moving balance between on-chain BTC and Lightning channel liquidity without closing or opening channels. Built on [submarine swap](/glossary/submarine-swap) primitives, so the trades are atomic and trust-minimized.

- **Loop Out**: send Lightning balance, receive on-chain BTC. Free up inbound capacity on your channels by emptying them.
- **Loop In**: send on-chain BTC, receive Lightning balance. Top up your outbound capacity to spend more via Lightning.

Why this matters:

- **Liquidity management without opening or closing channels.** A swap still has an on-chain leg, so it is not free, but it spares you a funding or closing transaction and keeps the channel you already have. Loop Out also batches its on-chain transactions to spread that cost across swaps.
- **Maintain channel relationships.** Your existing channels stay alive with their existing reputation, peer connections, and routing history; only the balance shifts.
- **Merchant inbound capacity.** A merchant receiving lots of Lightning payments runs out of inbound capacity. Loop Out drains accumulated balance to on-chain, restoring inbound for the next batch.
- **Spender outbound capacity.** A wallet that sends frequently runs down outbound. Loop In refills from on-chain BTC.

How it works mechanically:

1. User initiates a Loop request via the Loop client (CLI or app).
2. The Lightning Loop service constructs a submarine swap: HTLC on-chain locked to the same preimage as the Lightning HTLC.
3. The Lightning payment settles by revealing the preimage, and that same secret unlocks the on-chain HTLC.
4. Atomic execution: either both legs complete (user gets their swap) or neither does (user reclaims original funds via timeout).

Costs:

- **Loop service fee**: the Loop server charges a swap fee, quoted in satoshis before you commit (`loop quote in` or `loop quote out`). Lightning Labs' worked example is a 1,000,000 sat Loop Out that paid 3,260 sat to the server, about a third of a percent; the real quote moves with the server's current terms.
- **On-chain fee** for the on-chain leg: your HTLC transaction on a Loop In, or the sweep that claims your coins on a Loop Out (6,802 sat in that example).
- **Lightning routing fees** on the payments to Lightning Labs' Loop node (2,524 sat in that example). A Loop Out also asks for a small prepayment up front; if the swap completes, it counts toward the swap amount rather than being an extra fee.

Loop is Lightning Labs' own swap tool and comes bundled with their Lightning Terminal package, but it is not the only option. PeerSwap runs the same kind of swap directly between two channel partners with no coordinator in the middle, and Boltz is an open-source service whose client works with both LND and Core Lightning. Loop itself only talks to LND, so nodes on other implementations use one of the alternatives.

It's one of those infrastructure pieces that makes Lightning operationally viable: without easy rebalancing, channel management would be much more painful. The service is non-custodial by design; the swap atomicity means even if Lightning Labs went offline mid-swap, users' funds are safe via the on-chain timeout path.
