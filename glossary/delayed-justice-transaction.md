---
title: "Delayed Justice Transaction"
slug: delayed-justice-transaction
draft: false
shortDefinition: "An LN penalty mechanism with a waiting period before seizing a dishonest channel peer's funds, reducing false positives."
keyTakeaways:
  - "Adds a grace period before penalizing cheaters"
  - "Minimizes risk of accidental channel-state penalties"
  - "Maintains LN's deterrent against fraudulent broadcasts"
sources: []
relatedTerms:
  - absolute-fee
  - bip-125-replace-fee
  - checklocktimeverify-cltv
  - locktime
  - nlocktime
  - nsequence
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

"Delayed justice transaction" describes the time-window mechanics of Lightning's [penalty transaction](/glossary/penalty-transaction) system. The cheater's own balance in a unilaterally-broadcast channel close is held behind a CSV timelock (typically 144 blocks, about a day) before the cheater can spend it. During that window, the honest party can broadcast a justice transaction that sweeps the entire channel balance away.

The "delay" isn't a grace period for the cheater - it's a window for the victim to detect and respond. Sequence:

1. Alice broadcasts an outdated commitment transaction that overstates her balance.
2. The commitment hits the mempool and confirms.
3. Alice's claimed balance is now locked by `OP_CHECKSEQUENCEVERIFY 144` - she can't move it for ~24 hours.
4. Bob (or Bob's watchtower) sees the on-chain broadcast, recognizes the outdated state, and assembles a justice transaction that uses the revocation key Alice handed over when they updated state.
5. Bob's justice transaction spends both sides of Alice's commitment before the CSV expires.
6. Alice loses everything.

The CSV delay is what makes the penalty mechanism feasible in the real world. Without it, a cheater could broadcast and immediately spend their fraudulent output before anyone noticed. With it, defenders have a defined window to respond.

What "typically 144 blocks" actually means in practice:

- Channels set the CSV delay via the `to_self_delay` parameter at channel-open time. Common values are 144-2016 blocks (1 day to 2 weeks).
- Larger channels often use longer delays (giving defenders more reaction time at the cost of locking funds longer if you force-close legitimately).
- The setting is per-channel and per-side; you set your peer's delay, they set yours.

This is one of the design choices that makes Lightning channels safe-by-default for non-vigilant operators - as long as a [watchtower](/glossary/lightning-network-penalty) is monitoring on your behalf during the CSV window, sleeping through a cheat attempt doesn't cost you the channel.
