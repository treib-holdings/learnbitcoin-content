---
title: "Locktime"
slug: locktime
draft: false
shortDefinition: "A field in a Bitcoin transaction specifying the earliest block height or timestamp at which it can be included in a block."
keyTakeaways:
  - "Acts as a do-not-confirm-before date or block height"
  - "Often used with time-based opcodes for escrow/payment channels"
  - "nLocktime set to 0 means the transaction is valid immediately"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - delayed-payment-channel
  - nlocktime
  - nsequence
  - payment-channel
  - time-locked-contract
liveWidget: ~
---

Locktime (nLocktime) can be set to a specific block height or Unix timestamp. If the network's block height or median time is below that threshold, nodes refuse to confirm the transaction. This feature allows delayed spending of UTXOs-useful for escrow arrangements or time-based contracts (e.g., CLTV). Many wallets default to a locktime of 0, meaning it's immediately valid. When combined with partial signatures and advanced scripting, locktime can implement scheduled payouts, payment channels, or other contract-like mechanisms in Bitcoin's limited script environment.
