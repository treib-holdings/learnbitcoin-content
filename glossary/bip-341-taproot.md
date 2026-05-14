---
title: "BIP 341 (Taproot)"
slug: bip-341-taproot
draft: false
shortDefinition: "Specifies Taproot rules, enabling Schnorr signatures and privacy-enhanced script commitments."
keyTakeaways:
  - "Adds Schnorr signatures for smaller, aggregated sigs"
  - "Hides complex scripts behind a single key path"
  - "Boosts privacy, scalability, and advanced contract possibilities"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-16-p2sh
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-342-tapscript
  - merkleized-abstract-syntax-tree-mast
  - musig
  - schnorr-signature
  - signature-aggregation
  - taproot
liveWidget: ~
---

BIP 341 defines the Taproot output type and its spending rules. Authored by Pieter Wuille, Jonas Nick, and Anthony Towns; activated as a soft fork in November 2021 at block height 709,632. Combined with BIP 340 (Schnorr signatures) and BIP 342 (Tapscript), it's the Taproot upgrade.

The core idea: a Taproot output commits to either a single public key (the "internal key") or a tree of alternative spending scripts (the script paths), or both. The output address starts with `bc1p` (using [bech32m](/glossary/bech32m) encoding).

Two spending paths:

- **Key path.** The owner of the internal key produces a Schnorr signature and spends the output. On-chain it looks like a single-signature spend; observers cannot tell whether script paths existed or what they would have been. This is the common case and the most private and cheapest spend type Bitcoin has.
- **Script path.** Reveals one specific script from the committed tree (a MAST leaf), proves the leaf is part of the tree, and satisfies the script. Useful for fallback conditions: "if the key holder is unavailable for 6 months, this alternative spending path activates." Only the revealed leaf gets exposed, not the rest of the tree.

What this unlocks:

- **MuSig2 / FROST aggregation.** Multiple cosigners produce a single Schnorr signature on a single internal key. A 5-of-7 federation spends a Taproot output indistinguishably from a single-sig wallet.
- **Lightning channel privacy.** Cooperative channel closes look like any other Taproot key-path spend, no longer visibly "2-of-2 multisig closing."
- **Cheap multisig.** Pay for the signature you actually use, not for all the keys you committed to.
- **Less data on-chain.** Schnorr signatures are a fixed 64 bytes vs ECDSA's ~71-72 bytes after [low-R](/glossary/low-r-signatures) grinding.

Taproot adoption took a few years to ripple through wallet software, hardware wallets, and infrastructure. As of 2026 it's widely supported, and a meaningful and growing share of new addresses are `bc1p...`.

Spec: [BIP-341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki). Paired with [BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki) (Schnorr) and [BIP-342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki) (Tapscript).
