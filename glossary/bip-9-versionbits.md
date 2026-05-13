---
title: "BIP 9 (VersionBits)"
slug: bip-9-versionbits
draft: false
shortDefinition: "A signaling method allowing miners to indicate support for soft-fork proposals in block headers before reaching activation thresholds."
keyTakeaways:
  - "Uses bits in block headers for miner signaling"
  - "Triggers soft forks after passing thresholds"
  - "Helps coordinate network upgrades more smoothly"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-91
  - bip-119-ctv
  - bip-125-replace-fee
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-148-uasf
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

[BIP-9](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki) introduced **VersionBits**, the miner-signaling mechanism used to coordinate Bitcoin [soft-fork](/glossary/soft-fork) activation. The premise: encode candidate soft-fork proposals into specific bits of the [block header](/glossary/block-header)'s version field, and let miners set those bits to indicate readiness.

The mechanism:

1. A new BIP is assigned one of the version bits and a deployment window (a start time and an end time).
2. During the window, miners can set the bit in their blocks to signal support.
3. If 95% of blocks in a 2,016-block retarget period signal, the soft fork "locks in" for the next retarget period and then activates.
4. If the deployment window ends without reaching threshold, the proposal expires.

This worked cleanly for several soft forks (e.g., BIP-65 CLTV, BIP-68 CSV). It famously broke down during the [SegWit](/glossary/segwit-segregated-witness-bip-141) activation in 2017, when a significant minority of miners refused to signal despite broad user support. That deadlock led to alternative activation methods: [BIP-148 (UASF)](/glossary/bip-148-uasf), [BIP-91](/glossary/bip-91), and ultimately a successor framework called BIP-8 / "speedy trial," which was used to activate [Taproot](/glossary/taproot) in 2021 with a fallback to user-enforced activation if miner signaling failed.

The deeper lesson from the SegWit episode: **miners signal readiness, but they don't decide the rules.** When user nodes are willing to enforce a rule regardless of miner signaling, miners eventually fall in line. BIP-9 made coordination smoother for uncontroversial upgrades but didn't have a clean answer for contested ones. Modern activation methods build that lesson in.
