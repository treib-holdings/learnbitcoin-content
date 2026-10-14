---
title: "Block Height"
slug: block-height
draft: false
updated: "2026-10-13"
shortDefinition: "The count of blocks since the genesis block (which is at height 0)."
keyTakeaways:
  - "Counts blocks from the original genesis block"
  - "Used for referencing specific points in the blockchain"
  - "Essential for protocol events tied to block intervals"
sources:
  - { label: "BIP-34 - Block v2, Height in Coinbase: the genesis block is height zero; 75% and 95% rules over the last 1,000 blocks (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki" }
  - { label: "Bitcoin Core - src/validation.cpp: GetBlockSubsidy halves every 210,000 blocks; ContextualCheckBlockHeader bounds a block's timestamp between median time past and two hours ahead (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "Bitcoin Core - src/pow.cpp: the target changes only once per DifficultyAdjustmentInterval of 2016 blocks (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "BIP-9 - Version bits with timeout and delay: signalling tallied per 2016-block retarget period, 95% threshold; BIP 34's supermajority rule reused by BIP 66 and BIP 65 (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP-341 - Taproot, Deployment: 90% threshold and min_activation_height 709632 (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Core - 0.21.1 release notes: taproot activation managed by a variation of BIP9 called Speedy Trial, 90% of a 2,016-block retarget period, active as of block 709632 (2021-05-01)", url: "https://bitcoincore.org/en/releases/0.21.1/" }
  - { label: "mempool.space - Block 840000, the fourth halving (2024-04-20)", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
relatedTerms:
  - bip-30
  - bip-34
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-propagation
  - block-time
  - blockchain
  - difficulty-retargeting
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
  - speedy-trial
sameAs:
  - "https://en.bitcoin.it/wiki/Confirmation"
liveWidget: ~
---

Block height is the number of blocks between any given block and the [genesis block](/glossary/genesis-block), which sits at height 0. Block 1 is one above genesis. Block 840,000 - where the fourth [halving](/glossary/halving-halvening) landed in April 2024 - is 840,000 above it.

Height is the canonical way to refer to a point in Bitcoin's history. Timestamps are imprecise (miners control their own clocks within a window). Dates depend on calendar conventions. But block heights are integer, monotonic, and identical for every node on the network.

Most of Bitcoin's protocol-level events are scheduled by height, not by date:

- **[Halvings](/glossary/halving-halvening)** happen at heights 210,000, 420,000, 630,000, and so on (every 210,000).
- **[Difficulty retargets](/glossary/difficulty-retargeting)** happen at heights that are multiples of 2,016.
- **[Soft forks](/glossary/soft-fork)** activate by height as well. Under [BIP 9](/glossary/bip-9-versionbits), a change such as [SegWit](/glossary/segwit-segregated-witness-bip-141) locks in when 95% of the blocks in a 2,016-block retarget period signal for it and goes live one period later; [Taproot](/glossary/taproot)'s [Speedy Trial](/glossary/speedy-trial) deployment used a 90% threshold plus a fixed minimum activation height, 709,632. Older forks such as [BIP 34](/glossary/bip-34) and [BIP 66](/glossary/bip-66) switched on in two steps: once 750 of the previous 1,000 blocks carried the new version number, the new rules applied to new-version blocks; once 950 did, they applied to every block.

If you want a single number that locates "what's happening on Bitcoin right now," it's the current block height. See the [Node page](/node) for the live current height.
