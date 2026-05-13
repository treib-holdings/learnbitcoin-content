---
title: "Atomic Swap"
slug: atomic-swap
draft: false
shortDefinition: "A trustless way for two parties to exchange different cryptocurrencies without using a centralized exchange."
keyTakeaways:
  - "Uses hashed timelock contracts to enable trustless trading"
  - "Removes reliance on centralized exchanges"
  - "Requires some technical setup and compatible blockchain features"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap-refill
  - htlc-hashed-time-locked-contract
  - payjoin
  - submarine-swap
liveWidget: ~
---

An atomic swap is like trading your baseball card for a friend's comic book without relying on a shopkeeper to hold both items in escrow. The idea is that if either party fails to hand over their crypto, the entire trade automatically cancels, protecting both sides. This is usually accomplished through hashed timelock contracts (HTLCs), which lock up funds until both parties have fulfilled the agreed conditions.
By eliminating the middleman, users can maintain custody of their coins until the very moment the exchange is completed. This reduces counterparty risk and can save on fees. However, setting up an atomic swap can be more technical compared to a traditional exchange process. It's a prime example of how cryptographic tools can bring peer-to-peer finance closer to a trustless ideal.
