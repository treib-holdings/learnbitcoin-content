---
title: "CheckLockTimeVerify (CLTV)"
slug: checklocktimeverify-cltv
draft: false
shortDefinition: "An opcode (OP_CLTV) allowing a transaction output to remain unspendable until a set block height or timestamp."
keyTakeaways:
  - "Locks outputs until a specific future block/time is reached"
  - "Useful for time-based contracts or payment channels"
  - "Helps enable advanced scripting alongside OP_CSV"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bitcoin-script
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

**OP_CHECKLOCKTIMEVERIFY** (CLTV) is the Bitcoin Script opcode that enforces [absolute locktime](/glossary/absolute-locktime) inside a script. It's the script-level companion to the transaction-level [`nLockTime`](/glossary/nlocktime) field.

The opcode's semantics: when CLTV executes, it checks that the spending transaction's `nLockTime` is at least a specific value (which CLTV reads from the stack). If that condition holds, the script continues; if not, the spending fails. So a locking script can require "to spend, the spending transaction must claim a locktime ≥ X" - effectively locking the output until that block height or timestamp.

Introduced via [BIP-65](/glossary/bip-65-opchecklocktimeverify) in December 2015, CLTV is one of the script primitives that made advanced Bitcoin constructions practical. Common uses:

- **[Payment channels](/glossary/payment-channel)** - close-out scripts include CLTV-based delays so disputes can be resolved before unilateral spending.
- **[HTLCs](/glossary/htlc-hashed-time-locked-contract)** - the time-based fallback ("if the preimage isn't revealed by block N, the sender can reclaim") uses CLTV.
- **[Atomic swaps](/glossary/atomic-swap)** - timeout refunds on cross-chain trades.
- **Vault constructions** - mandatory withdrawal delays for cold-storage security.
- **Inheritance scripts** - heir can claim funds after a long inactivity period.

CLTV was deployed by replacing the previously-disabled `OP_NOP2` opcode. This is the standard Bitcoin pattern for adding new functionality via soft fork: take a NOP that does nothing, redefine it to do something useful. Older nodes that don't recognize the new meaning just see `OP_NOP2` doing nothing - the script still succeeds for them, so the new rules are strictly additional restrictions that old nodes treat as "valid" by default.

Companion to [`OP_CHECKSEQUENCEVERIFY`](/glossary/checksequenceverify-csv) (CSV), which provides relative locktimes via [BIP-68/112](/glossary/bip-68-relative-locktime). Together they're the time-based scripting toolkit that makes Lightning and many other layer-2 designs possible.
