---
title: "BIP 68 (Relative Locktime)"
slug: bip-68-relative-locktime
draft: false
shortDefinition: "Enables transactions to define time locks based on the age of inputs, used alongside OP_CHECKSEQUENCEVERIFY."
keyTakeaways:
  - "Locks funds based on how long inputs have aged"
  - "Pairs with BIP 112's OP_CHECKSEQUENCEVERIFY"
  - "Essential for sophisticated layer-2 contract logic"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-bitcoin-improvement-proposal
  - bip-65-opchecklocktimeverify
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

[BIP-68](https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki) (together with BIPs 112 and 113) introduced **relative locktimes** to Bitcoin. Activated as a [soft fork](/glossary/soft-fork) in July 2016, it lets transactions delay spending based on the *age* of the inputs they consume, rather than an absolute block height or wall-clock time.

The contrast with [absolute locktime](/glossary/absolute-locktime) ([BIP-65](/glossary/bip-65-opchecklocktimeverify)):

- **Absolute:** "this output can be spent after block 900,000" or "after Jan 1 2027." A specific moment in time or chain history.
- **Relative:** "this output can be spent 144 blocks (~1 day) after it was confirmed" or "30 days after being included on-chain." A duration measured from input maturity.

BIP-68 reinterpreted the existing `nSequence` field in transaction inputs to encode this. Combined with the paired [`OP_CHECKSEQUENCEVERIFY`](/glossary/checksequenceverify-csv) (CSV) opcode (defined in BIP-112), scripts can enforce that a spending transaction must wait at least N blocks or seconds after the spent input was confirmed.

Where relative locktime gets used:

- **[Lightning](/glossary/lightning-network) channels.** The revocation-key punishment mechanism uses CSV: a unilateral close has a delay before the closing party can spend their share, giving the counterparty time to challenge with a revocation if it was a cheat attempt.
- **Vault constructions.** A user-controlled UTXO can be designed so that withdrawal requires a delay window, during which an alarm script could redirect the funds if compromised.
- **Eltoo (proposed).** A simpler Lightning channel state model that depends on relative locktimes for its symmetric design.

Together, BIP-65 (CLTV / absolute) and BIP-68/112 (CSV / relative) form the time-based scripting toolkit Bitcoin's layer-2 ecosystem rests on. See [Locktime](/glossary/locktime) for the transaction-field view.
