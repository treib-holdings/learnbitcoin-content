---
title: "Double Spend Relay"
slug: double-spend-relay
draft: false
shortDefinition: "A node policy or tool that forwards conflicting transactions to detect (or broadcast warnings about) potential double spends."
keyTakeaways:
  - "Relays conflicting TXs rather than discarding them"
  - "Helps merchants spot double spends for zero-conf payments"
  - "Useful but doesn't replace waiting for confirmations"
sources: []
relatedTerms:
  - double-spend
  - race-attack
  - reorg-reorganization
  - replay-attack
  - transaction
liveWidget: ~
---

Normally, Bitcoin nodes don't relay conflicting transactions-once one is accepted to the mempool, a conflicting transaction (spending the same inputs) is discarded. However, Double Spend Relay modifies that behavior so that nodes share any newly received conflicting transaction. This helps merchants or service providers detect attempted double spends more quickly.
While it improves awareness of potential attacks, it can also clutter the network with invalid transactions. Some systems use it to provide real-time alerts for zero-confirmation payments, highlighting that a conflict is in the mempool. Ultimately, waiting for confirmations remains the safest defense, but double-spend relay can offer early detection in low-latency commerce scenarios.
