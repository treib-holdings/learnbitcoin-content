---
title: "Coin Freeze"
slug: coin-freeze
draft: false
shortDefinition: "A script-based technique that prevents UTXOs from being spent until a specified future date or block height."
keyTakeaways:
  - "Relies on locktime opcodes (CLTV/CSV)"
  - "Ideal for time-delayed payments or savings"
  - "Temporarily restricts on-chain liquidity"
sources: []
relatedTerms:
  - burn-address
  - clawback-mechanism
  - coin-control
  - colored-coins
  - covenants
  - escrow
liveWidget: ~
---

A coin freeze is any Bitcoin script that prevents spending until a specific time or block height. The freeze is enforced by the protocol; no third party can release the funds early.

The two primitives:

- **OP_CHECKLOCKTIMEVERIFY (CLTV)**: spend allowed only after an absolute reference - a block height or a UNIX timestamp. Useful for "spendable on June 1, 2030."
- **OP_CHECKSEQUENCEVERIFY (CSV)**: spend allowed only after a relative interval - N blocks (or N units of time) since the parent transaction was confirmed. Useful for "spendable 1 year after this output was created."

Common applications:

- **Self-imposed savings discipline.** Lock coins for 1-5 years to prevent yourself from spending them impulsively during volatility.
- **Inheritance setups.** A spending path that becomes valid after 6 months without primary-key activity, designed to give heirs access if the primary holder dies or loses keys.
- **[Vaults](/glossary/bitcoin-vault).** A clawback path that lets a cold key override a hot-key spend within a CSV window.
- **Trustless escrow.** Buyer and seller agree on a deal; coins are released after a delay or by mutual consent before the delay expires.
- **Lightning channels.** Every channel commitment uses CSV-locked outputs as part of the [delayed justice mechanism](/glossary/delayed-justice-transaction).

What a coin freeze isn't:

- **Reversible by anyone.** Once locked in script, no one - including the original sender - can unfreeze the coins early. The freeze is enforced by every full node.
- **Confidential.** The lock script is on-chain. Anyone who can see the transaction can see when the funds become spendable.
- **A perfect savings tool.** A frozen UTXO is illiquid; the holder gives up the option to spend during the freeze window. That's the point, but it's a real cost.

Coin freezes are one of Bitcoin's underused primitives. Far more powerful than common wallet UX exposes, but increasingly accessible through tools like Sparrow's time-lock scripts, Liana's recovery-window wallets, and various vault implementations.
