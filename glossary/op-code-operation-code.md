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
sameAs:
  - "https://en.bitcoin.it/wiki/Script"
liveWidget: ~
---

An opcode (operation code) is a single instruction in [Bitcoin Script](/glossary/bitcoin-script). Bitcoin's scripting language is stack-based: opcodes push values onto a stack, pop values from it, manipulate the stack, perform checks, or conditionally execute branches. A script "succeeds" if it executes to a non-empty, non-false top-of-stack value.

The major opcode categories:

- **Stack manipulation:** `OP_DUP`, `OP_DROP`, `OP_SWAP`, `OP_PICK`, `OP_ROLL`, etc.
- **Arithmetic:** `OP_ADD`, `OP_SUB`, `OP_MUL` (currently disabled), comparisons, etc.
- **Hashing:** `OP_HASH160`, `OP_HASH256`, `OP_SHA256`, `OP_RIPEMD160`.
- **Signature checking:** `OP_CHECKSIG`, `OP_CHECKMULTISIG`, `OP_CHECKSIGVERIFY`.
- **Locktime checks:** [`OP_CHECKLOCKTIMEVERIFY`](/glossary/checklocktimeverify-cltv), [`OP_CHECKSEQUENCEVERIFY`](/glossary/checksequenceverify-csv).
- **Conditionals:** `OP_IF`, `OP_NOTIF`, `OP_ELSE`, `OP_ENDIF`.
- **Constants and special:** `OP_0` through `OP_16`, `OP_RETURN`, `OP_NOP`.

Some opcodes that *used to* exist in Bitcoin Script have been **disabled** by Satoshi or subsequent developers for security reasons - `OP_CAT`, `OP_MUL`, `OP_DIV`, `OP_LSHIFT`, others. Some of these (notably `OP_CAT`) are subjects of ongoing re-enablement debates because they would enable additional contract structures useful for vaults and other constructions.

The opcode set is intentionally limited. Bitcoin Script has no loops, no jumps to arbitrary addresses, no Turing-complete general computation. This is a deliberate security trade-off: a richer language would create more attack surface, harder validation, and the possibility of denial-of-service via expensive scripts. Bitcoin's narrow opcode set keeps validation predictable and cheap.

New opcodes get added through [soft forks](/glossary/soft-fork) by repurposing previously-disabled or NOP opcodes. This is how CLTV (BIP-65) and CSV (BIP-112) were added - they took over previously-meaningless `OP_NOP` slots. Future additions like CTV ([BIP-119](/glossary/bip-119-ctv)) would follow the same pattern.

See [Bitcoin Script](/glossary/bitcoin-script) for the broader picture of how opcodes compose into spending conditions.
