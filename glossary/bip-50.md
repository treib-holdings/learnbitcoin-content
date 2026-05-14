---
title: "BIP 50"
slug: bip-50
draft: false
shortDefinition: "A document detailing how the network resolved the significant chain fork of March 2013."
keyTakeaways:
  - "Recounts a major fork and its resolution"
  - "Showcases early consensus-building in Bitcoin"
  - "Led to improved release processes to avoid future forks"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block
  - fork
  - reorg-reorganization
liveWidget: ~
---

BIP 50 isn't a protocol change. It's a postmortem.

On March 11, 2013, the network split. Bitcoin 0.7 used Berkeley DB with a hard cap on database locks per block; 0.8 had migrated to LevelDB with no equivalent limit. A larger-than-usual block produced by a 0.8 miner exceeded the BDB lock count on 0.7 nodes, which rejected it as invalid. The chain forked: 0.8+ followed the new block, 0.7 followed an alternative chain.

Resolution took six hours of frantic IRC coordination. Miners running 0.8 voluntarily downgraded back to 0.7 rules so the shorter (0.7-compatible) chain would overtake the longer one, and the network rejoined. One double-spend hit an OKPay deposit during the window; everything else recovered cleanly.

The lessons stuck. Bitcoin Core's release process got dramatically more paranoid about consensus-touching changes, and the incident is still cited as the canonical example of why "non-consensus" implementation details aren't really non-consensus. Anything that changes which blocks a node accepts is a consensus change, even when the spec says it shouldn't be.

Spec: [BIP-50](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki).
