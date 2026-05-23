---
title: "Shor's Algorithm"
slug: shors-algorithm
draft: true
shortDefinition: "The quantum algorithm that breaks elliptic-curve cryptography — and therefore Bitcoin's ECDSA and Schnorr signatures — given a sufficiently large quantum computer."
keyTakeaways:
  - "Breaks elliptic-curve cryptography (and RSA) given enough error-corrected qubits"
  - "The specific reason Bitcoin's ECDSA and Schnorr signatures must be replaced before CRQCs arrive"
  - "Algorithm works in principle; hardware to run it at cryptographic scale doesn't exist yet"
sources: []
relatedTerms:
  - post-quantum-bitcoin
  - grovers-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - bip-361
  - p2pk-pay-public-key
  - public-key
liveWidget: ~
---

Shor's algorithm, published by Peter Shor in 1994, is the reason "post-quantum Bitcoin" is a topic at all. It's the quantum algorithm that makes a large-enough quantum computer an existential threat to most public-key cryptography in use today — including Bitcoin's. It efficiently solves two problems classical computers can't: integer factorization (breaks RSA) and the discrete logarithm problem (breaks elliptic-curve cryptography, including [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) and [Schnorr](/glossary/schnorr-signature)).

## What it does

Bitcoin's signature schemes rely on the assumption that, given a [public key](/glossary/public-key) on the [secp256k1 curve](/glossary/elliptic-curve), deriving the corresponding private key is computationally infeasible. Classically, the best known attack takes time exponential in the key size — roughly 2¹²⁸ operations for a 256-bit curve. Practically infinite.

Shor's reduces this to polynomial time. On a quantum computer with enough stable, error-corrected qubits, deriving a secp256k1 private key from its public key becomes tractable — minutes to hours instead of trillions of years.

The mathematical core is finding the period of a function defined modulo a hard number. Classical computers struggle with this; quantum computers exploit superposition and the quantum Fourier transform to find the period efficiently. Both integer factorization and discrete log reduce to period-finding. Both fall to Shor's.

## Why it's the specific threat to Bitcoin

Two pieces of Bitcoin's cryptography are directly vulnerable:

- **ECDSA** (transaction signatures since 2009): private key derivable via Shor's from any exposed pubkey.
- **Schnorr signatures** (used since [Taproot](/glossary/taproot), [BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)): same underlying elliptic-curve assumption, same vulnerability.

Address types that expose the pubkey on-chain — [P2PK](/glossary/p2pk-pay-public-key), reused P2PKH/P2WPKH, all P2TR (Taproot) outputs — sit in the attack surface today. Anyone running a node can see the pubkey; only the absence of a sufficiently large quantum computer protects those coins.

What Shor's does *not* threaten directly: Bitcoin's hash function ([SHA-256](/glossary/hash)) and the [proof-of-work](/glossary/proof-work-pow) mechanism. Those face [Grover's algorithm](/glossary/grovers-algorithm) — a much weaker quantum threat.

## What scale is needed

Running Shor's against a 256-bit elliptic curve requires roughly thousands of error-corrected (logical) qubits, sustained quantum coherence across millions of gate operations, and gate fidelity high enough that error-correction overhead doesn't blow up. See [CRQC](/glossary/crqc-cryptographically-relevant-quantum-computer) for the specific thresholds and the current gap between today's hardware and that bar.

The short version: orders of magnitude separate today's quantum systems from "hardware that can run Shor's at Bitcoin-relevant scale," on multiple axes (qubit count, error rates, coherence time).

## Current state

Shor's algorithm has been run experimentally to factor small numbers (15, 21, sometimes larger) on quantum hardware. These demonstrations are mathematically valid but trivially small. No public demonstration has come close to factoring or solving discrete log at cryptographically-relevant key sizes.

The race is on the engineering side, not the algorithmic side. The algorithm exists and works in principle. Building the hardware to run it at scale is the open problem — and the basis for every [CRQC](/glossary/crqc-cryptographically-relevant-quantum-computer) timeline estimate.
