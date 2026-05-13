---
title: "Fungibility"
slug: fungibility
draft: false
shortDefinition: "The property that all units of a currency are interchangeable with no differing 'identity' or history attached."
keyTakeaways:
  - "Crucial to a currency's acceptance and utility"
  - "Blockchain tracing can threaten pure fungibility"
  - "Privacy techniques aim to keep BTC 'one coin = one coin'"
sources: []
relatedTerms:
  - address-clustering
  - address-reuse
  - coinjoin
  - disinflation
  - double-blind-marketplace
  - security
  - shielded-coinjoin
  - silent-payments
  - stealth-address
liveWidget: ~
---

Fungibility is the property that any one unit of a currency is interchangeable with any other. A dollar from your wallet and a dollar from the cash register are the same dollar; nobody asks where it's been.

Bitcoin is fungible *in protocol*: 1 BTC always equals 1 BTC, and the consensus rules don't distinguish between coins based on history. But Bitcoin is also fully *transparent* - every transaction is publicly visible forever, which means coins can be traced to past activity, including illicit activity. Blockchain analytics firms exploit this, and some exchanges or counterparties may refuse coins associated with hacks, ransomware, or sanctioned addresses. That practical reality erodes pure fungibility.

Several tools push back. [CoinJoin](/glossary/coinjoin) breaks transaction-graph linkage by combining inputs from many users in a single transaction. [Silent Payments](/glossary/silent-payments) and [stealth addresses](/glossary/stealth-address) reduce on-chain address reuse. [Lightning](/glossary/lightning-network) routes payments off-chain, where they aren't individually broadcast.

The deeper argument is that fungibility is a property a community has to defend, not just one a protocol enforces. The protocol can't prevent a third party from deciding some coins are "tainted." Bitcoiners can - by refusing to accept that framing and by using privacy tools as a matter of course. A currency where coins have memory eventually becomes a currency where coins have permission.
