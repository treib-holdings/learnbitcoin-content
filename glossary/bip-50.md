---
title: "BIP 50"
slug: bip-50
draft: false
shortDefinition: "The postmortem of the March 2013 chain fork, when Bitcoin 0.8 and older versions disagreed about a valid block and the network was split for nearly eight hours."
keyTakeaways:
  - "Written by Gavin Andresen and assigned on 20 March 2013; it records an incident and proposes no protocol change"
  - "Root cause: older versions capped their Berkeley DB database at 10,000 locks, an accidental limit on blocks that differed from node to node; version 0.8 moved to LevelDB and no longer had it"
  - "The text was revised in February 2016, so a quotation from it is not always the 2013 wording"
sources:
  - { label: "BIP-50 - March 2013 Chain Fork Post-Mortem", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "BIP-50 revision history", url: "https://github.com/bitcoin/bips/commits/master/bip-0050.mediawiki" }
  - { label: "bitcoin.org - 11/12 March 2013 Chain Fork Information", url: "https://bitcoin.org/en/alert/2013-03-11-chain-fork" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block
  - fork
  - chain-split
  - reorg-reorganization
  - double-spend
liveWidget: ~
---

BIP 50 isn't a protocol change. It's a postmortem.

On 11 March 2013 the network split. Versions of Bitcoin before 0.8 stored their block index in Berkeley DB and had configured it with a ceiling of 10,000 locks. Nobody had treated that number as a rule about blocks, but it was one: a block that touched too many earlier transactions would exhaust the locks, and the node would reject the block as invalid. Because locks are taken per database page, the exact ceiling depended on how each node's database happened to be laid out, so it was not even the same rule on every machine. Version 0.8 replaced Berkeley DB with LevelDB and lost the limit without anyone noticing.

At block height 225,430 a miner on 0.8 produced a block of about 998 kB, under the one-megabyte limit, that was over the lock ceiling on many older nodes. Nodes on 0.8 accepted it. Older nodes rejected it and built a different chain. About 60 percent of the mining power was on the 0.8 side.

The fix was to go backwards. After an argument in the developers' public chat room, the largest pool moved its hash power back to the older software so that the chain every node could follow would overtake the longer one. It did, 7 hours 41 minutes after the triggering block, and the 0.8 chain's 25 blocks were abandoned. One merchant, the payment processor OKPay, was double-spent for about $10,000 during the window and was refunded.

BIP 50 also records the repair: version 0.8.1 temporarily limited blocks to what old nodes could handle, everyone was given until 15 May 2013 to upgrade, and on 16 August 2013 a block was mined that unpatched nodes could no longer follow.

What the document is cited for is the lesson. Anything that changes which blocks a node accepts is a consensus change, including a database library that was never meant to have an opinion.

Read it with one caution. Parts of the text were rewritten in February 2016, so it is not a purely contemporaneous account, and a few of its details differ from the chat log of the night.

Go deeper in [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork), which follows the incident from the log with timestamps and corrects several details of the usual retelling.

Spec: [BIP-50](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki).
