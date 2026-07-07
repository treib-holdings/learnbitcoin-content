---
title: "SegWit2x"
slug: segwit2x
draft: false
published: "2026-06-29"
updated: "2026-07-07"
shortDefinition: "The 2017 plan from the New York Agreement to activate SegWit and then hard fork to 2 MB blocks. The SegWit half happened; the 2 MB hard fork was called off in November 2017 for lack of consensus."
keyTakeaways:
  - "SegWit2x meant SegWit now, 2 MB blocks later; it was the technical implementation of the New York Agreement, built in a Bitcoin Core fork called btc1"
  - "The 2 MB hard fork was scheduled for block 494,784 (around November 16, 2017) and suspended on November 8 by its own organizers"
  - "Its failure showed that miners and businesses could activate a soft fork but could not push through a hard fork that the economic majority rejected"
sources:
  - { label: "CoinDesk - 2x Called Off: Bitcoin Hard Fork Suspended for Lack of Consensus (2017)", url: "https://www.coindesk.com/markets/2017/11/08/2x-called-off-bitcoin-hard-fork-suspended-for-lack-of-consensus" }
  - { label: "Bitcoin Wiki - New York Agreement", url: "https://en.bitcoin.it/wiki/New_York_Agreement" }
relatedTerms:
  - new-york-agreement-nya
  - block-size-war
  - segwit-segregated-witness-bip-141
  - bitcoin-cash
  - bip-148-uasf
  - block-size
liveWidget: ~
---

SegWit2x was the technical plan behind the [New York Agreement](/glossary/new-york-agreement-nya): activate [SegWit](/glossary/segwit-segregated-witness-bip-141) as a soft fork, then follow it about three months later with a hard fork that doubled the [block size](/glossary/block-size) limit to 2 MB. The name is just the two halves stuck together, "SegWit" plus "2x."

The code shipped in a Bitcoin Core fork called btc1, led by Jeff Garzik. The SegWit half went through in August 2017. The hard fork was set for block 494,784, expected around November 16, 2017.

It never happened. Through the autumn, support eroded. Companies that had signed the agreement backed out, most of the developer community opposed it, and there was no clean way to force the change onto users who would keep running the old rules. On November 8, 2017, a group of the organizers - Mike Belshe, Wences Casares, Jihan Wu, Jeff Garzik, Peter Smith, and Erik Voorhees - published a message suspending the hard fork. They wrote that they had not built sufficient consensus, and that holding the community together mattered more than the upgrade.

That cancellation is usually marked as the end of the [block size war](/glossary/block-size-war). The big-block side had already forked off as [Bitcoin Cash](/glossary/bitcoin-cash) back in August, and the attempt to also enlarge Bitcoin itself was now dead. The episode confirmed that changing Bitcoin's consensus rules requires the people running nodes to go along, and that no amount of mining power or corporate backing is a substitute.

See [The Block Size War](/rabbit-hole/block-size-war) for the full arc from BIP-101 to the November suspension.
