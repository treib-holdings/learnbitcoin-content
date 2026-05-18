---
title: "Address Clustering"
slug: address-clustering
draft: false
shortDefinition: "A chain analysis method associating multiple addresses with one user or entity based on transaction patterns."
keyTakeaways:
  - "Groups addresses under a single controller"
  - "Used by chain analysis to track user behavior"
  - "Reduces privacy if addresses share transaction patterns"
sources: []
relatedTerms:
  - address
  - address-indexing
  - address-reuse
  - chain-analysis
  - coin-control
  - coinjoin
  - fungibility
liveWidget: ~
---

Address clustering is the [chain-analysis](/glossary/chain-analysis) technique of grouping Bitcoin [addresses](/glossary/address) that probably share a common owner. It's the foundational primitive on which most blockchain surveillance is built.

The main heuristics:

- **Common-input ownership.** If a single [transaction](/glossary/transaction) spends UTXOs from multiple addresses, those addresses almost certainly share an owner (the only entity that could have signed for all of them). This is the single strongest clustering heuristic and the reason [PayJoin](/glossary/payjoin) is so disruptive to analysis - it deliberately violates this assumption.
- **Change-output detection.** A transaction usually has two outputs: payment + change. Change typically returns to the sender. Detecting which output is change reveals more about ownership. Several heuristics (round-number payments, fresh-address patterns, script-type matching) work imperfectly to identify change outputs.
- **Address reuse.** If you've seen address A before in any context, every new transaction touching A is linked to the prior history.
- **Timing correlation.** Transactions broadcast around the same time, from the same network location, with similar fee patterns - these correlate to a single user.
- **External anchoring.** Exchanges with KYC have customer records mapping addresses to identities. Once an address in a cluster is identified, the whole cluster is identified.

The privacy defense is to deliberately violate these heuristics:

- Don't combine UTXOs from different identity contexts in a single transaction.
- Use [coin control](/glossary/coin-control) to pick which UTXOs to spend.
- Run [CoinJoin](/glossary/coinjoin) or [PayJoin](/glossary/payjoin) to break the common-input assumption.
- Avoid [address reuse](/glossary/address-reuse).
- Use [Lightning](/glossary/lightning-network) for payments that don't need to be on-chain.

Clustering is not a single moment of detection; it's an accumulated set of evidence that gets stronger over time. The defense is also continuous: privacy on Bitcoin is a practice, not a one-shot fix.
