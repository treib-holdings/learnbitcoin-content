---
title: "BIP 30"
slug: bip-30
draft: false
updated: "2026-10-09"
shortDefinition: "A rule preventing creation of a new transaction with the same txid spending the same outputs, blocking double-spend edge cases."
keyTakeaways:
  - "Prevents transactions with identical txids"
  - "Closes a niche double-spend vulnerability"
  - "Part of ongoing improvements to transaction validity"
sources:
  - { label: "BIP 30 - Duplicate transactions (the rule, and the two grandfathered blocks 91,842 and 91,880)", url: "https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki" }
  - { label: "mempool.space - block 91,842 (14 November 2010), whose 50 BTC coinbase repeats the txid of block 91,812's", url: "https://mempool.space/block/00000000000a4d0a398161ffc163c503763b1f4360639393e0e4c8e300e0caec" }
  - { label: "mempool.space - block 91,880 (15 November 2010), whose 50 BTC coinbase repeats the txid of block 91,722's", url: "https://mempool.space/block/00000000000743f190a18c5577a3c2d2a1f610ae9601ac046a38084ccb7cd721" }
  - { label: "Bitcoin Core 31.0.0 RPC docs - gettxoutsetinfo, which counts coins lost to BIP 30 duplicates as unspendable", url: "https://bitcoincore.org/en/doc/31.0.0/rpc/blockchain/gettxoutsetinfo/" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-34
  - block
  - block-explorer
  - block-height
  - double-spend
  - transaction
liveWidget: ~
---

[BIP-30](https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki) is the consensus rule preventing two transactions in Bitcoin's history from having the same transaction ID (txid) while both having unspent outputs. It was introduced as a [soft fork](/glossary/soft-fork) in March 2012, after researchers identified that the original Bitcoin Core implementation had a subtle edge case where duplicate-txid transactions could collide.

Concretely, in November 2010 the [coinbase transactions](/glossary/coinbase-transaction) of blocks 91,842 and 91,880 had the same txids as the coinbases of blocks 91,812 and 91,722 (because their coinbase inputs were structured identically). Each duplicate overwrote the earlier, still-unspent 50 BTC output, so 100 BTC became unspendable. BIP-30 made this impossible going forward by requiring nodes to reject any transaction whose txid matches an earlier transaction that still has unspent outputs. Blocks 91,842 and 91,880 are the only exceptions, and the rule names them by height.

The companion fix was [BIP-34](/glossary/bip-34), which made future coinbase transactions explicitly include the block height in their input script - guaranteeing each coinbase has a unique txid even if everything else about it is identical to a prior block's coinbase. Once BIP-34 was deeply enforced (around block 227,930 in 2013), BIP-30's check effectively only matters for very old blocks. Modern Bitcoin Core treats it as a vestigial rule applied for historical correctness rather than active prevention.

The story is a minor footnote in Bitcoin's history but a clean example of the maintenance discipline: identify subtle edge cases, ship soft forks to close them, accept that some "should never happen" scenarios already happened once and need to be cleaned up.
