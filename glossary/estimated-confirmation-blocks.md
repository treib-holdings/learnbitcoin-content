---
title: "Estimated Confirmation Blocks"
slug: estimated-confirmation-blocks
draft: false
shortDefinition: "A projection (often shown by wallets/explorers) of how many blocks until a given transaction might confirm at its current fee."
keyTakeaways:
  - "Offers a best-effort guess on confirmation time"
  - "Depends on current mempool congestion and fee rates"
  - "Subject to change if network conditions shift"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - block
  - block-height
  - block-propagation
  - block-time
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - transaction-fee
liveWidget: ~
---

When you broadcast a Bitcoin transaction, your wallet or a block explorer might say "Estimated confirmation in ~3 blocks." This is based on mempool conditions, current fee rates, and miners' recent block-building patterns. Essentially, it's an educated guess about when your transaction's fee will be competitive enough to be included in a block.
Because fee markets fluctuate, these estimates can change. If a sudden influx of high-fee transactions arrives, your transaction might take longer unless you bump your fee via Replace-by-Fee (RBF) or Child-Pays-for-Parent (CPFP). Nonetheless, it provides a convenient rough timeline-helpful for managing user expectations, especially for time-sensitive transactions.
