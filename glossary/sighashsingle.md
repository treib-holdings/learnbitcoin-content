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
relatedTerms: []
liveWidget: ~
---

By default (SIGHASH_ALL), a signature covers all outputs, preventing changes. In contrast, SIGHASH_SINGLE binds each input’s signature only to its matching output index, ignoring others. This can facilitate scenarios like partially filled transactions, custom payment flows, or advanced scripts. However, it can be tricky-if an output index doesn’t exist or if multiple inputs sign the same single output, unexpected effects can occur. Consequently, SIGHASH_SINGLE sees less common usage than ALL, but it remains an important option in Bitcoin’s flexible transaction model.
