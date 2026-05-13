---
title: "Quorum Signatures"
slug: quorum-signatures
draft: false
shortDefinition: "Threshold signature schemes where a subset (quorum) of signers must cooperate to produce a valid signature."
keyTakeaways:
  - "Allows M-of-N signing to produce one aggregated signature"
  - "Useful for federations or advanced custody setups"
  - "Reduces signature overhead, potentially boosting privacy"
sources: []
relatedTerms:
  - clawback-mechanism
  - covariance-transaction
  - fidelity-bond
  - grothendiecks-proof
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - module-signing
  - mono-signature
  - musig
  - musig2
  - partial-signature
  - partially-signed-bitcoin-transaction-psbt
  - poelstras-proof
liveWidget: ~
---

Quorum signatures generalize multisig. Instead of each cosigner separately appending their signature, multiple private keys combine to yield a single aggregated signature, but only if enough parties (the quorum) participate. This approach can be based on advanced schemes like threshold Schnorr or other group-oriented cryptography. Federations-like Liquid’s functionaries-often use thresholds: e.g., a 11-of-15 setup controlling pegged BTC. Quorum signatures enhance privacy and reduce on-chain data by consolidating multiple approvals into one, though they necessitate extra cryptographic steps and collaborative protocols among signers.
