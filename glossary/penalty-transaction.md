---
title: "Penalty Transaction"
slug: penalty-transaction
draft: false
shortDefinition: "In LN, a transaction that punishes a dishonest channel partner who broadcasts an outdated commitment, awarding their funds to the honest party."
keyTakeaways:
  - "Deters LN participants from broadcasting outdated channel states"
  - "Transfers cheater’s stake to honest peer if caught cheating"
  - "Integral to LN’s trustless design in current channel implementations"
sources: []
relatedTerms:
  - eltoo
  - fraud-proof
  - fraudulent-channel-close
  - gui-wallet
  - htlc-hashed-time-locked-contract
liveWidget: ~
---

Lightning’s standard security scheme states: if either side tries to settle the channel with an older commitment state (gaining more than they deserve), the other side can broadcast a penalty transaction. This transaction claims all the cheater’s funds by revealing a secret that was committed to in the last valid state. This zero-tolerance approach strongly disincentivizes fraud. Future proposals like Eltoo aim to replace such penalties with automatic invalidation of older states, but the penalty model remains the widely used LN standard.
