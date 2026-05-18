---
title: "Clawback Mechanism"
slug: clawback-mechanism
draft: false
shortDefinition: "A script or contract feature enabling partial refunds or fund reclamation if certain conditions aren't met."
keyTakeaways:
  - "Enables refunds or reversals under predefined conditions"
  - "Often uses time locks or multi-sig scripts"
  - "Provides extra security but increases scripting complexity"
sources: []
relatedTerms:
  - coin-control
  - coin-freeze
  - colored-coins
  - covenants
  - escrow
  - escrowed-lightning-channel
  - quorum-signatures
liveWidget: ~
---

A clawback mechanism is any Bitcoin script construction that lets one party reclaim funds after a timeout or condition failure. It's a fundamental building block for vaults, escrow, and recovery protocols.

The mechanics rely on Bitcoin's time-lock opcodes:

- **OP_CHECKLOCKTIMEVERIFY (CLTV)**: spend allowed only after an absolute block height or timestamp.
- **OP_CHECKSEQUENCEVERIFY (CSV)**: spend allowed only after N blocks have passed since the parent output was confirmed.

The classic clawback pattern:

```
IF
  <recipient_pubkey> OP_CHECKSIG          # recipient can spend immediately if they sign
ELSE
  <timeout_blocks> OP_CSV OP_DROP         # after the timeout...
  <sender_pubkey> OP_CHECKSIG             # sender can reclaim
ENDIF
```

The recipient has the entire timeout window to sign and claim. If they don't, the sender's clawback path becomes spendable.

Real-world uses:

- **Escrow.** Buyer commits to a payment in escrow; if the seller doesn't deliver within N days, the buyer claws back the funds.
- **Vaults.** Hot key spends instantly; cold key spends instantly *and* can override a pending hot-key spend within a timelock window if hot-key compromise is detected.
- **Lightning HTLCs.** Each HTLC has a clawback path so the funding party can reclaim if the preimage is never revealed before timeout.
- **Inheritance.** Heir's spending path becomes valid after N months of inactivity.
- **Cross-chain swap timeouts.** Either party can reclaim if the other doesn't complete the swap within the window.

Limitations:

- **Forecasting the timeout** is awkward in absolute-time mode if mempool conditions vary. Most clawback designs use CSV (relative time) for predictability.
- **Storage of the clawback transaction** matters: a pre-signed clawback transaction must be safely stored and accessible at the right moment.
- **Soft-fork upgrades** like [BIP 119 CTV](/glossary/bip-119-ctv) or other covenant proposals would simplify clawback patterns further; today's designs work but require more careful script engineering.

Clawback is one of the load-bearing primitives that makes Bitcoin contracts useful beyond simple transfers. Almost every interesting Bitcoin protocol (Lightning, vaults, swaps) builds on clawback in some form.
