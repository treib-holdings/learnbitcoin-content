---
title: "OP Code (Operation Code)"
slug: op-code-operation-code
draft: false
shortDefinition: "An instruction in Bitcoin's scripting language (e.g., OP_CHECKSIG) defining transaction validation logic or conditions."
keyTakeaways:
  - "Defines the logic that must succeed for a spend to be valid"
  - "Limited instruction set for security and determinism"
  - "Extensions like Taproot expand on existing script capabilities"
sources: []
relatedTerms:
  - bip-119-ctv
  - bitcoin-script
  - checktemplateverify-ctv
  - covenants
  - opreturn
  - script
  - scriptless-scripts
liveWidget: ~
---

Bitcoin's script is a stack-based language with various 'OP_' codes like OP_DUP, OP_HASH160, OP_EQUALVERIFY, OP_CHECKSIG, etc. When a transaction's input references an output, the scriptSig and scriptPubKey combine to form a script that must execute successfully for the spend to be valid. These opcodes handle hashing, signature checks, conditionals, etc. Over time, some OP codes have been disabled (for security or complexity reasons), and new ones introduced via soft forks (e.g., OP_CSV). While not Turing-complete, it's sufficient for multi-sig, hash locks, timelocks, and other contract logic in Bitcoin.
