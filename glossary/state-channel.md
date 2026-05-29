---
title: "State Channel"
slug: state-channel
draft: false
shortDefinition: "A generic off-chain mechanism letting participants transact privately, then settle the final state on-chain. LN channels are a prime example."
keyTakeaways:
  - "Converts repeated on-chain transactions into private off-chain updates"
  - "Settles on the main chain only once the channel closes"
  - "Enables real-time trading or micropayments with minimal fees"
sources: []
relatedTerms:
  - bolt-11
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-network
  - payment-channel
  - second-layer
liveWidget: ~
---

A state channel is a general construction where two or more parties lock funds (or data) in a shared on-chain output, then exchange signed off-chain updates that mutually agree on a new state. Only the opening, the final settlement, and any contested close ever touch the blockchain. Everything in between is private, instant, and free.

The basic mechanism:

1. Parties co-fund a 2-of-2 multisig output (the "anchor" transaction). This is the on-chain commitment.
2. They construct a commitment transaction that distributes those funds according to the current state, but don't broadcast it.
3. To update, they sign a new commitment transaction reflecting the new state. The old commitment becomes "old"; both parties keep the new one privately.
4. When they're done, they cooperatively sign and broadcast a final settlement transaction. Net effect: one funding transaction in, one settlement transaction out, and however many state updates in between.

The cheating problem: what stops a party from broadcasting an old commitment that pays them more? In Lightning's design, each commitment is asymmetric and includes a punishment path: if you broadcast an old state, your counterparty can spend your entire balance (the "justice transaction"). The deterrent makes cheating economically irrational.

Bitcoin's Lightning Network is the most-deployed state channel construction in existence. It specializes the generic state-channel idea to payment routing (HTLCs, multi-hop payments, gossip-based pathfinding) but the underlying primitive is the same.

State channels are part of the layer-2 family alongside sidechains, rollups, and other off-chain settlement designs. The base layer provides settlement and dispute resolution; the channel provides volume and speed. For payments, the tradeoff has been worth it: Lightning settles millions of dollars in daily volume that the base layer simply couldn't carry at acceptable fees.
