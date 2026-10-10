---
title: "Atomic Swap Refill"
slug: atomic-swap-refill
draft: false
updated: "2026-10-10"
shortDefinition: "Using a swap between Lightning and on-chain bitcoin to refill one side of a Lightning channel without closing it. The channel's total capacity stays the same."
keyTakeaways:
  - "Moves balance from one side of a Lightning channel to the other"
  - "Needs on-chain transactions, on Bitcoin or, with PeerSwap, on Liquid"
  - "Changes how a channel's funds are split, not its total capacity"
sources:
  - { label: "Lightning Labs docs - Loop: Loop Out pays from a channel to an on-chain address, Loop In sends on-chain bitcoin into a channel; Loop can empty out a channel or refill a depleted one; it uses submarine swaps to transact non-custodially", url: "https://docs.lightning.engineering/lightning-network-tools/loop" }
  - { label: "Lightning Labs docs - Managing liquidity: --local-amt usually sets both your share and a channel's full capacity; local and remote balance skew as payments are routed; circular rebalancing pays yourself through other channels and has a cost; a drained channel can be refilled through Loop In or by rebalancing", url: "https://docs.lightning.engineering/the-lightning-network/liquidity/manage-liquidity" }
  - { label: "Bitcoin Optech - Submarine swaps: trust-minimized atomic swaps of offchain bitcoins for onchain bitcoins; the onchain output pays the same HTLC as the LN payment", url: "https://bitcoinops.org/en/topics/submarine-swaps/" }
  - { label: "ACINQ - Introducing the new Phoenix: a splice-out shrinks the channel, while a swap keeps the channel as-is and adds inbound liquidity (July 2023, updated December 2023)", url: "https://acinq.co/blog/phoenix-splicing-update" }
  - { label: "PeerSwap protocol spec - on-chain to off-chain atomic swaps between direct Lightning peers; each swap uses two on-chain transactions, an opening transaction and a claim transaction, on Bitcoin or the Liquid Network; a swap in shifts the channel balance toward the initiator; the opening transaction is spent by revealing the preimage of a Lightning invoice; the swap partner can ask for a premium; if the invoice is not paid the coins are refunded after a timelock", url: "https://github.com/ElementsProject/peerswap/blob/master/docs/peer-protocol.md" }
  - { label: "PeerSwap README - balances channels with atomic swaps between direct peers, with no central coordinator; notice that v7.0.1 disables new L-BTC swaps after the Liquid security incident (last updated September 7, 2026; checked October 10, 2026)", url: "https://github.com/ElementsProject/peerswap" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - htlc-hashed-time-locked-contract
  - submarine-swap
liveWidget: ~
---

Atomic swap refill means using an [atomic swap](/glossary/atomic-swap) to refill a [Lightning channel](/glossary/lightning-channel) that has run low on one side, instead of closing it and opening a new one. One leg of the swap is a Lightning payment and the other is an on-chain payment, and both are locked to the same secret, so either both go through or neither does. A swap between Lightning and on-chain bitcoin is called a [submarine swap](/glossary/submarine-swap).

Take a routing node. A channel's capacity is set when it is funded and is split between the two sides. As payments are routed, the split drifts, and once one side runs dry the channel can't carry payments in that direction. A swap moves the split back:

- **Swap in.** The node sends on-chain bitcoin and is paid back over Lightning, which adds to its own side of the channel, so it can send again. Lightning Labs calls this Loop In.
- **Swap out.** The node pays out over Lightning and gets on-chain bitcoin back, which frees up room on the other side, so it can receive again. Lightning Labs calls this Loop Out.

Either way the channel's total capacity stays the same, and only the split changes. Changing the capacity itself takes [splicing](/glossary/lightning-channel-splicing) or a new channel. A swap also doesn't avoid the chain: PeerSwap's protocol, for example, uses two on-chain transactions per swap, one that locks the coins and one that claims them. One way to rebalance that does stay off-chain is a circular payment to yourself through other nodes, which has costs of its own.

Practical implementations:

- **Swap services.** Lightning Labs' [Loop](/glossary/loop-inout) is one. It uses submarine swaps and doesn't take custody of the funds.
- **PeerSwap.** Two nodes that share a channel swap directly with each other, with no outside service. The on-chain leg can run on Bitcoin or on the [Liquid](/glossary/liquid-network) sidechain. After the September 2026 security incident on Liquid, PeerSwap's v7.0.1 release stopped accepting new Liquid swaps, and its project page still said so in October 2026.

The on-chain payment is locked with the same hash as the Lightning payment, the [HTLC](/glossary/htlc-hashed-time-locked-contract) pattern Lightning uses for routing. Settling one side reveals the secret, and the secret then unlocks the other side. If the swap stalls, a timelock lets whoever locked the on-chain coins take them back.

Swaps cost money. The on-chain transactions pay mining fees, and the other side can charge for the swap. Lightning Labs' liquidity guide makes the same point about rebalancing in general: it shouldn't cost more than the channel has earned from routing since the last time.
