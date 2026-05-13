---
title: "Efficient Range Proof"
slug: efficient-range-proof
draft: false
shortDefinition: "A cryptographic proof (like Bulletproofs) showing an amount lies within a range without disclosing the exact figure."
keyTakeaways:
  - "Proves an amount is within a valid range without revealing it"
  - "Bulletproofs are a popular implementation with smaller proof sizes"
  - "Enables confidential transactions while preserving supply integrity"
sources: []
relatedTerms:
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - merkle-root
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

Efficient range proofs let someone verify that a hidden value is within valid bounds (e.g., non-negative, below a maximum) without revealing the actual amount. Sidechains or privacy coins often utilize these proofs to enable confidential transactions-obscuring how much is sent while ensuring it's not an invalid amount.
Bulletproofs, for instance, significantly reduce proof size and verification time compared to older methods like Pedersen range proofs. In the Bitcoin ecosystem, these are more likely found in sidechain implementations or altcoins focusing on privacy. They represent a key cryptographic advancement for transaction confidentiality without sacrificing total supply auditing.
