---
title: "Elliptic Curve"
slug: elliptic-curve
draft: false
shortDefinition: "A type of curve used in Bitcoin's cryptography (secp256k1) for generating public/private key pairs."
keyTakeaways:
  - "Foundational math for Bitcoin's public/private key system"
  - "Used for ECDSA and now Schnorr signatures on secp256k1"
  - "Security relies on intractability of discrete log problems"
sources: []
relatedTerms:
  - bip-66
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - shors-algorithm
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Elliptic-curve_cryptography"
  - "https://www.wikidata.org/wiki/Q1048911"
liveWidget: ~
---

Bitcoin's [public-key cryptography](/glossary/public-key) is built on a specific elliptic curve called **secp256k1**. Satoshi picked it for the original Bitcoin design and it's been the backbone of every Bitcoin signature ever since.

The relevant property: elliptic curves let you do "one-way math." You can multiply a known curve point G by a secret number k to get another point P (cheap). Going the other way - given P, finding k - is computationally infeasible for any realistic adversary. This asymmetry is the **elliptic curve discrete logarithm problem**, and Bitcoin's entire ownership model rests on it staying hard.

In practice:

- Your [private key](/glossary/private-key) is just a number k between 1 and roughly 2^256.
- Your [public key](/glossary/public-key) is the point P = k·G on the secp256k1 curve.
- Signing a transaction proves you know k *without revealing it*, by exploiting the same one-way math.

Different elliptic curves exist (ed25519, NIST P-256, others). Bitcoin sticks with secp256k1 for compatibility and because no serious vulnerability has been found in it after sixteen years of being one of the most-attacked cryptographic targets on Earth.

The most plausible threat is a sufficiently powerful quantum computer running [Shor's algorithm](/glossary/shors-algorithm), which could in principle break elliptic curve discrete log. This is a real concern but not imminent. Address types that don't reveal public keys until spent ([P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash), [Taproot](/glossary/taproot)) already buy some defense-in-depth against that future, though Taproot is a partial exception (the bech32m address IS the tweaked pubkey, with no hash layer in front). See [Post-Quantum Bitcoin](/glossary/post-quantum-bitcoin) for the migration framework, and the [Key Space rabbit hole](/rabbit-hole/key-space) for why 2^256 is so much bigger than your intuition wants it to be.
