---
title: "SLH-DSA / SPHINCS+ (FIPS 205)"
slug: slh-dsa-sphincs-plus
linkText:
  - "SLH-DSA"
  - "SPHINCS+"
  - "FIPS 205"
draft: false
published: "2026-06-01"
updated: "2026-10-15"
shortDefinition: "The NIST-standardized hash-based post-quantum signature scheme - NIST's backup to ML-DSA, resting on fewer cryptographic assumptions but with much larger signatures."
keyTakeaways:
  - "NIST-standardized hash-based PQ signature scheme (FIPS 205, August 2024)"
  - "Signatures are 100x-800x larger than current Bitcoin signatures"
  - "NIST's designated backup to ML-DSA, valued for its hash-function security model, not efficiency; Bitcoin's PQ work has leaned toward hash-based schemes"
sources:
  - { label: "NIST FIPS 205 - Stateless Hash-Based Digital Signature Standard (August 13, 2024): based on SPHINCS+; security relies on the presumed difficulty of finding preimages for hash functions and related properties; parameter sets are designed for relatively small signatures ('s') or relatively fast signature generation ('f'); Table 2 gives 32, 48 and 64-byte public keys and signatures of 7,856 (128s), 17,088 (128f), 16,224 (192s), 35,664 (192f), 29,792 (256s) and 49,856 (256f) bytes", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf" }
  - { label: "NIST FIPS 204 - Module-Lattice-Based Digital Signature Standard (August 13, 2024): Table 2 gives ML-DSA signature sizes of 2,420 (ML-DSA-44), 3,309 (ML-DSA-65) and 4,627 (ML-DSA-87) bytes", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf" }
  - { label: "NIST - NIST Releases First 3 Finalized Post-Quantum Encryption Standards (August 13, 2024): FIPS 205 uses SPHINCS+, renamed SLH-DSA, is based on a different math approach than ML-DSA, and is intended as a backup method in case ML-DSA proves vulnerable", url: "https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards" }
  - { label: "BIP-340 - Schnorr Signatures for secp256k1: fixed 64-byte signatures versus DER-encoded ECDSA signatures of variable size up to 72 bytes", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "BIP-361 - Post Quantum Migration and Legacy Signature Sunset (draft, assigned 2026-02-11): header lists Requires: TBD Post Quantum Signature BIP", url: "https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki" }
  - { label: "Bitcoin Optech Newsletter #412 (July 3, 2026): why Bitcoin post-quantum work has focused on hash-based signatures - weaker security assumptions, implementation simplicity, fast verification and suitability as a long-term fallback; hybrid schemes under discussion", url: "https://bitcoinops.org/en/newsletters/2026/07/03/" }
  - { label: "Bitcoin Optech Newsletter #421 (September 4, 2026): SHRINCS draft BIP, a semi-stateful hash-based signature scheme for Bitcoin with 48-byte public keys, 548-byte stateful signatures and a 5,777-byte stateless fallback", url: "https://bitcoinops.org/en/newsletters/2026/09/04/" }
  - { label: "Bitcoin-Dev mailing list - conduition, SHRINCS: an efficient hash-based signature scheme for Bitcoin (first draft) (August 26, 2026): first draft of a BIP specifying SHRINCS, a semi-stateful hash-based signature scheme for Bitcoin, posted on behalf of the SHRINCS working group", url: "https://www.learnbitcoin.com/archive/m/-w8D4WbD7zY2bfYQIES40iBZQWbZx6ab-S6EW8tWsMEFaHO9NEOLUkte_MZZgNQDd0pljCM2wD1Ccnk3BfjwLPgCiVz-NfTwjHJ4aZHUqUw%3D%40proton.me" }
relatedTerms:
  - post-quantum-bitcoin
  - bip-361
  - ml-dsa-dilithium
  - shors-algorithm
  - grovers-algorithm
  - hash
liveWidget: ~
---

SLH-DSA - the Stateless Hash-Based Digital Signature Algorithm - is the post-quantum signature standard NIST finalized as [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) in August 2024. It's based on SPHINCS+, the hash-based scheme that emerged from the same NIST competition that produced [ML-DSA](/glossary/ml-dsa-dilithium). NIST positions SLH-DSA as the backup to ML-DSA, for the case where lattice-based schemes turn out to be vulnerable. In Bitcoin's post-quantum discussion the hash-based family has drawn most of the work, because its security rests only on the hash function holding and it is simpler to implement.

## What it is

SLH-DSA constructs signatures from hash function compositions - Merkle trees of one-time signatures, recursively. The security assumption is the hardness of finding [hash](/glossary/hash) preimages, plus a few related properties of the same hash functions, which [Grover's algorithm](/glossary/grovers-algorithm) weakens but doesn't break.

Three security levels are standardized, each with "small" and "fast" variants (trading signature size for signing speed):

- **SLH-DSA-128s**: ~7,856-byte signatures, ~128-bit security, slow signing
- **SLH-DSA-128f**: ~17,088-byte signatures, ~128-bit security, fast signing
- **SLH-DSA-192s / 192f**: ~16,224 and ~35,664-byte signatures, ~192-bit security
- **SLH-DSA-256s**: ~29,792-byte signatures, ~256-bit security
- **SLH-DSA-256f**: ~49,856-byte signatures, ~256-bit security

Public keys are small (~32-64 bytes); signature size is where the cost lives.

## Hash-based vs lattice-based

SLH-DSA's security model is fundamentally different from ML-DSA's:

- **ML-DSA**: security from the assumed hardness of lattice problems. Mathematically well-studied, but cryptographically younger than hash functions.
- **SLH-DSA**: security from the assumed hardness of inverting hash functions (one-way functions). Hash functions are among the oldest, most-studied, and most-trusted cryptographic primitives.

The trade: hash-based schemes are conservative - built on cryptographic primitives with decades of analysis. But they pay a massive cost in signature size. Lattice-based schemes are more efficient but rely on a younger area of cryptanalysis where future breakthroughs are more plausible.

If you want signatures that won't be broken by any algorithm we don't yet know exists, SLH-DSA is the conservative choice. If you want practical efficiency, ML-DSA wins.

## Trade-offs

Compared to Bitcoin's current schemes:

- [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) signature: ~71-72 bytes
- [Schnorr](/glossary/schnorr-signature) signature: 64 bytes
- SLH-DSA-128s signature: ~7,856 bytes - over 100x larger
- SLH-DSA-256f signature: ~49,856 bytes - nearly 800x larger

At Bitcoin's scale, full SLH-DSA migration would balloon transaction sizes and compress effective block capacity significantly. The largest parameter sets are arguably impractical for general Bitcoin transactions; the smallest are still about three times larger than ML-DSA's smallest (2,420 bytes for ML-DSA-44).

The case for SLH-DSA in Bitcoin is therefore conservative-cryptography, not efficiency. It would be the choice if the community wanted maximum confidence that no future cryptanalytic breakthrough could threaten the network - at the cost of block-space economics.

## Position in the Bitcoin migration discussion

SLH-DSA is the second NIST-standardized PQ signature scheme and the canonical hash-based alternative to ML-DSA. In Bitcoin's discourse, it's usually mentioned as:

- A fallback if lattice schemes are later compromised by a classical attack
- An option for high-value or long-lifetime transactions where conservative security matters more than fees
- A possible component in a hybrid scheme - multiple signatures from different security assumptions on the same transaction

[BIP-361's](/glossary/bip-361) "TBD Post Quantum Signature BIP" hasn't published yet, so the formal Bitcoin position on SLH-DSA is undetermined. The working assumption runs the other way from NIST's ordering: most Bitcoin post-quantum work has gone into hash-based schemes, and the SHRINCS draft BIP (first draft posted August 26, 2026) gets a semi-stateful hash-based signature down to 548 bytes, with a 5,777-byte stateless fallback, by keeping a little state in the wallet.

See the [Quantum and Bitcoin rabbit hole](/rabbit-hole/quantum-and-bitcoin) for the block-space trade-offs between the candidate schemes.

Spec: [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) (NIST CSRC).
