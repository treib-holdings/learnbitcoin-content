---
title: "Nonce Exhaustion"
slug: nonce-exhaustion
draft: false
shortDefinition: "Reusing or improperly generating nonces in cryptographic contexts (like ECDSA) can reveal private keys."
keyTakeaways:
  - "Critical for ECDSA/Schnorr: no nonce repetition or guessable randomness"
  - "Failures in nonce generation can directly leak private keys"
  - "Different from mining nonce usage in block headers"
sources: []
relatedTerms:
  - difficulty-retargeting
  - nonce
  - proof-work-pow
liveWidget: ~
---

"Nonce exhaustion" describes the cryptographic catastrophe where signing nonces are repeated, predictable, or otherwise compromised - leaking the private key as a direct mathematical consequence.

Two different kinds of nonce exist in Bitcoin and they have nothing to do with each other:

- **Mining nonce.** The 32-bit field in the block header that miners iterate to find a valid hash. Public, expected to be different for every attempt, leaking nothing about anything secret.
- **Signing nonce (`k`).** A per-signature secret used in ECDSA and Schnorr signing. The signer combines `k`, the private key, and the message hash to produce the signature. If `k` is reused for two different messages with the same private key, the private key can be recovered with a few lines of arithmetic.

The recovery math (for ECDSA): given two signatures `(r, s1)` and `(r, s2)` on different messages `m1` and `m2` (same `r` proves nonce reuse), the private key is `(m1 - m2) * (s1 - s2)^-1 mod n`. Trivial computation.

Famous real-world exploits:

- **Sony PS3 ECDSA breach (2010)**: Sony's firmware-signing code used a constant nonce for every signature. The full ECDSA signing key was recovered from publicly-available PS3 firmware signatures within weeks of disclosure.
- **Android Bitcoin wallet bug (2013)**: A bad RNG on Android meant some wallets reused signing nonces. Researchers identified the affected wallets and demonstrated key extraction.
- **Various blockchain analysis papers**: have identified other wallets that leaked keys through nonce reuse on-chain.

The fix is RFC 6979 deterministic nonces: derive `k` deterministically from the private key and the message itself (HMAC-SHA256 construction). Same key, same message, same `k`; different message, different `k` guaranteed. No RNG involved at signing time. Bitcoin Core and every modern Bitcoin library use RFC 6979 or its Schnorr equivalent (BIP 340's signing scheme).

Hardware wallets additionally enforce nonce uniqueness at the firmware level, often with both RFC 6979 derivation *and* an additional anti-replay counter.

For users, this is invisible: any properly-implemented wallet has solved the nonce problem. For library or wallet authors, it remains one of the few cryptographic mistakes that is immediately catastrophic and silent until the coins disappear.
