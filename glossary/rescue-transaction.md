---
title: "Rescue Transaction"
slug: rescue-transaction
draft: false
shortDefinition: "A pre-signed or fallback transaction prepared to secure funds if keys are compromised or LN channels fail."
keyTakeaways:
  - "Acts as a contingency measure to preserve access to funds"
  - "Typically pre-signed with certain conditions or time locks"
  - "Essential for LN forced closures or emergency multisig retrieval"
sources: []
relatedTerms: []
liveWidget: ~
---

A rescue transaction is a pre-signed Bitcoin transaction held in reserve for emergency recovery scenarios. The signing happens during a calm setup phase; the broadcasting happens only if something goes wrong.

Common patterns:

- **Vault recovery transactions.** In a vault setup (hot key + cold key + timelock-protected withdrawal path), the user pre-signs the "cold key clawback" transaction during setup. If the hot key is ever compromised and an attacker tries to spend, the rescue transaction (already signed, just needs broadcast) sweeps funds to a safe address before the attacker's clawback window expires.
- **Lightning channel commitments.** Every Lightning channel commitment is, in effect, a pre-signed rescue transaction. If the channel partner disappears, you broadcast your most recent commitment to recover your funds on-chain (with a CSV-locked window).
- **Multisig emergency recovery.** A 2-of-3 multisig with a pre-signed transaction for the 3 cosigners' agreed worst-case scenario: if cosigner A is unreachable, B and C have a pre-signed tx that moves funds to a fresh setup excluding A.
- **Inheritance plans.** Pre-signed transactions where the heir-recovery path includes a transaction that can be broadcast after a timelock to claim funds.

What makes rescue transactions powerful:

- **No signing needed at the worst moment.** When something goes wrong, the user (or heir) may be panicked, under coercion, or unavailable. Pre-signed transactions don't require lucid decision-making in a crisis.
- **Cosigners may be offline.** A pre-signed multisig recovery doesn't require coordinating with cosigners who might be unreachable.
- **Time-locked enforcement.** Some rescue transactions use CSV/CLTV so they only become valid after a specified delay, giving the primary user time to abort the rescue if it was triggered by mistake.

Storage and security:

- **Where you store the rescue transaction matters.** The signed transaction is exactly as sensitive as a private key for that destination. Anyone who finds it can broadcast it.
- **Fee considerations.** Pre-signed transactions have a fixed fee, baked in at signing time. If fee rates spike before broadcast, the transaction may be too low-fee to confirm. Some designs pre-sign multiple versions at different fee rates.
- **State drift.** Multi-input transactions might reference UTXOs that have since been spent. Periodic re-signing keeps the rescue valid.
- **Operational discipline.** Test the rescue transaction at setup. A pre-signed transaction that turns out to be invalid is worse than no rescue plan.

Real production examples:

- **Liana** (Wizardsardine's wallet): primary use case is exactly this pattern, with a recovery key that becomes spendable after a configurable timelock.
- **Casa, Unchained, Nunchuk multisig services**: typically maintain pre-signed recovery transactions as part of customer setup.
- **DIY vault implementations**: Sparrow + ColdCard + Liana-style scripts can construct any of these designs manually.

Rescue transactions are one of the most underrated tools in Bitcoin self-custody. They turn theoretical "what if X" scenarios into "here's the file we broadcast if X happens" reality. The upfront work is real; the recovery payoff is enormous when needed.
