---
title: "Input (Transaction Input)"
slug: input-transaction-input
draft: false
shortDefinition: "A reference to a specific UTXO being spent, including a signature unlocking those funds."
keyTakeaways:
  - "Identifies which UTXO is being spent"
  - "Must contain valid signature/witness data"
  - "Multiple inputs can fund one transaction"
sources: []
relatedTerms: []
liveWidget: ~
---

Each transaction input points to a previously unspent output, referencing the transaction ID and output index. By providing a valid signature matching the output's script, the input demonstrates it controls those funds. Multiple inputs can be combined in a single transaction (like paying from multiple addresses). Input data also includes the scriptSig (for legacy) or witness data (in SegWit), where the actual unlocking proof resides. If any input fails validation, the entire transaction is invalid, highlighting the atomic nature of Bitcoin's spend logic.
