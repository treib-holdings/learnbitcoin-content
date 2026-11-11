---
title: "Rich List Attack (RLA)"
slug: rich-list-attack
linkText:
  - "rich list attack"
draft: false
published: "2026-11-11"
shortDefinition: "An attack on a decentralized mining pool in which a large miner splits its hash power across many accounts, so that those accounts take the limited payout slots in a block and push the smallest miners out. Named in a November 2026 post on Delving Bitcoin."
keyTakeaways:
  - "A block's coinbase transaction has room for only so many payouts, so a pool with more miners than slots needs a rule for who gets one"
  - "If the rule is 'the top contributors', a large miner can pose as many mid-sized ones that each still outrank the small miners"
  - "The pool cannot stop it, because with no operator there is nobody to check that two accounts are different people"
  - "The original P2Pool hit the same squeeze through ordinary growth, with no attacker involved"
sources:
  - { label: "7d5x9 - Decentralized Coinbase Payout Protocols (DCPP): A Framework for Discussion (Delving Bitcoin, 11 November 2026): names the rich list attack, the two conditions it needs, what happens to excluded miners, and the two ways out the author considers viable", url: "https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060" }
  - { label: "windpath - post 13795 in the P2Pool thread on BitcoinTalk (24 November 2015): 'You can only split the 25BTC reward so many ways in a decentralized trust-less environment, and smaller miners will always get squeezed out'", url: "https://bitcointalk.org/index.php?topic=18313.msg13057899#msg13057899" }
  - { label: "p2pool/p2pool - p2pool/data.py and p2pool/work.py: a coinbase limited to the 4,000 largest payouts, and a harder share target for a miner whose expected payout per block is under the dust threshold", url: "https://github.com/p2pool/p2pool/blob/master/p2pool/data.py" }
relatedTerms:
  - payout-settlement-griefing
  - p2pool
  - mining-pool
  - pooled-mining
  - coinbase-transaction
  - anti-sybil-mechanism
  - dust
  - block-reward
  - mining-centralization
liveWidget: ~
---

A rich list attack (RLA) is a way for a large miner to push small miners out of a decentralized [mining pool's](/glossary/mining-pool) payouts. It is the best-known form of [payout settlement griefing](/glossary/payout-settlement-griefing), and both names come from the same post on the Delving Bitcoin forum in November 2026.

The setting is a pool with no operator, which pays its miners directly in the [coinbase transaction](/glossary/coinbase-transaction) of each block it finds. That transaction cannot hold an unlimited number of payouts. Each one takes up block space that could have carried a fee-paying transaction, and mining machines' firmware limits how large a coinbase they will accept. So once the pool has more miners than payout places (the post calls them slots), it needs a rule for who gets one.

The obvious rule is to pay the miners who contributed the most work over some recent window. That ranking is the rich list.

Here is how it gets gamed. Say a block has 100 slots and the pool has 500 miners. One large miner holds a fifth of the pool's hash power and most of the rest are small. Mining honestly as a single account, the large miner takes one slot. If it splits into 60 accounts, each is still bigger than any of the small miners, so it takes 60 slots and 59 small miners who would have been paid in that block are not.

The post gives the two conditions that make this possible. The pool cannot detect one miner posing as many (see [anti-Sybil mechanism](/glossary/anti-sybil-mechanism)), and slots are finite, so every slot one account takes is a slot another miner loses. Any rule that hands out a fixed number of slots by rank has both.

What the excluded miners lose depends on the pool's rules. In the worst case their share of the reward goes to the miners who did get slots, and it is gone. In the milder case they are owed a credit that the pool has to carry forward and settle in a later block. That needs fair rules for paying old debts, and it comes with no guarantee, because the pool's hash power can drop away before the debt is paid.

The original [P2Pool](/glossary/p2pool) ran into the same squeeze without anyone attacking it. It paid every miner in the coinbase, and to keep those payouts from turning into [dust](/glossary/dust) it made a small miner's shares, the units of work the pool gives credit for, harder to find. The more hash power joined the pool, the less often a small miner was paid at all. Its code even held a rich list rule of its own: a coinbase was limited to the 4,000 largest payouts, a limit that a comment in the code calls "unlikely to ever be hit". The operator of one of its public nodes, who now runs this site, put it this way on BitcoinTalk in November 2015: "You can only split the 25BTC reward so many ways in a decentralized trust-less environment, and smaller miners will always get squeezed out." The Delving post links to that message as its reference for P2Pool's failure to scale payouts. A rich list attack brings about the same result on purpose.

The post's author sees two ways out and is not sure which is right. One is to stop ranking and draw the slots at random, weighted by how much each claim is worth, an idea the post credits to Matt Corallo and says still "needs to be considered carefully". The other is to reserve slots for a few named payout operators and route every small miner's earnings through one of them. The author expects both to end in about the same place, with a small number of market makers handling most small miners' payouts.

The name has nothing to do with the lists of the largest Bitcoin addresses that are also called rich lists.
