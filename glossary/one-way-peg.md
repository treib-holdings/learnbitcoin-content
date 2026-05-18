---
title: "One-Way Peg"
slug: one-way-peg
draft: false
shortDefinition: "A pegging mechanism allowing BTC to move into a side system (e.g., burn) without an equally trusted exit path."
keyTakeaways:
  - "Transfers BTC into a new system but not out again"
  - "Used in burn or partial pegging experiments"
  - "Less user-friendly than a two-way peg approach"
sources: []
relatedTerms:
  - counterparty-risk
  - sidechain
liveWidget: ~
---

A **one-way peg** is a mechanism that moves BTC into a separate system (typically by locking or burning) without providing a return path - once pegged in, you can't peg out and recover the original BTC.

The classic implementation: **proof-of-burn**. You send BTC to a provably unspendable address (e.g., an [OP_RETURN](/glossary/opreturn) output, or an address with no known private key). The destroyed BTC is publicly verifiable on-chain. In return, you receive equivalent units in some other system - often a separate cryptocurrency, sidechain, or off-chain entitlement.

Why a project might use one-way pegging:

- **Bootstrapping a new chain.** Burn BTC to mint genesis tokens on a new chain, ensuring fair initial distribution proportional to economic commitment. Used by some early altcoins (Counterparty being the most notable example).
- **Demonstrating intent.** Provable, irreversible destruction of BTC shows real economic commitment to the new system - harder to walk back from than a [two-way peg](/glossary/peg) where coins can return.
- **Avoiding peg complexity.** One-way pegs don't require federation infrastructure, drivechain mechanics, or other approaches needed for trustless redemption.

What one-way pegs cost:

- **Permanent BTC supply reduction.** The burned BTC are gone from circulation forever. (This is actually a feature for the broader Bitcoin economy: any BTC permanently destroyed concentrates value among remaining holders.)
- **No exit option for participants.** If the destination system fails, your peg-in is non-recoverable.
- **Limited use cases.** Most legitimate sidechain or layer-2 designs prefer [two-way pegs](/glossary/peg) for user flexibility.

In modern Bitcoin practice, one-way pegs are rare. [Liquid](/glossary/liquid-network), [Lightning](/glossary/lightning-network), and most active layer-2 systems use two-way pegs or non-peg-based architectures. The one-way-peg pattern is mostly historical, with niche use in specific proof-of-burn scenarios.
