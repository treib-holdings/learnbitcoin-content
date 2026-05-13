---
title: "Script"
slug: script
draft: false
shortDefinition: "Bitcoin’s stack-based, programmable instruction set defining how outputs can be spent (e.g., single-sig, multisig)."
keyTakeaways:
  - "Operates via a last-in-first-out stack model"
  - "Restrictive design helps security and determinism"
  - "Used to implement multisig, pay-to-hash, time locks, etc."
sources: []
relatedTerms:
  - bitcoin-script
  - checktemplateverify-ctv
  - covenants
  - op-code-operation-code
  - opreturn
  - scriptless-scripts
liveWidget: ~
---

Bitcoin transactions rely on a simple scripting system. When spending an output, the scriptPubKey (lock script) and scriptSig (unlock script) combine to validate conditions like signatures or hashes. Despite being limited compared to Turing-complete languages, this design reduces attack surfaces and ensures deterministic execution. Common script templates include P2PKH, P2SH, and SegWit variants. Advanced features (like time locks, multisig) also build on these opcodes. In recent upgrades like Taproot, script enhancements now allow for more compact and private spending logic without sacrificing security.
