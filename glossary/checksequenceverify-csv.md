---
title: "CheckSequenceVerify (CSV)"
slug: checksequenceverify-csv
draft: false
shortDefinition: "An opcode for relative locktime, letting a transaction output be spendable only after a certain number of blocks or time from confirmation."
keyTakeaways:
  - "Implements relative time locks at the UTXO level"
  - "Used for payment channels and advanced contract logic"
  - "Requires waiting a specified block count or time after confirmation"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checktemplateverify-ctv
  - covenants
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

CheckSequenceVerify (CSV) was introduced in [BIP-112](https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki) and works with relative locktimes specified in [BIP-68](https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki). Unlike CLTV's absolute reference, CSV ties the waiting period to the age of the UTXO. For example, you can require 100 blocks to pass after the transaction that created an output before that output can be spent.
This functionality is crucial for advanced payment channel designs, allowing participants to enforce penalty or closing conditions if one party tries to cheat. It's another piece in Bitcoin's evolving toolkit for flexible, trust-minimized contracts and layer-2 protocols.
