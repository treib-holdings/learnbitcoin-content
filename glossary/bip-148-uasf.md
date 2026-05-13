---
title: "BIP 148 (UASF)"
slug: bip-148-uasf
draft: false
shortDefinition: "A user-activated soft fork pushing SegWit by rejecting blocks not signaling for SegWit after a deadline."
keyTakeaways:
  - "Nodes refused non-SegWit blocks after a certain time"
  - "Demonstrated node-driven consensus power"
  - "Helped finalize SegWit activation in 2017"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bitcoin-core
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

BIP 148, documented in [BIP-148](https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki), is a user-activated soft fork (UASF) that pressured miners to support SegWit. After a specified deadline, nodes enforcing BIP 148 would reject any blocks that didn’t signal readiness for SegWit, effectively risking a chain split if miners failed to comply.
This maneuver underscored the power of nodes in Bitcoin’s governance, highlighting that miners alone don’t decide consensus rules. BIP 148 played a key role in the 2017 activation of SegWit, ultimately succeeding in forcing miner compliance. While contentious at the time, it became a historical moment demonstrating community-driven consensus in Bitcoin’s decentralized ecosystem.
