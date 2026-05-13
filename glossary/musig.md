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
  - covariance-transaction
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
liveWidget: ~
---

MuSig allows multiple participants to collectively produce a single public key and a single signature. On-chain, it looks identical to a standard single-sig. This fosters both privacy (hiding how many cosigners exist) and efficiency (less data means lower fees). MuSig is a step forward from traditional multisig, which often reveals the m-of-n structure and requires multiple signatures. In Taproot-enabled Bitcoin, MuSig can combine with key path spends to further conceal script complexities, making advanced contract setups look like regular single-sig.
