---
title: "BIP 9 (VersionBits)"
slug: bip-9-versionbits
updated: "2026-10-10"
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
  - { label: "BIP 9 - Version bits (threshold 1,916 of 2,016 blocks, 95%; a change is locked in for one retarget period, then active)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP 141 - Segregated Witness, deployment (BIP-9 bit 1, signaling from November 15, 2016)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Magazine - BIP91: The SegWit Activation Kludge That Should Keep Bitcoin Whole (Aaron van Wirdum, June 16, 2017): SegWit needs 95 percent of blocks to signal bit 1, and so far only some 30 percent of hash power is signaling", url: "https://bitcoinmagazine.com/technical/bip91-segwit-activation-kludge-should-keep-bitcoin-whole" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): SegWit had only 30% support among miners in May 2017; the organizers say Segwit2x broke the deadlock", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "BIP 148 - Mandatory activation of segwit deployment (from August 1, 2017, blocks that do not signal for SegWit are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "BIP 91 - Reduced threshold Segwit MASF (activates the existing SegWit deployment with less than 95% of hash power by rejecting blocks that do not signal for it)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "BIP 8 - Version bits with lock-in by height, by Shaolin Fry and Luke Dashjr (assigned February 1, 2017): an alternative to BIP 9 whose deployments can be set to require signaling in their final period", url: "https://github.com/bitcoin/bips/blob/master/bip-0008.mediawiki" }
  - { label: "Braiins - Anniversary of the BIP148 UASF (August 1, 2020), a retrospective that celebrates it: says the UASF put Bitcoin's future in the hands of users, not miners, and that miners are not paid to decide the rules", url: "https://braiins.com/blog/3-year-anniversary-bip148-uasf" }
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

This worked cleanly for its first deployment, the CSV soft fork of 2016 ([BIP-68](/glossary/bip-68-relative-locktime), BIP-112 and BIP-113). It famously broke down during the [SegWit](/glossary/segwit-segregated-witness-bip-141) activation in 2017. Signaling opened on November 15, 2016, but in May and early June 2017 only about 30 percent of blocks signaled for SegWit, far short of the 95 percent it needed. That deadlock led to alternative activation methods: the [BIP-8](/glossary/bip-8) proposal of February 2017, [BIP-148 (UASF)](/glossary/bip-148-uasf) and [BIP-91](/glossary/bip-91). Taproot in 2021 used neither BIP-8 nor a flag day. It used Speedy Trial, a modified BIP-9 deployment with a 90 percent threshold, a short signaling window and a minimum activation height, which would simply have failed if miners had not signaled.

BIP-148's supporters took a lesson from the SegWit fight: miners signal readiness, but they don't decide the rules. The SegWit2x organizers gave the credit to their own deal instead. Either way, BIP-9 worked smoothly for upgrades nobody opposed and had no clean answer for contested ones. BIP-8 adds an option to make signaling mandatory at the end of a deployment. Speedy Trial took a different path for Taproot: miners could still have stalled it, but only for about three months.

See [The BIP Process](/rabbit-hole/bip-process) for how version bits fit the wider upgrade machinery.
