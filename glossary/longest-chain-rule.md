---
title: "Longest Chain Rule"
slug: longest-chain-rule
draft: false
shortDefinition: "Bitcoin nodes follow the chain with the most accumulated proof-of-work, ensuring consensus in a decentralized network."
keyTakeaways:
  - "Nodes resolve conflicts by picking the chain with the most work"
  - "Deters attackers from rewriting the ledger without immense hash power"
  - "Ensures consistent ledger state across the decentralized network"
sources: []
relatedTerms: []
liveWidget: ~
---

When multiple block candidates exist (like in a fork scenario), each node defaults to whichever chain has the greatest total proof-of-work behind it. Miners build upon that chain, extending the network consensus. Honest nodes automatically reorganize to this heavier chain, discarding blocks from shorter branches. This principle underpins Bitcoin's security-rewriting history requires redoing more work than the honest chain, making attacks prohibitively expensive. In practice, it's sometimes phrased as 'longest chain rule' but more precisely means 'most work chain' rule.
