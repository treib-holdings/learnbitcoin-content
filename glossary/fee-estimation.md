---
title: "Fee Estimation"
slug: fee-estimation
draft: false
shortDefinition: "Predicting the required sat/vByte rate to confirm within a certain timeframe, given current network conditions."
keyTakeaways:
  - "Helps users avoid overpaying or underpaying transaction fees"
  - "Involves reading mempool backlog and recent block inclusion rates"
  - "Can fluctuate quickly in times of sudden network activity"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

Fee estimation is both an art and a science, relying on mempool analysis and recent fee market data. Wallets often query node-based fee estimators or third-party services to guess how many satoshis per vByte you should pay to get included in the next block or within a handful of blocks.
During periods of heavy congestion, these estimates can spike rapidly, sometimes overshooting actual requirements. Conversely, low-activity periods might see recommended fees drop near the default relay minimum. It's rarely exact-many wallets allow either manual overrides or dynamic adjustments if the transaction remains unconfirmed longer than expected.
