---
title: "ECDSA (Elliptic Curve Digital Signature Algorithm)"
slug: ecdsa-elliptic-curve-digital-signature-algorithm
draft: false
shortDefinition: "Bitcoin's original signature scheme for verifying ownership, used before Taproot's Schnorr signatures."
keyTakeaways:
  - "Elliptic curve-based method for signing transactions"
  - "Formed the cornerstone of Bitcoin's cryptographic security"
  - "Schnorr signatures now coexist, bringing potential benefits"
sources: []
relatedTerms:
  - adapter-signature
  - bip-66
  - elliptic-curve
  - musig
  - musig2
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

ECDSA, based on elliptic curve cryptography, enables users to prove they control a specific private key without revealing it. A typical Bitcoin address (P2PKH) relies on ECDSA for signature validation, ensuring only the rightful owner can spend those outputs.
Schnorr signatures (BIP 340) have since joined the toolbox, offering certain advantages like signature aggregation and smaller multisigs. Yet ECDSA remains widely used due to legacy addresses and broad compatibility. While slightly less efficient than Schnorr, ECDSA is tried-and-tested, forming the bedrock of Bitcoin's security for more than a decade.
