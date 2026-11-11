---
title: "Decentralized Coinbase Payout Protocol (DCPP)"
slug: decentralized-coinbase-payout-protocol
linkText:
  - "decentralized coinbase payout protocol"
  - "decentralized coinbase payout protocols"
  - "DCPP"
draft: false
published: "2026-11-11"
shortDefinition: "The rules by which a mining pool with no operator pays its miners out of the coinbase transaction of each block it finds. The name comes from a November 2026 post on Delving Bitcoin, which shows that every design proposed so far can be griefed in some way."
keyTakeaways:
  - "A pool with an operator pays miners from its own wallet. A pool without one has only the coinbase transaction and what Bitcoin script can enforce"
  - "Giving every miner their own output in the coinbase needs no trust in anyone, and it does not scale. The original P2Pool never paid more than 553 addresses in one block"
  - "The coinbase transaction's id is not known until the block is mined, so payouts cannot be signed in advance. Every other design ends up with one output held by a key or a group of keys"
  - "Each way of paying small miners later opens a route for payout settlement griefing"
  - "As of November 2026 it is an open design problem with no agreed answer"
sources:
  - { label: "7d5x9 - Decentralized Coinbase Payout Protocols (DCPP): A Framework for Discussion (Delving Bitcoin, 11 November 2026): the term, the three constraints, the earlier designs as described here (Belcher's hub, Braidpool, P2Poolv2), the transaction id problem and the two ways out the author considers viable", url: "https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060" }
  - { label: "P2Poolv2 wiki - P2Pool vs P2Poolv2 (read November 2026): the largest miners paid in the coinbase, smaller miners trading their shares for bitcoin", url: "https://github.com/p2poolv2/p2poolv2/wiki/P2Pool-vs-P2Poolv2" }
  - { label: "LearnBitcoin - the coinbase transaction of every P2Pool block, 2,545 rows read from the Bitcoin Core node behind ChainQuery on 11 November 2026: the most payouts in one block was 553, in block 236,962 (CSV)", url: "https://www.learnbitcoin.com/downloads/p2pool-coinbases.csv" }
relatedTerms:
  - p2pool
  - payout-settlement-griefing
  - rich-list-attack
  - mining-pool
  - pooled-mining
  - coinbase-transaction
  - payment-channel
  - atomic-swap
  - anyprevout
  - mining-centralization
liveWidget: ~
---

A decentralized coinbase payout protocol (DCPP) is the part of a decentralized [mining pool](/glossary/mining-pool) that decides how a block's reward reaches the miners who earned it. In an ordinary pool this is simple, because the operator receives the reward and pays miners from its own wallet on whatever schedule it likes. A pool with no operator has no wallet. It has the [coinbase transaction](/glossary/coinbase-transaction) of each block it finds, and whatever rules its nodes agree to follow when they build that transaction.

The name comes from a post on the Delving Bitcoin forum in November 2026, by an author writing as 7d5x9. The post gives three constraints that any such protocol has to live with. Paying each miner with their own output in the coinbase does not scale, since every output takes block space that could have held a fee-paying transaction and mining machines' firmware limits how large a coinbase can be. Payouts are something an attacker can aim at, which the post calls [payout settlement griefing](/glossary/payout-settlement-griefing). And Bitcoin's scripting language is limited, so the payout rules have to be built from a small set of parts.

The simplest protocol is the one the original [P2Pool](/glossary/p2pool) used from 2011: one output per miner, in every block. Nobody has to be trusted, because the block itself pays everyone. Its ceiling can be read off the chain. The most P2Pool ever paid in a single block was 553 addresses, in May 2013, and that coinbase transaction was 19,033 bytes long.

The post reviews three later designs, each of which moves the payouts out of the coinbase:

- **A payment hub.** In a 2017 proposal by Chris Belcher, the coinbase pays a hub, and the hub pays each miner over a [payment channel](/glossary/payment-channel). The output is locked so that a hub that stalls loses it to the miner who found the block after six months.
- **One shared output.** In Braidpool, every coinbase pays a single output controlled by the pool, and the rewards are rolled together as blocks mature. A transaction paying every miner is signed and held back, then broadcast about every two weeks. The signers are a two-thirds group of the miners who found the pool's recent blocks.
- **A market.** In P2Poolv2 the largest miners are paid in the coinbase. Smaller miners sell their shares to market makers for a Lightning payment in an [atomic swap](/glossary/atomic-swap), and a market maker that collects enough shares earns a coinbase output of its own.

Each can be griefed. A miner posing as thousands of small ones forces the hub to open a channel for each. Miners holding enough of Braidpool's signing group could redirect the shared output. And in a market, a large miner that splits into many accounts can take every payout place in the block, which is the [rich list attack](/glossary/rich-list-attack).

Behind all three is one obstacle. Miners change a few bytes inside the coinbase transaction as they search for a block, so its id is not known until the block is found. Schemes that let each participant leave with their coins unaided depend on transactions signed ahead of time, and those have to name the transaction they spend. Here that cannot be done until the block exists. The post concludes that, on Bitcoin as it is, every design comes down to an output controlled by one key or a group of keys, with time-locked fallbacks at best. A signature that does not name the transaction it spends would remove the obstacle ([ANYPREVOUT](/glossary/anyprevout) is one proposal for that), and the post treats such signatures as not yet available.

That leaves the question of who holds the keys and which small miners get a place in the block. The post's author sees two workable answers: draw the places at random, weighted by value, or reserve them for a few named payout operators. The author expects both to end with a small number of market makers handling most small miners' payouts, and suggests that the simplest structure may be the best one for now: no shared output at all, with miners swapping their shares for Lightning payments and market makers carrying the risk.

As of November 2026 none of this is settled, and the term itself is days old. See [Mining rabbit hole section 8](/rabbit-hole/mining) for where mining pools stand today.
