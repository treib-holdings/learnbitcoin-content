---
title: "SLH-DSA / SPHINCS+ (FIPS 205)"
slug: slh-dsa-sphincs-plus
draft: true
shortDefinition: "The NIST-standardized hash-based post-quantum signature scheme — conservative fallback to ML-DSA, with stronger security assumptions but much larger signatures."
keyTakeaways:
  - "NIST-standardized hash-based PQ signature scheme (FIPS 205, August 2024)"
  - "Signatures are 100x-800x larger than current Bitcoin signatures"
  - "Conservative fallback to ML-DSA in Bitcoin's PQ discussion — valued for hash-function security model, not efficiency"
sources: []
relatedTerms:
  - post-quantum-bitcoin
  - bip-361
  - ml-dsa-dilithium
  - shors-algorithm
  - grovers-algorithm
  - hash
liveWidget: ~
---

SLH-DSA — the Stateless Hash-Based Digital Signature Algorithm — is the post-quantum signature standard NIST finalized as [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) in August 2024. It's based on SPHINCS+, the hash-based scheme that emerged from the same NIST competition that produced [ML-DSA](/glossary/ml-dsa-dilithium). In Bitcoin's post-quantum discussion, SLH-DSA is the conservative fallback — chosen when lattice-based schemes are considered too cryptographically novel and the safer choice is hash-based security.

## What it is

SLH-DSA constructs signatures from hash function compositions — Merkle trees of one-time signatures, recursively. The security assumption is the hardness of finding [hash](/glossary/hash) collisions and preimages, which [Grover's algorithm](/glossary/grovers-algorithm) reduces by half but doesn't break.

Three security levels are standardized, each with "small" and "fast" variants (trading signature size for verification speed):

- **SLH-DSA-128s**: ~7,856-byte signatures, ~128-bit security, slow signing
- **SLH-DSA-128f**: ~17,088-byte signatures, ~128-bit security, fast signing
- **SLH-DSA-256s**: ~29,792-byte signatures, ~256-bit security
- **SLH-DSA-256f**: ~49,856-byte signatures, ~256-bit security

Public keys are small (~32-64 bytes); signature size is where the cost lives.

## Hash-based vs lattice-based

SLH-DSA's security model is fundamentally different from ML-DSA's:

- **ML-DSA**: security from the assumed hardness of lattice problems. Mathematically well-studied, but cryptographically younger than hash functions.
- **SLH-DSA**: security from the assumed hardness of inverting hash functions (one-way functions). Hash functions are among the oldest, most-studied, and most-trusted cryptographic primitives.

The trade: hash-based schemes are conservative — built on cryptographic primitives with decades of analysis. But they pay a massive cost in signature size. Lattice-based schemes are more efficient but rely on a younger area of cryptanalysis where future breakthroughs are more plausible.

If you want signatures that won't be broken by any algorithm we don't yet know exists, SLH-DSA is the conservative choice. If you want practical efficiency, ML-DSA wins.

## Trade-offs

Compared to Bitcoin's current schemes:

- [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) signature: ~71-72 bytes
- [Schnorr](/glossary/schnorr-signature) signature: 64 bytes
- SLH-DSA-128s signature: ~7,856 bytes — over 100x larger
- SLH-DSA-256f signature: ~49,856 bytes — nearly 800x larger

At Bitcoin's scale, full SLH-DSA migration would balloon transaction sizes and compress effective block capacity significantly. The largest parameter sets are arguably impractical for general Bitcoin transactions; the smallest are still ~10x larger than ML-DSA signatures.

The case for SLH-DSA in Bitcoin is therefore conservative-cryptography, not efficiency. It would be the choice if the community wanted maximum confidence that no future cryptanalytic breakthrough could threaten the network — at the cost of block-space economics.

## Position in the Bitcoin migration discussion

SLH-DSA is the second NIST-standardized PQ signature scheme and the canonical hash-based alternative to ML-DSA. In Bitcoin's discourse, it's usually mentioned as:

- A fallback if lattice schemes are later compromised by a classical attack
- An option for high-value or long-lifetime transactions where conservative security matters more than fees
- A possible component in a hybrid scheme — multiple signatures from different security assumptions on the same transaction

[BIP-361's](/glossary/bip-361) "TBD Post Quantum Signature BIP" hasn't published yet, so the formal Bitcoin position on SLH-DSA is undetermined. The current discussion tends to assume ML-DSA as default with SLH-DSA as backup.

Spec: [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) (NIST CSRC).
