---
title: "Absolute Locktime"
slug: absolute-locktime
draft: false
shortDefinition: "A constraint that references a specific block height or timestamp, enforcing when a transaction or script can be validly executed."
keyTakeaways:
  - "Restricts spending until a certain time or block height"
  - "Implemented with nLocktime or OP_CLTV (BIP-65)"
  - "Enables escrow and time-delayed payment features"
sources: []
relatedTerms:
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

Absolute locktime means a transaction cannot be finalized before a certain time or block height. In Bitcoin, this can be set using nLocktime or OP_CHECKLOCKTIMEVERIFY (often referred to as OP_CLTV in [BIP-65](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki)). Think of it like scheduling a party for a future date: no one is allowed inside until the clock strikes that moment.
This feature prevents early spending of coins, which can help with payment channels, escrow deals, or delayed payouts. If someone tries to spend the funds before the locktime, the network rejects the transaction. The advantage is increased flexibility in contract-like scenarios. The downside is that you have to trust the system’s consensus on block height and time, although that’s rarely an issue in practice.
