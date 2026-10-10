---
title: "BIP 91"
slug: bip-91
draft: false
updated: "2026-10-10"
shortDefinition: "A signaling coordination method during the SegWit activation phase of 2017's scaling debates."
keyTakeaways:
  - "Soft-fork coordination tool for SegWit signaling"
  - "Part of the 2017 New York Agreement"
  - "Helped finalize SegWit activation despite controversy"
sources:
  - { label: "BIP 91 - Reduced threshold Segwit MASF, by James Hilliard (activates once 269 of 336 blocks, 80%, signal on bit 4 from June 1, 2017; while active, blocks that do not signal for SegWit on bit 1 are rejected; ends when SegWit locks in)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "BIP 141 - Segregated Witness, deployment (BIP-9 bit 1, signaling from November 15, 2016)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 9 - Version bits (threshold 1,916 of 2,016 blocks, 95%; a change is locked in for one retarget period, then active)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP 148 - mandatory SegWit activation (from August 1, 2017, blocks that do not signal for SegWit are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "Bitcoin Magazine - BIP91: The SegWit Activation Kludge That Should Keep Bitcoin Whole (Aaron van Wirdum, June 16, 2017): the SegWit2x team plans to implement BIP91, designed to prevent a coin split by making SegWit2x and BIP148 compatible; it keeps SegWit2x's 80% bit-4 trigger and, if done before August 1, works with BIP148", url: "https://bitcoinmagazine.com/technical/bip91-segwit-activation-kludge-should-keep-bitcoin-whole" }
  - { label: "mempool.space - block 476,784 (02:53 UTC, July 21, 2017), first block of BIP 91's locked-in period; 284 of the previous 336 blocks signaled bit 4", url: "https://mempool.space/block/000000000000000000b01b490a1c1f383e10feabefbe0afda46e185b42928ab5" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in signal bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 479,808 (12:36 UTC, August 9, 2017), first block of SegWit's locked-in period; all 2,016 blocks of the previous period signaled bit 1", url: "https://mempool.space/block/0000000000000000012e6060980c6475a9a8e62a1bf44b76c5d51f707d54522c" }
  - { label: "Bitcoin Core 31 - chainparams.cpp (mainnet SegwitHeight 481824)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp" }
  - { label: "mempool.space - block 481,824, the first block under SegWit rules (mined 01:57 UTC, August 24, 2017)", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): SegWit had 30% support among miners in May; the 2MB increase is called off for lack of sufficient consensus", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-148-uasf
  - bitcoin-core
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

[BIP-91](https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki) is the miner-coordinated mechanism that activated [SegWit](/glossary/segwit-segregated-witness-bip-141) in August 2017, defusing what was about to be a chain-splitting confrontation with [BIP-148 (UASF)](/glossary/bip-148-uasf).

The deadlock context: miners had been able to signal for SegWit since November 15, 2016, but it needed 95% of the blocks in a 2,016-block period under [BIP-9](/glossary/bip-9-versionbits). Support stayed far short of that. By the SegWit2x organizers' own count, only 30% of miners backed SegWit in May 2017. The UASF crowd was preparing to enforce SegWit unilaterally starting August 1, 2017, which would have rejected non-signaling blocks and potentially split the chain.

BIP-91 was the compromise. Authored by James Hilliard and adopted by miners as part of the "SegWit2x" / New York Agreement effort, it lowered the activation threshold and forced rapid coordination:

1. **80% threshold.** BIP-91 locked in once 269 of 336 blocks (80%) signaled for it on a bit of its own, far below the 95% SegWit needed.
2. **Mandatory.** Once BIP-91 was active, *every* block had to signal for SegWit, or nodes enforcing BIP-91 rejected it.
3. **Quick deployment.** Signaling opened June 1, 2017. BIP-91 locked in on July 21 and went live at block 477,120 on July 23, 2017 (UTC). It stopped applying once SegWit itself locked in.

What this actually achieved:

- **SegWit signaling before the deadline.** BIP-91 went live about nine days before BIP-148's August 1 deadline. Every block from then until SegWit locked in signaled for it, which also met BIP-148's rule, so the split the UASF had threatened never came. SegWit locked in on August 9 and activated at block 481,824 on August 24, 2017.
- **It made the two plans compatible.** The SegWit2x miners kept their 80% trigger, and BIP-148's supporters saw SegWit signaling in place before August 1.
- **The "SegWit2x" hard-fork half of the agreement was abandoned** on November 8, 2017. Its organizers wrote that they had not built enough consensus for the 2MB block-size increase. The "2x" never happened.

BIP-91 is a small technical document with outsized historical importance. It's the bridge between a stalemate and a successful upgrade.

See [The Block Size War](/rabbit-hole/block-size-war) for the standoff BIP-91 defused.
