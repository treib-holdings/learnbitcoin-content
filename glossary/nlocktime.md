---
title: "nLocktime"
slug: nlocktime
draft: false
shortDefinition: "A field specifying the earliest block height or timestamp at which a transaction can be confirmed."
keyTakeaways:
  - "Prevents confirmation before a certain block/time"
  - "Used by advanced scripting for timed releases or escrow"
  - "Zero or a past value means it’s immediately valid"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - delayed-justice-transaction
  - locktime
  - mtp-median-time-past
  - nsequence
  - time-locked-contract
  - transaction
liveWidget: ~
---

nLocktime (one word, short for ‘transaction locktime’) works with nSequence fields to determine when a transaction is valid for inclusion in a block. If nLocktime is set to a block height or timestamp in the future, the transaction can’t be confirmed before that point. This is useful for escrow or delayed payout scenarios-though actual enforcement also depends on miner acceptance and the network’s median time. Many wallets default nLocktime to zero for immediate spending, while advanced scripts leverage it for time-based contract logic (together with CHECKLOCKTIMEVERIFY).
