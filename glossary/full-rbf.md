---
title: "Full RBF"
slug: full-rbf
draft: false
shortDefinition: "A proposal to make all unconfirmed transactions replaceable by default, easing fee bumps in a congested mempool."
keyTakeaways:
  - "Makes fee updates simpler and more universal"
  - "Discourages reliance on zero-confirmation transactions"
  - "Hotly debated among merchants and node operators"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-node
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

Traditionally, RBF (Replace-by-Fee) is opt-in: you must signal RBF in your original transaction if you want the option to bump fees. Full RBF flips that script, treating every unconfirmed transaction as replaceable, unless it's confirmed in a block. This helps users quickly modify fees if the mempool gets clogged but also means zero-confirmation payments become even riskier.
Supporters say it simplifies the fee-bumping process, aligning wallets with best practices. Critics argue it undermines the user experience of zero-confirmation commerce, though zero-conf has always carried double-spend risk. If widely adopted, Full RBF would likely push more businesses to require at least one confirmation or switch to LN for instant payments.
