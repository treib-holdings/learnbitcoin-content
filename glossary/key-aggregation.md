---
title: "Key Aggregation"
slug: key-aggregation
draft: false
shortDefinition: "Combining multiple public keys into one aggregated key (e.g., MuSig/Schnorr) to reduce on-chain data and increase privacy."
keyTakeaways:
  - "Consolidates multiple pubkeys into a single on-chain entity"
  - "Saves block space, lowering transaction fees"
  - "Obscures multisig usage, enhancing privacy"
sources: []
relatedTerms: []
liveWidget: ~
---

Key aggregation combines multiple public keys into a single public key that requires all (or a threshold) of the original key holders to sign. To outside observers, the aggregated key and the resulting signature are indistinguishable from a single-sig wallet.

This is a Schnorr property, not an ECDSA one. ECDSA composition doesn't work cleanly; Schnorr's linearity is what makes aggregation possible. Taproot (BIP 340 / 341, activated November 2021) unlocked it on Bitcoin.

The main protocols:

- MuSig and MuSig2: interactive n-of-n key aggregation. All cosigners must participate to produce a signature. MuSig2 needs two rounds of communication; the original MuSig needed three.
- FROST (Flexible Round-Optimized Schnorr Threshold): m-of-n threshold aggregation. Any m of n signers can produce a single aggregated signature; the remaining n-m sit out.

Why it matters: a 3-of-3 MuSig2 wallet looks on-chain like a regular Taproot single-sig output. A federation using FROST looks identical to any Taproot single-sig spend. Multisig users get the privacy and fee profile of regular users, instead of broadcasting their security model on-chain.

The tradeoff is interactivity. Pre-Taproot multisig (P2WSH) doesn't require cosigners to be online at signing time; aggregated schemes do. Most current production multisig (cold storage, hardware-wallet quorums) is still classical for that reason. Aggregated schemes are growing fastest in Lightning channels and protocol-level constructions where interactivity is already required.
