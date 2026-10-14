---
title: "ECDSA (Elliptic Curve Digital Signature Algorithm)"
slug: ecdsa-elliptic-curve-digital-signature-algorithm
draft: false
updated: "2026-10-15"
shortDefinition: "Bitcoin's original signature scheme for proving ownership, still used by every pre-Taproot output type alongside Taproot's Schnorr signatures."
keyTakeaways:
  - "Elliptic curve-based method for signing transactions"
  - "Formed the cornerstone of Bitcoin's cryptographic security"
  - "Schnorr signatures now coexist, bringing potential benefits"
sources:
  - { label: "BIP-340 - Schnorr Signatures for secp256k1: Bitcoin has traditionally used ECDSA over secp256k1; ECDSA signatures are inherently malleable since (r, n-s) verifies whenever (r, s) does; the best provable-security results for ECDSA rely on stronger assumptions; Schnorr's linearity is the building block for multisignatures (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "bitcoin-core/secp256k1 - README: constant time, constant memory access signing; intended to be completely free of timing sidechannels for secret-key operations; derandomized ECDSA via RFC 6979 (accessed 2026-10-14)", url: "https://github.com/bitcoin-core/secp256k1/blob/master/README.md" }
  - { label: "Billy Bob Brumley and Nicola Tuveri - Remote Timing Attacks are Still Practical: a timing leak in OpenSSL's elliptic-curve scalar multiplication recovers a TLS server's ECDSA private key (IACR ePrint 2011/232)", url: "https://eprint.iacr.org/2011/232" }
  - { label: "BIP-141 - Segregated Witness: signature data is no longer part of the transaction hash, so nonintentional malleability becomes impossible for inputs that use it (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-341 - Taproot: key path spends verify a BIP 340 signature; the deployment activated at height 709632 on mainnet (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-342 - Validation of Taproot Scripts: OP_CHECKSIG and OP_CHECKSIGVERIFY are modified to operate on Schnorr public keys and signatures instead of ECDSA (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "Peter W. Shor - Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer (1995)", url: "https://arxiv.org/abs/quant-ph/9508027" }
relatedTerms:
  - adapter-signature
  - bip-66
  - constant-time
  - elliptic-curve
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - shors-algorithm
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

1. A signer with private key `d` produces a signature `(r, s)` that depends on `d`, the message being signed, and a secret nonce `k` (random in textbook ECDSA; libsecp256k1 derives it deterministically from the key and message per RFC 6979).
2. Anyone with the corresponding [public key](/glossary/public-key) can verify the signature is mathematically consistent - meaning whoever signed must have known `d`.
3. The verifier learns nothing about `d` in the process.

Production ECDSA implementations also have to follow strict [constant-time](/glossary/constant-time) discipline: the scalar multiplication step in signing leaks key bits through timing if implemented naively, and a 2011 attack recovered a TLS server's ECDSA key from a scalar-multiplication timing leak in OpenSSL. Bitcoin Core's libsecp256k1, built to be free of timing side channels for secret-key operations, is one of the more carefully-engineered constant-time signers in production cryptography.

ECDSA works, but it has some annoyances:

- **Signature malleability.** A given signature `(r, s)` can be trivially massaged into `(r, n - s)`, where `n` is the curve order. Both verify against the same key for the same message. This caused real headaches for transaction-ID stability. [SegWit](/glossary/segwit-segregated-witness-bip-141) fixed it for the inputs that use it, by taking signatures out of the data the transaction ID is computed from.
- **No native aggregation.** Five cosigners on a multisig output produce five separate signatures, each occupying space on-chain. There's no clean way to compress them.
- **Slightly awkward proofs.** Provable security results for ECDSA are messier than for Schnorr.

[Schnorr signatures](/glossary/schnorr-signature), activated with [Taproot](/glossary/taproot) in November 2021 at block 709,632, address all three issues. ECDSA is still used by every pre-Taproot output type (P2PK, P2PKH, P2SH, P2WPKH, P2WSH) and remains the most-tested signature scheme in production Bitcoin. Taproot outputs use Schnorr only: the key path verifies a BIP 340 signature, and tapscript's OP_CHECKSIG was redefined for Schnorr keys and signatures instead of ECDSA.

ECDSA's security rests on the elliptic-curve discrete logarithm problem being computationally hard. That assumption is broken by [Shor's algorithm](/glossary/shors-algorithm) on a sufficiently powerful quantum computer. See [Post-Quantum Bitcoin](/glossary/post-quantum-bitcoin) for the migration framework.
