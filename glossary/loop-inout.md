---
title: "Loop In/Out"
slug: loop-inout
draft: false
shortDefinition: "Lightning Labs' non-custodial service for swapping between on-chain BTC and LN channel liquidity (inbound or outbound)."
keyTakeaways:
  - "Provides liquidity balancing without channel closures"
  - "Uses atomic swaps for trust-minimized on-chain / off-chain transfers"
  - "Useful for merchants, large LN users, or node operators rebalancing channels"
sources: []
relatedTerms: []
liveWidget: ~
---

Loop In and Loop Out are Lightning Labs' non-custodial swap service for moving balance between on-chain BTC and Lightning channel liquidity without closing or opening channels. Built on [submarine swap](/glossary/submarine-swap) primitives, so the trades are atomic and trust-minimized.

- **Loop Out**: send Lightning balance, receive on-chain BTC. Free up inbound capacity on your channels by emptying them.
- **Loop In**: send on-chain BTC, receive Lightning balance. Top up your outbound capacity to spend more via Lightning.

Why this matters:

- **Liquidity management without on-chain cost.** Channel rebalancing without opening/closing channels saves the on-chain fees of a new funding transaction.
- **Maintain channel relationships.** Your existing channels stay alive with their existing reputation, peer connections, and routing history; only the balance shifts.
- **Merchant inbound capacity.** A merchant receiving lots of Lightning payments runs out of inbound capacity. Loop Out drains accumulated balance to on-chain, restoring inbound for the next batch.
- **Spender outbound capacity.** A wallet that sends frequently runs down outbound. Loop In refills from on-chain BTC.

How it works mechanically:

1. User initiates a Loop request via the Loop client (CLI or app).
2. The Lightning Loop service constructs a submarine swap: HTLC on-chain locked to the same preimage as the Lightning HTLC.
3. User pays the Lightning HTLC; on revealing the preimage, the on-chain HTLC also becomes spendable.
4. Atomic execution: either both legs complete (user gets their swap) or neither does (user reclaims original funds via timeout).

Costs:

- **Loop service fee**: small percentage of the swap amount (typically ~0.1-0.5%, depending on swap direction and current Loop fees).
- **On-chain fee** for the on-chain leg of the swap.
- **Lightning routing fees** through to Lightning Labs' Loop node.

Loop is the most-deployed submarine swap service but not the only one. PeerSwap (a peer-to-peer protocol between two channel partners), Boltz (alternative commercial service), and various other implementations exist. For LND operators, Loop is the path-of-least-resistance integration; for other implementations, alternatives may fit better.

It's one of those infrastructure pieces that makes Lightning operationally viable: without easy rebalancing, channel management would be much more painful. The service is non-custodial by design; the swap atomicity means even if Lightning Labs went offline mid-swap, users' funds are safe via the on-chain timeout path.
