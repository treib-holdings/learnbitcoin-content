---
title: "Miner Orphan Rate"
slug: miner-orphan-rate
draft: false
shortDefinition: "The percentage of mined blocks not accepted into the longest chain, often due to propagation delays or near-simultaneous finds."
keyTakeaways:
  - "Occurs when two competing valid blocks are found simultaneously"
  - "Reflects network propagation speed, not malicious activity"
  - "Impacts miner profitability; larger pools tend to have fewer orphans"
sources: []
relatedTerms: []
liveWidget: ~
---

When two miners find valid blocks at roughly the same time, only one can form the chain’s tip; the other becomes an orphan (or more accurately, a stale block). Network latency, block propagation speed, and topological factors all contribute. A high orphan rate means many blocks are being found but lost in races, usually indicating network inefficiencies. Larger miners with better connectivity or specialized relay systems may suffer fewer orphans, giving them a slight advantage. Bitcoin’s difficulty retargeting eventually balances overall production rates, but orphaned blocks remain a normal side effect of decentralized consensus.
