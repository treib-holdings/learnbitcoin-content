---
title: "Sibling Transaction"
slug: sibling-transaction
draft: false
shortDefinition: "Two or more mempool transactions sharing at least one common parent input or output, considered siblings in transaction ancestry."
keyTakeaways:
  - "Identifies transactions with shared ancestry in the mempool"
  - "Affects fee bumping or eviction decisions under package-based logic"
  - "Useful for analyzing complex chains of unconfirmed outputs"
sources: []
relatedTerms: []
liveWidget: ~
---

In mempool logic, when multiple transactions depend on the same unconfirmed input or produce outputs for each other, they form a chain of dependencies. If they share some but not all inputs/outputs, they can be labeled siblings. Mempool policies like CPFP (Child Pays for Parent) or package relay might consider sibling transactions collectively if their fees or dependencies relate. Sibling relationships also occur in scenarios like partial merges or side-by-side replacements. This classification helps node policies decide which transactions to keep or evict if mempool size is constrained.
