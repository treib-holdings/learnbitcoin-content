---
title: "Public Key"
slug: public-key
draft: false
shortDefinition: "Derived from a private key via elliptic curve multiplication, used to verify signatures or generate BTC addresses."
keyTakeaways:
  - "Core to Bitcoin’s cryptography: verifying signatures derived from private keys"
  - "Safe to share, unlike the private key"
  - "Usually hashed to form addresses in typical script types"
sources: []
relatedTerms:
  - address
  - b32-address
  - p2pk-pay-public-key
  - xpub-extended-public-key
liveWidget: ~
---

A public key, safe to share publicly, corresponds uniquely to a private key. In Bitcoin’s ECDSA/Schnorr system, the private key remains secret, while the public key proves ownership by verifying signatures. Addresses like P2PKH or P2WPKH typically employ a hashed version of the public key (like RIPEMD160(SHA-256(pubkey))) for better privacy and shorter on-chain data. Public keys come in compressed or uncompressed form, but compressed (33-byte) is now standard. They’re fundamental to cryptographic ownership, letting the network confirm signatures match the rightful owner without revealing the private key.
