---
title: "nSequence"
slug: nsequence
draft: false
shortDefinition: "Originally for partial transaction updates, repurposed by BIP 68 to enforce relative locktimes in OP_CSV scripts."
keyTakeaways:
  - "Transformed from a partial replace mechanism to a relative locktime indicator"
  - "BIP 68 + OP_CSV enable advanced channel logic using nSequence"
  - "Crucial for second-layer solutions requiring time-based outputs"
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
  - nlocktime
  - time-locked-contract
  - transaction
liveWidget: ~
---

`nSequence` is a 32-bit field per [transaction input](/glossary/input-transaction-input) in Bitcoin. Originally intended as a partial-replacement mechanism in Bitcoin's earliest design, it has since been repurposed by [BIP-68](/glossary/bip-68-relative-locktime) (and signaling for [BIP-125 RBF](/glossary/replace-fee-rbf)) to encode:

- **Relative locktimes.** Lower 16 bits encode a block-count or time-based delay since the input's UTXO was confirmed.
- **Type flag.** Bit 22 chooses between block-based and time-based interpretation.
- **Disable flag.** Bit 31, when set, disables relative-locktime enforcement for that input.
- **RBF signaling.** Any `nSequence` value less than `0xfffffffe` signals BIP-125 opt-in [RBF](/glossary/replace-fee-rbf).

The current default value is `0xfffffffd` (BIP-125 RBF signaling enabled) or `0xffffffff` (no relative locktime, no RBF signaling), depending on the wallet.

The semantics matter for a few cases users actually encounter:

- **A wallet that supports RBF** sets `nSequence` to `0xfffffffd` so the transaction can be replaced via [BIP-125](/glossary/replace-fee-rbf).
- **A [Lightning](/glossary/lightning-network) commitment transaction** uses specific `nSequence` values to encode the channel-close delay window enforced via [OP_CHECKSEQUENCEVERIFY](/glossary/checksequenceverify-csv).
- **A scripted contract with relative locktime** sets `nSequence` to the delay value and pairs the input with a CSV check in the locking script.

`nSequence` is one of those Bitcoin protocol details that most users will never encounter directly, but that's quietly load-bearing for Lightning, vaults, and most advanced multi-party constructions. The history of repurposing it from "partial replacement" to "relative locktime + RBF signaling" is a small example of how Bitcoin's protocol pragmatically reuses field semantics over time.

See [BIP-68](/glossary/bip-68-relative-locktime) for the relative-locktime semantics and [Locktime](/glossary/locktime) for the broader time-based scripting framework.
