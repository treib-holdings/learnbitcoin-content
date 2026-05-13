---
title: "BIP 34"
slug: bip-34
draft: false
shortDefinition: "Mandates that coinbase transactions explicitly include the block height, standardizing block referencing."
keyTakeaways:
  - "Forces coinbase to declare block height"
  - "Improves chain organization and validation"
  - "Prevents ambiguous references to block position"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-30
  - block
  - block-explorer
  - block-height
  - double-spend
  - transaction
liveWidget: ~
---

BIP 34, seen in [BIP-34](https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki), requires that each new block’s coinbase transaction script include the block height in its first data push. This ensures the network knows exactly which block a coinbase transaction is tied to, bringing added structure to how blocks reference themselves.
This change provides clearer indexing and helps prevent certain replay or reorganization issues. It also streamlines the chain’s internal consistency, making it easier for nodes to confirm that a newly found block matches its expected position in the blockchain sequence.
