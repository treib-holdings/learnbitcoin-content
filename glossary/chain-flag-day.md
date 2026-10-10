---
title: "Chain Flag Day"
slug: chain-flag-day
updated: "2026-10-10"
draft: false
shortDefinition: "A chosen date or block height when nodes begin enforcing new consensus rules, often seen in user-activated forks."
keyTakeaways:
  - "Sets a deadline for enforcing consensus changes"
  - "Popular in user-activated soft fork strategies"
  - "Can unify the network or risk a chain split"
sources:
  - { label: "BIP 341 - Deployment: modified BIP 9, 90% threshold, signaling 24 April to 11 August 2021, minimum activation height 709,632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#deployment" }
  - { label: "BIP 148 - Mandatory activation of segwit deployment, by Shaolin Fry (a BIP16-like flag day soft fork: from midnight August 1, 2017, by median time past, blocks that do not signal for SegWit on bit 1 are rejected, until SegWit locks in)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "BIP 91 - Reduced threshold Segwit MASF (activates once 269 of 336 blocks, 80%, signal on bit 4; while active, blocks that do not signal for SegWit on bit 1 are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "mempool.space - block 476,784 (02:53 UTC, July 21, 2017), first block of BIP 91's locked-in period; 284 of the previous 336 blocks signaled bit 4", url: "https://mempool.space/block/000000000000000000b01b490a1c1f383e10feabefbe0afda46e185b42928ab5" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in signal bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 479,808 (12:36 UTC, August 9, 2017), first block of SegWit's locked-in period", url: "https://mempool.space/block/0000000000000000012e6060980c6475a9a8e62a1bf44b76c5d51f707d54522c" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
relatedTerms:
  - bip-148-uasf
  - chain-split
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
sameAs:
  - "https://en.wikipedia.org/wiki/Flag_day_(computing)"
  - "https://www.wikidata.org/wiki/Q5456662"
liveWidget: ~
---

A "chain flag day" is a Bitcoin upgrade activation mechanism where new consensus rules begin enforcing at a pre-announced block height or timestamp - rather than waiting for [BIP-9](/glossary/bip-9-versionbits)-style miner signaling thresholds.

The pattern:

1. **Developers announce the change** with months of lead time and a specific activation height.
2. **Node operators upgrade software** to enforce the new rules starting at the flag day.
3. **At the activation height**, nodes running new software begin rejecting blocks that violate the new rules.
4. **Non-upgraded nodes** continue accepting old-rule-conformant blocks, but if a majority of the economic network is upgraded, miners following the old rules see their blocks orphaned.

The famous example: [BIP-148 (UASF)](/glossary/bip-148-uasf) for SegWit activation in 2017. The UASF set August 1, 2017 as the flag day - nodes running BIP-148 would reject blocks not signaling for SegWit starting that date. Before then, miners adopted [BIP-91](/glossary/bip-91). From block 477,120 on July 23, 2017, about nine days before the flag day, nodes running it rejected any block that did not signal for SegWit. Every block from then until SegWit locked in on August 9 signaled, so BIP-148's rule was already met on August 1 and the split it threatened never came. SegWit activated at block 481,824 on August 24, 2017.

Flag day mechanics matter because they shift the activation power from miners (who can stall BIP-9 signaling) to nodes (who can enforce the rule unilaterally). The economic majority of nodes - exchanges, businesses, large holders, the long tail of self-custody users - is what ultimately decides what "Bitcoin" is.

The Taproot activation in 2021 used Speedy Trial instead: about three months of miner signaling at a 90 percent threshold, with no fallback flag day. Had miners not signaled, it would simply have failed. They signaled, and Taproot activated at block 709,632 in November 2021.

Flag days are powerful but risky. If they're not actually supported by the economic majority, they can fragment the network. If they are, they're the most credible activation tool in Bitcoin's governance toolkit.

See [BIP-148](/glossary/bip-148-uasf) for the historical case study and [Soft Fork](/glossary/soft-fork) for the broader activation landscape.
