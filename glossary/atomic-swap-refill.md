---
title: "Atomic Swap Refill"
slug: atomic-swap-refill
draft: false
shortDefinition: "Using atomic swaps off-chain or across sidechains to rebalance liquidity or re-peg assets without relying on centralized services."
keyTakeaways:
  - "Rebalances off-chain liquidity via trustless swaps"
  - "Works for sidechains and Lightning channels"
  - "Minimizes on-chain transactions while shifting capacity"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - htlc-hashed-time-locked-contract
  - submarine-swap
liveWidget: ~
---

Atomic swap refill is the technique of using atomic swaps (HTLC-based trustless exchanges) to rebalance liquidity, most commonly in Lightning channels. Instead of closing a channel and opening a new one on-chain (expensive, slow, public), you swap out-of-channel balance for in-channel balance, or shift balance between two channels you participate in.

The canonical Lightning use case: a routing node sees that one of its channels is "dry" (no outbound capacity) while another is "full" (all funds on its side). On-chain rebalancing means burning fees and waiting for confirmations. Atomic swap refill lets the node trade Bitcoin balance across the two channels via a swap with another node, restoring routing capacity without an on-chain transaction.

Practical implementations:

- Submarine swaps: trade Lightning balance for on-chain BTC or vice versa. Used both for rebalancing and for "fund my Lightning wallet from on-chain" without opening a new channel.
- Loop and Loop Out (Lightning Labs' service): commercial submarine swap service for inbound / outbound liquidity.
- PeerSwap: peer-to-peer rebalancing protocol between two Lightning nodes that share a channel.

The shared trick is the atomicity. Either both legs of the swap happen or neither does, with no trusted intermediary holding funds at any point. The cryptography is the same hash-locked contract pattern Lightning itself uses for routing.

Niche but increasingly important as Lightning routing matures. Channel capacity management is the operational reality of running a routing node, and atomic-swap-based rebalancing is the cheap way to do it.
