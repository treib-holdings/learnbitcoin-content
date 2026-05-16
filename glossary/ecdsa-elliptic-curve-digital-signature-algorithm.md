---
title: "ECDSA (Elliptic Curve Digital Signature Algorithm)"
slug: ecdsa-elliptic-curve-digital-signature-algorithm
draft: false
shortDefinition: "Bitcoin's original signature scheme for verifying ownership, used before Taproot's Schnorr signatures."
keyTakeaways:
  - "Elliptic curve-based method for signing transactions"
  - "Formed the cornerstone of Bitcoin's cryptographic security"
  - "Schnorr signatures now coexist, bringing potential benefits"
sources: []
relatedTerms:
  - adapter-signature
  - bip-66
  - elliptic-curve
  - musig
  - musig2
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"
  - "https://www.wikidata.org/wiki/Q915079"
  - "https://en.bitcoin.it/wiki/ECDSA"
liveWidget: ~
---

ECDSA is Bitcoin's original digital signature scheme. It's how the network has verified, since 2009, that the person spending a UTXO is the one who actually controls the [private key](/glossary/private-key) it was sent to.

The mechanism is built on the [secp256k1 elliptic curve](/glossary/elliptic-curve). Roughly:

1. A signer with private key `k` produces a signature `(r, s)` that depends on `k`, the message being signed, and a randomly-chosen nonce.
2. Anyone with the corresponding [public key](/glossary/public-key) can verify the signature is mathematically consistent - meaning whoever signed must have known `k`.
3. The verifier learns nothing about `k` in the process.

ECDSA works, but it has some annoyances:

- **Signature malleability.** A given signature `(r, s)` can be trivially massaged into `(r, n - s)`, where `n` is the curve order. Both verify against the same key for the same message. This caused real headaches for transaction-ID stability and was partly fixed by [SegWit](/glossary/segwit-segregated-witness-bip-141).
- **No native aggregation.** Five cosigners on a multisig output produce five separate signatures, each occupying space on-chain. There's no clean way to compress them.
- **Slightly awkward proofs.** Provable security results for ECDSA are messier than for Schnorr.

[Schnorr signatures](/glossary/schnorr-signature), activated with [Taproot](/glossary/taproot) in November 2021, address all three issues. ECDSA is still used for legacy address types (P2PKH, P2SH, P2WPKH, P2WSH) and remains the most-tested signature scheme in production Bitcoin. New Taproot outputs use Schnorr by default.
