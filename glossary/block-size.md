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
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_scalability_problem"
  - "https://www.wikidata.org/wiki/Q30325190"
  - "https://en.bitcoin.it/wiki/Block_size_limit_controversy"
liveWidget: ~
---

Block size is Bitcoin's most famous consensus parameter. The original 1 MB hard cap (introduced in July 2010 as an anti-spam measure) was the focus of years of debate and ultimately the 2017 [SegWit](/glossary/segwit-segregated-witness-bip-141) soft fork. The current rule isn't a flat size in bytes; it's a 4 million weight unit limit, where non-witness data costs 4 weight units per byte and witness data costs 1.

Effects in practice:

- **Typical block sizes** range from 1.3 to 2.0 MB on disk, depending on what fraction of transactions are SegWit/Taproot (which pay the witness discount).
- **The hard cap** keeps validation costs bounded. A modest laptop can validate every block in seconds; a Raspberry Pi can keep up with the chain tip. That's deliberate. Larger blocks would shift node-running cost upward and centralize the validator set.
- **The block weight limit** has been politically untouchable since 2017. The 2015-2017 "block size war" (see [BIP 101](/glossary/bip-101-increase-block-size) and [BIP 102](/glossary/bip-102-2mb-block-size)) ended with the SegWit soft fork plus the Bitcoin Cash hard fork; the surviving Bitcoin community settled on "blocks stay small, scaling happens off-chain via Lightning."

What this isn't:

- It's not 1 MB anymore. Anyone citing "Bitcoin's 1 MB blocks" in 2026 is using outdated information.
- It's not a literal byte limit. The weight unit framing matters because it changes the economics of SegWit vs legacy transactions.

The block-size question is settled for the foreseeable future. The substantive throughput debates have moved to Lightning channel design, payment-routing efficiency, and Taproot script optimization, not on-chain capacity.
