---
title: "Post-Quantum Bitcoin"
slug: post-quantum-bitcoin
linkText:
  - "post-quantum Bitcoin"
  - "post-quantum migration"
  - "post-quantum"
draft: false
published: "2026-06-01"
updated: "2026-10-15"
shortDefinition: "The set of protocol changes Bitcoin needs to stay secure against a sufficiently powerful quantum computer - concentrated in the signature schemes, not the hash function."
keyTakeaways:
  - "Bitcoin's quantum exposure is in the signatures (ECDSA, Schnorr), not the hash function (SHA-256)"
  - "Over 34% of all BTC sits at addresses with revealed public keys - quantum-spendable once a CRQC arrives"
  - "NIST has standardized two PQ signature candidates (ML-DSA, SLH-DSA); Bitcoin hasn't committed to one"
sources:
  - { label: "BIP-361 - Post Quantum Migration and Legacy Signature Sunset, draft assigned 2026-02-11: as of March 1, 2026, over 34% of all bitcoin have revealed a public key on-chain; Phase A at 160,000 blocks (about 3 years) after activation and Phase B 2 years after that; requires a TBD Post Quantum Signature BIP; the rescue example is a BIP-32 hardened-derivation proof, and no rescue protocol is currently believed possible for P2PK", url: "https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki" }
  - { label: "NIST - NIST Releases First 3 Finalized Post-Quantum Encryption Standards (August 13, 2024): FIPS 204 (ML-DSA, from CRYSTALS-Dilithium) and FIPS 205 (SLH-DSA, from SPHINCS+) are the two signature standards; a draft FIPS 206 built around FALCON, to be called FN-DSA, was still to come", url: "https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards" }
  - { label: "NIST CSRC - Post-Quantum Cryptography project page (updated August 5, 2026): the Falcon digital signature algorithm was selected for ongoing standardization and that process is underway", url: "https://csrc.nist.gov/projects/post-quantum-cryptography" }
  - { label: "Aggarwal, Brennen, Lee, Santha, Tomamichel - Quantum attacks on Bitcoin, and how to protect against them (arXiv, October 28, 2017): proof-of-work is relatively resistant to quantum speedup; the elliptic curve signature scheme could be completely broken as early as 2027 by the most optimistic estimates", url: "https://arxiv.org/abs/1710.10377" }
  - { label: "NIST IR 8105 - Report on Post-Quantum Cryptography (April 2016): Grover's algorithm gives a quadratic speed-up on unstructured search, so symmetric ciphers and hash functions need larger sizes rather than replacement", url: "https://nvlpubs.nist.gov/nistpubs/ir/2016/NIST.IR.8105.pdf" }
  - { label: "Global Risk Institute - Quantum Threat Timeline Report 2024, executive summary (December 2024): experts gave likelihood ranges for a CRQC over 5 to 30 years; about 34% within a decade on an optimistic reading and about 19% on a pessimistic one", url: "https://globalriskinstitute.org/mp-files/quantum-threat-timeline-report-2024-executive-summary.pdf" }
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

Bitcoin's cryptography wasn't designed with quantum computers in mind. Post-Quantum Bitcoin is the umbrella term for the protocol changes that need to happen before they arrive - specifically, swapping the signature schemes ([ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) and [Schnorr](/glossary/schnorr-signature)) for ones that don't melt under [Shor's algorithm](/glossary/shors-algorithm).

The threat is specific, the math is published, the migration is in active draft. None of it is consensus yet.

## What's at risk

Bitcoin's signature schemes - ECDSA and Schnorr, both on the [secp256k1 elliptic curve](/glossary/elliptic-curve) - depend on the assumption that the discrete logarithm problem is computationally hard. A sufficiently large quantum computer running Shor's algorithm breaks that assumption directly: given the [public key](/glossary/public-key), the algorithm derives the private key in polynomial time.

This is the existential exposure. Any UTXO whose public key has been revealed on-chain is theoretically spendable by anyone with such a machine.

## What isn't

