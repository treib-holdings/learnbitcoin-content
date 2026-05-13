---
title: "Resource Exhaustion Attack"
slug: resource-exhaustion-attack
draft: false
shortDefinition: "A denial-of-service tactic flooding a node’s CPU, memory, or bandwidth with spam or malformed data."
keyTakeaways:
  - "Targets node capacity with spammy or malformed data"
  - "Nodes use auto-ban, mempool limits, or advanced relay to defend"
  - "Ongoing threat requiring performance and policy refinements"
sources: []
relatedTerms:
  - eclipse-attack
  - fee-sniping
  - griefing-attack
liveWidget: ~
---

Bitcoin nodes have finite resources; malicious actors can send huge volumes of transactions, invalid blocks, or repeated requests to overwhelm them. By hogging bandwidth or filling mempool memory with junk, an attacker aims to crash nodes or slow down their operations. Node software includes rate limits, mempool size constraints, and ban thresholds to mitigate such DOS attempts. Still, large-scale or well-coordinated attacks could degrade network performance, highlighting the need for constant resilience improvements, e.g., optimized relay protocols (Compact Blocks) and strict validation rules.
