---
title: "ASICBoost"
slug: asicboost
draft: false
shortDefinition: "A mining optimization technique reducing parts of the SHA-256 calculation, lowering energy costs and boosting efficiency."
keyTakeaways:
  - "Optimizes the SHA-256 hashing process"
  - "Increases mining efficiency and profitability"
  - "Originally sparked debates on fairness and patents"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - asic-resistance
  - mining-algorithm
  - mining-software
liveWidget: ~
---

ASICBoost is a mining-efficiency optimization that exploits a quirk in SHA-256's structure to skip some redundant work, gaining roughly 15-20% efficiency on top of baseline [ASIC](/glossary/asic-application-specific-integrated-circuit) performance. Two variants exist:

- **Overt ASICBoost.** Manipulates the block header version field to find collisions that share state in the SHA-256 midstate computation. Visible on-chain; doesn't require any tricks at the protocol level.
- **Covert ASICBoost.** Manipulates the merkle root by reordering transactions, achieving the same midstate-collision effect. Not directly visible on-chain. Famously incompatible with [SegWit](/glossary/segwit-segregated-witness-bip-141), which restructures how the merkle root is computed.

The covert variant became a political flashpoint during the 2017 [SegWit](/glossary/segwit-segregated-witness-bip-141) activation deadlock. Greg Maxwell publicly observed that some major mining hardware (notably from one specific manufacturer at the time) appeared to use covert ASICBoost, and that the manufacturer's resistance to SegWit might be partly driven by SegWit incompatibility with that optimization. The accusation was disputed; the timing was suggestive.

The episode raised the question: who is gaining hidden efficiency advantages, and does the network know? The answer, broadly, was "yes, this was happening" - leading to discussions about whether to deliberately disable covert ASICBoost in future protocol changes.

Today (2026), modern mining ASICs widely implement overt ASICBoost as standard, with the optimization built into firmware. It's no longer a secret advantage; it's table stakes. The story is now mostly historical, but it's a useful case study in how hardware-level optimizations can interact with consensus-level decisions in subtle ways.
