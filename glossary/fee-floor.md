---
title: "Fee Floor"
slug: fee-floor
draft: false
shortDefinition: "An unofficial minimum fee rate below which transactions rarely get mined, especially during busy mempool conditions."
keyTakeaways:
  - "Reflects the lowest competitive fee rate during congestion"
  - "Transactions below it may remain unconfirmed for long"
  - "Can drop if the mempool clears or network activity declines"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-estimation
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

The 'fee floor' evolves alongside network usage. If the mempool is persistently full, miners naturally pick transactions with higher fees, pushing out extremely low-fee transactions. Over time, this behavior establishes a practical threshold-often in the range of a few sat/vByte-below which it's improbable your transaction will confirm in a timely manner.
This floor isn't a hard rule; if the network quiets down, even very low-fee transactions might confirm eventually. But under steady demand, transactions paying a fraction of the dominant rate end up stuck. Recognizing this dynamic helps users set realistic fees to avoid indefinite delays.
