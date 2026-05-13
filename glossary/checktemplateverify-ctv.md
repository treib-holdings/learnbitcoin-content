---
title: "CheckTemplateVerify (CTV)"
slug: checktemplateverify-ctv
draft: false
shortDefinition: "Proposed BIP-119 opcode allowing 'template covenants,' restricting how outputs can be spent in future transactions."
keyTakeaways:
  - "Allows restricting future transaction shapes (template covenants)"
  - "Potentially beneficial for vaults or batch payment features"
  - "Debated due to concerns about restricting coin fungibility"
sources: []
relatedTerms:
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - covenants
  - op-code-operation-code
  - script
  - scriptless-scripts
liveWidget: ~
---

`OP_CHECKTEMPLATEVERIFY` (CTV) is the proposed Bitcoin Script opcode at the heart of [BIP-119](/glossary/bip-119-ctv). Its job: enforce that a spending transaction matches a pre-committed *template* - a specific set of inputs, outputs, sequences, and locktimes.

How CTV would work at the script level:

1. When you fund a UTXO, the locking script commits to a hash of a transaction template - "to spend this, the spending transaction must hash to value H."
2. The template specifies things like: how many outputs, what amounts, what scripts those outputs use, what relative locktime the spend requires.
3. When someone tries to spend, CTV checks the spending transaction against that template. If it matches, the spend is allowed. If not, it's rejected.

This is one specific way to add [covenants](/glossary/covenants) to Bitcoin. It's deliberately limited: CTV doesn't let scripts read *arbitrary* properties of spending transactions, only check them against a precomputed template hash. This limit is part of what makes CTV a smaller-surface-area proposal than some alternatives.

Practical applications if it activated:

- **Vaults** with forced multi-step withdrawal paths.
- **Channel factories** that open many [Lightning channels](/glossary/lightning-channel) from one on-chain transaction.
- **Payment pools** for batching many recipients efficiently.
- **Cold-storage protections** against catastrophic hot-wallet compromise.

CTV is one of several covenant designs being discussed. Alternatives include OP_VAULT, OP_CAT (re-enabled), OP_CSFS, ANYPREVOUT (Eltoo's primitive), and Taproot-Trees-based approaches. Different proposals have different tradeoffs on expressiveness, complexity, and future flexibility.

As of 2026, no covenant opcode has activated. See [Covenants](/glossary/covenants) for the broader debate and [BIP-119](/glossary/bip-119-ctv) for the specific proposal.
