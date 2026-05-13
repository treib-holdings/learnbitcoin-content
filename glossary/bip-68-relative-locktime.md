---
title: "BIP 68 (Relative Locktime)"
slug: bip-68-relative-locktime
draft: false
shortDefinition: "Enables transactions to define time locks based on the age of inputs, used alongside OP_CHECKSEQUENCEVERIFY."
keyTakeaways:
  - "Locks funds based on how long inputs have aged"
  - "Pairs with BIP 112's OP_CHECKSEQUENCEVERIFY"
  - "Essential for sophisticated layer-2 contract logic"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-bitcoin-improvement-proposal
  - bip-65-opchecklocktimeverify
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

BIP 68, in [BIP-68](https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki), introduced a concept of relative locktime. Rather than referencing an absolute block number or timestamp (as BIP 65 does), it uses the age of the spent outputs in blocks or seconds. You can think of it as a countdown timer that starts once the transaction's inputs are confirmed.
This mechanism is particularly useful when combined with OP_CHECKSEQUENCEVERIFY (CSV) from BIP 112. Developers can create more flexible payment channel designs where parties must wait a certain number of blocks to spend funds, ensuring fair closing procedures. Overall, BIP 68 helped pave the way for advanced layer-2 solutions by offering fine-grained control over transaction spendability.
