---
title: "BIP 148 (UASF)"
slug: bip-148-uasf
draft: false
updated: "2026-10-10"
shortDefinition: "A user-activated soft fork pushing SegWit by rejecting blocks not signaling for SegWit after a deadline."
keyTakeaways:
  - "From August 1, 2017, nodes running it would reject blocks that did not signal for SegWit"
  - "Miners made SegWit signaling mandatory first, through BIP-91, so its rule was already met when it took effect"
  - "Supporters see it as proof that nodes, not miners, have the final say on the rules"
sources:
  - { label: "BIP 148 - Mandatory activation of segwit deployment, by Shaolin Fry (assigned March 12, 2017): from midnight August 1, 2017, by median time past, blocks that do not signal for SegWit on bit 1 are rejected, until SegWit locks in; it hopes miners will activate SegWit before then", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "BIP 141 - Segregated Witness, deployment (BIP-9 bit 1, signaling from November 15, 2016)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 9 - Version bits (threshold 1,916 of 2,016 blocks, 95%)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "Bitcoin Magazine - BIP91: The SegWit Activation Kludge That Should Keep Bitcoin Whole (Aaron van Wirdum, June 16, 2017): only some 30 percent of hash power signals for SegWit; SegWit2x pairs SegWit with a hard fork to 2 MB; if BIP148 lacks majority hash power support, the chain could split in two", url: "https://bitcoinmagazine.com/technical/bip91-segwit-activation-kludge-should-keep-bitcoin-whole" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): SegWit had 30% support among miners in May; the organizers say Segwit2x broke the deadlock", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "Bitcoin Magazine - Breaking Down Bitcoin's AsicBoost Scandal (Aaron van Wirdum, April 12, 2017): covert AsicBoost is largely incompatible with SegWit; Bitmain says its chips support AsicBoost but denies using it on the main chain", url: "https://bitcoinmagazine.com/technical/breaking-down-bitcoins-asicboost-scandal" }
  - { label: "BIP 91 - Reduced threshold Segwit MASF (activates once 269 of 336 blocks, 80%, signal on bit 4; while active, blocks that do not signal for SegWit on bit 1 are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "mempool.space - block 476,784 (02:53 UTC, July 21, 2017), first block of BIP 91's locked-in period; 284 of the previous 336 blocks signaled bit 4", url: "https://mempool.space/block/000000000000000000b01b490a1c1f383e10feabefbe0afda46e185b42928ab5" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in signal bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 479,808 (12:36 UTC, August 9, 2017), first block of SegWit's locked-in period", url: "https://mempool.space/block/0000000000000000012e6060980c6475a9a8e62a1bf44b76c5d51f707d54522c" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
  - { label: "Bitcoin Cash UAHF technical specification (a block size hard fork; default activation 12:20 UTC, August 1, 2017; the fork block must be over 1 MB)", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "BIP 8 - Version bits with lock-in by height, by Shaolin Fry and Luke Dashjr: all consensus rules are ultimately enforced by full nodes", url: "https://github.com/bitcoin/bips/blob/master/bip-0008.mediawiki" }
  - { label: "Braiins - Anniversary of the BIP148 UASF (August 1, 2020), a retrospective that celebrates it: says the UASF put Bitcoin's future in the hands of users, not miners, and that August 1, 2017 proved the rules can be decided by the community; says SegWit signaling had plateaued at about 30%", url: "https://braiins.com/blog/3-year-anniversary-bip148-uasf" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bitcoin-core
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0148"
  - "https://en.bitcoin.it/wiki/Softfork"
liveWidget: ~
---

[BIP-148](https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki) is the user-activated soft fork (UASF) proposal that set a hard deadline in the 2017 standoff over activating [SegWit](/glossary/segwit-segregated-witness-bip-141). It's one of the most important episodes in Bitcoin's governance history.

The setup: miners had been able to signal for SegWit under [BIP-9](/glossary/bip-9-versionbits) since November 15, 2016, but it needed 95% of the blocks in a 2,016-block period. In May and early June 2017, only about 30% of blocks signaled for it, and the deadlock lasted about eight months. Many miners wanted a block size increase as part of any deal, which the SegWit2x agreement of May 2017 offered. Some suspected another motive: a covert way of using the mining optimization [AsicBoost](/glossary/asicboost), which Bitmain's chips supported, would mostly stop working under SegWit. Bitmain said it had not used AsicBoost on the main chain.

BIP-148's proposal, authored by Shaolinfry: starting August 1, 2017, BIP-148-compliant nodes would *reject* any block that didn't signal for SegWit. The BIP's stated hope was that miners would activate SegWit before that date. If they didn't, and most hash power stayed off BIP-148, the chain could split in two.

What actually happened:

- **Miners moved first.** They adopted [BIP-91](/glossary/bip-91), which locked in on July 21, 2017 (UTC). From block 477,120 on July 23, nodes running it rejected any block that did not signal for SegWit, and every block from then until SegWit locked in signaled.
- **BIP-148 was never put to the test.** Its rule applied from August 1 until SegWit locked in on August 9, and every block in that time already signaled, so BIP-148 nodes had no main-chain block to reject. SegWit activated at block 481,824 on August 24, 2017.
- **The chain didn't split over BIP-148.** [Bitcoin Cash](/glossary/bitcoin-cash) did split off on August 1, 2017, through a separate hard fork to bigger blocks, but Bitcoin itself remained one chain.

What it proved is disputed. Its supporters, its author among them, hold that nodes, not miners, have the final say on Bitcoin's rules: miners can refuse to signal, but they can't make nodes accept blocks those nodes reject. The SegWit2x organizers credited their own agreement instead, writing that it broke the deadlock.

See [The Block Size War](/rabbit-hole/block-size-war) for the two-year fight behind it.
