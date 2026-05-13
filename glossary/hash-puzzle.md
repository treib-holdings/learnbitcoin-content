---
title: "Hash Puzzle"
slug: hash-puzzle
draft: false
shortDefinition: "The challenge in LN's HTLCs: reveal a secret (preimage) to claim funds, else they revert after a time lock."
keyTakeaways:
  - "Central to LN's trustless routing of payments"
  - "Preimage revelation is key to finalizing transfers"
  - "Ensures funds revert if the receiver doesn't claim them in time"
sources: []
relatedTerms:
  - hash
  - hash-locktime-contract-hlc
  - htlc-hashed-time-locked-contract
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

A hash puzzle is the cryptographic challenge inside an [HTLC](/glossary/htlc-hashed-time-locked-contract): "to claim these funds, reveal a value whose [hash](/glossary/hash) equals this known commitment."

The mechanics:

1. The receiver picks a random secret `s` (the **preimage**) and computes `hash(s)`, called the **payment hash**.
2. The receiver shares only the payment hash with the sender (encoded in a [Lightning invoice](/glossary/lightning-invoice)).
3. The sender constructs a payment with a hash puzzle: "anyone who provides a value v such that hash(v) = payment_hash can claim these funds."
4. The receiver, knowing `s`, reveals it to claim the payment.
5. The reveal happens on every routing hop simultaneously, cascading backward through the path.

The two cryptographic properties that make this work:

- **Hash preimage resistance.** Given the payment hash, no one but the receiver can find a value that produces it. The receiver doesn't even need to share `s` with anyone until they're claiming.
- **Atomic propagation.** Once `s` is revealed at any hop, every earlier hop in the chain can see it (by watching the resolution) and claim from their own predecessor. The payment either fully completes (because `s` gets revealed) or fully unwinds at the timeouts.

Hash puzzles are the trust primitive that makes [Lightning routing](/glossary/lightning-routing) work without requiring intermediate nodes to be honest. They're also the building block of [atomic swaps](/glossary/atomic-swap), [submarine swaps](/glossary/submarine-swap), and most other multi-party Bitcoin protocols.

See [HTLC](/glossary/htlc-hashed-time-locked-contract) for the full hashed-time-locked-contract structure that wraps the hash puzzle in a timeout fallback.
