---
title: "Clawback Mechanism"
slug: clawback-mechanism
draft: false
shortDefinition: "A script or contract feature enabling partial refunds or fund reclamation if certain conditions aren’t met."
keyTakeaways:
  - "Enables refunds or reversals under predefined conditions"
  - "Often uses time locks or multi-sig scripts"
  - "Provides extra security but increases scripting complexity"
sources: []
relatedTerms:
  - coin-control
  - coin-freeze
  - colored-coins
  - covenants
  - escrow
  - escrowed-lightning-channel
  - quorum-signatures
liveWidget: ~
---

A clawback mechanism in Bitcoin is like a safety net for a transaction. It allows the sender or a third party to retrieve funds if specific script conditions remain unfulfilled—such as a business deal failing or a time lock expiring without proper signatures.
For instance, an escrow script might let the buyer reclaim funds if the seller doesn’t deliver on time. These clawback conditions must be baked into the original script, and they often involve time-based opcodes (like OP_CSV) or multi-signature logic. While they offer added protection, they also require more scripting complexity, careful design, and trust that the clawback trigger isn’t misused.
