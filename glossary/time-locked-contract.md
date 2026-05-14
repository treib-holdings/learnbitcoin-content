---
title: "Time-Locked Contract"
slug: time-locked-contract
draft: false
shortDefinition: "A contract using CLTV (absolute time) or CSV (relative time) to restrict spending until a specific block/time threshold."
keyTakeaways:
  - "Uses nLocktime, OP_CHECKLOCKTIMEVERIFY, or OP_CHECKSEQUENCEVERIFY"
  - "Implements delayed payouts, channel security, or escrow features"
  - "Ensures no spending until the designated height/time has passed"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - mtp-median-time-past
  - nlocktime
  - nsequence
liveWidget: ~
---

A time-locked contract is any Bitcoin script that uses time as a condition for spending. Bitcoin offers four building blocks for time:

- `nLockTime` (transaction-level absolute time): the transaction is invalid before a specific block height or Unix timestamp.
- `nSequence` (input-level relative time): the input is invalid until N blocks (or N units of time) have passed since the parent output was confirmed.
- `OP_CHECKLOCKTIMEVERIFY` (CLTV, BIP 65): script-level check that enforces an absolute time before the spend is allowed.
- `OP_CHECKSEQUENCEVERIFY` (CSV, BIP 112): script-level check that enforces a relative time since the output was created.

Both script-level opcodes use Median Time Past (MTP, BIP 113) as the time reference, which makes the comparison resistant to miner timestamp manipulation.

Real-world uses are everywhere:

- Lightning channels: HTLCs use CSV to enforce a delay window before a counterparty can claim a payment, giving the other side time to broadcast a penalty if they cheat.
- Vaults: a "spend after 7 days" branch in the script lets users recover from a compromised hot key without losing funds.
- Inheritance: a fallback branch becomes spendable by a designated heir after N months without activity from the primary holder.
- DLCs (Discreet Log Contracts): timeouts on oracle attestations let counterparties recover funds if the oracle never signs.
- Atomic swaps and submarine swaps: the timeout branch lets the funder recover if the swap counterparty disappears before claiming.

Time locks are one of Bitcoin's most powerful primitives. Combined with multisig and hash-locked spending paths, they're the substrate for nearly every non-trivial on-chain or off-chain protocol.
