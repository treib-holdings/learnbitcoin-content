---
title: "ZKCP (Zero-Knowledge Contingent Payment)"
slug: zkcp-zero-knowledge-contingent-payment
draft: false
shortDefinition: "A protocol letting a buyer pay for secret data only if it's correct, using zero-knowledge proofs to ensure fairness."
keyTakeaways:
  - "Leverages zero-knowledge proofs so data validity is provable before reveal"
  - "Prevents seller cheating (fake data) or buyer cheating (not paying after receiving data)"
  - "An example of advanced contract logic possible on top of Bitcoin"
sources: []
relatedTerms:
  - gzen-generalized-zen
  - hash-locktime-contract-hlc
  - hash-puzzle
  - htlc-hashed-time-locked-contract
liveWidget: ~
---

ZKCP ensures that if a seller's data (say a software exploit or puzzle solution) is valid, the buyer automatically releases payment, but if the data is invalid, the buyer pays nothing. The seller provides a zero-knowledge proof showing correctness without fully disclosing the data before payment. Once the buyer sees the proof, they finalize the Bitcoin transaction, which triggers the release of the secret. While not standard in everyday Bitcoin usage, ZKCP demonstrates advanced cryptographic ways to trade digital information trustlessly. It's a precursor to more sophisticated DLC or scriptless scripts approaches.
