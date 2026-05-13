---
title: "SIGHASH_ANYONECANPAY"
slug: sighashanyonecanpay
draft: false
shortDefinition: "A signature flag letting other participants add inputs to a transaction without invalidating the existing signature."
keyTakeaways:
  - "Isolates a signature to the signer’s own inputs"
  - "Enables partial signing in multi-input transactions"
  - "Useful for coinjoin-like flows or flexible transaction construction"
sources: []
relatedTerms: []
liveWidget: ~
---

When signing a transaction, you can choose from several SIGHASH flags to determine which parts are ‘locked in.’ SIGHASH_ANYONECANPAY restricts a signature so it applies only to that signer’s inputs, allowing other parties to append new inputs later. This feature can be combined with other flags (e.g., SIGHASH_ALL|ANYONECANPAY) to create collaborative transactions or partial coinjoins where each participant only guarantees their own inputs, but all can collectively fund the same outputs without rewriting previously signed parts.
