---
title: "Covariance Transaction"
slug: covariance-transaction
draft: false
shortDefinition: "A transaction referencing its own parts in unintended ways, typically disallowed to avoid complex or recursive malleability."
keyTakeaways:
  - "Involves self-referential transaction fields"
  - "Could lead to recursive or paradoxical malleability"
  - "Forbidden in Bitcoin for simpler, safer validation"
sources: []
relatedTerms:
  - covenants
  - musig
  - musig2
  - quorum-signatures
  - transaction
liveWidget: ~
---

Covariance transactions would allow a transaction to sign or commit to its own data structures—potentially enabling odd feedback loops. Bitcoin’s design forbids transactions from depending on their own IDs in a direct manner. This is primarily to prevent malleability nightmares and infinite references.
Some proposals for advanced contracts or covenants brush against covariance-like logic, but the base protocol resists any form of self-reference that could break deterministic verification. Disallowing such self-dependencies keeps transaction validation straightforward. Developers who want partial transaction commitments have explored other techniques (like partial signatures or ANYPREVOUT), but direct covariance remains taboo in Bitcoin’s consensus rules.
