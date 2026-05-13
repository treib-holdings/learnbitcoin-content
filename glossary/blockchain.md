---
title: "Blockchain"
slug: blockchain
draft: false
shortDefinition: "A distributed ledger linking transaction batches (blocks) via cryptographic hashes, ensuring tamper-evident data history."
keyTakeaways:
  - "Each block cryptographically links to its predecessor"
  - "Forms a chronological, tamper-evident transaction record"
  - "Underpins Bitcoin's decentralized trust model"
sources: []
relatedTerms:
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-height
  - block-propagation
  - block-size
  - block-time
  - fork-detection
  - genesis-block
  - market-depth
  - reorg-reorganization
  - stale-block
liveWidget: ~
---

The blockchain is the public ledger of every Bitcoin transaction, organized as a sequence of [blocks](/glossary/block), each one cryptographically tied to the one before it. It's the data structure that makes Bitcoin work.

The construction is simple. Every block contains the SHA-256 [hash](/glossary/hash) of the previous block's header in its own header. So block 800,000 references block 799,999 by hash; block 799,999 references 799,998; and so on back to the [genesis block](/glossary/genesis-block). If you change a single byte of any historical block, its hash changes, which means every block after it now references the wrong predecessor, which means every subsequent block needs to be re-mined. With Bitcoin's [proof-of-work](/glossary/proof-work-pow) burden, that gets impossibly expensive fast.

Every full Bitcoin node stores the entire chain - currently ~600 GB and growing by ~150 GB/year - and independently validates every block against every consensus rule. There is no master ledger; there are tens of thousands of identical copies, each verified against the others. To rewrite Bitcoin's history, you'd have to convince a majority of those nodes to accept your fake version. They won't.

The word "blockchain" has been generalized to mean any append-only hash-linked data structure, and the technology has been bolted onto countless projects of varying credibility. Bitcoin's blockchain is the one that matters: the first, the largest, the most secure, and the only one that actually solves the problem it was designed for.

See the [Mining rabbit hole](/rabbit-hole/mining) for why the chain is so hard to rewrite, and [Block](/glossary/block) for what's inside each link.
