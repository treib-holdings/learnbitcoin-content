---
title: "Poisson Process"
slug: poisson-process
draft: false
shortDefinition: "A statistical model describing Bitcoin block discovery as a random event with an average 10-minute interval but high variance."
keyTakeaways:
  - "Blocks arrive randomly but average ~10 minutes over time"
  - "Variance is normal- occasionally blocks come seconds apart or hours apart"
  - "Difficulty retargeting keeps the long-term average stable"
sources: []
relatedTerms:
  - difficulty
  - difficulty-retargeting
  - proof-work-pow
liveWidget: ~
---

A Poisson process is a statistical model where events happen independently at a constant average rate but with random timing. Bitcoin block discovery is a near-perfect Poisson process - each hash attempt is independent, the probability of finding a valid block is constant given the current [difficulty](/glossary/difficulty), and the resulting block arrivals follow an exponential distribution.

What this means in practice:

- **The expected time between blocks is 10 minutes**, set by [difficulty retargeting](/glossary/difficulty-retargeting).
- **The actual time between any given pair of blocks is random.** Half the time it's under 7 minutes; about a third of the time it's over 12 minutes; a few times a year a block takes over an hour.
- **There's no "due" block.** A 30-minute gap doesn't make the next block "more likely soon." Each second of hashing is independent of every prior second.

Why this matters for users:

- **[Block time](/glossary/block-time) variance is normal.** People who see a 50-minute gap and worry the network is broken are misreading the statistics. The network is fine; the variance is built in.
- **[Confirmation count](/glossary/double-spend) matters more than wall-clock time.** For settlement security, the question is "how many blocks have been mined on top of my transaction," not "how many minutes have passed."
- **You can compute probabilities.** Given the network's current hash rate, you can calculate the probability of a block appearing in the next N minutes, of N blocks in 1 hour, of zero blocks in 1 hour, etc. All standard exponential-distribution math.

For miners, the Poisson nature of block discovery is the source of revenue variance - and the reason [pooled mining](/glossary/pooled-mining) is so popular. Solo mining means your revenue is one big lump every N months with a giant variance window. Pooled mining smooths the Poisson distribution into a steadier income stream.

A "Poisson process" is the technical name for "random independent events at a constant rate." Bitcoin is the most famous real-world example of one.
