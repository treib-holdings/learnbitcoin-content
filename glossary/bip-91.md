---
title: "BIP 91"
slug: bip-91
draft: false
shortDefinition: "A signaling coordination method during the SegWit activation phase of 2017’s scaling debates."
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

BIP 91, documented in [BIP-91](https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki), emerged during the contentious 2017 block size and SegWit activation debates, specifically as part of the New York Agreement (NYA). It essentially forced miners to signal for SegWit (BIP 141) by making blocks that didn’t signal invalid if 80% of recent blocks indicated support.
This approach sought to accelerate SegWit adoption without requiring a formal hard fork. While its use was controversial, it ultimately contributed to SegWit’s activation in August 2017. BIP 91 showcased how miner-led signaling could align with user demands, though it also fueled broader governance discussions on the role of miners versus node operators.
