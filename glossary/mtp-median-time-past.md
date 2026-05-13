---
title: "MTP (Median Time Past)"
slug: mtp-median-time-past
draft: false
shortDefinition: "Bitcoin's method of tracking 'network time' by the median of the last 11 block timestamps, preventing extreme timestamp manipulation."
keyTakeaways:
  - "Prevents outlier timestamps from messing with time-based rules"
  - "Ensures consistent locktime functionality and consensus enforcement"
  - "A rolling median of 11 blocks for robust approximation of real time"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-113
liveWidget: ~
---

**Median Time Past (MTP)** is the median of the previous 11 [block headers'](/glossary/block-header) timestamps. It's used as the "current network time" reference for time-based consensus rules in Bitcoin, replacing the more easily-manipulated per-block timestamp.

The problem MTP solves: [miners](/glossary/miner) have limited but real discretion over block timestamps. The protocol allows a block's timestamp to be off by up to a couple of hours from real time, within bounds set by previous blocks. A single miner could push their timestamp forward to manipulate time-based logic - like making time-locked outputs spendable earlier than the depositor intended.

How MTP fixes it: by taking the median of the *previous* 11 blocks' timestamps, the network gets a value that:

- **Resists single-miner manipulation.** One miner setting a wildly skewed timestamp doesn't move the median significantly.
- **Stays close to real time.** The median of 11 honest miners' timestamps approximates real time well, within a small bias.
- **Increases monotonically.** As new blocks arrive, MTP can only move forward, providing a stable monotonic clock.

Where MTP is used:

- **[BIP-113](/glossary/bip-113) locktimes.** Time-based [`nLockTime`](/glossary/nlocktime) and [CLTV](/glossary/checklocktimeverify-cltv) evaluations use MTP as the reference, not the current block's timestamp.
- **[BIP-68](/glossary/bip-68-relative-locktime) relative locktimes** and [CSV](/glossary/checksequenceverify-csv).
- **Various other time-sensitive consensus rules.**

For most users, MTP is invisible. For protocol designers building time-locked constructions, it's the precise notion of "time" Bitcoin actually uses internally. Treating block timestamps as raw real-time gives wrong answers; treating MTP as real-time gives essentially correct ones.

The 11-block window is a sweet spot: large enough to resist manipulation, small enough to stay close to real time. Average lag from real time is around 60 minutes (half the window).
