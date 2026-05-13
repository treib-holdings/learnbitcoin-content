---
title: "Payment State Machine"
slug: payment-state-machine
draft: false
shortDefinition: "A model tracking LN/DLC payment statuses, e.g., pending, preimage revealed, failed, timed out, etc."
keyTakeaways:
  - "Gives structured phases for payment processes"
  - "Helps handle route failures, timeouts, or partial signatures"
  - "Makes LN and DLC logic more maintainable and transparent"
sources: []
relatedTerms: []
liveWidget: ~
---

When LN or DLC payments are initiated, they progress through discrete states—initial creation, in-flight routing, partial confirmations, preimage disclosures, or final settlement. Conceptually, they form a ‘state machine.’ For instance, LN might define states like ‘pending HTLC’, ‘awaiting preimage’, ‘success’, or ‘timeout triggered’. Similarly, DLC frameworks track states like ‘bet locked’, ‘oracle signature awaited’, ‘payout settled’. Representing payments as finite states aids in error handling, ensuring an orderly response to unexpected events (like route failure or contradictory oracle data).
