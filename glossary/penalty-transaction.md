---
title: "Penalty Transaction"
slug: penalty-transaction
draft: false
shortDefinition: "In LN, a transaction that punishes a dishonest channel partner who broadcasts an outdated commitment, awarding their funds to the honest party."
keyTakeaways:
  - "Deters LN participants from broadcasting outdated channel states"
  - "Transfers cheater's stake to honest peer if caught cheating"
  - "Integral to LN's trustless design in current channel implementations"
sources: []
relatedTerms:
  - eltoo
  - fraud-proof
  - fraudulent-channel-close
  - gui-wallet
  - htlc-hashed-time-locked-contract
liveWidget: ~
---

The penalty transaction (also called the "justice transaction") is Lightning's defense against a counterparty broadcasting an outdated channel state. If you cheat, the other side gets everything. All of it. Your balance, their balance, the whole channel.

How it works mechanically. Every Lightning channel commitment is asymmetric. Each side has their own version of the current commitment transaction, and each version includes:

- The other side's balance, immediately spendable by them.
- Your own balance, locked behind a `OP_CHECKSEQUENCEVERIFY` delay (typically 144 blocks, about a day).
- A "revocation path" that lets the other side claim your entire balance if they know a secret that you reveal to them when you both agree the state is replaced.

When you update the channel state, you reveal the revocation secret for the old commitment to the other side. Now if you ever broadcast that old commitment, your counterparty:

1. Sees the broadcast on-chain.
2. Before your CSV delay expires, broadcasts the penalty transaction using the revocation secret.
3. Claims both sides of the channel.

The CSV delay is what makes this work. It gives the honest party a window (in blocks) to broadcast the penalty before the cheater can sweep their own balance.

Operational implications:

- Your Lightning node must be online during the CSV window to broadcast the penalty if needed. An offline node can't respond to cheating, so you lose by default.
- [Watchtowers](/glossary/lightning-network-penalty) exist precisely to monitor your channels while you're offline, broadcasting penalties on your behalf.
- Force-closing your own channel (broadcasting your *current* state unilaterally, not an old one) is fine and doesn't trigger a penalty. The penalty mechanism only triggers when an *outdated* state hits the chain.

[Eltoo](/glossary/eltoo) is a proposed alternative where outdated states are automatically invalidated by newer ones without needing a punishment mechanism. It would simplify the watchtower story considerably but requires a soft fork (SIGHASH_ANYPREVOUT) that hasn't activated. The penalty model is what's in production today.
