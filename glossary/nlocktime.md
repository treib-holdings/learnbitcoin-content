---
title: "nLocktime"
slug: nlocktime
draft: false
shortDefinition: "A field specifying the earliest block height or timestamp at which a transaction can be confirmed."
keyTakeaways:
  - "Prevents confirmation before a certain block/time"
  - "Used by advanced scripting for timed releases or escrow"
  - "Zero or a past value means it's immediately valid"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - delayed-justice-transaction
  - locktime
  - mtp-median-time-past
  - nsequence
  - time-locked-contract
  - transaction
liveWidget: ~
---

`nLockTime` is the protocol-level name for Bitcoin's [locktime](/glossary/locktime) field - a 32-bit value in every transaction specifying the earliest block height or Unix timestamp at which the transaction may be included in a block.

The `n` prefix is a holdover from Satoshi's original C++ code, where integer fields conventionally started with `n`. You'll see it in source code, BIPs, and protocol docs; in conversation, people just say "locktime."

Value semantics:

- **0** - immediate validity (default).
- **1 to 499,999,999** - interpreted as a block height.
- **500,000,000 and above** - interpreted as a Unix timestamp (seconds since the epoch).

`nLockTime` is paired with the per-input `nSequence` field. If every input's `nSequence` is `0xffffffff`, `nLockTime` is *ignored* - the transaction is treated as having no time lock regardless of the field's value. Setting any `nSequence` below the maximum makes `nLockTime` enforceable.

This little quirk is the foundation for [Replace-by-Fee](/glossary/replace-fee-rbf), which uses `nSequence` to signal "this transaction can be replaced." It's also how older relative-locktime workflows handled things before [CHECKSEQUENCEVERIFY](/glossary/checksequenceverify-csv) was added.

See [Locktime](/glossary/locktime) for the practical view and [Absolute Locktime](/glossary/absolute-locktime) for the contrast with relative-locktime via `nSequence`.
