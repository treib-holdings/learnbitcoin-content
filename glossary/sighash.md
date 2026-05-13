---
title: "SIGHASH"
slug: sighash
draft: false
shortDefinition: "Specifies which parts of a transaction are signed. Options include ALL, NONE, SINGLE, and ANYONECANPAY."
keyTakeaways:
  - "Controls how much of the transaction is locked by the signature"
  - "SIGHASH_ALL is default for typical transactions"
  - "Advanced flags enable partial or flexible transaction modifications"
sources: []
relatedTerms: []
liveWidget: ~
---

When creating a signature in Bitcoin, SIGHASH flags define what portion of the transaction is 'locked' by that signature. For instance, SIGHASH_ALL binds all inputs/outputs, preventing tampering. SIGHASH_NONE binds only inputs, letting outputs be changed-useful in certain niche cases. SIGHASH_SINGLE signs a corresponding output index, allowing partial updates. ANYONECANPAY flags let other signers add inputs without invalidating the signature. While these advanced modes are rarely used in ordinary transactions, they underpin creative contract setups (like partial coinjoin or advanced payment flows). Proper use requires caution to avoid unintended fund manipulation.
