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

"Estimated confirmation blocks" is the output of fee estimation: given the current mempool state and the transaction's feerate, how many blocks until it confirms? Most wallets and explorers expose it as a label like "confirms in ~3 blocks" or "~30 min."

How the estimate is built:

- **Bitcoin Core's `estimatesmartfee` RPC** returns the feerate needed to confirm within N blocks at some target probability. It works by looking at recent block contents and mempool composition.
- **Mempool snapshots** from sites like mempool.space group pending transactions by feerate and project how many blocks of capacity (at the 4 million weight unit budget per block) are queued.
- **Wallet integrations** combine the two: pick a target confirmation time, look up the corresponding feerate, build the transaction with that fee.

What can throw off the estimate:

- **Fee-market spikes** during congestion. A new wave of high-fee transactions can push your transaction back several blocks. The estimate updates, but the transaction you've already broadcast is stuck at its original fee unless you bump it.
- **Empty blocks.** Occasional miners produce empty or near-empty blocks (sometimes for SPV-mining reasons), wasting block-space capacity and pushing back queued transactions.
- **Sudden mempool clearing.** A few high-volume blocks in a row can clear the backlog and shrink expected confirmation times faster than estimates predict.

The right way to use the estimate: pick a confirmation target, use the estimated feerate, accept that the actual confirmation time varies around the estimate by ~1-3 blocks. For time-sensitive payments, signal RBF and be prepared to bump if necessary. For "I want this confirmed today" use cases, the default estimate is fine.
