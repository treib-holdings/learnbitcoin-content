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

The deployment threshold is the percentage of recent blocks that must signal support for a proposed soft fork before it activates. Under BIP 9 (versionbits), the standard threshold was 95% of blocks in a 2016-block retarget period setting a designated version bit.

This worked fine for technical upgrades the mining community was uniformly behind. It worked badly for upgrades miners had economic or political reasons to slow down.

The SegWit deployment (2016-2017) is the canonical case study. SegWit was a clean improvement; most users wanted it; large portions of the mining hashrate stalled signaling for months for various reasons (some legitimate concerns about implementation details, some commercial: ASICBoost was incompatible with SegWit and some miners preferred not to deprecate that revenue stream). The 95% threshold gave a minority of miners de-facto veto power.

The resolution was multi-pronged: BIP 91 lowered the SegWit signaling threshold to 80% with a forced lock-in, BIP 148 was a User-Activated Soft Fork (UASF) showing that economically significant nodes could enforce SegWit rules even without miner signaling, and the combined pressure got miners to signal.

Lesson learned: pure miner-threshold activation makes upgrades hostage to mining politics. Taproot's activation used "Speedy Trial" - BIP 9 signaling with a hard minimum activation height, so the upgrade activates either at threshold or at the height, whichever comes first. No more indefinite stuck deployments.

The deployment threshold remains useful as a coordination signal, but the days when it was treated as the final arbiter of activation are over.
