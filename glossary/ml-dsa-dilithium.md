---
title: "ML-DSA / Dilithium (FIPS 204)"
slug: ml-dsa-dilithium
draft: true
shortDefinition: "The NIST-standardized lattice-based post-quantum signature scheme — leading candidate for replacing Bitcoin's ECDSA/Schnorr signatures."
keyTakeaways:
  - "NIST-standardized lattice-based PQ signature scheme (FIPS 204, August 2024)"
  - "Signatures are ~50x larger than current Bitcoin signatures (~3KB vs 64 bytes)"
  - "Leading candidate to replace ECDSA/Schnorr in Bitcoin's PQ migration, though not formally proposed yet"
sources: []
relatedTerms:
  - post-quantum-bitcoin
  - bip-361
  - slh-dsa-sphincs-plus
  - shors-algorithm
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - public-key
  - elliptic-curve
liveWidget: ~
---

ML-DSA — the Module-Lattice-Based Digital Signature Algorithm — is the post-quantum signature standard NIST finalized as [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) in August 2024. It's based on CRYSTALS-Dilithium, the lattice-cryptography scheme that won NIST's post-quantum signature competition. For Bitcoin's migration discussions, ML-DSA is the most-cited candidate to replace [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) and [Schnorr](/glossary/schnorr-signature).

## What it is

ML-DSA is a digital signature scheme whose security depends on the hardness of lattice problems — specifically, the Module Learning With Errors (MLWE) and Module Short Integer Solution (MSIS) problems. These problems are believed to be hard even for quantum computers; [Shor's algorithm](/glossary/shors-algorithm) doesn't apply to lattice problems the way it applies to elliptic-curve discrete logs.

The scheme produces signatures using polynomial arithmetic over module lattices. Three parameter sets are standardized:

- **ML-DSA-44**: ~128-bit security, ~2,420-byte signatures
- **ML-DSA-65**: ~192-bit security, ~3,293-byte signatures
- **ML-DSA-87**: ~256-bit security, ~4,595-byte signatures

[Public keys](/glossary/public-key) range from ~1,300 to ~2,600 bytes depending on parameter set.

## Lattice-based assumption

The security assumption behind ML-DSA is different in kind from ECDSA's. ECDSA assumes the discrete logarithm problem is hard; that assumption fails on a [CRQC](/glossary/crqc-cryptographically-relevant-quantum-computer). Lattice problems — finding short vectors in high-dimensional lattices, or solving systems of noisy linear equations — are not known to be efficiently solvable by any quantum algorithm.

This isn't a guarantee. Lattice cryptography is younger than RSA and ECDSA; the cryptographic community has less collective experience with attacks against it. Future breakthroughs (quantum or classical) could weaken specific schemes. NIST's standardization reflects current consensus that lattice problems offer the best balance of security and practicality for post-quantum signatures — not that they're proven unbreakable.

## Trade-offs

Compared to Bitcoin's current schemes:

- ECDSA signature (DER-encoded on-chain): ~71-72 bytes
- Schnorr signature ([BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)): exactly 64 bytes
- ML-DSA-65 signature (mid-range parameter set): ~3,293 bytes

That's a ~50x increase in signature size. The downstream effects:

- Transaction size grows substantially; fees grow proportionally
- Block weight budget is consumed faster
- Pruning storage requirements increase
- UTXO set size and validation cost rise

These aren't dealbreakers, but they're the reason Bitcoin's PQ migration isn't a simple drop-in. Block-space economics will need to absorb the larger signatures, which is part of why [BIP-361's](/glossary/bip-361) two-phase migration spans five years.

## Position in the Bitcoin migration discussion

BIP-361 — the active draft proposal for Bitcoin's post-quantum migration — is signature-scheme-agnostic. It defers the choice of specific PQ algorithm to a separate "TBD Post Quantum Signature BIP" that hasn't been published. ML-DSA is the leading candidate for that slot because:

- It's NIST-standardized (FIPS 204)
- Its signature size is the most reasonable among current PQ candidates ([SLH-DSA / SPHINCS+](/glossary/slh-dsa-sphincs-plus) is much larger; Falcon is smaller but more implementation-fragile)
- Verification is fast enough for full-node validation at Bitcoin's scale
- It's already being deployed in non-Bitcoin contexts (TLS, code signing)

The alternative candidates are part of the live discussion. Bitcoin's choice will weigh signature size against security-assumption diversity.

Spec: [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) (NIST CSRC).
