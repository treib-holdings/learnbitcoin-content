---
title: "Fork"
slug: fork
draft: false
updated: "2026-10-13"
shortDefinition: "A change in blockchain rules - can be 'hard' (incompatible) or 'soft' (compatible with previous rules)."
keyTakeaways:
  - "Hard forks risk creating permanent alternate chains"
  - "Soft forks remain compatible with older clients"
  - "Consensus is crucial to avoid chain splits"
sources:
  - { label: "BIP-99 - Motivation and deployment of consensus rule changes (definitions: a softfork makes previously valid blocks invalid; a hardfork makes previously invalid blocks valid and requires all users to upgrade)", url: "https://github.com/bitcoin/bips/blob/master/bip-0099.mediawiki" }
  - { label: "Bitcoin Core source - src/kernel/chainparams.cpp (the soft-fork activation heights every node enforces: BIP65Height 388381, CSVHeight 419328, SegwitHeight 481824, plus the BIP16 exception block)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "BIP-341 - Taproot (Status: Deployed; the deployment did activate at height 709632 on Bitcoin mainnet, 14 November 2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-50 - March 2013 Chain Fork Post-Mortem (the accidental split between 0.8 and pre-0.8 nodes; the two-month temporary rules in 0.8.1; block 252,451 on 16 August 2013 forking unpatched nodes off the network)", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "Bitcoin Cash - UAHF Technical Specification (a block size hard fork from the original 1 MB chain; activation time 1 August 2017 12:20 UTC)", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 5: when two nodes broadcast different versions of the next block, the tie is broken when the next proof-of-work is found", url: "https://bitcoin.org/bitcoin.pdf" }
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

Examples: [SegWit](/glossary/segwit-segregated-witness-bip-141) (2017), [Taproot](/glossary/taproot) (2021), [BIP-65 CLTV](/glossary/bip-65-opchecklocktimeverify), [BIP-68 CSV](/glossary/bip-68-relative-locktime), [P2SH](/glossary/p2sh), and others.

**Hard fork.** *Loosens or otherwise breaks* the rules. Blocks valid under new rules may be invalid under old rules. Old nodes reject new blocks. Not backwards-compatible. Creates a permanent [chain split](/glossary/chain-split) unless every node upgrades.

Examples in Bitcoin's history: none that are undisputed. The upgrades listed above, from P2SH to Taproot in 2021, were all soft forks. The disputed episode is 2013: in March a database limit in older versions split the chain by mistake, the temporary rule that patched over it was then allowed to lapse, and in August a block left unpatched nodes behind for good. Whether any of that counts as a hard fork is still argued by the developers who were there; the chapter linked below takes it up. The "Bitcoin Cash" split of August 2017 was a hard fork by its own specification, a rebrand-as-altcoin rather than an upgrade of Bitcoin itself.

The asymmetry between soft and hard forks is one of Bitcoin's quieter conservative defenses. Soft forks can ship gradually with no disruption if they have broad support. Hard forks are essentially impossible to deploy on Bitcoin without splitting the network - so changes that *require* a hard fork (e.g., changing the [21M cap](/glossary/asymptote)) are practically infeasible.

The term "fork" is also sometimes confusingly used for *temporary* divergences (two miners finding blocks at the same height), but those are better called brief [reorgs](/glossary/reorg-reorganization) - the network resolves them within a block or two.

For an accidental fork followed minute by minute, see [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork).
