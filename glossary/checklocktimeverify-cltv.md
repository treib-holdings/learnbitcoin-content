---
title: "CheckLockTimeVerify (CLTV)"
slug: checklocktimeverify-cltv
draft: false
shortDefinition: "An opcode (OP_CLTV) allowing a transaction output to remain unspendable until a set block height or timestamp."
keyTakeaways:
  - "Locks outputs until a specific future block/time is reached"
  - "Useful for time-based contracts or payment channels"
  - "Helps enable advanced scripting alongside OP_CSV"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bitcoin-script
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

CLTV, introduced by [BIP-65](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki), is like a timed lockbox for your BTC. You specify a future block height or timestamp in the script. Until the blockchain reaches that time, the funds cannot be spent.
This feature enables use cases such as time-locked escrows or delayed payouts. For instance, you might schedule a payment to become spendable next month, or enforce a holding period in a contract. CLTV opened the door to more sophisticated scripting and layer-2 applications, paired with OP_CSV for relative locktimes (BIP 68/112).
