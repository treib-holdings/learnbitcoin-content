---
title: "Fraud Proof"
slug: fraud-proof
draft: false
shortDefinition: "A cryptographic proof in layer-2 or sidechain systems indicating a block/transaction is invalid, letting honest nodes reject it."
keyTakeaways:
  - "Prevents invalid states in layer-2 or sidechain designs"
  - "Requires watchers to detect and prove fraudulent data"
  - "Protects users without each having to validate every detail"
sources: []
relatedTerms:
  - fraudulent-channel-close
  - htlc-hashed-time-locked-contract
  - merkle-inclusion-proof
  - merkle-proof
  - penalty-transaction
  - spv-simplified-payment-verification
liveWidget: ~
---

Fraud proofs are akin to a detective presenting bulletproof evidence of wrongdoing. In scalable solutions like rollups or sidechains, users often don't verify every transaction themselves. Instead, they rely on the ability to provide a 'fraud proof' if someone tries to post a bogus state. This proof demonstrates that a particular block or transaction violates the rules.
In practice, watchers or validators keep an eye on the chain and generate a fraud proof if they spot cheating. Honest participants then reject that invalid block, reverting to the last valid state. If no fraud proof is presented, everyone assumes the blocks are legitimate. This technique can reduce on-chain data while preserving trust-but requires robust incentives to keep watchers vigilant.
