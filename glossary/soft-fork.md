---
title: "Soft Fork"
slug: soft-fork
draft: false
shortDefinition: "A backward-compatible change to Bitcoin's consensus rules, valid if a majority of miners/nodes enforce it."
keyTakeaways:
  - "Backward-compatible rule changes tighten or add new constraints"
  - "Rely on miner/node majority support to activate"
  - "Non-upgraded nodes remain functional but miss nuances of new rules"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - bip-148-uasf
  - chain-split
  - consensus-parameter
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.bitcoin.it/wiki/Softfork"
liveWidget: ~
---

A soft fork is a Bitcoin consensus change that *tightens* the rules: things that were previously valid become invalid under the new rules, but anything valid under the new rules is also valid under the old. Older nodes that haven't upgraded still see new blocks as legitimate; they just don't enforce the new constraints themselves.

This is the *backwards-compatible* way to evolve Bitcoin's protocol. It contrasts with a hard fork, which loosens rules and creates an incompatible chain that old nodes reject.

Notable Bitcoin soft forks:

- **[BIP-16 (P2SH)](/glossary/bip-16-p2sh)** - 2012. Added the [P2SH](/glossary/p2sh-pay-script-hash) address format.
- **[BIP-65 (CLTV)](/glossary/bip-65-opchecklocktimeverify)** - 2015. Added `OP_CHECKLOCKTIMEVERIFY` for [absolute locktimes](/glossary/absolute-locktime) in scripts.
- **[BIP-68/112/113 (CSV)](/glossary/checksequenceverify-csv)** - 2016. Added relative locktimes.
- **[BIP-141 (SegWit)](/glossary/segwit-segregated-witness-bip-141)** - 2017. The big one; restructured witness data, fixed malleability, doubled effective block capacity.
- **[BIP-340/341/342 (Taproot)](/glossary/taproot)** - 2021. Added [Schnorr signatures](/glossary/schnorr-signature), Taproot, and Tapscript.

Activation typically involves miner signaling: enough miners must signal readiness for the new rules in their block headers before the fork "locks in" and starts being enforced. The mechanism is defined in [BIP-9](/glossary/bip-9-versionbits) and its successors. After activation, nodes that haven't upgraded continue working but may accept blocks that violate the new rules - which is why genuinely majority-supported soft forks are essentially safe, while contested ones can create chain splits.

The soft-fork approach is conservative: Bitcoin can add features without forcing everyone to upgrade simultaneously. It's also part of why Bitcoin evolves slowly - any proposal has to satisfy a high bar of community + miner + economic-node consensus to actually activate.
