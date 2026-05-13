---
title: "Fee Bumping"
slug: fee-bumping
draft: false
shortDefinition: "Increasing a transaction's priority after it's broadcast, typically via Replace-by-Fee (RBF) or Child-Pays-for-Parent (CPFP)."
keyTakeaways:
  - "Prevents transactions from lingering in mempool at low fees"
  - "RBF replaces the original transaction; CPFP uses a child transaction"
  - "Widely supported feature in modern Bitcoin wallets"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

When network congestion rises, your original transaction might get stuck indefinitely if the fee is too low. Fee bumping solves this by revising the transaction with a higher fee or creating a child transaction that compensates for the parent's insufficient fee. RBF allows you to replace the original unconfirmed transaction, while CPFP has a dependent transaction pay extra to cover its parent's fee shortfall.
Both methods let you rescue a stuck transaction, but not all wallets or nodes support RBF. CPFP can be used even if the original transaction isn't RBF-enabled-assuming you control the unconfirmed output's address. Fee bumping has become standard practice, especially during mempool spikes, ensuring time-sensitive transactions confirm promptly.
