---
title: "Lightning Network Penalty"
slug: lightning-network-penalty
draft: false
shortDefinition: "A punishment mechanism giving the honest peer the cheater’s channel balance if an outdated state is broadcast."
keyTakeaways:
  - "Deters channel participants from using old commitment states"
  - "Transfers the cheating party’s funds to the honest peer"
  - "Ensures strong incentives for correct channel state updates"
sources: []
relatedTerms: []
liveWidget: ~
---

In LN, broadcasting an obsolete commitment transaction is effectively cheating. The penalty model ensures that if a party tries using an outdated state (one that benefits them more than the current balance), the honest peer can claim the cheater’s entire stake by revealing a penalty transaction. This zero-tolerance approach deters fraudulent closes and makes honest channel closures the rational choice. Future proposals like Eltoo aim to replace penalty transactions with automatic state invalidation, but most LN channels today rely on this penalty-based design.
