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

The core of a Hashed Timelock Contract is a 'puzzle' that the payee can solve by revealing a preimage. If they reveal it, they instantly claim the funds. If not, the payment eventually times out, returning the funds to the sender. This mechanism allows atomic payments across multiple hops in LN-if any hop can't produce the correct preimage, the transaction unwinds. This puzzle ensures trustless routing, with each intermediary guaranteed payment only if the final recipient claims the payment correctly.
