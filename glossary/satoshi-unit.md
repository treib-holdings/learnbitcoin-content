---
title: "Satoshi (Unit)"
slug: satoshi-unit
draft: false
shortDefinition: "The smallest Bitcoin unit: 1 sat = 0.00000001 BTC (100 million sats = 1 BTC)."
keyTakeaways:
  - "Fundamental unit for Bitcoin's ledger, simplifying small amounts"
  - "Commonly used in LN or micro-transaction contexts"
  - "Integral to the discussion of everyday BTC denominational usage"
sources: []
relatedTerms:
  - bitcoin-pizza-day
  - satoshi-nakamoto
  - transaction
liveWidget: ~
---

A satoshi (sat) is the smallest unit of Bitcoin. **1 BTC = 100,000,000 sats.** Below the sat is nothing - on-chain, Bitcoin is not divisible further. ([Lightning](/glossary/lightning-network) operates internally in millisats for finer routing precision, but those don't exist on the base chain.)

Named after [Satoshi Nakamoto](/glossary/satoshi-nakamoto), the sat is the protocol-level integer unit. Internally, Bitcoin Core tracks all balances and amounts in satoshis. "BTC" is a human-readable rendering of the sat count divided by 100,000,000.

In 2026 wallet culture, sats are increasingly the default unit for talking about Bitcoin in everyday contexts:

- **Lightning balances** are almost universally shown in sats.
- **Fee rates** are always quoted in sats per virtual byte (sat/vB).
- **Stacker culture** uses "stacking sats" as the standard phrase for accumulating BTC.
- **Tips and small payments** are denominated in sats - "1,000 sats" is more readable than "0.00001 BTC."
- **Nostr zaps**, which run on Lightning, are quoted entirely in sats.

A useful mental anchor: at a BTC price of $1,000,000 (which many expect within a decade or two), **1 sat = $0.01**. The sat becomes the everyday Bitcoin "cent." This convergence is why sats are increasingly the natural unit even for users who aren't deep in Lightning culture.

See the [Bitcoin Units rabbit hole](/rabbit-hole/bitcoin-units) for the full unit scale and where the in-between units (mBTC, μBTC, Finney) sit.
