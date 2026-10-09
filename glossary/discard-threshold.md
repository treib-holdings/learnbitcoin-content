---
title: "Discard Threshold"
slug: discard-threshold
draft: false
updated: "2026-10-09"
shortDefinition: "A mempool rule where the lowest-fee transactions get dropped when the mempool reaches its full capacity."
keyTakeaways:
  - "Drops low-fee transactions from the mempool under high load"
  - "Encourages higher fees in periods of heavy network traffic"
  - "Varies by node configuration and available memory"
sources:
  - { label: "Ordinals docs - Runes specification (activates on block 840,000)", url: "https://docs.ordinals.com/runes/specification.html" }
  - { label: "mempool.space - block 840,002, first block over 500 sat/vB median after the April 20, 2024 halving", url: "https://mempool.space/block/00000000000000000002c0cc73626b56fb3ee1ce605b0ce125cc4fb58775a0a9" }
  - { label: "Bitcoin Core 29.1 release notes (September 2025) - default minrelaytxfee lowered to 100 sat/kvB (0.1 sat/vB)", url: "https://bitcoincore.org/en/releases/29.1/" }
  - { label: "mempool.space source - dashboard shows mempoolminfee as 'Minimum fee' or 'Purging'", url: "https://github.com/mempool/mempool/blob/master/frontend/src/app/dashboard/dashboard.component.html" }
  - { label: "mempool.space source - fee recommendations never go below the purge rate (mempoolminfee)", url: "https://github.com/mempool/mempool/blob/master/backend/src/api/fee-api.ts" }
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

- During fee-rate escalation (Ordinals era, the Runes launch in April 2024, market spikes), the discard threshold can jump from the relay minimum to 50+ sat/vB within hours. That minimum was 1 sat/vB by default until Bitcoin Core 29.1 (September 2025) lowered it to 0.1 sat/vB.
- A transaction broadcast at "normal" fees during a calm period can become unrelayable if the mempool fills before it confirms.
- Bumping with [RBF](/glossary/bip-125-replace-fee) is the standard recovery: replace the stuck transaction with a higher-feerate version.
- mempool.space shows this floor on its dashboard as "Minimum fee", relabeled "Purging" once its node starts evicting transactions. Its next-block estimate is a different number, the rate needed to get into the next block rather than just stay in the mempool, and it never drops below the floor.

The discard threshold is also a defense against mempool spam: an attacker who wants to flood the network with low-fee garbage finds that the floor rises as their attack continues, naturally pricing out the spam. The mempool is a fee market, and the discard threshold is the price-clearing mechanism.
