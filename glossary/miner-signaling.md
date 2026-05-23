---
title: "Miner Signaling"
slug: miner-signaling
draft: true
shortDefinition: "The process by which miners indicate readiness to enforce a proposed consensus rule, usually by setting a designated bit in the block header's version field."
keyTakeaways:
  - "Signaling is the standard mechanism for activating soft forks via BIP-9 versionbits"
  - "A threshold of signaling blocks (often 95%) over a difficulty period triggers lock-in"
  - "Miner signaling is necessary but not sufficient — full nodes ultimately enforce the rules"
sources: []
relatedTerms:
  - bip-9-versionbits
  - soft-fork
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - bip-148-uasf
  - bip-91
  - bip-bitcoin-improvement-proposal
sameAs:
  - "https://en.bitcoin.it/wiki/Version_bits"
liveWidget: ~
---

*Miner signaling* is how Bitcoin coordinates the activation of new consensus rules. When a [soft fork](/glossary/soft-fork) is being proposed, miners include a flag in the blocks they produce indicating they're ready to enforce the new rule. Once a threshold of those signaling blocks is reached over a difficulty period, the rule "locks in" and activation follows.

The mechanism is mostly defined by [BIP-9 (versionbits)](/glossary/bip-9-versionbits), the standard activation framework used since 2016. Variations exist for specific situations — UASF-style ([BIP-148](/glossary/bip-148-uasf)), Speedy Trial, and so on — but the core idea is the same: miners broadcast intent through their blocks.

## How it works

A soft fork proposal reserves a specific bit (0–28) in the 32-bit `nVersion` field of the block header. Miners who support the proposal flip that bit to 1 in the blocks they mine.

Activation has several phases:

- **Defined** — the proposal exists but signaling hasn't started.
- **Started** — signaling is open. Miners may flip the bit.
- **Locked-in** — the threshold (typically 95% over a 2,016-block difficulty period) has been reached. Activation is now guaranteed.
- **Active** — the new rule is enforced. Any block violating it is rejected by upgraded nodes.
- **Failed** — the timeout passed without reaching the threshold. Signaling is closed.

The exact threshold and timeout depend on the specific deployment. SegWit used 95% over a 2,016-block window. Some later proposals have used different parameters (BIP-110 (RDTS), for example, proposed 55%). The rules of each fork are defined upfront.

## What miner signaling actually means

Signaling is a *coordination mechanism*, not a vote. Miners signal *readiness to enforce*, not *approval*. A miner can signal a bit without actually running the new code — though doing so risks producing invalid blocks once the rule activates, which would lose them the block reward.

The key constraint: **full nodes — not miners — enforce Bitcoin's rules.** A signaled-and-activated soft fork only matters if economic nodes adopt the new client. Historically, contested activations have shown the limit of miner-only signaling:

- **SegWit (2017)** activated only after BIP-148 / user-activated soft fork pressure threatened to force the issue. Miners initially resisted; the threat of UASF changed the dynamic.
- **Taproot (2021)** used Speedy Trial — a 90% miner threshold with a short window — and activated cleanly because the proposal was broadly uncontroversial.

The lesson: miner signaling is the official path, but it's structured against a backdrop of node-operator power. When miners and economic nodes agree, signaling works smoothly. When they disagree, signaling reveals the disagreement rather than resolving it.

## Why it matters

A Bitcoin learner sees miner signaling references constantly — in news about upgrades, in debates about active BIPs, in mempool.space block headers showing version bits. Understanding the mechanism makes those references legible.

It also clarifies what "Bitcoin governance" actually is in practice: a multi-step coordination dance with no central decider, where miners get one structural role, node operators another, and users a third. No single group can force a change against the others.
