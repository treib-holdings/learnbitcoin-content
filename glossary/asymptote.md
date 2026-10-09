---
title: "Asymptote"
slug: asymptote
draft: false
updated: "2026-10-09"
shortDefinition: "A value a curve approaches arbitrarily closely but never quite reaches. Bitcoin's pure halving math approaches 21 million BTC this way, but the real schedule stops at exactly 20,999,999.9769 BTC."
keyTakeaways:
  - "Bitcoin's total supply approaches but never exactly reaches 21,000,000 BTC"
  - "Satoshi-level integer rounding makes the schedule stop at exactly 20,999,999.9769 BTC, a total it actually reaches"
  - "New issuance reaches exactly zero at block 6,930,000, around the year 2140"
sources:
  - { label: "Supply Schedule rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/supply" }
  - { label: "Bitcoin Core source - GetBlockSubsidy, the halving schedule every node enforces (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
  - { label: "mempool.space - block 969,999 (5 October 2026); 20,093,750 BTC issued by the schedule through this block", url: "https://mempool.space/block/000000000000000000001d95e5f7284cb199b8620eb6a7938dd9696f85751bb3" }
  - { label: "ChainQuery - circulating supply and annual inflation rate (live; 0.8173% on 9 October 2026, cross-checked against the GetBlockSubsidy schedule)", url: "https://chainquery.com/api/edu/supply" }
  - { label: "BIP 42 - A finite monetary supply for Bitcoin (2014; keeps the subsidy at zero after halving 64)", url: "https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki" }
relatedTerms:
  - block-subsidy
  - disinflation
  - halving-halvening
  - inflation
  - mining-subsidy
  - satoshi-unit
liveWidget: ~
---

In mathematics, an asymptote is a value a function approaches more and more closely as some variable runs out to infinity, without ever quite touching it. The curve `1/x` is the classic example: as x grows, the value gets arbitrarily close to zero but never lands there.

Bitcoin's monetary policy has two curves that look asymptotic. In the actual code, both of them reach an exact final value.

**The supply curve.** Bitcoin's total supply is the sum of every [block subsidy](/glossary/block-subsidy) ever paid out. The subsidy started at 50 BTC per block, and gets cut in half every 210,000 blocks (a [halving](/glossary/halving-halvening)). The geometric series sums *in the limit* to exactly 21,000,000 BTC, so 21 million is a true asymptote of the pure math.

But in practice the subsidy is paid in satoshis (the integer unit; 10^-8 BTC), and each halving divides it by 2 with integer truncation. After 33 halvings (block 6,930,000), the per-block subsidy rounds to zero satoshis, and a 2014 fix, [BIP 42](/glossary/bip-42), keeps it at zero for good. The most the rules can ever issue is exactly **20,999,999.9769 BTC**, a total the schedule actually reaches with the last 1-satoshi subsidy in block 6,929,999. The "21 million" you'll see quoted everywhere is the rounded version.

**The inflation-rate curve.** Bitcoin's annual rate of new issuance (the [subsidy](/glossary/block-subsidy) x blocks-per-year / circulating supply) was about 0.82% as of October 2026, against the 20,093,750 BTC issued through block 969,999. Each halving cuts it roughly in half. After the 2028 halving, it drops to ~0.4%. After 2032, ~0.2%. The rate keeps shrinking until block 6,930,000, around the year 2140, where it reaches exactly zero.

From that point forward, no new BTC enters circulation; miners earn only [transaction fees](/glossary/fee-estimation). Bitcoin becomes the first major monetary asset in history with a mathematically-fixed zero-inflation steady state.

Both curves come from the halving schedule [Satoshi Nakamoto](/glossary/satoshi-nakamoto) wrote into Bitcoin's original code, plus the BIP 42 fix that keeps the subsidy at zero. No central authority can change them without forking the network, and the economic incentives against doing so are overwhelming - the value of Bitcoin to its holders comes precisely from the fact that these curves are fixed and verifiable.

That hard ceiling is what makes Bitcoin a fixed-supply asset in a strict mathematical sense. See [Disinflation](/glossary/disinflation) for the rate trend in detail and the [Supply Schedule rabbit hole](/rabbit-hole/supply) for the full math.
