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
  - fidelity-bond
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - mono-signature
  - musig
  - musig2
  - partial-signature
  - psbt
liveWidget: ~
---

Quorum signatures are threshold signatures: m of n cosigners collaborate to produce a single aggregated signature without needing all n to participate. The on-chain output looks indistinguishable from a regular Taproot single-sig.

The active protocol in Bitcoin land is FROST (Flexible Round-Optimized Schnorr Threshold), with serious implementation work in 2024-2026. FROST lets, for example, 5 of 8 signers collectively produce one signature on a Taproot output, with the other 3 holding shares but sitting out this particular signing session.

Why care:

- Privacy: the spend looks identical whether 5 of 8 or 1 of 1 signed it. No m-of-n structure leaks on-chain.
- Fees: one signature instead of m, one public key instead of n. Significant savings on complex multisig.
- Resilience: any m signers can spend, so losing up to n-m keys is survivable without a separate timelock-recovery path.

The tradeoffs are interactivity and ceremony complexity. FROST requires a distributed key-generation ceremony at setup (no single party ever sees the full key) and signing requires multiple coordinated rounds between the participating signers. Classical M-of-N multisig is operationally simpler: each cosigner signs independently and asynchronously, at the cost of larger on-chain footprint and obvious multisig leakage.

For retail users this is overkill. For federations (Liquid functionaries, Fedimint guardians) and institutional custody, threshold Schnorr is becoming the modern default as tooling matures.
