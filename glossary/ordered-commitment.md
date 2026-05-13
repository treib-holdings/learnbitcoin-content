---
title: "Ordered Commitment"
slug: ordered-commitment
draft: false
shortDefinition: "An LN protocol approach ensuring participants exchange signatures for the latest channel state in a defined sequence to prevent race conditions."
keyTakeaways:
  - "Prevents disputes by establishing a clear ‘latest state’ in LN channels"
  - "Simplifies penalty logic, ensuring no overlapping transactions"
  - "Implemented differently across LN nodes, but same core idea"
sources: []
relatedTerms: []
liveWidget: ~
---

In typical LN channels, both participants must sign updated commitment transactions whenever the balance changes. Ordered commitment ensures that each side’s signature exchange follows a strict order—Party A signs first, then Party B signs—making it clear which state is the latest. This prevents ambiguity or cheating if two updates occur nearly simultaneously. If one side attempts to claim an older state, the other has the necessary penalty or updated transaction at hand. Different LN implementations handle commitment ordering in slightly varied ways, but the principle remains: create a unidirectional signature flow to avoid collisions.
