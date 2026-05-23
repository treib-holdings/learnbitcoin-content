---
title: "Post-Quantum Bitcoin"
slug: post-quantum-bitcoin
draft: true
shortDefinition: "The set of protocol changes Bitcoin needs to stay secure against a sufficiently powerful quantum computer — concentrated in the signature schemes, not the hash function."
keyTakeaways:
  - "Bitcoin's quantum exposure is in the signatures (ECDSA, Schnorr), not the hash function (SHA-256)"
  - "Over 34% of all BTC sits at addresses with revealed public keys — quantum-spendable once a CRQC arrives"
  - "NIST has standardized two PQ signature candidates (ML-DSA, SLH-DSA); Bitcoin hasn't committed to one"
sources: []
relatedTerms:
  - shors-algorithm
  - grovers-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - bip-361
  - ml-dsa-dilithium
  - slh-dsa-sphincs-plus
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - hash
  - p2pk-pay-public-key
  - address-reuse
liveWidget: ~
---

Bitcoin's cryptography wasn't designed with quantum computers in mind. Post-Quantum Bitcoin is the umbrella term for the protocol changes that need to happen before they arrive — specifically, swapping the signature schemes ([ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) and [Schnorr](/glossary/schnorr-signature)) for ones that don't melt under [Shor's algorithm](/glossary/shors-algorithm).

The threat is specific, the math is published, the migration is in active draft. None of it is consensus yet.

## What's at risk

Bitcoin's signature schemes — ECDSA and Schnorr, both on the [secp256k1 elliptic curve](/glossary/elliptic-curve) — depend on the assumption that the discrete logarithm problem is computationally hard. A sufficiently large quantum computer running Shor's algorithm breaks that assumption directly: given the [public key](/glossary/public-key), the algorithm derives the private key in polynomial time.

This is the existential exposure. Any UTXO whose public key has been revealed on-chain is theoretically spendable by anyone with such a machine.

## What isn't

Bitcoin's hash function — [SHA-256](/glossary/hash) — is weakened but not broken by [Grover's algorithm](/glossary/grovers-algorithm), which provides quadratic speedup on unstructured search. Effective security drops from 256 bits to roughly 128. That's still very strong — 128-bit security is the standard floor for symmetric cryptography elsewhere.

Functionally:

- **Proof-of-work survives.** Quantum miners would gain a square-root speedup, not a dominating advantage.
- **Hashed address types ([P2PKH](/glossary/p2pkh-pay-public-key-hash), [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)) survive** while their pubkeys remain unrevealed.
- **The 21M supply cap isn't threatened.** Quantum enables theft of exposed coins, not minting of new ones.

## The exposure today

[BIP-361](/glossary/bip-361) estimates **over 34% of all bitcoin** sits at addresses with revealed public keys. The exposure breaks down into three buckets:

- **[P2PK outputs](/glossary/p2pk-pay-public-key)** — early Bitcoin (mostly 2009-2010 mining rewards, including most of Satoshi's stash). Pubkey is on-chain at output creation.
- **Reused P2PKH / P2WPKH addresses** — once spent, the pubkey is permanently revealed. Coins remaining at or returning to that address are exposed. See [address reuse](/glossary/address-reuse) for why this happens.
- **P2TR ([Taproot](/glossary/taproot)) outputs** — the address *is* the tweaked pubkey in bech32m. No hash layer in front. Exposed at creation, before any spend.

Never-spent P2PKH and P2WPKH addresses are quantum-safe today. The pubkey is hashed; only the spending transaction reveals it.

## The migration in flight

NIST finalized two post-quantum signature standards in August 2024 — [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) ([ML-DSA](/glossary/ml-dsa-dilithium), based on Dilithium) and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) ([SLH-DSA](/glossary/slh-dsa-sphincs-plus), based on SPHINCS+). A third (Falcon, to become FN-DSA) is still in standardization.

For Bitcoin specifically, the migration framework is [BIP-361](/glossary/bip-361) — a draft proposal that sunsets ECDSA and Schnorr spends over five years via a two-phase soft fork. The PQ signature scheme itself is deferred to a separate "TBD Post Quantum Signature BIP" that hasn't been published yet.

One consequence worth naming: under BIP-361's Phase B, [Satoshi's](/glossary/satoshi-nakamoto) P2PK outputs become unspendable without a seed-based rescue. Anyone who can't produce a BIP-32 derivation proof — including a still-silent Satoshi — has their coins permanently locked. Whether that's a feature or a bug is the most charged part of the debate.

## The timeline

Estimates for when a [cryptographically-relevant quantum computer (CRQC)](/glossary/crqc-cryptographically-relevant-quantum-computer) arrives range from "as early as 2027" (Aggarwal et al., 2017) to multiple decades out. BIP-361's authors cite academic roadmaps pointing at 2027-2030. Pessimistic accounts push the horizon to the 2040s or later.

The discipline is to plan for the optimistic case. The optimistic case has been "as early as 2027" since 2017, and the threshold keeps moving forward as quantum advances meet the engineering reality of error correction. The trend line is toward eventual capability — when, not whether. The five-year migration window in BIP-361 isn't paranoia; it's roughly the time it actually takes to coordinate wallets, exchanges, and custodians on a new signature scheme.

Spec: [BIP-361](https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki). NIST landing: [Post-Quantum Cryptography Project](https://csrc.nist.gov/projects/post-quantum-cryptography).
