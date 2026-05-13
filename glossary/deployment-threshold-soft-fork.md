---
title: "Deployment Threshold (Soft Fork)"
slug: deployment-threshold-soft-fork
draft: false
shortDefinition: "A required percentage of blocks signaling support for a soft fork before it locks in and activates (e.g., 95%)."
keyTakeaways:
  - "Sets a block signaling target for soft-fork readiness"
  - "Ensures upgrades only activate with high miner support"
  - "Sometimes criticized for giving miners disproportionate influence"
sources: []
relatedTerms:
  - bip-9-versionbits
  - bip-91
  - bip-119-ctv
  - bip-148-uasf
  - bip-159
  - chain-flag-day
  - consensus-parameter
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

Historically, Bitcoin used thresholds like 95% miner signaling for certain soft fork deployments. Once enough miners set a ‘support bit’ in their blocks, the upgrade was ‘locked in,’ and the network enforced new rules.
While this can coordinate activation smoothly, it also sparked debate over whether miners wield too much power in deciding upgrades. Alternatives include user-activated soft forks, where node operators set the rules. Regardless, a deployment threshold is a common mechanism for phased rollouts, minimizing disruptions and chain splits, provided there’s broad consensus.
