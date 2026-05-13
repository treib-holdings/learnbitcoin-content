---
title: "Schnorr Signature"
slug: schnorr-signature
draft: false
shortDefinition: "A more efficient signature scheme introduced with Taproot, enabling key and signature aggregation for better privacy and lower fees."
keyTakeaways:
  - "Reduces transaction size for multi-signatures"
  - "Easier to prove correctness than ECDSA, with unique algebraic properties"
  - "Forms the basis for advanced features like MuSig/MAST"
sources: []
relatedTerms:
  - bip-341-taproot
  - bip-342-tapscript
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - partially-signed-bitcoin-transaction-psbt
  - signature-aggregation
  - signature-clipping
  - taproot
liveWidget: ~
---

Schnorr signatures replace ECDSA in Taproot-based outputs, offering mathematically simpler aggregation. By combining multiple public keys and partial signatures, a single aggregated key/signature appears on-chain. This shrinks transaction data for multi-party spends, saving fees and obscuring how many cosigners actually exist. Schnorr also underpins protocols like MuSig and MuSig2, which expand use cases for collaborative custody or discreet log contracts. Bitcoin’s adoption of Schnorr in the Taproot upgrade marks a major cryptographic evolution, boosting privacy, scalability, and flexibility.
