---
title: "Block Height"
slug: block-height
draft: false
shortDefinition: "The count of blocks since the genesis block (which is at height 0)."
keyTakeaways:
  - "Counts blocks from the original genesis block"
  - "Used for referencing specific points in the blockchain"
  - "Essential for protocol events tied to block intervals"
sources: []
relatedTerms:
  - bip-30
  - bip-34
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-propagation
  - block-time
  - blockchain
  - difficulty-retargeting
  - genesis-block
  - hal-finneys-running-bitcoin
  - halving-halvening
liveWidget: ~
---

Block height measures how many blocks have been stacked on top of the very first block in Bitcoin's chain. If you imagine the blockchain as a tower, the genesis block is the ground floor, and each subsequent block adds one additional level. So, a block height of 500,000 means there have been 500,000 blocks mined since that first legendary block.
This simple metric provides an easy way to reference specific blocks, track the network's age, and implement rules that activate at certain heights (such as halving events or other protocol upgrades). When you see references like "block #700,000," that number is the block height.
