---
title: "BIP 176 (Bits Denomination)"
slug: bip-176-bits-denomination
draft: false
shortDefinition: "Proposed using 'bits' (1 μBTC) as a user-friendly unit for smaller denominations of Bitcoin."
keyTakeaways:
  - "Advocates using microbitcoin ('bits') for everyday amounts"
  - "Aims to reduce confusion around decimal places"
  - "Not widely adopted, but highlights user-experience focus"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - satoshi-unit
liveWidget: ~
---

[BIP-176](https://github.com/bitcoin/bips/blob/master/bip-0176.mediawiki) proposed using "bits" as a standard small-denomination unit for Bitcoin. **1 bit = 1 microbitcoin (μBTC) = 100 [satoshis](/glossary/satoshi-unit) = 0.000001 BTC.**

The rationale: as BTC's price rose, the decimals required to express everyday amounts became awkward ("0.0001 BTC for a cup of coffee" is hard to read). Bits offered a unit roughly comparable to a US cent at typical 2010s prices, making small amounts more intuitive.

The reality, after a decade: **bits lost to sats.** The Bitcoin community largely converged on the satoshi as the unit of choice for small amounts, with phrases like "stacking sats" becoming culturally embedded. Bits did see some adoption (Coinbase used them briefly; a few wallets continue to support them as a display option) but never became dominant.

Where the "bits" framing survives:

- **A handful of wallets** still offer it as a display unit option.
- **Older [BIP](/glossary/bip-bitcoin-improvement-proposal) references** continue to mention it.
- **Educational comparisons** sometimes use bits to bridge between BTC and sat magnitudes.

For most users in 2026, you can safely think in two units: **BTC** for large amounts, **sats** for small ones. Bits exist but are mostly a historical curiosity. See the [Bitcoin Units rabbit hole](/rabbit-hole/bitcoin-units) for the full unit scale.
