---
title: "OP_RETURN"
slug: opreturn
draft: false
shortDefinition: "A script opcode allowing arbitrary data in a transaction output, effectively making the output unspendable."
keyTakeaways:
  - "Enables data embedding without making coins spendable"
  - "Typically capped at ~80 bytes for chain resource reasons"
  - "Used for notary, proof-of-existence, or limited 'colored coins' data"
sources: []
relatedTerms:
  - bitcoin-script
  - op-code-operation-code
  - opreturn-based-tokens
  - script
  - scriptless-scripts
liveWidget: ~
---

**OP_RETURN** is a [Bitcoin Script](/glossary/bitcoin-script) opcode that makes its output deliberately unspendable. The "spending" path is a guaranteed-fail, so any output starting with OP_RETURN is removed from the UTXO set immediately - giving you a way to embed arbitrary data into a Bitcoin transaction without bloating the unspent-output database.

The basic structure: `OP_RETURN <data>` where `<data>` is up to 80 bytes (the standardness limit). The output's value is typically zero or near-zero satoshis (creating a small dust output). The data sits in the chain history forever but doesn't burden the UTXO set.

What OP_RETURN is used for:

- **Proof-of-existence / timestamping.** Hash a document, embed the hash, prove later that the document existed before that block height. Used by OpenTimestamps and similar services.
- **Cross-chain commitments.** Sidechains like [Liquid](/glossary/liquid-network) and protocols like Counterparty embed cross-system metadata in OP_RETURN outputs.
- **Layer-2 anchoring.** Some second-layer protocols anchor state commitments via OP_RETURN.
- **[Ordinals / inscriptions](/glossary/opreturn-based-tokens) (sort of).** Inscriptions technically use Taproot witness scripts rather than OP_RETURN per se, but the data-embedding question is structurally the same and OP_RETURN gets caught up in the debate.

The community debate around OP_RETURN:

- **Pro-data view:** the chain is for whatever its users want to pay fees for. Embedding data has legitimate uses (timestamping, sidechain commitments, etc.) and the fee market handles abuse.
- **Anti-data view:** Bitcoin's primary purpose is monetary; non-monetary data uses inflate fees for everyone, push out legitimate financial transactions, and shouldn't be relayed or mined. Some nodes ([Bitcoin Knots](/glossary/bitcoin-knots)) deliberately filter such transactions from their mempools.

Both positions are defensible; the live argument in 2024-2026 is *which* node relay policy is appropriate. The protocol itself accepts OP_RETURN; node-level policy is where the contest happens.

See [OP_RETURN-based Tokens](/glossary/opreturn-based-tokens) for the early token-experiment use case.
