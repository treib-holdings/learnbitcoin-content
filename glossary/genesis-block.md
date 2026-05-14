---
title: "Genesis Block"
slug: genesis-block
draft: false
shortDefinition: "The very first Bitcoin block, mined by Satoshi Nakamoto on January 3, 2009, referencing a Times headline."
keyTakeaways:
  - "Mined by Satoshi, forming the blockchain's foundation"
  - "Contains a reference to 2009 banking crisis headlines"
  - "Its coinbase reward is unspendable due to special coding"
sources: []
relatedTerms:
  - block-header
  - block-height
  - block-reward
  - block-subsidy
  - blockchain
  - coinbase-transaction
  - satoshi-nakamoto
  - whitepaper
liveWidget: ~
---

The genesis block is block 0 of the Bitcoin chain - the first one. [Satoshi Nakamoto](/glossary/satoshi-nakamoto) mined it on January 3, 2009, and embedded a now-famous message in its [coinbase transaction](/glossary/coinbase-transaction):

> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

This was a verbatim Times of London front-page headline from earlier that day. It serves two purposes. First, it proves the block wasn't pre-mined - it couldn't have existed before the newspaper headline did. Second, it's an unmistakable statement of intent: Bitcoin launched in the middle of a banking crisis, explicitly invoking the failures of the system it was designed to compete with.

A few technical quirks of the genesis block:

- **The 50 BTC [block subsidy](/glossary/block-subsidy) is unspendable.** Satoshi hard-coded it in a way that's not part of the UTXO set. The coins exist in lore but not in the spendable supply.
- **No previous block hash.** The previous-block-hash field is all zeros, since there's nothing before it.
- **Hardcoded into Bitcoin Core.** Every node ships with the exact bytes of the genesis block baked in. It's not "found" by the network; it's a constant.

The genesis block is mostly symbolic now, but the message is worth re-reading on every halving. It's the founding document of an alternative monetary system, written in 80 bytes by someone who hasn't been seen since.

See the [whitepaper](/glossary/whitepaper) for the companion document, and [Satoshi Nakamoto](/glossary/satoshi-nakamoto) for what we know about who put it there.
