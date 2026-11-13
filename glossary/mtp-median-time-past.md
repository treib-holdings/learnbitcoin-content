---
title: "MTP (Median Time Past)"
slug: mtp-median-time-past
linkText:
  - "MTP (Median Time Past)"
  - "median time past"
  - "median-time-past"
  - "MTP"
draft: false
updated: "2026-11-05"
shortDefinition: "Bitcoin uses the median of the last 11 block timestamps as the chain's own clock. Here's why - and how it stops miners from gaming time-locked transactions."
keyTakeaways:
  - "Prevents outlier timestamps from messing with time-based rules"
  - "Ensures consistent locktime functionality and consensus enforcement"
  - "A rolling median of 11 blocks for robust approximation of real time"
sources:
  - { label: "Bitcoin Core - src/chain.h: GetMedianTimePast sorts the timestamps of the last nMedianTimeSpan = 11 blocks and returns the middle one", url: "https://github.com/bitcoin/bitcoin/blob/master/src/chain.h" }
  - { label: "Bitcoin Core - src/validation.cpp: ContextualCheckBlockHeader rejects a block stamped at or below the previous block's median time past (time-too-old)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "BIP-113 - Median time-past as endpoint for lock-time calculations: time-based lock times compare against the median of the past 11 blocks, which advances monotonically", url: "https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki" }
  - { label: "Pieter Wuille - bitcoin-dev, Difficulty adjustment / time issues (November 7, 2011): a block's timestamp must lie between the median of the previous eleven, roughly five blocks in the past, and two hours in the future", url: "https://www.learnbitcoin.com/archive/t/2011/difficulty-adjustment-time-issues#m-939617d6" }
relatedTerms:
  - absolute-locktime
  - bip-113
  - block-timestamp-rules
liveWidget: ~
---

**Median Time Past (MTP)** is the median of the previous 11 [block headers'](/glossary/block-header) timestamps. It's used as the chain's own clock for time-based consensus rules in Bitcoin, replacing the more easily-manipulated per-block timestamp.

The problem MTP solves: [miners](/glossary/miner) have limited but real discretion over block timestamps. The protocol allows a block's timestamp to run up to two hours ahead of a node's clock, and behind real time by as much as the median of the previous eleven blocks allows, usually about an hour. A single miner could push their timestamp forward to manipulate time-based logic - like making time-locked outputs spendable earlier than the depositor intended.

How MTP fixes it: by taking the median of the *previous* 11 blocks' timestamps, the network gets a value that:

- **Resists single-miner manipulation.** One miner setting a wildly skewed timestamp doesn't move the median significantly.
- **Stays close to real time.** The median of 11 honest miners' timestamps approximates real time well, within a small bias.
- **Increases monotonically.** As new blocks arrive, MTP never moves backward (it can stay the same from one block to the next), providing a stable monotonic clock.

Where MTP is used:

- **Every block's own timestamp.** A block must be stamped later than the MTP of the eleven blocks before it, or nodes reject it as `time-too-old`. This floor is in Satoshi's 2009 code; see [block timestamp rules](/glossary/block-timestamp-rules).
- **[BIP-113](/glossary/bip-113) locktimes.** Time-based [`nLockTime`](/glossary/nlocktime) and [CLTV](/glossary/checklocktimeverify-cltv) evaluations use MTP as the reference, not the current block's timestamp.
- **[BIP-68](/glossary/bip-68-relative-locktime) relative locktimes** and [CSV](/glossary/checksequenceverify-csv).

For most users, MTP is invisible. For protocol designers building time-locked constructions, it's the precise notion of "time" Bitcoin actually uses internally. Treating block timestamps as raw real-time gives wrong answers; treating MTP as real-time gives essentially correct ones.

The 11-block window is a sweet spot: large enough to resist manipulation, small enough to stay close to real time. Average lag from real time is around 60 minutes (half the window). A miner with most of the hash rate can do what a single miner cannot and hold the median back for weeks, which is the attack [The Time Warp](/rabbit-hole/time-warp) walks through.
