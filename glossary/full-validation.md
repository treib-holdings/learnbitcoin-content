---
title: "Full Validation"
slug: full-validation
draft: false
shortDefinition: "When a node verifies every single block and transaction under Bitcoin’s consensus rules, ensuring complete data integrity."
keyTakeaways:
  - "Provides the highest level of security and trustlessness"
  - "Checks every consensus rule from genesis block onward"
  - "Requires more computational resources but enhances network resilience"
sources: []
relatedTerms:
  - corrupted-chain-state
  - double-spend
  - full-node
  - node
  - node-synchronization
  - reorg-reorganization
  - spv-simplified-payment-verification
liveWidget: ~
---

Full validation is akin to meticulously checking each page of a massive ledger. Your node doesn’t just trust that others have done the work correctly—it runs every cryptographic check itself. This includes signatures, block structure, transaction rules, and so on.
The alternative—partial validation—occurs in light clients or SPV wallets, which trust that full nodes have done the heavy lifting. While SPV wallets are more lightweight, they rely on external sources for some data. Full validation ensures you never accept an invalid block or transaction, boosting your security and reinforcing the decentralized ethos that no single source of ‘truth’ can override the consensus rules.
