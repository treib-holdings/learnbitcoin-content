---
title: "Accelerator"
slug: accelerator
draft: false
shortDefinition: "A third-party service designed to rebroadcast or include your transaction in a block faster, often for a fee."
keyTakeaways:
  - "Offers faster transaction confirmation for a premium"
  - "Useful during high network congestion"
  - "Depends on miners or mining pools cooperating"
sources: []
relatedTerms:
  - fee-bumping
  - fee-estimation
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

A transaction accelerator is a third-party service that helps a stuck unconfirmed transaction get included in a block faster, typically by paying a mining pool out-of-band to prioritize it.

How the canonical accelerator services work:

1. User submits a stuck transaction's txid to the accelerator's web form.
2. The service pays a participating mining pool (or pools) directly via traditional payment rails or via a separate on-chain transaction.
3. The mining pool prioritizes the transaction in its block templates: included in any block the pool mines, regardless of the transaction's on-chain feerate.
4. If the pool gets a block, the transaction confirms.

Two flavors historically:

- **Free accelerators** (early ViaBTC, BTC.com): rebroadcast for free if the transaction meets some minimum feerate. Useful for bumping marginally-under-priced transactions when the rebroadcaster has wider peer connectivity than the user.
- **Paid accelerators** (ViaBTC's commercial service, Mempool.space's mining-pool-funded service, others): pay actual money to a participating pool to include your transaction.

Why they're largely obsolete now:

- **RBF is universal.** Replace-by-Fee (especially after Bitcoin Core 28.0's full-RBF default in 2024) lets you bump a stuck transaction's feerate yourself. No third party needed.
- **CPFP works.** Child-Pays-For-Parent lets you spend an output of the stuck transaction at a high feerate, pulling both into the same block.
- **Mempool transparency.** Tools like mempool.space's fee estimator make it much harder to get stuck in the first place.

Accelerators were a workaround for the era of mandatory opt-in RBF, where many transactions were broadcast non-replaceable, leaving fee bumping impossible. With RBF default, the use case for accelerators is mostly limited to legacy non-RBF transactions or transactions where the original sender lost the wallet that signed them. For ordinary stuck transactions in 2026: bump the fee with RBF instead.
