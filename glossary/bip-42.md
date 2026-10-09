---
title: "BIP 42"
slug: bip-42
draft: false
updated: "2026-10-09"
shortDefinition: "A 2014 fix that forces the block subsidy to zero once 64 halvings have passed, so coin issuance cannot restart around the year 2263."
keyTakeaways:
  - "Ensures 21 million BTC remains the max supply"
  - "Fixed an undefined bit shift that would have restarted coin issuance at halving 64"
  - "Core to Bitcoin's 'sound money' narrative"
sources:
  - { label: "BIP 42 - A finite monetary supply for Bitcoin", url: "https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki" }
  - { label: "Bitcoin Core PR #3842 - Fix for GetBlockValue() after block 13,440,000 (merged 3 April 2014)", url: "https://github.com/bitcoin/bitcoin/pull/3842" }
  - { label: "Bitcoin Core source - GetBlockSubsidy (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
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

[BIP-42](https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki) is the consensus fix that closed a subtle bug in Bitcoin's original [supply](/glossary/block-subsidy) code. Pieter Wuille wrote it up in April 2014, and the fix was merged into Bitcoin Core the same month ([PR #3842](https://github.com/bitcoin/bitcoin/pull/3842)).

The old subsidy code (in a function then called `GetBlockValue`, now `GetBlockSubsidy`) halved the reward by shifting 50 BTC, counted in satoshis, one bit to the right for each halving. At 64 halvings (block 13,440,000, around the year 2263) that shift becomes undefined in C++. On every platform Bitcoin Core supported at the time, the subsidy would have jumped back to 50 BTC and repeated the whole schedule every 64 halvings, so Bitcoin would have kept issuing coins forever.

The original code looked roughly like:

```cpp
int64_t nSubsidy = 50 * COIN;
nSubsidy >>= (nHeight / 210000);  // halve for each 210,000-block era
```

The `>>` operator is C++ right-shift on a 64-bit signed integer. From halving 33 (block 6,930,000, around 2140) the shift already gives 0. A shift of 64 or more is undefined behavior, though, and BIP 42 notes that on all platforms supported in 2014 the cycle repeats every 64 halvings. BIP 42 also points out that other languages behave differently (Python returns 0 for the same shift), so a node written in another language could have disagreed with Bitcoin Core and split the chain.

The fix in BIP-42 was simple. The code now returns zero outright once 64 halvings have passed, whatever the shift would have done.

```cpp
if (halvings >= 64) return 0;
```

This made the 21-million cap genuinely permanent rather than dependent on undefined C++ behavior. BIP-42 is a [soft fork](/glossary/soft-fork), because it only tightens the rules, by requiring a zero subsidy once 64 halvings have passed. The subsidy already reaches zero at halving 33, and BIP 42 makes sure it stays there.

The episode is a small but instructive moment in Bitcoin's history. The [21 million cap](/rabbit-hole/supply) is a property of the code that every node enforces on every block. BIP-42 made sure the code actually said what everyone thought it said.
