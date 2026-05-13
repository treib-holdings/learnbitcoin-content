---
title: "MTP (Median Time Past)"
slug: mtp-median-time-past
draft: false
shortDefinition: "Bitcoin’s method of tracking ‘network time’ by the median of the last 11 block timestamps, preventing extreme timestamp manipulation."
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

Instead of trusting each block’s timestamp as-is (which could be skewed by miners), nodes calculate MTP from the timestamps of the previous 11 blocks. This median value is used in consensus rules—like locktime checks—to ensure no single miner can push block timestamps dramatically forward or backward. It’s more stable and tamper-resistant than using a single block’s timestamp, helping maintain accurate sequence-based features like nLocktime or time-locked scripts. MTP thus anchors the concept of ‘current network time’ in a rolling historical window of real block data.
