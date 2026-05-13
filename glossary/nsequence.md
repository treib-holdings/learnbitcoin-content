---
title: "nSequence"
slug: nsequence
draft: false
shortDefinition: "Originally for partial transaction updates, repurposed by BIP 68 to enforce relative locktimes in OP_CSV scripts."
keyTakeaways:
  - "Transformed from a partial replace mechanism to a relative locktime indicator"
  - "BIP 68 + OP_CSV enable advanced channel logic using nSequence"
  - "Crucial for second-layer solutions requiring time-based outputs"
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
  - nlocktime
  - time-locked-contract
  - transaction
liveWidget: ~
---

In Bitcoin's early design, nSequence let users overwrite unconfirmed transactions under certain conditions. Over time, that feature fell out of widespread use. BIP 68 redefined nSequence to specify a relative locktime (e.g., you must wait X blocks after the transaction that created the UTXO). OP_CHECKSEQUENCEVERIFY (CSV) enforces this relative time, facilitating payment channels, time-delayed spending, and other advanced contracts. The nSequence field now stands as a building block for Bitcoin's evolving layer-2 features, bridging the gap between script-based lock times and transaction-level state management.
