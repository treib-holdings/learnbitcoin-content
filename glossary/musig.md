---
title: "MuSig"
slug: musig
draft: false
shortDefinition: "A Schnorr-based multi-signature scheme that aggregates multiple public keys into one, reducing transaction size and improving privacy."
keyTakeaways:
  - "Aggregates multiple pubkeys/signatures into one compact signature"
  - "Improves privacy and fee efficiency for multi-party transactions"
  - "Relies on Schnorr signatures introduced with Taproot"
sources: []
relatedTerms:
  - bip-174-psbt
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - mono-signature
  - musig2
  - partial-signature
  - partially-signed-bitcoin-transaction-psbt
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://bitcoinops.org/en/topics/musig/"
liveWidget: ~
---

MuSig is a Schnorr-based n-of-n multi-signature aggregation protocol. Multiple cosigners interact to produce a single combined public key and a single combined signature. On-chain, the result is indistinguishable from a standard single-sig spend. Originally published in 2018 by Maxwell, Poelstra, Seurin, and Wuille.

The original MuSig had a subtle issue: a naive implementation that let signers reveal nonces concurrently was vulnerable to a key-cancellation attack. The fix required a three-round protocol with explicit nonce commitments. That worked, but three rounds of round-trips between cosigners is operationally painful.

[MuSig2](/glossary/musig2) (2020, Nick / Ruffing / Seurin) replaced original MuSig in practice. MuSig2 uses a different mathematical approach to achieve the same security in just two rounds, with the additional benefit that the first round can be pre-computed and reused across signing sessions. Almost every modern implementation that talks about "MuSig" really means MuSig2.

Key properties (shared by both versions):

- **n-of-n only.** All cosigners must participate. For m-of-n threshold setups, use [FROST](/glossary/quorum-signatures) instead.
- **Aggregated public key.** The combined key is a deterministic function of the cosigner public keys. Anyone can compute it; nobody needs to share private material.
- **Single 64-byte signature.** Same size as Taproot single-sig.
- **Privacy.** A MuSig spend looks like any other Taproot key-path spend. The cosigner structure stays off-chain.

Where MuSig (2) shows up in practice:

- **Lightning channels post-Taproot.** Cooperative closes can use MuSig2 to keep the on-chain footprint identical to a single-sig spend.
- **Custodial / institutional multisig.** Replaces classical 2-of-2 or 3-of-3 setups where privacy and fee efficiency matter.
- **Federations.** Smaller (n-of-n) federations can aggregate; larger threshold federations use FROST.

If you're researching modern Bitcoin multisig and the docs say "MuSig," assume MuSig2 unless they specifically call out the older version. The original is mostly historical interest now.
