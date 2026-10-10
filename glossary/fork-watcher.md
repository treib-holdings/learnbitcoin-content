---
title: "Fork Watcher"
slug: fork-watcher
draft: false
updated: "2026-10-10"
shortDefinition: "A specialized tool/service that tracks blockchain forks or abnormal reorganizations, alerting operators to possible chain splits."
keyTakeaways:
  - "Monitors for chain reorganizations or unexpected forks"
  - "Runs several node versions or implementations side by side and compares the chains they follow"
  - "Matters most when nodes disagree about the rules, as in the August 2026 split over BIP-110"
sources:
  - { label: "Bitcoin Fork Monitor (forkmonitor.info) - nodes and footer on October 10, 2026: Bitcoin Core 0.8.6, 0.18.0, 31.1 and 32.0 rc2, btcd 0.26.2 and bcoin 2.2.0, each with its best block hash and height; the footer describes the site as monitoring multiple node implementations to detect consensus discrepancies and chain forks, and names Localhost Research as sponsor", url: "https://forkmonitor.info/" }
  - { label: "Bitcoin Fork Monitor - List Of Forks (competing blocks at the same height, which version saw each first, and which one stayed in the main chain; heights 961,632 to 961,639 each show a main-chain block from August 8, 2026 and a competing block mined between August 8 and August 28, 2026)", url: "https://forkmonitor.info/forks.php" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, 2026); notes Knots released it on mainnet and on August 8 its nodes began rejecting non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
relatedTerms:
  - airdrop-btc-fork
  - bitcoin-cash
  - chain-split
  - fork
  - fork-detection
  - reorg-reorganization
liveWidget: ~
---

A fork watcher is the dedicated tooling that does [fork detection](/glossary/fork-detection) as a continuous service, alerting operators when something unusual happens at the chain-consensus layer.

A public example is [forkmonitor.info](https://forkmonitor.info), which as of October 2026 names Localhost Research as its sponsor. It does several things at once:

- Runs several Bitcoin node implementations side by side. As of October 2026 that means Bitcoin Core in versions from 0.8.6 up to a 32.0 release candidate, plus btcd and bcoin.
- Watches for chain divergence between any of them.
- Keeps a list of stale blocks: heights where two competing blocks appeared, with which node saw each one first and which one stayed in the main chain.

A watcher like this matters most when nodes disagree about the rules, because nodes that disagree end up on different chains. In August 2026, nodes running [Bitcoin Knots](/glossary/bitcoin-knots) releases that enforce BIP-110 rejected the main chain's blocks and [split off](/glossary/chain-split) onto a chain of their own. forkmonitor.info's list shows that split: at each height from 961,632 to 961,639 it has the main-chain block, mined on August 8, next to a competing block mined between August 8 and August 28.
