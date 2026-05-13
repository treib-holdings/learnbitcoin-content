---
title: "Payment Channel"
slug: payment-channel
draft: false
shortDefinition: "An off-chain mechanism (e.g., Lightning) allowing repeated transactions between two parties without constantly touching the blockchain."
keyTakeaways:
  - "Enables frequent transactions without multiple on-chain fees"
  - "Uses a multi-sig output that only settles on-chain at open/close"
  - "Forms the basis of second-layer scaling (e.g., LN)"
sources: []
relatedTerms:
  - delayed-payment-channel
  - eltoo
  - escrow
  - escrowed-lightning-channel
  - hash-locktime-contract-hlc
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - locktime
  - submarine-swap
liveWidget: ~
---

A payment channel lets two participants lock up funds in a multi-signature address, then exchange updated balances off-chain. This allows high-speed, low-fee transfers. Only when they decide to close the channel (or if there's a dispute) does the final state settle on-chain via a single transaction. It's the backbone of the Lightning Network: rather than congesting the main Bitcoin ledger with frequent small payments, channels keep these transactions off-chain. When done, participants broadcast the last channel state (the net balance) back to layer-1, minimizing fees and confirmations needed for each individual transfer.
