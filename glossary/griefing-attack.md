---
title: "Griefing Attack"
slug: griefing-attack
draft: false
shortDefinition: "In the Lightning Network, a malicious node that routes payments but never finalizes them, locking up capacity and frustrating senders."
keyTakeaways:
  - "Locks channel capacity without providing a preimage"
  - "Doesn’t yield direct profit but disrupts network liquidity"
  - "Workarounds include smaller HTLCs and payment splitting strategies"
sources: []
relatedTerms:
  - eavesdropping-attack
  - eclipse-attack
  - htlc-hashed-time-locked-contract
  - jamming-attack-ln
  - jammed-htlc-detector
  - race-attack
  - replay-attack
  - resource-exhaustion-attack
liveWidget: ~
---

Lightning payments often use hashed timelock contracts (HTLCs), giving the sender a short period to claim the funds. A griefing attacker can route a payment through their node but delay or refuse to release the preimage, effectively trapping the funds in an ‘in-flight’ state. This forces the sender’s channel capacity to remain locked until the HTLC expires.
While the attacker doesn’t directly profit, they inflict inconvenience or cost by reducing others’ liquidity. Mitigations might include payment splitting (AMP) or smaller HTLC timeouts, but griefing remains an annoyance in LN’s design. It underscores that LN, while offering near-instant micropayments, also deals with new vectors for mischief that rely on time-bound conditional transactions.
