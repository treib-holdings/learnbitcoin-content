---
title: "Delayed Payment Channel"
slug: delayed-payment-channel
draft: false
shortDefinition: "A Lightning channel variant that enforces a waiting period for one party’s funds, ensuring time to apply penalty transactions if cheating occurs."
keyTakeaways:
  - "Channels incorporate a built-in waiting period for certain outputs"
  - "Ensures security by granting time to apply penalties"
  - "Balances LN’s trust model with user-defined liquidity constraints"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
  - locktime
  - payment-channel
liveWidget: ~
---

This concept is like a protective buffer. One side of the channel can’t instantly withdraw their funds; they must wait through a locktime first. The other side monitors the blockchain and can swoop in with a penalty transaction if any attempt to broadcast an outdated channel state occurs.
The approach aims to maintain LN’s security while allowing flexibility in how each channel is set up. By introducing a forced delay on one party’s outputs, it gives the other party time to respond to misbehavior, similar to the logic behind Delayed Justice Transactions. The main trade-off is liquidity—those funds aren’t immediately available on-chain.
