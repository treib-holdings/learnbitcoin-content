---
title: "BIP 9 (VersionBits)"
slug: bip-9-versionbits
updated: "2026-10-09"
draft: false
shortDefinition: "A signaling method allowing miners to indicate support for soft-fork proposals in block headers before reaching activation thresholds."
keyTakeaways:
  - "Uses bits in block headers for miner signaling"
  - "Triggers soft forks after passing thresholds"
  - "Helps coordinate network upgrades more smoothly"
sources:
  - { label: "BIP 9 - deployment assignments (csv, from May 2016, was the first)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009/assignments.mediawiki" }
  - { label: "BIP 65 - deployed with the older IsSuperMajority switchover, not BIP 9", url: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" }
  - { label: "BIP 341 - Deployment: modified BIP 9, 90% threshold, signaling 24 April to 11 August 2021, minimum activation height 709,632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#deployment" }
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

This worked cleanly for its first deployment, the CSV soft fork of 2016 ([BIP-68](/glossary/bip-68-relative-locktime), BIP-112 and BIP-113). It famously broke down during the [SegWit](/glossary/segwit-segregated-witness-bip-141) activation in 2017, when a significant minority of miners refused to signal despite broad user support. That deadlock led to alternative activation methods: [BIP-148 (UASF)](/glossary/bip-148-uasf), [BIP-91](/glossary/bip-91), and later the BIP-8 proposal. Taproot in 2021 used neither BIP-8 nor a flag day. It used Speedy Trial, a modified BIP-9 deployment with a 90 percent threshold, a short signaling window and a minimum activation height, which would simply have failed if miners had not signaled.

The deeper lesson from the SegWit episode: **miners signal readiness, but they don't decide the rules.** When user nodes are willing to enforce a rule regardless of miner signaling, miners eventually fall in line. BIP-9 made coordination smoother for uncontroversial upgrades but didn't have a clean answer for contested ones. Modern activation methods build that lesson in.

See [The BIP Process](/rabbit-hole/bip-process) for how version bits fit the wider upgrade machinery.
