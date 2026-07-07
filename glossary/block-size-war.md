---
title: "Block Size War"
slug: block-size-war
draft: false
published: "2026-06-29"
updated: "2026-07-07"
shortDefinition: "The 2015-2017 fight over whether to raise Bitcoin's 1 MB block size limit. Big-blockers wanted bigger blocks for cheaper on-chain payments; small-blockers wanted to keep blocks small and scale in layers. Small blocks won, and the losing side forked off as Bitcoin Cash."
keyTakeaways:
  - "The dispute was less about a megabyte number than about who gets to change Bitcoin's rules: the miners and large companies, or the users running their own nodes"
  - "SegWit activated as a soft fork in August 2017 without the block size increase the big-block camp wanted; the SegWit2x hard fork that was supposed to follow was called off that November"
  - "The economic majority running full nodes, not the miners and not the companies, held the final say - a precedent that has governed every Bitcoin upgrade since"
sources:
  - { label: "Jonathan Bier - The Blocksize War: The Battle for Control Over Bitcoin's Protocol Rules (2021)", url: "https://www.goodreads.com/book/show/57429394-the-blocksize-war" }
  - { label: "Bitcoin Magazine - Segregated Witness Activates on Bitcoin (2017)", url: "https://bitcoinmagazine.com/technical/segregated-witness-activates-bitcoin-what-expect" }
  - { label: "CoinDesk - 2x Called Off: Bitcoin Hard Fork Suspended for Lack of Consensus (2017)", url: "https://www.coindesk.com/markets/2017/11/08/2x-called-off-bitcoin-hard-fork-suspended-for-lack-of-consensus" }
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

With the flag day approaching and a [chain split](/glossary/chain-split) on the table, miners activated SegWit through a compromise mechanism (BIP-91) in July. Miner signaling crossed the threshold in early August, and SegWit went live at block 481,824 on August 24, 2017.

The faction that still wanted bigger blocks forked away on August 1 as [Bitcoin Cash](/glossary/bitcoin-cash). The second half of SegWit2x, the 2 MB hard fork, was scheduled for that November and then called off on November 8, 2017 for lack of consensus.

The war settled a bigger question than block size. The final say over the rules belonged to the people running full nodes, the economic majority, rather than to the miners or the companies that signed the agreement. That is the central claim of [Bitcoin governance](/glossary/bitcoin-governance), and the block size war is the case study that tested it in real conditions.

See [The Block Size War](/rabbit-hole/block-size-war) for the full story, from Bitcoin XT through the UASF to the forks that left.
