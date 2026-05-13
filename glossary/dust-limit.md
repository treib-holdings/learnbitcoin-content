---
title: "Dust Limit"
slug: dust-limit
draft: false
shortDefinition: "A threshold below which an output is deemed dust and rejected by nodes' default policy as non-standard (e.g., ~546 sat for legacy P2PKH)."
keyTakeaways:
  - "Prevents trivial outputs from flooding the network"
  - "Varies based on script type (e.g., legacy vs. SegWit)"
  - "Policy-level, not a hard consensus rule, but widely enforced"
sources: []
relatedTerms:
  - discard-threshold
  - dust
  - dust-attack
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

The dust limit is a built-in policy in Bitcoin Core that considers outputs smaller than a certain amount non-standard, thus refusing to relay them. The exact figure varies by output script type (legacy, SegWit, etc.), but typically sits around a few hundred satoshis.
While it's not a consensus rule-nodes can override their policy-most of the network adheres to these defaults. This prevents spam transactions from cluttering the chain with near-worthless outputs, saving space for more meaningful activity. Users sending outputs below the dust limit will likely see the transaction rejected by standard nodes.
