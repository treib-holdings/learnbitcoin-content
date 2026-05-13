---
title: "Replace-by-Fee (RBF)"
slug: replace-fee-rbf
draft: false
shortDefinition: "A mechanism allowing a sender to rebroadcast an unconfirmed TX with higher fees, replacing the original transaction in the mempool."
keyTakeaways:
  - "Allows fee bumping on unconfirmed transactions"
  - "Enhances user control in congested mempool conditions"
  - "Reduces reliability of zero-conf payments"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - delayed-justice-transaction
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

RBF is a mempool policy letting users bump a stuck transaction’s fee so miners are more likely to confirm it. The original TX must signal RBF capability. Once replaced, nodes drop the old TX from their mempool and accept the new one with higher fees. This helps expedite confirmation in times of rising fees, but undermines zero-conf assumptions for receiving parties (since the sender can replace the TX at any point until it’s mined). Some wallets now default to RBF to manage unpredictable fee environments.