Bitcoin's hash function - [SHA-256](/glossary/hash) - is weakened but not broken by [Grover's algorithm](/glossary/grovers-algorithm), which provides quadratic speedup on unstructured search. Effective security drops from 256 bits to roughly 128. That's still very strong - 128-bit security is the standard floor for symmetric cryptography elsewhere.

Functionally:

- **Proof-of-work survives.** Quantum miners would gain a square-root speedup, not a dominating advantage.
- **Hashed address types ([P2PKH](/glossary/p2pkh-pay-public-key-hash), [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)) survive** while their pubkeys remain unrevealed.
- **The 21M supply cap isn't threatened.** Quantum enables theft of exposed coins, not minting of new ones.

## The exposure today

[BIP-361](/glossary/bip-361) puts **over 34% of all bitcoin**, as of March 2026, at addresses with revealed public keys. The exposure breaks down into three buckets:

- **[P2PK outputs](/glossary/p2pk-pay-public-key)** - early Bitcoin (mostly 2009-2010 mining rewards, including most of Satoshi's stash). Pubkey is on-chain at output creation.
- **Reused P2PKH / P2WPKH addresses** - once spent, the pubkey is permanently revealed. Coins remaining at or returning to that address are exposed. See [address reuse](/glossary/address-reuse) for why this happens.
- **P2TR ([Taproot](/glossary/taproot)) outputs** - the address *is* the tweaked pubkey in bech32m. No hash layer in front. Exposed at creation, before any spend.

Never-spent P2PKH and P2WPKH addresses are quantum-safe today. The pubkey is hashed; only the spending transaction reveals it.

## The migration in flight

NIST finalized two post-quantum signature standards in August 2024 - [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final) ([ML-DSA](/glossary/ml-dsa-dilithium), based on Dilithium) and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) ([SLH-DSA](/glossary/slh-dsa-sphincs-plus), based on SPHINCS+). A third (Falcon, to become FN-DSA) is still in standardization.

For Bitcoin specifically, the migration framework is [BIP-361](/glossary/bip-361) - a draft proposal that sunsets ECDSA and Schnorr spends over five years via a two-phase soft fork. The PQ signature scheme itself is deferred to a separate "TBD Post Quantum Signature BIP" that hasn't been published yet.

One consequence worth naming: under BIP-361's Phase B, coins at legacy outputs can only move through a rescue protocol, and the BIP's example is a [BIP-32](/glossary/bip-32) hardened-derivation proof that a quantum attacker holding only the public key cannot produce. [Satoshi's](/glossary/satoshi-nakamoto) P2PK outputs predate BIP-32 (2012), and the BIP says no rescue protocol is currently believed possible for P2PK at all, pointing to a separate "Hourglass" proposal for those coins instead. Under BIP-361 alone, they are permanently locked. Whether that's a feature or a bug is the most charged part of the debate.

## The timeline

Estimates for when a [cryptographically-relevant quantum computer (CRQC)](/glossary/crqc-cryptographically-relevant-quantum-computer) arrives range from "as early as 2027" (Aggarwal et al., 2017) to multiple decades out. BIP-361's authors cite academic roadmaps pointing at 2027-2030. The Global Risk Institute's 2024 expert survey spreads the odds across a 5-to-30-year window, with roughly a one-in-five to one-in-three chance inside ten years.

The discipline is to plan for the optimistic case. The optimistic case has been "as early as 2027" since 2017, and the threshold keeps moving forward as quantum advances meet the engineering reality of error correction. The trend line is toward eventual capability - when, not whether. The five-year migration window in BIP-361 isn't paranoia; it's roughly the time it actually takes to coordinate wallets, exchanges, and custodians on a new signature scheme.

Go deeper in the [Quantum and Bitcoin rabbit hole](/rabbit-hole/quantum-and-bitcoin) - the full exposure measurement, what is and is not at risk, the honest timeline, and what to actually do today.

Spec: [BIP-361](https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki). NIST landing: [Post-Quantum Cryptography Project](https://csrc.nist.gov/projects/post-quantum-cryptography).
