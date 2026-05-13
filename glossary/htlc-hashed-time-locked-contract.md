---
title: "HTLC (Hashed Time-Locked Contract)"
slug: htlc-hashed-time-locked-contract
draft: false
shortDefinition: "A mechanism requiring a secret (preimage) to unlock payment before a time lock expires, core to LN and atomic swaps."
keyTakeaways:
  - "Enables trust-minimized payment and swaps"
  - "Uses a hash puzzle + time lock for safe fallback"
  - "Foundation of LN's multi-hop payment logic"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bolt-11
  - bridge-node-lightning
  - eltoo
  - escrow
  - escrowed-lightning-channel
  - fraud-proof
  - fraudulent-channel-close
  - griefing-attack
  - hash-locktime-contract-hlc
  - hash-puzzle
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - lightning-routing
  - payment-channel
  - submarine-swap
liveWidget: ~
---

HTLCs combine two elements: a hash (locking in the secret) and a time lock (forcing resolution within a set period). If the recipient reveals the correct preimage, they claim the funds immediately. If not, after the expiry, the sender recovers their coins. This design enables trustless payment channels in the Lightning Network and cross-chain atomic swaps, ensuring that either the trade completes fairly (by revealing the secret) or it unwinds automatically. HTLCs are essential for bridging untrusted parties without relying on a central authority.
