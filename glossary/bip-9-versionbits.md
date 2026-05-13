---
title: "BIP 9 (VersionBits)"
slug: bip-9-versionbits
draft: false
shortDefinition: "A signaling method allowing miners to indicate support for soft-fork proposals in block headers before reaching activation thresholds."
keyTakeaways:
  - "Uses bits in block headers for miner signaling"
  - "Triggers soft forks after passing thresholds"
  - "Helps coordinate network upgrades more smoothly"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-91
  - bip-119-ctv
  - bip-125-replace-fee
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-148-uasf
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

BIP 9, detailed in [BIP-9](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki), introduced the VersionBits scheme. Each block header contains bits that miners set to signal readiness for a proposed soft fork. If enough miners indicate support (meeting a defined threshold within a specific period), the soft fork automatically activates.
This process streamlined Bitcoin's upgrade mechanism, making it more predictable and transparent. Without it, upgrades often relied on less-structured methods or required direct user consensus via other signals. BIP 9's approach helps align the network on when to trigger new features while minimizing the risk of chain splits, although it sometimes leads to debates about miner power versus user node sovereignty.
