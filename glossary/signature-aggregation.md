---
title: "Signature Aggregation"
slug: signature-aggregation
draft: false
updated: "2026-09-17"
shortDefinition: "Combining multiple partial signatures into one final signature (e.g., MuSig), reducing on-chain data footprint."
keyTakeaways:
  - "Collapses multiple signers into a single on-chain signature"
  - "Lowers fees, boosts privacy, fosters multi-party setups"
  - "Relies on Schnorr's algebraic properties (MuSig, etc.)"
sources: []
relatedTerms:
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - schnorr-signature
  - signature-clipping
  - taproot
sameAs:
  - "https://en.bitcoin.it/wiki/Schnorr"
  - "https://bitcoinops.org/en/topics/musig/"
liveWidget: ~
---

Signature aggregation is the technique of taking multiple cosigners on a single spend and producing one combined signature that the chain can verify against a single combined public key. The chain learns "this output was authorized," but not how many people authorized it.

This is only practical with [Schnorr signatures](/glossary/schnorr-signature), whose linear math lets partial signatures and partial public keys be summed cleanly. The flagship aggregation protocol is **MuSig2**, the second-generation multi-signature scheme designed by Jonas Nick and Tim Ruffing of Blockstream with Yannick Seurin of ANSSI, the French cybersecurity agency.

A 3-of-3 spend under MuSig2 works like this:

1. The three cosigners exchange public keys and public nonces off-chain (MuSig2 needs no separate nonce-commitment round; that was the original MuSig's third round).
2. Each produces a partial signature on the transaction.
3. The partial signatures are combined into one Schnorr signature.
4. The transaction is broadcast with a single 64-byte signature against a single aggregated public key.

What the public chain sees: an ordinary-looking single-sig Taproot spend. No hint that three parties were involved.

The wins:

- **Lower fees.** One signature uses less block space than three.
- **Better privacy.** Multisig setups stop being identifiable from on-chain data. Every Taproot spend can plausibly be single-sig, multisig, or a complex script - they all look the same.
- **Better security ergonomics.** Hardware-wallet vendors and custody services can offer multisig with the cost and footprint of single-sig.

The catch is the off-chain coordination - cosigners must exchange nonces and partial sigs in a careful sequence (MuSig2 is non-trivial to implement). Production-grade libraries exist (libsecp256k1's MuSig2 module since v0.6.0, the rust-secp256k1 bindings since 0.32.0, Ledger's Bitcoin app since v2.4.0) and adoption is growing.

Aggregation is one of the quietest big wins Taproot brought. See [Taproot](/glossary/taproot) and [Schnorr Signature](/glossary/schnorr-signature) for the foundations.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for which kinds of aggregation Bitcoin has today and which it does not.
