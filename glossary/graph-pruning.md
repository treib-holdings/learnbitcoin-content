---
title: "Graph Pruning"
slug: graph-pruning
draft: false
shortDefinition: "An LN node's maintenance process for removing stale or inactive channels from its local network map to improve efficiency."
keyTakeaways:
  - "Deletes outdated or non-responsive LN channels from the routing table"
  - "Saves memory and improves route-finding performance"
  - "Ensures nodes have a current snapshot of active channels"
sources: []
relatedTerms:
  - inactive-channel
  - lightning-invoice
  - pruning-mode
liveWidget: ~
---

Over time, some Lightning channels become unresponsive or inactive, yet they stay in the node's database. Graph pruning removes these dead branches, minimizing memory use and speeding up routing calculations. Nodes typically prune channels that haven't seen updates or successful pings for a set period.
This housekeeping step ensures the LN topology reflects the real, active channels rather than cluttering it with outdated entries. Users generally don't notice pruning, as it happens in the background. Still, it's essential for maintaining a lean and accurate view of the ever-evolving LN network graph.
