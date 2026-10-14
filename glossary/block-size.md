---
title: "Block Size"
slug: block-size
draft: false
updated: "2026-10-15"
shortDefinition: "The maximum data permitted in a block, historically 1 MB but effectively larger under SegWit's weight-based rules."
keyTakeaways:
  - "Capped at 1 MB in 2010, a limit generally read as anti-spam"
  - "SegWit introduced a weight-based system up to 4M weight units"
  - "Allows higher effective capacity than the strict 1 MB limit"
sources:
  - { label: "Bitcoin Core on GitHub - commit a30b56e by Satoshi Nakamoto, 15 July 2010 (adds static const unsigned int MAX_BLOCK_SIZE = 1000000 to main.h; the commit message mentions only an OpenSSL linkage fix)", url: "https://github.com/bitcoin/bitcoin/commit/a30b56ebe76ffff9f9cc8a6667186179413c6349" }
  - { label: "Bitcoin Wiki - Block size limit controversy (the 1 MB limit was added in 2010 in two unannounced commits and only became the binding limit after the May 2013 hard fork removed the database lock limit)", url: "https://en.bitcoin.it/wiki/Block_size_limit_controversy" }
  - { label: "BIP 141 - Segregated Witness, consensus layer (blocks were limited to 1,000,000 bytes; block weight is base size times 3 plus total size and must not exceed 4,000,000)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - src/consensus/consensus.h (MAX_BLOCK_WEIGHT 4,000,000; WITNESS_SCALE_FACTOR 4)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/consensus.h" }
  - { label: "mempool.space - Block sizes and weights graph (1-month series to 14 October 2026; per-point average sizes from 0.87 to 2.75 MB with a median of 1.59 MB; median weight 3,993,795 WU and 92.7 percent of points above 3.9 million WU)", url: "https://mempool.space/graphs/mining/block-sizes-weights" }
  - { label: "bitcoin.org - Running a full node, minimum requirements (desktop or laptop hardware, 2 gigabytes of memory, 7 gigabytes of free disk space, a broadband connection with at least 400 kilobits per second upload)", url: "https://bitcoin.org/en/full-node" }
relatedTerms:
  - bip-42
  - bip-102-2mb-block-size
  - block
  - block-reward
  - block-subsidy
  - blockchain
  - halving-halvening
  - merkle-root
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_scalability_problem"
  - "https://www.wikidata.org/wiki/Q30325190"
  - "https://en.bitcoin.it/wiki/Block_size_limit_controversy"
liveWidget: ~
---

Block size is Bitcoin's most famous [consensus parameter](/glossary/consensus-parameter). The original 1 MB hard cap (a MAX_BLOCK_SIZE constant of 1,000,000 bytes that Satoshi slipped into the code in July 2010, generally read as an anti-spam measure) was the focus of years of debate and ultimately the 2017 [SegWit](/glossary/segwit-segregated-witness-bip-141) soft fork. The current rule isn't a flat size in bytes; it's a 4 million weight unit limit, where non-witness data costs 4 weight units per byte and witness data costs 1.

Effects in practice:

- **Typical block sizes** run around 1.5 to 1.6 MB on disk, with a spread from under 1 MB to about 2.75 MB over the past month, depending on what fraction of transactions are SegWit/Taproot (which pay the witness discount). More than nine blocks in ten are full by weight, just under 4 million units, whatever their byte size.
- **The hard cap** keeps validation costs bounded. The minimum bitcoin.org lists for a Bitcoin Core full node is ordinary desktop or laptop hardware with 2 GB of memory and a broadband connection. That's deliberate. Larger blocks would shift node-running cost upward and centralize the validator set.
- **The block weight limit** has been politically untouchable since 2017. The 2015-2017 [block size war](/glossary/block-size-war) (see [BIP 101](/glossary/bip-101-increase-block-size) and [BIP 102](/glossary/bip-102-2mb-block-size)) ended with the SegWit soft fork plus the Bitcoin Cash hard fork; the surviving Bitcoin community settled on "blocks stay small, scaling happens off-chain via Lightning."

What this isn't:

- It's not 1 MB anymore. Anyone citing "Bitcoin's 1 MB blocks" in 2026 is using outdated information.
- It's not a literal byte limit. The weight unit framing matters because it changes the economics of SegWit vs legacy transactions.

The block-size question is settled for the foreseeable future. The substantive throughput debates have moved to Lightning channel design, payment-routing efficiency, and Taproot script optimization, not on-chain capacity.

See [The Block Size War](/rabbit-hole/block-size-war) for how this limit became the center of a two-year governance fight.
