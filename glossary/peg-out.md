---
title: "Peg-out"
slug: peg-out
draft: false
shortDefinition: "Returning tokens from a sidechain to mainnet BTC after federation or multi-sig checks the transaction’s validity."
keyTakeaways:
  - "Sidechain tokens are redeemed for real BTC on mainnet"
  - "Federation multi-sig or functionaries confirm no double spends"
  - "Closes the loop on two-way pegging from sidechain to Bitcoin"
sources: []
relatedTerms: []
liveWidget: ~
---

When you have sidechain tokens (e.g., L-BTC in Liquid), a ‘peg-out’ sends them back to a designated mechanism in the sidechain, prompting the federation to release the locked BTC on mainnet. Typically requiring majority approval, this ensures no one can unilaterally withdraw mainnet BTC without consensus. It finalizes the round trip: your pegged tokens get destroyed or moved into an internal sidechain address, and the corresponding BTC are unlocked on mainnet to your chosen address. Peg-outs complete the two-way peg lifecycle, but they inherently rely on the sidechain’s security model and federation honesty.
