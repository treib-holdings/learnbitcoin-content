---
title: "BIP 91"
slug: bip-91
draft: false
shortDefinition: "A signaling coordination method during the SegWit activation phase of 2017's scaling debates."
keyTakeaways:
  - "Soft-fork coordination tool for SegWit signaling"
  - "Part of the 2017 New York Agreement"
  - "Helped finalize SegWit activation despite controversy"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-148-uasf
  - bitcoin-core
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

[BIP-91](https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki) is the miner-coordinated mechanism that activated [SegWit](/glossary/segwit-segregated-witness-bip-141) in August 2017, defusing what was about to be a chain-splitting confrontation with [BIP-148 (UASF)](/glossary/bip-148-uasf).

The deadlock context: SegWit had been ready for a year. The [BIP-9](/glossary/bip-9-versionbits) signaling threshold (95%) couldn't be reached because a minority of miners were holding out. The UASF crowd was preparing to enforce SegWit unilaterally starting August 1, 2017, which would have orphaned non-signaling blocks and potentially split the chain.

BIP-91 was the compromise. Authored by James Hilliard and adopted by miners as part of the "SegWit2x" / New York Agreement effort, it lowered the activation threshold and forced rapid coordination:

1. **80% threshold** (lower than BIP-9's 95%) for SegWit signaling.
2. **Mandatory.** Once 80% was reached in a 336-block window, *all* miners had to signal for SegWit going forward, or their blocks would be orphaned.
3. **Quick deployment.** Locked in mid-July 2017, activated in August.

What this actually achieved:

- **SegWit activated cleanly** about 10 days before BIP-148's August 1 deadline. No chain split, no orphaned blocks at scale.
- **Demonstrated miner responsiveness to user pressure.** The credible threat of UASF moved miners who had been refusing for over a year.
- **The "SegWit2x" hard-fork half of the agreement was abandoned** later in 2017, when it became clear users had no appetite for the 2MB block-size hard fork that miners had wanted. The "2x" never happened.

BIP-91 is a small technical document with outsized historical importance. It's the bridge between a stalemate and a successful upgrade, and the moment that established the modern "users hold the leverage, not miners" framing in Bitcoin governance.
