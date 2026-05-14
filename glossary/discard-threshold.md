---
title: "Discard Threshold"
slug: discard-threshold
draft: false
shortDefinition: "A mempool rule where the lowest-fee transactions get dropped when the mempool reaches its full capacity."
keyTakeaways:
  - "Drops low-fee transactions from the mempool under high load"
  - "Encourages higher fees in periods of heavy network traffic"
  - "Varies by node configuration and available memory"
sources: []
relatedTerms:
  - absolute-fee
  - dust
  - dust-attack
  - dust-limit
  - dust-sweeping
  - transaction
  - transaction-fee
liveWidget: ~
---

The discard threshold is the dynamic minimum fee rate a transaction must pay to stay in a Bitcoin node's mempool when memory is under pressure. Below the threshold, the node drops the transaction; at the threshold or above, it stays.

How it works in Bitcoin Core:

- Each node enforces a maxmempool size (default 300 MB).
- When the mempool exceeds that size, the node evicts the lowest-feerate transactions first.
- The feerate of the evicted transactions becomes a floor: any incoming transaction below that feerate is rejected outright.
- The floor decays slowly over time as new low-fee transactions become acceptable, but during fee spikes it can rise dramatically.

Why this is operationally important:

- During fee-rate escalation (Ordinals era, post-halving periods, market spikes), the discard threshold can jump from ~1 sat/vB to 50+ sat/vB within hours.
- A transaction broadcast at "normal" fees during a calm period can become unrelayable if the mempool fills before it confirms.
- Bumping with [RBF](/glossary/bip-125-replace-fee) is the standard recovery: replace the stuck transaction with a higher-feerate version.
- Tools like mempool.space's "next-block fee" estimate effectively show the current discard threshold so wallets can set fees that will actually stick.

The discard threshold is also a defense against mempool spam: an attacker who wants to flood the network with low-fee garbage finds that the floor rises as their attack continues, naturally pricing out the spam. The mempool is a fee market, and the discard threshold is the price-clearing mechanism.
