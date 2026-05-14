---
title: "Pool Hopping"
slug: pool-hopping
draft: false
shortDefinition: "The strategy of switching between mining pools to exploit flaws in their reward systems, mostly fixed in modern pools."
keyTakeaways:
  - "Exploits reward timing in older pool payout schemes"
  - "Countered by modern methods (PPLNS, PPS+), making hopping unprofitable"
  - "Highlights the importance of robust mining pool reward structures"
sources: []
relatedTerms: []
liveWidget: ~
---

Pool hopping is the historical exploit of switching between mining pools to extract above-average rewards by gaming the pool's payout scheme. It was a real problem in 2010-2012; modern pool reward systems have made it practically impossible.

The vulnerable scheme was **proportional payout**: at the end of a round (when a block is found), the pool distributes the reward among all miners proportional to their share contribution in that round. The math problem: a hopper could mine the early shares (when share-per-block expected return is high because the block hasn't been found yet) and bail out before the late shares (where the round-block-find probability is much lower) reduced their expected reward.

How modern pools defeat it:

- **PPLNS (Pay-Per-Last-N-Shares).** Rewards are distributed based on the last N shares submitted, regardless of round boundaries. Hopping in and out doesn't help because your share contribution always counts proportionally to your most recent activity, not to which round it landed in.
- **PPS / PPS+ / FPPS.** The pool pays each share at a fixed expected-value rate (with a pool fee), regardless of when the block is actually found. The pool absorbs the variance. Miners can't game the timing because every share has the same value.
- **Score-based methods.** Variants that weight shares by their position in the round so early shares are worth less and late shares worth more, neutralizing the hopping advantage.

In 2026, pool hopping is essentially a non-issue in major mining pools. Foundry, AntPool, F2Pool, ViaBTC, MARA Pool, and others all use modern reward schemes that defeat it. The term persists mostly as a historical example of how subtle incentive misalignments in distributed systems can be ruthlessly exploited until the design improves.

Adjacent (and still relevant) variants: pool *hopping* in the sense of switching pools for legitimate operational reasons (fee comparison, payout schedule, geographic latency to pool servers) - that's just normal pool selection, not exploitation, and it's a healthy part of the mining market.
