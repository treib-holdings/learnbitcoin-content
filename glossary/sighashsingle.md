---
title: "SIGHASH_SINGLE"
slug: sighashsingle
draft: false
shortDefinition: "A signature flag that signs only the corresponding output index, allowing partial or specialized transaction modifications."
keyTakeaways:
  - "Binds an input to a single, matching output index"
  - "Allows partial TX modifications without invalidating existing signatures"
  - "More complex to use securely compared to standard SIGHASH_ALL"
sources: []
relatedTerms:
  - bitcoin-script
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - sighash
  - sighashanyonecanpay
  - transaction
liveWidget: ~
---

`SIGHASH_SINGLE` signs only the output at the same index as the input being signed. Other outputs can change without invalidating the signature.

The use case: build a transaction where your contribution is "send my coins to this specific destination" but you don't care what other inputs or outputs the transaction contains. Atomic swaps, partial assembly across mutually-distrustful parties, and certain marketplace constructions use it.

Pre-SegWit it had a famous footgun. If the input index was greater than the number of outputs, the sighash algorithm fell back to a constant value (the integer 1). Anyone could replay that signature against an unrelated transaction. The bug was caught early and worked around by careful tool authors. BIP 143 (SegWit sighash) eliminated it cleanly for SegWit inputs, and Taproot's sighash (BIP 341) closed the door entirely.

Outside of specific protocol designs, `SIGHASH_SINGLE` is rarely the right choice. `SIGHASH_ALL` is the default for a reason: it commits to everything, leaving the smallest possible attack surface.
