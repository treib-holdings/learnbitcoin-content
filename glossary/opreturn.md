---
title: "OP_RETURN"
slug: opreturn
draft: false
shortDefinition: "A script opcode allowing arbitrary data in a transaction output, effectively making the output unspendable."
keyTakeaways:
  - "Enables data embedding without making coins spendable"
  - "Typically capped at ~80 bytes for chain resource reasons"
  - "Used for notary, proof-of-existence, or limited ‘colored coins’ data"
sources: []
relatedTerms:
  - bitcoin-script
  - chain-bulletin-board
  - op-code-operation-code
  - opreturn-based-tokens
  - script
  - scriptless-scripts
liveWidget: ~
---

OP_RETURN outputs don’t require a signature to spend because they lock the output with an invalid script path. They’re commonly used to embed small messages, hashes, or data on the blockchain, up to a limit (e.g., 80 bytes). While it’s a neat way to store metadata in Bitcoin, large-scale data embedding is discouraged, as it bloats the chain. Many node operators consider storing extraneous data as spam. Still, OP_RETURN has seen use in proof-of-existence, timestamping, and token-creation experiments.
