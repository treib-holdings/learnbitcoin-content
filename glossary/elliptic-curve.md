---
title: "Elliptic Curve"
slug: elliptic-curve
draft: false
shortDefinition: "A type of curve used in Bitcoin’s cryptography (secp256k1) for generating public/private key pairs."
keyTakeaways:
  - "Foundational math for Bitcoin’s public/private key system"
  - "Used for ECDSA and now Schnorr signatures on secp256k1"
  - "Security relies on intractability of discrete log problems"
sources: []
relatedTerms:
  - bip-66
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - musig
  - musig2
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

Bitcoin’s cryptography is built around the secp256k1 elliptic curve, chosen by Satoshi for its efficiency and security properties. Private keys map to points on this curve, generating public keys via point multiplication. The inherent complexity of solving discrete logarithms on this curve underpins Bitcoin’s key security.
Different curves exist in other systems (like ed25519), but Bitcoin’s curve stands out for having no known serious vulnerabilities despite extensive usage. Understanding how elliptic curves work mathematically isn’t strictly necessary to use Bitcoin, but it’s fundamental to its trustless design-breaking the curve’s security would instantly undermine ownership proofs.
