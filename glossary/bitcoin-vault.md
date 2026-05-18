---
title: "Bitcoin Vault"
slug: bitcoin-vault
draft: false
shortDefinition: "A security-focused wallet setup, often using special scripts or multisig to introduce a delay or multiple steps before spending."
keyTakeaways:
  - "Introduces delays or extra checks before spending"
  - "Often uses time locks or multiple sigs for added security"
  - "Minimizes damage from compromised keys or theft"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - coin-control
  - corrupted-chain-state
  - covenants
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-multisig
  - inheritance-seed-backup
  - m-n
  - security
liveWidget: ~
---

A Bitcoin vault is a self-custody construction that uses script-level constraints to force withdrawals through a multi-step, delayed process - giving the owner time to detect and cancel unauthorized withdrawals before the funds actually move.

The basic pattern:

1. **Funds are locked in a vault address** that requires a specific multi-step spending flow.
2. **To withdraw, the owner broadcasts an "unvaulting" transaction** that doesn't immediately send funds out - it just starts a [CSV-locked](/glossary/checksequenceverify-csv) delay window (typically hours to days).
3. **During the delay window**, the owner monitors. If the unvaulting was legitimate, it completes after the delay. If it was an attacker who somehow obtained the spending key, the owner uses an emergency recovery key to redirect the funds (typically to cold storage or a different vault).
4. **At the end of the delay**, if no recovery was triggered, the funds go to the specified destination.

What this buys: protection against catastrophic key compromise. Even if an attacker gets your hot signing key, they can't just immediately drain the wallet - they have to broadcast an unvaulting transaction that's visible on-chain, and you have time to respond with the recovery key.

Vault constructions in 2026:

- **Multisig-based vaults** are the most practical today. Setups like 2-of-3 with one key in cold storage and a CSV delay on the hot-side flow approximate vault behavior with existing Bitcoin script.
- **Native vault opcodes** like OP_VAULT (a [covenant](/glossary/covenants) proposal by James O'Beirne) would make vaults much cleaner to construct, but no covenant opcode has activated yet.
- **Commercial offerings** like Casa, Unchained, and others offer vault-like products that combine on-chain script delays with custodial recovery services.

Vaults are most appropriate for **large, infrequently-spent holdings** - a serious savings stack rather than daily spending money. For day-to-day Bitcoin use, the operational complexity isn't worth it. For long-term cold storage, the catastrophic-failure protection is meaningful.

See [Hierarchical Multisig](/glossary/hierarchical-multisig) for the multisig patterns vaults often build on and [Covenants](/glossary/covenants) for the proposed opcodes that would make vaults more powerful.
