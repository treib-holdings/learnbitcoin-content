---
title: "Miner Signaling"
slug: miner-signaling
linkText:
  - "miner signaling"
  - "signaling threshold"
draft: false
published: "2026-05-29"
updated: "2026-10-12"
shortDefinition: "The process by which miners indicate readiness to enforce a proposed consensus rule, usually by setting a designated bit in the block header's version field."
keyTakeaways:
  - "Signaling is the standard mechanism for activating soft forks via BIP-9 versionbits"
  - "A threshold of signaling blocks (often 95%) over a difficulty period triggers lock-in"
  - "Miner signaling is necessary but not sufficient - full nodes ultimately enforce the rules"
sources:
  - { label: "BIP 9 - Version bits (threshold 1,916 of 2,016 blocks, 95%; a change is locked in for one retarget period, then active)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP-148 specification (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "BIP 91 - Reduced threshold Segwit MASF, by James Hilliard (activates once 269 of 336 blocks, 80%, signal on bit 4; while active, blocks that do not signal for SegWit on bit 1 are rejected; ends when SegWit locks in)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in signal bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 479,808 (12:36 UTC, August 9, 2017), first block of SegWit's locked-in period", url: "https://mempool.space/block/0000000000000000012e6060980c6475a9a8e62a1bf44b76c5d51f707d54522c" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): SegWit had 30% support among miners in May; the organizers say Segwit2x broke the deadlock", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "Braiins - Anniversary of the BIP148 UASF (August 1, 2020), a retrospective that celebrates it: says SegWit signaling had plateaued at about 30% and that the pressure from the UASF was enough to force miners to adopt SegWit without SegWit2x", url: "https://braiins.com/news/3-year-anniversary-bip148-uasf" }
  - { label: "BIP 341 - Taproot, deployment (version bits bit 2 with a threshold of 1,815 of 2,016 blocks, 90%, from April 24 to August 11, 2021, and a minimum activation height of 709,632)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP 110 - Reduced Data Temporary Softfork, deployment (threshold 1,109 of 2,016 blocks, 55%)", url: "https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki" }
relatedTerms:
  - bip-9-versionbits
  - soft-fork
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - bip-148-uasf
  - bip-91
  - bip-bitcoin-improvement-proposal
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki"
liveWidget: ~
---

*Miner signaling* is how Bitcoin coordinates the activation of new consensus rules. When a [soft fork](/glossary/soft-fork) is being proposed, miners include a flag in the blocks they produce indicating they're ready to enforce the new rule. Once a threshold of those signaling blocks is reached over a difficulty period, the rule "locks in" and activation follows.

The mechanism is mostly defined by [BIP-9 (versionbits)](/glossary/bip-9-versionbits), the standard activation framework used since 2016. Variations exist for specific situations - UASF-style ([BIP-148](/glossary/bip-148-uasf)), Speedy Trial, and so on - but the core idea is the same: miners broadcast intent through their blocks.

## How it works

A soft fork proposal reserves a specific bit (0-28) in the 32-bit `nVersion` field of the block header. Miners who support the proposal flip that bit to 1 in the blocks they mine.

Activation has several phases:

- **Defined** - the proposal exists but signaling hasn't started.
- **Started** - signaling is open. Miners may flip the bit.
- **Locked-in** - the threshold (typically 95% over a 2,016-block difficulty period) has been reached. Activation is now guaranteed.
- **Active** - the new rule is enforced. Any block violating it is rejected by upgraded nodes.
- **Failed** - the timeout passed without reaching the threshold. Signaling is closed.

The exact threshold and timeout depend on the specific deployment. SegWit used 95% over a 2,016-block window. Some later proposals have used different parameters (BIP-110 (RDTS), for example, proposed 55%). The rules of each fork are defined upfront.

## What miner signaling actually means

Signaling is a *coordination mechanism*, not a vote. Miners signal *readiness to enforce*, not *approval*. A miner can signal a bit without actually running the new code - though doing so risks producing invalid blocks once the rule activates, which would lose them the block reward.

The key constraint: **full nodes - not miners - enforce Bitcoin's rules.** A signaled-and-activated soft fork only matters if economic nodes adopt the new client. Historically, contested activations have shown the limit of miner-only signaling:

- **SegWit (2017)** was stuck for months at about 30% miner support against a 95% threshold. [BIP-148](/glossary/bip-148-uasf), a user-activated soft fork, set an August 1 flag day after which its nodes would reject any block that did not signal for SegWit. Miners moved first: through [BIP-91](/glossary/bip-91) they made SegWit signaling mandatory among themselves from July 23, and SegWit locked in on August 9. UASF supporters say the flag day forced the miners' hand; the SegWit2x organizers credited their own agreement.
- **Taproot (2021)** used Speedy Trial - a 90% miner threshold with a short window - and activated cleanly because the proposal was broadly uncontroversial.

The lesson: miner signaling is the official path, but it's structured against a backdrop of node-operator power. When miners and economic nodes agree, signaling works smoothly. When they disagree, signaling reveals the disagreement rather than resolving it.

## Why it matters

A Bitcoin learner sees miner signaling references constantly - in news about upgrades, in debates about active BIPs, in mempool.space block headers showing version bits. Understanding the mechanism makes those references legible.

It also clarifies what "Bitcoin governance" actually is in practice: a multi-step coordination dance with no central decider, where miners get one structural role, node operators another, and users a third. No single group can force a change against the others.

See [The Block Size War](/rabbit-hole/block-size-war) for the episode that established the limits of miner signaling.
