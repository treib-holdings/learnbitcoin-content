---
title: "BIP 30"
slug: bip-30
draft: false
shortDefinition: "A rule preventing creation of a new transaction with the same txid spending the same outputs, blocking double-spend edge cases."
keyTakeaways:
  - "Prevents transactions with identical txids"
  - "Closes a niche double-spend vulnerability"
  - "Part of ongoing improvements to transaction validity"
sources: []
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

Concretely, two pre-2012 [coinbase transactions](/glossary/coinbase-transaction) in blocks 91722/91812 and 91842/91880 had identical txids (because their coinbase inputs were structured identically). BIP-30 made this scenario impossible going forward by requiring nodes to reject any transaction whose txid matches an existing unspent transaction.

The companion fix was [BIP-34](/glossary/bip-34), which made future coinbase transactions explicitly include the block height in their input script - guaranteeing each coinbase has a unique txid even if everything else about it is identical to a prior block's coinbase. Once BIP-34 was deeply enforced (around block 227,930 in 2013), BIP-30's check effectively only matters for very old blocks. Modern Bitcoin Core treats it as a vestigial rule applied for historical correctness rather than active prevention.

The story is a minor footnote in Bitcoin's history but a clean example of the maintenance discipline: identify subtle edge cases, ship soft forks to close them, accept that some "should never happen" scenarios already happened once and need to be cleaned up.
