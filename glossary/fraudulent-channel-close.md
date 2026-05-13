---
title: "Fraudulent Channel Close"
slug: fraudulent-channel-close
draft: false
shortDefinition: "Attempting to close a Lightning channel using a prior channel state to steal funds, punished by a penalty transaction."
keyTakeaways:
  - "Cheater tries using an old channel snapshot for personal gain"
  - "Currently penalized by seizing the cheater's LN funds"
  - "Provides a strong deterrent against fraudulent closes"
sources: []
relatedTerms:
  - fraud-proof
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - penalty-transaction
liveWidget: ~
---

A fraudulent channel close is when a [Lightning](/glossary/lightning-network) participant tries to broadcast an outdated channel state to mainnet - one that allocates more funds to themselves than the current actual state allows. It's the "cheating" pattern Lightning's penalty mechanism is specifically designed to deter.

How it works (and why it usually fails):

1. **The cheater holds an old [commitment transaction](/glossary/lightning-channel)** that gave them more BTC than they currently deserve. (E.g., the channel started 50/50, they later paid the counterparty 0.3 BTC, but they still have the old 50/50 commitment transaction signed and ready to broadcast.)
2. **They broadcast the old commitment** during a moment when they think the counterparty might be offline.
3. **The honest counterparty's [watchtower](/glossary/lightning-network-penalty)** (or their own monitoring) detects the broadcast.
4. **The counterparty broadcasts a [penalty transaction](/glossary/penalty-transaction)** using their stored revocation key, which claims the *entire* channel balance - including what the cheater thought they'd just stolen.
5. **The cheater loses everything in the channel.** Net effect: they tried to steal 0.3 BTC and lost 1 BTC (the whole channel).

Why the deterrent works:

- **The penalty is total**, not equal. The cheater doesn't lose just the amount they tried to steal; they lose *all* their channel funds.
- **The detection window is generous.** Channel close transactions have a CSV-locked delay (typically 144-1008 blocks) before the closing party can spend their funds. The counterparty has that window to publish the penalty.
- **Watchtowers exist** to monitor on behalf of users who can't be online 24/7.

What can still go wrong:

- **If your counterparty is offline for the entire CSV delay window**, the cheater succeeds.
- **If your watchtower is malicious or compromised**, you're vulnerable.
- **If the cheater accidentally broadcasts an old state** (from a backup restore, for example), they lose their own funds even though they weren't trying to cheat.

The penalty model is harsh but effective. [Eltoo](/glossary/eltoo), if it ever activates, would replace this with a more forgiving "old states are simply invalidated" model. Until then, Lightning users carry the operational burden of careful state management - one wrong move with old backups can destroy a channel's worth of funds.
