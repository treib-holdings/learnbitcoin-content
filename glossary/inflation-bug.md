---
title: "Inflation Bug"
slug: inflation-bug
draft: false
shortDefinition: "A critical software flaw that allows minting more BTC than the 21 million cap (e.g., CVE-2018-17144)."
keyTakeaways:
  - "Threatens Bitcoin's core scarcity feature if unpatched"
  - "Highlight of why rapid fixes and community diligence matter"
  - "Historically rare but extremely serious vulnerability"
sources: []
relatedTerms:
  - bip-42
  - block-reward
  - block-subsidy
  - disinflation
  - halving-halvening
  - inflation
  - mining-subsidy
liveWidget: ~
---

An 'inflation bug' compromises Bitcoin's strict supply limit by letting attackers create extra coins via invalid but improperly validated transactions. The most famous instance, CVE-2018-17144, was discovered in 2018 and quickly patched. Had it been exploited, it could have introduced more BTC than the protocol's cap, shattering trust. Luckily, node operators and developers rushed to upgrade, averting any real damage. This event underscored the importance of thorough review and prompt patching of Bitcoin Core, since even a single overlooked bug can threaten the network's monetary integrity.
