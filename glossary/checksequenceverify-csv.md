---
title: "CheckSequenceVerify (CSV)"
slug: checksequenceverify-csv
draft: false
shortDefinition: "An opcode for relative locktime, letting a transaction output be spendable only after a certain number of blocks or time from confirmation."
keyTakeaways:
  - "Implements relative time locks at the UTXO level"
  - "Used for payment channels and advanced contract logic"
  - "Requires waiting a specified block count or time after confirmation"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checktemplateverify-ctv
  - covenants
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

**OP_CHECKSEQUENCEVERIFY** (CSV) is the Bitcoin Script opcode that enforces [relative locktimes](/glossary/bip-68-relative-locktime) inside a script. It's the relative-timing companion to [`OP_CHECKLOCKTIMEVERIFY`](/glossary/checklocktimeverify-cltv)'s absolute-timing.

The distinction matters:

- **CLTV (absolute):** "this output can be spent after block 900,000" - a specific moment.
- **CSV (relative):** "this output can be spent 144 blocks (~1 day) after this UTXO was confirmed" - a duration measured from when the UTXO entered the chain.

Introduced via [BIP-112](https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki) (the opcode) and [BIP-68](/glossary/bip-68-relative-locktime) (the underlying `nSequence` semantics) and [BIP-113](/glossary/bip-113) (median-time-past for time-based delays), CSV activated as a [soft fork](/glossary/soft-fork) in July 2016.

Where CSV is load-bearing:

- **[Lightning](/glossary/lightning-network) channel close-outs.** When a party force-closes a channel, their share of the funds is subject to a CSV delay (typically 144-1008 blocks). During this window, the counterparty can publish a revocation if the closing party cheated by broadcasting an old state.
- **Vault constructions.** Withdrawals can be forced through a multi-step delay, during which an alarm script can redirect funds if the withdrawal wasn't authorized.
- **Eltoo (proposed).** Would use CSV for its simplified state-replacement model.
- **HTLC timeouts.** Some HTLC variants use CSV-based timeouts that anchor to the HTLC's broadcast rather than to a wall-clock time.

CSV is paired with CLTV the way relative time is paired with absolute time. Together they make Bitcoin's layer-2 ecosystem possible. See [BIP-68](/glossary/bip-68-relative-locktime) for the underlying `nSequence` semantics and [CLTV](/glossary/checklocktimeverify-cltv) for the absolute-time counterpart.
