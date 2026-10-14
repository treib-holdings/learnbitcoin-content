---
title: "Genesis Block"
slug: genesis-block
draft: false
updated: "2026-10-13"
shortDefinition: "The very first Bitcoin block, mined by Satoshi Nakamoto on January 3, 2009, referencing a Times headline."
keyTakeaways:
  - "Mined by Satoshi, forming the blockchain's foundation"
  - "Contains a reference to 2009 banking crisis headlines"
  - "Its 50 BTC coinbase reward is unspendable because of a quirk in the original code"
sources:
  - { label: "mempool.space - block 0 (timestamp 1231006505, 3 January 2009 18:15:05 UTC; no previous block hash; nonce 2083236893)", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "mempool.space - the genesis coinbase transaction (its scriptSig pushes 0x45 = 69 bytes of headline text)", url: "https://mempool.space/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b" }
  - { label: "Bitcoin Core source - CreateGenesisBlock in src/kernel/chainparams.cpp (pszTimestamp is the Times headline; hashPrevBlock.SetNull(); the result is asserted against the known hash)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core source - ConnectBlock in src/validation.cpp: 'Special case for the genesis block, skipping connection of its transactions (its coinbase is unspendable)'", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "Bitcoin Wiki - Genesis block (the Times front page; the reward can't be spent due to a quirk in the way the block is expressed in the code, and it is not known if this was intentional)", url: "https://en.bitcoin.it/wiki/Genesis_block" }
  - { label: "Satoshi Nakamoto Institute - Satoshi's forum posts (the last bitcointalk post is dated 12 December 2010; the lone 2014 P2P Foundation post carries the Institute's disclaimer that its authenticity demands scrutiny)", url: "https://satoshi.nakamotoinstitute.org/posts/" }
relatedTerms:
  - block-header
  - block-height
  - block-reward
  - block-subsidy
  - blockchain
  - coinbase-transaction
  - satoshi-nakamoto
  - whitepaper
sameAs:
  - "https://www.wikidata.org/wiki/Q124624002"
  - "https://en.bitcoin.it/wiki/Genesis_block"
liveWidget: ~
---

The genesis block is block 0 of the Bitcoin chain - the first one. [Satoshi Nakamoto](/glossary/satoshi-nakamoto) mined it on January 3, 2009, and embedded a now-famous message in its [coinbase transaction](/glossary/coinbase-transaction):

> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

This was a verbatim Times of London front-page headline from earlier that day. It serves two purposes. First, it proves the block wasn't pre-mined - it couldn't have existed before the newspaper headline did. Second, it's an unmistakable statement of intent: Bitcoin launched in the middle of a banking crisis, explicitly invoking the failures of the system it was designed to compete with.

A few technical quirks of the genesis block:

- **The 50 BTC [block subsidy](/glossary/block-subsidy) is unspendable.** The original code never added the genesis coinbase to the UTXO set, and Bitcoin Core keeps that behavior on purpose today. Nobody knows whether Satoshi meant it. The coins exist in lore but not in the spendable supply.
- **No previous block hash.** The previous-block-hash field is all zeros, since there's nothing before it.
- **Hardcoded into Bitcoin Core.** Every node rebuilds the block from constants in its source code (the headline, the timestamp, the nonce) and checks the result against the known hash. It's not "found" by the network; it's a constant.

The genesis block is mostly symbolic now, but the message is worth re-reading on every halving. It's the founding document of an alternative monetary system, written in 69 characters by someone who stopped posting in December 2010 and hasn't been seen since.

See the [whitepaper](/glossary/whitepaper) for the companion document, and [Satoshi Nakamoto](/glossary/satoshi-nakamoto) for what we know about who put it there.
