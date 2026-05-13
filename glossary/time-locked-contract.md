---
title: "Time-Locked Contract"
slug: time-locked-contract
draft: false
shortDefinition: "A contract using CLTV (absolute time) or CSV (relative time) to restrict spending until a specific block/time threshold."
keyTakeaways:
  - "Uses nLocktime, OP_CHECKLOCKTIMEVERIFY, or OP_CHECKSEQUENCEVERIFY"
  - "Implements delayed payouts, channel security, or escrow features"
  - "Ensures no spending until the designated height/time has passed"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - mtp-median-time-past
  - nlocktime
  - nsequence
liveWidget: ~
---

Bitcoin scripts can implement time locks, requiring a certain block height or timestamp be reached (CLTV) or a number of blocks since the UTXO was confirmed (CSV). These time-locked outputs prevent spending until conditions are met, enabling escrow-like deals, LN channels (where outdated states are penalized), or DLCs that wait on an oracle signature. They're a fundamental building block in many advanced protocols, ensuring no early unauthorized spends without satisfying the time-based rules.
