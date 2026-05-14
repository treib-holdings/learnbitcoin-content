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

A Hashed Time-Locked Contract (HTLC) is a Bitcoin script that locks funds with two conditions: spendable by *anyone* who reveals a secret value (the **preimage** of a known hash), OR refundable to the sender if a time deadline passes without that secret being revealed.

In script form, roughly:

```
IF hash(provided value) == target_hash THEN
  pay to receiver
ELSE IF current_time > deadline THEN
  pay back to sender
END
```

This deceptively simple structure is the foundation of trustless multi-party Bitcoin protocols.

Why HTLCs are so useful:

- **[Lightning Network routing](/glossary/lightning-routing).** When you pay across multiple Lightning hops, each hop is bound by an HTLC. The receiver knows the secret. They claim from the previous hop by revealing it. That hop claims from the one before by passing on the same secret. Backward up the chain, every hop gets paid atomically as the secret propagates. Either the whole payment succeeds, or it all unwinds when the timeouts hit.
- **[Atomic swaps](/glossary/atomic-swap).** Two parties on different chains can swap tokens without trust. Each side locks funds in an HTLC. Whoever first reveals the secret claims their funds and exposes the secret, letting the other party claim theirs. If anyone bails, both refunds trigger at the deadline.
- **[Submarine swaps](/glossary/submarine-swap).** Swap on-chain BTC for Lightning BTC (or vice versa) trustlessly via paired HTLCs.

The "time-locked" part isn't optional. Without a deadline, funds could be stuck forever waiting for a secret that may never be revealed. The deadline ensures that *something* happens - either the payment completes (secret revealed) or it doesn't (refund triggers). Time itself becomes part of the security model.

HTLCs are the cryptographic primitive that makes Bitcoin's layer-2 ecosystem actually trustless. They've been in production since 2017 and have moved trillions of sats worth of payments without ever requiring an intermediary to be honest.
