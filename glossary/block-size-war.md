---
title: "Block Size War"
slug: block-size-war
linkText:
  - "block size war"
draft: false
published: "2026-06-29"
updated: "2026-10-10"
shortDefinition: "The 2015-2017 fight over whether to raise Bitcoin's 1 MB block size limit. Big-blockers wanted bigger blocks for cheaper on-chain payments; small-blockers wanted to keep blocks small and scale in layers. Small blocks won, and the losing side forked off as Bitcoin Cash."
keyTakeaways:
  - "The dispute was less about a megabyte number than about who gets to change Bitcoin's rules: the miners and large companies, or the users running their own nodes"
  - "SegWit activated as a soft fork in August 2017 without the block size increase the big-block camp wanted; the SegWit2x hard fork that was supposed to follow was called off that November"
  - "The economic majority running full nodes, not the miners and not the companies, held the final say - a precedent that has governed every Bitcoin upgrade since"
sources:
  - { label: "Jonathan Bier - The Blocksize War: The Battle for Control Over Bitcoin's Protocol Rules (2021)", url: "https://www.goodreads.com/book/show/57429394-the-blocksize-war" }
  - { label: "Bitcoin Magazine - Segregated Witness Activates on Bitcoin (2017)", url: "https://bitcoinmagazine.com/technical/segregated-witness-activates-bitcoin-what-expect" }
  - { label: "CoinDesk - 2x Called Off: Bitcoin Hard Fork Suspended for Lack of Consensus (2017)", url: "https://www.coindesk.com/markets/2017/11/08/2x-called-off-bitcoin-hard-fork-suspended-for-lack-of-consensus" }
  - { label: "BIP 9 - Version bits (threshold 1,916 of 2,016 blocks, 95%)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP 148 - Mandatory activation of segwit deployment, by Shaolin Fry (assigned March 12, 2017; from midnight August 1, 2017, blocks that do not signal for SegWit are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "BIP 91 - Reduced threshold Segwit MASF (activates once 269 of 336 blocks, 80%, signal on bit 4; while active, blocks that do not signal for SegWit on bit 1 are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "mempool.space - block 476,784 (02:53 UTC, July 21, 2017), first block of BIP 91's locked-in period; 284 of the previous 336 blocks signaled bit 4", url: "https://mempool.space/block/000000000000000000b01b490a1c1f383e10feabefbe0afda46e185b42928ab5" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in signal bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 479,808 (12:36 UTC, August 9, 2017), first block of SegWit's locked-in period", url: "https://mempool.space/block/0000000000000000012e6060980c6475a9a8e62a1bf44b76c5d51f707d54522c" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
relatedTerms:
  - block-size
  - bip-101-increase-block-size
  - segwit-segregated-witness-bip-141
  - bip-148-uasf
  - new-york-agreement-nya
  - segwit2x
  - bitcoin-cash
  - bitcoin-governance
liveWidget: ~
---

Between August 2015 and November 2017, Bitcoin nearly tore itself apart over the 1 megabyte cap on how much data each block can hold. Satoshi added that limit in 2010 as an anti-spam measure. By 2015 blocks were filling up, fees were climbing, and the community could not agree on what to do about it.

The big-blockers wanted to raise the limit so more transactions would fit on-chain and fees would stay low. Their case was that Bitcoin should work as cheap digital cash, and that a bigger [block size](/glossary/block-size) was the obvious fix. The camp included Gavin Andresen, Mike Hearn, Roger Ver, and large mining operations led by Bitmain's Jihan Wu. They shipped competing software meant to replace [Bitcoin Core](/glossary/bitcoin-core) and lift the cap: Bitcoin XT in 2015, then Bitcoin Classic and Bitcoin Unlimited in 2016. The flagship proposal was [BIP-101](/glossary/bip-101-increase-block-size), which jumped straight to 8 MB.

The small-blockers wanted to keep the limit where it was. They argued that big blocks make running a [full node](/glossary/full-node) more expensive, which pushes ordinary users off the network and concentrates control in a handful of data centers. They preferred to scale in layers: improve the data efficiency on the base chain, then move volume to systems built on top of it like the [Lightning Network](/glossary/lightning-network). Most of the Bitcoin Core development group sat in this camp.

[SegWit](/glossary/segwit-segregated-witness-bip-141) was the small-block path forward. It was a [soft fork](/glossary/soft-fork) that fixed transaction malleability, raised effective capacity to roughly 4 million weight units without a hard fork, and cleared the way for Lightning. But it needed 95 percent of miners to [signal](/glossary/miner-signaling) support, and the miners aligned with the big-block camp refused to signal.

The deadlock broke in 2017, under pressure from two directions. In March, a pseudonymous developer published [BIP-148](/glossary/bip-148-uasf), a user-activated soft fork. From August 1, 2017, nodes running it would reject any block that did not signal SegWit, with or without the miners' cooperation. In May, a group of companies and mining pools signed the [New York Agreement](/glossary/new-york-agreement-nya), a deal known as [SegWit2x](/glossary/segwit2x) that promised to activate SegWit first and then hard fork to 2 MB blocks about three months later. Bitcoin Core developers were not part of the deal, and many users read it as a backroom attempt to take over the protocol.

With the flag day approaching and a [chain split](/glossary/chain-split) on the table, miners adopted a compromise mechanism, [BIP-91](/glossary/bip-91). It locked in on July 21, 2017 (UTC), and from block 477,120 on July 23 nodes running it rejected any block that did not signal for SegWit, so every block was signaling before the August 1 flag day. SegWit itself locked in on August 9 and went live at block 481,824 on August 24, 2017.

The faction that still wanted bigger blocks forked away on August 1 as [Bitcoin Cash](/glossary/bitcoin-cash). The second half of SegWit2x, the 2 MB hard fork, was scheduled for that November and then called off on November 8, 2017 for lack of consensus.

The war settled a bigger question than block size. The final say over the rules belonged to the people running full nodes, the economic majority, rather than to the miners or the companies that signed the agreement. That is the central claim of [Bitcoin governance](/glossary/bitcoin-governance), and the block size war is the case study that tested it in real conditions.

See [The Block Size War](/rabbit-hole/block-size-war) for the full story, from Bitcoin XT through the UASF to the forks that left.
