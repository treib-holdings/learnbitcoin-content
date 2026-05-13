---
title: "BIP 42"
slug: bip-42
draft: false
shortDefinition: "Codified the 21 million BTC cap, clarifying no inflation beyond the maximum supply."
keyTakeaways:
  - "Ensures 21 million BTC remains the max supply"
  - "Fixes potential overflow issues with coin issuance"
  - "Core to Bitcoin's 'sound money' narrative"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block-reward
  - block-size
  - block-subsidy
  - hal-finneys-running-bitcoin
  - halving-halvening
  - miner
  - mining-pool
liveWidget: ~
---

[BIP-42](https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki) is the consensus fix that closed a subtle bug in Bitcoin's original [supply](/glossary/block-subsidy) code. The bug, discovered by Pieter Wuille in 2014, was that integer arithmetic in the original `GetBlockSubsidy` function would, after enough halvings, overflow and start producing positive subsidies again - meaning Bitcoin would inflate indefinitely starting around year 2214.

The original code looked roughly like:

```cpp
int64_t nSubsidy = 50 * COIN;
nSubsidy >>= (nHeight / 210000);  // halve for each 210,000-block era
```

The `>>` operator is C++ right-shift on a 64-bit signed integer. After ~64 halvings, the shift would technically be undefined behavior; in practice on most compilers it would either zero out (correct) or wrap around (catastrophic). Different compilers behaving differently here could cause a chain split.

The fix in BIP-42 was simple: explicitly return zero after enough halvings have occurred, regardless of what the underlying arithmetic would do.

```cpp
if (halvings >= 64) return 0;
```

This made the 21-million cap genuinely permanent rather than dependent on undefined C++ behavior. As a consensus change, BIP-42 was deployed as a [soft fork](/glossary/soft-fork) (since it tightens behavior to "no, you really can't get a positive subsidy after halving 33").

The episode is a small but instructive moment in Bitcoin's history. The [21M cap](/glossary/asymptote) isn't an aspiration; it's a property of the code, enforced by every node, every block, forever. BIP-42 made sure the code actually said what everyone thought it said.
