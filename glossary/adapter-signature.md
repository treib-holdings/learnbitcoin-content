---
title: "Adapter Signature"
slug: adapter-signature
draft: false
shortDefinition: "A cryptographic mechanism allowing a partial signature to reveal a secret once it's completed, often used for atomic swaps or advanced Lightning features."
keyTakeaways:
  - "Partial signature that reveals a hidden secret"
  - "Enables atomic swaps and advanced contract logic"
  - "Enhances trust minimization in multi-party transactions"
sources: []
relatedTerms:
  - bitcoin-script
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - merkleized-abstract-syntax-tree-mast
  - scriptless-scripts
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

An adapter signature is a Schnorr signature primitive that ties signature validity to the revelation of an additional secret. Two parties hold a "pre-signature" that is one missing scalar away from being a valid signature. The party that wants to use it must supply that scalar, and the act of completing the signature publishes the scalar to anyone watching the chain.

The trick that makes it useful: this turns "if you sign, you reveal a secret" and "if you reveal a secret, you can complete the signature" into the same mathematical event. Two transactions on two different chains can be tied together such that completing one forces a secret to leak that completes the other.

What this unlocks:

- **Atomic cross-chain swaps** without [HTLCs](/glossary/htlc-hashed-time-locked-contract). The two transactions can look like ordinary single-signature spends; no hash-preimage commitment is visible on either chain. Privacy and cost both improve.
- **Discreet Log Contracts (DLCs).** Oracles publish adapter-signature-shaped attestations; contracts complete automatically when the oracle's signature unblocks a counterparty's pre-signature.
- **Lightning PTLCs.** Payment Point Time-Locked Contracts replace HTLC hash-preimages with adapter signatures, fixing the cross-hop correlation issue that lets observers link Lightning routing paths.
- **Scriptless scripts.** A broader research direction where contract logic moves out of Bitcoin Script and into adapter-signature math, leaving on-chain transactions indistinguishable from plain spends.

The cryptographic mechanism is Schnorr-specific - it works because Schnorr signatures are linear in the secret key, and the same algebra lets adapter constructions slot in cleanly. ECDSA admits similar constructions (ECDSA adapter signatures exist) but the math is messier.

Adapter signatures are mostly research-stage in 2026, with active development in cross-chain swap protocols and Lightning's PTLC rollout. The cryptographic primitive is well-understood; deployment in production wallets is happening gradually.
