---
title: "Block Size"
slug: block-size
draft: false
shortDefinition: "The maximum data permitted in a block, historically 1 MB but effectively larger under SegWit's weight-based rules."
keyTakeaways:
  - "Initially capped at 1 MB to prevent spam"
  - "SegWit introduced a weight-based system up to 4M weight units"
  - "Allows higher effective capacity than the strict 1 MB limit"
sources: []
relatedTerms:
  - bip-42
  - bip-102-2mb-block-size
  - block
  - block-reward
  - block-subsidy
  - blockchain
  - halving-halvening
  - merkle-root
liveWidget: ~
---

Originally, Bitcoin blocks had a hard-coded limit of 1 MB. This restriction helps prevent network spam and controls resource usage for node operators. However, with the activation of Segregated Witness (BIP 141), the concept of 'block weight' was introduced, allowing some transactions (particularly those using SegWit) to occupy additional space beyond the nominal 1 MB limit.
In practice, this means that post-SegWit blocks can exceed 1 MB in raw data size, often reaching around 1.3-1.5 MB on average. The new measure, called the 'block weight limit,' tops out at 4 million weight units. The broader goal is to balance transaction throughput with decentralization, ensuring full nodes remain accessible to the widest range of participants.
