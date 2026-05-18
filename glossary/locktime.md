---
title: "Locktime"
slug: locktime
draft: false
shortDefinition: "A field in a Bitcoin transaction specifying the earliest block height or timestamp at which it can be included in a block."
keyTakeaways:
  - "Acts as a do-not-confirm-before date or block height"
  - "Often used with time-based opcodes for escrow/payment channels"
  - "nLocktime set to 0 means the transaction is valid immediately"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - delayed-payment-channel
  - nlocktime
  - nsequence
  - payment-channel
  - time-locked-contract
liveWidget: ~
---

Locktime is a field in every Bitcoin [transaction](/glossary/transaction) (technically called `nLockTime`) that specifies the earliest moment the transaction can be included in a block. Until that threshold passes, [nodes](/glossary/node) reject the transaction.

The field has two interpretations depending on its value:

- **Less than 500,000,000:** interpreted as a **block height**. The transaction can only be confirmed in a block at or above that height.
- **500,000,000 or greater:** interpreted as a **Unix timestamp**. The transaction can only be confirmed once the current network time (specifically, the median time of the last 11 blocks) is at or after that timestamp.

If locktime is 0 (the default for most wallets), the transaction is valid immediately and can be confirmed in the next block.

Where this matters:

- **[Payment channels](/glossary/payment-channel) and [Lightning](/glossary/lightning-network).** Channel commitment transactions use locktime to enforce withdrawal delays during disputes.
- **Escrow and timed releases.** A transaction can be pre-signed but not broadcast (or broadcast but not mineable) until a specific future block or date.
- **[Fee sniping](/glossary/fee-sniping) prevention.** Many modern wallets set locktime to the current block height when constructing transactions. This discourages a kind of attack where a miner deliberately reorgs to capture old high-fee transactions.

For more sophisticated time-based logic, locktime works alongside the [CHECKLOCKTIMEVERIFY](/glossary/checklocktimeverify-cltv) opcode (which lets scripts check the locktime themselves), and the related [CSV](/glossary/checksequenceverify-csv) / [nSequence](/glossary/nsequence) fields, which provide *relative* (rather than absolute) timing.

See [Absolute Locktime](/glossary/absolute-locktime) for the broader concept and [nLocktime](/glossary/nlocktime) for the field-level synonym.
