---
title: "Consensus Parameter"
slug: consensus-parameter
draft: false
updated: "2026-10-13"
shortDefinition: "A network-wide rule or setting, like the block weight limit or the difficulty rule, that all full nodes must follow for consensus."
keyTakeaways:
  - "Defines fundamental rules of block and transaction validity"
  - "Changes risk chain splits if not broadly accepted"
  - "Enforced by full nodes for network-wide agreement"
sources:
  - { label: "Bitcoin Core - src/consensus/consensus.h (MAX_BLOCK_WEIGHT 4,000,000; COINBASE_MATURITY 100)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/consensus.h" }
  - { label: "Bitcoin Core - src/kernel/chainparams.cpp (nSubsidyHalvingInterval 210,000; a two-week retarget timespan at 10-minute block spacing, 2,016 blocks)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Wiki - Controlled supply (50 BTC per block in the first era, a 50% reduction every 210,000 blocks, a retarget every 2,016 blocks, and the exact total of 20,999,999.9769 BTC)", url: "https://en.bitcoin.it/wiki/Controlled_supply" }
  - { label: "Bitcoin Optech - Soft fork activation topic (BIP 8, BIP 9 and Speedy Trial; the activation history from P2SH in 2012 through CLTV in 2015, CSV in 2016 and SegWit in 2017)", url: "https://bitcoinops.org/en/topics/soft-fork-activation/" }
  - { label: "Bitcoin Core - doc/bips.md (the BIPs each release implements: P2SH took effect on 1 April 2012; Taproot rules shipped in 0.21.0 with mainnet activation parameters in 0.21.1)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/bips.md" }
  - { label: "Bitcoin Core 0.21.1 release notes - Taproot activation by Speedy Trial, a variation of BIP 9 versionbits with a 90% threshold, active from block 709,632 (2021)", url: "https://bitcoincore.org/en/releases/0.21.1/" }
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

- **Block weight limit.** 4 million weight units. The post-SegWit replacement for the original 1 MB [block size](/glossary/block-size) cap.
- **[Halving](/glossary/halving-halvening) schedule.** Subsidy halves every 210,000 blocks (~4 years), starting at 50 BTC, which caps the total at the 20,999,999.9769 BTC [asymptote](/glossary/asymptote).
- **Valid script opcodes and their semantics.** Defined by the consensus implementation; what `OP_CHECKLOCKTIMEVERIFY` does, what `OP_CHECKMULTISIG` does, what's allowed in a SegWit witness, what's allowed in a Tapscript leaf.
- **[Difficulty retarget](/glossary/difficulty-retargeting) rule.** Every 2,016 blocks, difficulty adjusts so the expected interval between blocks targets 10 minutes.
- **Coinbase maturity.** Newly-minted block rewards aren't spendable for 100 confirmations.
- **Activation rules for soft forks.** BIP 9 versionbits, the Speedy Trial variant that activated Taproot, BIP 8 - the rules for *how* new consensus parameters get activated are themselves a kind of meta-consensus parameter.

Changing a consensus parameter requires a coordinated [soft fork](/glossary/soft-fork) (tightening rules, backwards-compatible) or a [hard fork](/glossary/fork) (loosening rules, splits the chain if not unanimous). The bar for either is high. Bitcoin's parameter set has been deliberately stable: the soft forks most people can name arrived a few years apart, P2SH (2012), CLTV (2015), CSV (2016), SegWit (2017) and Taproot (2021), and the full list of consensus changes in Bitcoin Core's doc/bips.md adds only a handful more.

That stability is itself a feature. Money's value comes partly from confidence that the rules won't change. A consensus parameter that's been unchanged for a decade tells holders something an arbitrary-policy chain can't.
