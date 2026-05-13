---
title: "Absolute Locktime"
slug: absolute-locktime
draft: false
shortDefinition: "A constraint that references a specific block height or timestamp, enforcing when a transaction or script can be validly executed."
keyTakeaways:
  - "Restricts spending until a certain time or block height"
  - "Implemented with nLocktime or OP_CLTV (BIP-65)"
  - "Enables escrow and time-delayed payment features"
sources: []
relatedTerms:
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

Absolute locktime means a transaction or script becomes spendable only after a specific calendar moment - either a block height or a Unix timestamp. It's the "this is mineable starting at midnight UTC on December 1" pattern.

Bitcoin implements absolute locktime two ways:

- **The transaction-level [`nLockTime`](/glossary/nlocktime) field.** Prevents the entire transaction from being mined before the threshold. Useful when you've pre-signed a transaction but want to delay its eligibility.
- **The script-level `OP_CHECKLOCKTIMEVERIFY` (CLTV) opcode**, defined in [BIP-65](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki). Lets a [Bitcoin Script](/glossary/bitcoin-script) require that the spending transaction's locktime is at least some value, baked into the locking script of the UTXO itself.

The distinction from **relative** locktime (via `nSequence` and [`OP_CHECKSEQUENCEVERIFY`](/glossary/checksequenceverify-csv) / CSV) is what "after" is anchored to:

- **Absolute:** "after block 900,000" or "after Jan 1, 2027." A wall-clock or chain-height reference.
- **Relative:** "after 144 blocks have passed since this UTXO was confirmed" or "after 1 day since confirmation." A delay measured from the input's confirmation time.

Use absolute when you have a specific date or height in mind. Use relative for delays that should kick in *after* the UTXO exists.

The combination of absolute + relative locktime is one of the building blocks underneath [payment channels](/glossary/payment-channel) and the [Lightning Network](/glossary/lightning-network). See [Locktime](/glossary/locktime) for the practical view.
