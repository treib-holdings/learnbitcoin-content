---
title: "Deployment Threshold (Soft Fork)"
slug: deployment-threshold-soft-fork
updated: "2026-10-10"
draft: false
shortDefinition: "A required percentage of blocks signaling support for a soft fork before it locks in and activates (e.g., 95%)."
keyTakeaways:
  - "Sets a block signaling target for soft-fork readiness"
  - "Ensures upgrades only activate with high miner support"
  - "Sometimes criticized for giving miners disproportionate influence"
sources:
  - { label: "BIP 341 - Deployment: modified BIP 9, 90% threshold, signaling 24 April to 11 August 2021, minimum activation height 709,632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#deployment" }
  - { label: "BIP 9 - Version bits (threshold 1,916 of 2,016 blocks, 95%, in a 2,016-block retarget period)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP 141 - Segregated Witness, deployment (BIP-9 bit 1, signaling from November 15, 2016)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Magazine - BIP91: The SegWit Activation Kludge That Should Keep Bitcoin Whole (Aaron van Wirdum, June 16, 2017): only some 30 percent of hash power signals for SegWit; SegWit2x pairs SegWit with a hard fork to 2 MB; BIP91 uses its own 80% trigger on bit 4 to activate the existing SegWit deployment", url: "https://bitcoinmagazine.com/technical/bip91-segwit-activation-kludge-should-keep-bitcoin-whole" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): SegWit had only 30% support among miners in May 2017", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "Bitcoin Magazine - Breaking Down Bitcoin's AsicBoost Scandal (Aaron van Wirdum, April 12, 2017): covert AsicBoost is largely incompatible with SegWit; Bitmain says its chips support AsicBoost but denies using it on the main chain", url: "https://bitcoinmagazine.com/technical/breaking-down-bitcoins-asicboost-scandal" }
  - { label: "BIP 8 - Version bits with lock-in by height: BIP 9's near-unanimous threshold can mean a veto by a small minority of non-signaling hash rate; its lockinontimeout option requires blocks to signal in a deployment's final period", url: "https://github.com/bitcoin/bips/blob/master/bip-0008.mediawiki" }
  - { label: "BIP 148 - Mandatory activation of segwit deployment (from midnight August 1, 2017, blocks that do not signal for SegWit are rejected, until SegWit locks in)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "BIP 91 - Reduced threshold Segwit MASF (its own deployment, segsignal, on bit 4: activates once 269 of 336 blocks, 80%, signal; while active, blocks that do not signal for SegWit on bit 1 are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in signal bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 479,808 (12:36 UTC, August 9, 2017), first block of SegWit's locked-in period; all 2,016 blocks of the previous period signaled bit 1", url: "https://mempool.space/block/0000000000000000012e6060980c6475a9a8e62a1bf44b76c5d51f707d54522c" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
relatedTerms:
  - bip-9-versionbits
  - bip-91
  - bip-119-ctv
  - bip-148-uasf
  - bip-159
  - chain-flag-day
  - consensus-parameter
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

The deployment threshold is the percentage of recent blocks that must signal support for a proposed soft fork before it activates. Under BIP 9 (versionbits), the standard threshold was 95% of blocks in a 2016-block retarget period setting a designated version bit.

This worked fine for technical upgrades the mining community was uniformly behind. It worked badly for upgrades miners had economic or political reasons to slow down.

The SegWit deployment (2016-2017) is the canonical case study. Signaling opened on November 15, 2016, but in May and early June 2017 only about 30% of blocks signaled for SegWit. Many miners wanted a block size increase as part of any deal. Some suspected a commercial motive as well: a covert way of using the mining optimization ASICBoost would mostly stop working under SegWit. Bitmain, whose chips supported ASICBoost, said it had not used it on the main chain. A 95% threshold lets a small minority of miners block an upgrade; in SegWit's case, most miners were not signaling.

The resolution came from two directions. BIP 148, a User-Activated Soft Fork (UASF), set a flag day: from August 1, 2017, its nodes would reject any block that did not signal for SegWit. BIP 91 did not lower SegWit's 95% threshold. It ran a separate deployment on bit 4 with its own 80% threshold (269 of 336 blocks), and once it was active, from block 477,120 on July 23, 2017, nodes running it rejected any block that did not signal for SegWit. From then until SegWit locked in, every block signaled for it. SegWit met its own 95% threshold with 2,016 of 2,016 blocks, locked in on August 9 and activated at block 481,824 on August 24, 2017. BIP 148's rule was already met by the time it took effect, so it was never tested against miners who refused to signal.

Lesson learned: pure miner-threshold activation makes upgrades hostage to mining politics. Taproot's activation used Speedy Trial: BIP 9 signaling at a 90 percent threshold over about three months, plus a minimum activation height so node operators had time to upgrade. It could still fail if miners did not signal, but the short window meant a failure would be quick rather than a deadlock that dragged on for a year.

The deployment threshold remains a coordination signal, and under Speedy Trial it still decided whether Taproot would activate. [BIP-8](/glossary/bip-8), by contrast, can be set to end a deployment with mandatory signaling.
