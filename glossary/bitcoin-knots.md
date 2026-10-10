---
title: "Bitcoin Knots"
slug: bitcoin-knots
draft: false
updated: "2026-10-10"
shortDefinition: "Node software built from Bitcoin Core's code with extra relay filters. Releases before May 9, 2026 follow Bitcoin's main chain; later releases follow a chain that split off in August 2026."
keyTakeaways:
  - "Built from Bitcoin Core's code, with its own relay settings and defaults that filter out many data-carrying transactions"
  - "Releases up to May 8, 2026 do not include BIP-110 and follow the same chain as Bitcoin Core"
  - "Releases from May 9, 2026 on enforce BIP-110; nodes running them left Bitcoin's main chain on August 8, 2026, and Knots 29.4.1 (September 2, 2026) is a hard fork that gives that chain a BLAKE2b proof of work"
sources:
  - { label: "Bitcoin Knots - official site (names Luke Dashjr as lead maintainer; lists 29.4.2.knots20260508 as the latest version on October 10, 2026)", url: "https://bitcoinknots.org/" }
  - { label: "Bitcoin Knots README (development generally takes place in Bitcoin Core and is merged into Knots for each release; changes not suited to Core can be proposed to Knots)", url: "https://github.com/bitcoinknots/bitcoin" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, policy.h (default data-carrier limit of 83 bytes, applied by default to all known data-carrier methods)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/policy/policy.h" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, script.cpp (counts the bytes inside an OP_FALSE OP_IF envelope as data carried outside an OP_RETURN output)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/script/script.cpp" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, mempool_options.h (-acceptnonstddatacarrier, which allows data carried outside OP_RETURN outputs, is off by default)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/kernel/mempool_options.h" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, validation.cpp (with that setting off, a transaction carrying such data is refused as txn-datacarrier-nonstandard)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/validation.cpp" }
  - { label: "Ordinal Theory Handbook - Inscriptions (inscription content sits in an envelope: OP_FALSE OP_IF ... OP_ENDIF wrapping data pushes)", url: "https://docs.ordinals.com/inscriptions.html" }
  - { label: "Bitcoin Knots v29.3.knots20260507 release notes (May 8, 2026) - this version does not support BIP-110", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260507" }
  - { label: "Bitcoin Knots v29.3.knots20260508 release notes (May 9, 2026) - this version applies BIP-110 (RDTS) after the user confirms", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260508" }
  - { label: "Bitcoin Knots v29.4.knots20260508 release notes (August 7, 2026) - its change log includes fixes to BIP-110 (RDTS) validation", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.knots20260508" }
  - { label: "BIP-110 - Reduced Data Temporary Softfork (one-year rules: most data pushes capped at 256 bytes, Tapscripts that execute OP_IF invalid; blocks 961,632 to 963,647 must signal bit 4; marked Closed in August 2026)", url: "https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki" }
  - { label: "mempool.space - block 961,632 (August 8, 2026), the first block of BIP-110's mandatory signaling period, which did not signal bit 4", url: "https://mempool.space/block/00000000000000000000d1e01392faa65ceeaed307f0a3159144b84146ff24ba" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, merged August 10, 2026); notes Knots released it on mainnet and its nodes rejected non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
  - { label: "Bitcoin Knots v29.4.1 release notes (September 2, 2026) - dates the split to August 8; backward-incompatible change to a BLAKE2b proof of work that also activates BIP-110's rules", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.1.knots20260508" }
  - { label: "bitcoin-blake2b.org, the page Knots' v29.4.1 release notes link for more information (first BLAKE2b block 961,640 on August 30, 2026; data limits last until September 1, 2027)", url: "https://bitcoin-blake2b.org/" }
  - { label: "BTC Nodes API - bitnodes.io snapshot of October 9, 2026, 19:28 UTC (nodes on Knots releases up to 29.3.knots20260507 report main-chain heights near 970,671; nearly all nodes on the 29.3 and 29.4 builds dated 20260508 sit at 961,639; nodes on 29.4.1 and 29.4.2 report heights near 976,430)", url: "https://btcnodes.io/api/v1/snapshots/1791574083/" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-core-rpc
  - chain-split
  - inscriptions
  - node
  - node-operator
  - node-synchronization
  - opreturn
  - safe-mode-bitcoin-core
liveWidget: ~
---

**Bitcoin Knots** is node software built from [Bitcoin Core](/glossary/bitcoin-core)'s code. Its lead maintainer is Luke Dashjr. Work done in Bitcoin Core is merged into Knots for each release, and Knots adds changes of its own on top.

## Relay filters

Many of those changes are about relay policy: which unconfirmed transactions a node keeps in its [mempool](/glossary/mempool) and passes on to peers. Knots adds settings for this, and its defaults filter out many transactions that carry arbitrary data. For example, by default it does not relay a transaction that carries data inside an [inscription](/glossary/inscriptions) envelope, and it limits [OP_RETURN](/glossary/opreturn) outputs to 83 bytes.

Relay filters do not decide which blocks a node accepts. That is up to consensus rules, covered next.

## Consensus: before and after May 2026

Knots releases up to and including 29.3.knots20260507 (May 8, 2026) do not include BIP-110. Nodes running them follow the same chain as Bitcoin Core nodes.

The next release, 29.3.knots20260508, came out on May 9, 2026 and applies [BIP-110](https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki), the Reduced Data Temporary Softfork, once the user confirms. BIP-110 proposed a one-year [soft fork](/glossary/soft-fork) that would cap most data pushes at 256 bytes and make invalid any Tapscript that executes `OP_IF`. Every Knots release since then includes it.

Under BIP-110, blocks starting at height 961,632 had to signal support for it. Block 961,632, mined on August 8, 2026, did not. Nodes running these Knots releases rejected it and every block built on it, which meant rejecting Bitcoin's main chain, and they [split off](/glossary/chain-split) onto a chain of their own that stalled. BIP-110 was marked Closed that month.

Knots 29.4.1, released September 2, 2026, is a [hard fork](/glossary/fork) for that split-off chain. Its release notes date the split to August 8. It replaces Bitcoin's [proof of work](/glossary/proof-work-pow) with a different algorithm, BLAKE2b, and turns on BIP-110's data limits at the switch. Older software cannot follow the new blocks. The page those release notes link to gives block 961,640, on August 30, 2026, as the first BLAKE2b block. The latest Knots release as of October 2026, 29.4.2, follows the same BLAKE2b chain.

In bitnodes.io's snapshot of October 9, 2026, the split shows up in the block heights nodes report. Nodes on Knots releases up to May 8, 2026 almost all report the main chain's height. Those on 29.3.knots20260508 or 29.4 are nearly all stuck at 961,639, where the split-off chain stalled before the switch. Nodes on 29.4.1 or 29.4.2 report heights on the BLAKE2b chain.

For the debate over data in Bitcoin transactions that led to BIP-110, see [Inscriptions](/glossary/inscriptions).
