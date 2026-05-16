---
title: "Fork"
slug: fork
draft: false
shortDefinition: "A change in blockchain rules-can be 'hard' (incompatible) or 'soft' (compatible with previous rules)."
keyTakeaways:
  - "Hard forks risk creating permanent alternate chains"
  - "Soft forks remain compatible with older clients"
  - "Consensus is crucial to avoid chain splits"
sources: []
relatedTerms:
  - airdrop-btc-fork
  - alt-season
  - altcoin
  - bip-50
  - bip-102-2mb-block-size
  - bitcoin-cash
  - chain-flag-day
  - chain-split
  - consensus-parameter
  - fork-detection
  - fork-watcher
  - reorg-reorganization
  - replay-attack
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.bitcoin.it/wiki/Fork"
liveWidget: ~
---

"Fork" in Bitcoin means a change to the consensus rules. There are two distinct types, and the difference matters a lot.

**[Soft fork](/glossary/soft-fork).** *Tightens* the rules. Blocks that were valid under old rules become invalid under new rules; blocks valid under new rules remain valid under old rules. Old nodes that haven't upgraded still see new blocks as legitimate, they just don't enforce the new constraints themselves. Backwards-compatible. Bitcoin's standard way of upgrading.

Examples: [SegWit](/glossary/segwit-segregated-witness-bip-141) (2017), [Taproot](/glossary/taproot) (2021), [BIP-65 CLTV](/glossary/bip-65-opchecklocktimeverify), [BIP-68 CSV](/glossary/bip-68-relative-locktime), [P2SH](/glossary/bip-16-p2sh), and others.

**Hard fork.** *Loosens or otherwise breaks* the rules. Blocks valid under new rules may be invalid under old rules. Old nodes reject new blocks. Not backwards-compatible. Creates a permanent [chain split](/glossary/chain-split) unless every node upgrades.

Examples in Bitcoin's history: none of Bitcoin's consensus upgrades since 2010 have been hard forks; the community has consistently chosen soft forks. The "Bitcoin Cash" split in 2017 was a hard-fork rebrand-as-altcoin rather than an upgrade of Bitcoin itself.

The asymmetry between soft and hard forks is one of Bitcoin's quieter conservative defenses. Soft forks can ship gradually with no disruption if they have broad support. Hard forks are essentially impossible to deploy on Bitcoin without splitting the network - so changes that *require* a hard fork (e.g., changing the [21M cap](/glossary/asymptote)) are practically infeasible.

The term "fork" is also sometimes confusingly used for *temporary* divergences (two miners finding blocks at the same height), but those are better called brief [reorgs](/glossary/reorg-reorganization) - the network resolves them within a block or two.
