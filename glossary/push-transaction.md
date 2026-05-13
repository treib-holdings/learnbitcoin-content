---
title: "Push Transaction"
slug: push-transaction
draft: false
shortDefinition: "In LN or sidechains, a process of ‘pushing’ funds to another party triggered by contract states or special conditions."
keyTakeaways:
  - "Transfers funds in response to contract triggers without user-initiated TX"
  - "Used in LN channel state updates or sidechain pegging logic"
  - "Enables smooth user experience by auto-moving balances upon conditions"
sources: []
relatedTerms: []
liveWidget: ~
---

When a specific condition in a payment channel or sidechain is met, an automated operation ‘pushes’ BTC (or pegged tokens) from one party’s allocation to another’s. For instance, LN channel updates might push the balance to the receiver’s side once they present a preimage. Similarly, a sidechain might push funds to a user’s address upon finalizing a pegged event. This process bypasses the need for a separate transaction initiation, relying instead on contract logic or channel states. It enhances automation, but must be carefully designed to ensure correct script enforcement.
