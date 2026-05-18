---
title: "Consensus Parameter"
slug: consensus-parameter
draft: false
shortDefinition: "A network-wide rule or setting-like block size or difficulty-that all full nodes must follow for consensus."
keyTakeaways:
  - "Defines fundamental rules of block and transaction validity"
  - "Changes risk chain splits if not broadly accepted"
  - "Enforced by full nodes for network-wide agreement"
sources: []
relatedTerms:
  - block
  - block-subsidy
  - blockchain
  - decentralization
  - deployment-threshold-soft-fork
  - difficulty
  - difficulty-retargeting
  - fork
  - locked-period-soft-fork
  - nonce
  - proof-work-pow
  - soft-fork
liveWidget: ~
---

A consensus parameter is any rule the protocol requires every full node to enforce identically. If two nodes disagree on a consensus parameter, they end up on different chains.

The major Bitcoin consensus parameters:

- **Block weight limit.** 4 million weight units. The post-SegWit replacement for the original 1 MB block size cap.
- **Halving schedule.** Subsidy halves every 210,000 blocks (~4 years), starting at 50 BTC and decreasing toward the 20,999,999.9769 BTC [asymptote](/glossary/asymptote).
- **Valid script opcodes and their semantics.** Defined by the consensus implementation; what `OP_CHECKLOCKTIMEVERIFY` does, what `OP_CHECKMULTISIG` does, what's allowed in a SegWit witness, what's allowed in a Tapscript leaf.
- **Difficulty retarget rule.** Every 2016 blocks, difficulty adjusts so the expected interval between blocks targets 10 minutes.
- **Coinbase maturity.** Newly-minted block rewards aren't spendable for 100 confirmations.
- **Activation rules for soft forks.** BIP 9 versionbits, Speedy Trial, BIP 8 - the rules for *how* new consensus parameters get activated are themselves a kind of meta-consensus parameter.

Changing a consensus parameter requires a coordinated soft fork (tightening rules, backwards-compatible) or a hard fork (loosening rules, splits the chain if not unanimous). The bar for either is high. Bitcoin's parameter set has been deliberately stable; substantive consensus changes have averaged maybe one per 2-4 years over the protocol's history (P2SH, CLTV, CSV, SegWit, Taproot).

That stability is itself a feature. Money's value comes partly from confidence that the rules won't change. A consensus parameter that's been unchanged for a decade tells holders something an arbitrary-policy chain can't.
