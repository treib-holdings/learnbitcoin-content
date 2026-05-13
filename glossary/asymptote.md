---
title: "Asymptote"
slug: asymptote
draft: false
shortDefinition: "A value a curve approaches arbitrarily closely but never quite reaches. Bitcoin's supply asymptotes to 20,999,999.9769 BTC; its inflation rate asymptotes to zero."
keyTakeaways:
  - "Bitcoin's total supply approaches but never exactly reaches 21,000,000 BTC"
  - "The true asymptote is 20,999,999.9769 BTC due to satoshi-level integer rounding"
  - "Bitcoin's annual inflation rate asymptotes to zero around the year 2140"
sources: []
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

Bitcoin has two famous asymptotes baked into its monetary policy.

**The supply asymptote.** Bitcoin's total supply is the sum of every [block subsidy](/glossary/block-subsidy) ever paid out. The subsidy started at 50 BTC per block, and gets cut in half every 210,000 blocks (a [halving](/glossary/halving-halvening)). The geometric series sums *in the limit* to exactly 21,000,000 BTC. But in practice the subsidy is paid in satoshis (the integer unit; 10^-8 BTC), and each halving divides it by 2 with integer truncation. After 33 halvings, the per-block subsidy rounds to zero satoshis and stays there forever. The total ever issued at that moment is **20,999,999.9769 BTC** - just shy of the round number. That's Bitcoin's true supply asymptote. The "21 million" you'll see quoted everywhere is a marketing-friendly rounding of it.

**The inflation-rate asymptote.** Bitcoin's annual rate of new issuance (the [subsidy](/glossary/block-subsidy) × blocks-per-year / circulating supply) is currently about 0.83%. Each halving cuts it roughly in half. After the 2028 halving, it drops to ~0.4%. After 2032, ~0.2%. The function approaches zero, reaching its sub-satoshi equivalent around the year 2140. From that point forward, no new BTC enters circulation; miners earn only [transaction fees](/glossary/fee-estimation). Bitcoin becomes the first major monetary asset in history with a mathematically-fixed zero-inflation steady state.

Both asymptotes were chosen deliberately by [Satoshi Nakamoto](/glossary/satoshi-nakamoto). They aren't artifacts of careless code; they're the monetary-policy commitment baked into the protocol. No central authority can change them without forking the network, and the economic incentives against doing so are overwhelming - the value of Bitcoin to its holders comes precisely from the fact that these curves are fixed and verifiable.

The asymptote is what makes Bitcoin a fixed-supply asset in the mathematical sense, not just the rhetorical one. See [Disinflation](/glossary/disinflation) for the rate trend in detail and the [Supply Schedule rabbit hole](/rabbit-hole/supply) for the full math.
