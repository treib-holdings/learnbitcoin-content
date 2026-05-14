---
title: "Constant Time"
slug: constant-time
draft: false
shortDefinition: "A practice in cryptography where operations take the same amount of time, preventing side-channel leaks of sensitive data."
keyTakeaways:
  - "Prevents leaking secrets via timing or power analysis"
  - "Important for cryptographic operations involving private keys"
  - "Often achieved by uniform code paths and memory access"
sources: []
relatedTerms: []
liveWidget: ~
---

Constant-time code is the discipline of writing cryptographic operations whose runtime, memory access pattern, and power consumption don't depend on the secret data they process. The goal: defeat side-channel attacks where an adversary measures *how* the operation runs to infer *what* it ran with.

Why this matters for Bitcoin:

- **ECDSA and Schnorr signing** involves multiplication of a secret scalar by a curve point. A naive implementation runs faster when the scalar has more zero bits, leaking key bits through timing.
- **Hash operations and HMAC** on secret data can leak via cache-access patterns. An attacker measuring CPU cache hits can sometimes reconstruct key material.
- **Side channels are real attacks.** Researchers have repeatedly extracted RSA, ECDSA, and AES keys from cloud-coresident processes, smartcards, and even smartphones using power-analysis or timing-analysis techniques.

The library that does Bitcoin's heavy cryptographic lifting is [libsecp256k1](https://github.com/bitcoin-core/secp256k1) (the C library extracted from Bitcoin Core). It's been audited and reimplemented specifically for constant-time properties: the signing path performs the same operations in the same order regardless of the key bits, and the relevant memory accesses are constant.

Hardware wallets take this further. The secure elements in ColdCard, Trezor Safe, Foundation Passport, and BitBox include hardware-level protections against power analysis (randomized timing, current-limiting, glitch detection). The threat model assumes attackers can put the device on an oscilloscope.

For users none of this is visible; it just works. For library authors and hardware-wallet designers, constant-time discipline is one of the load-bearing details that turns Bitcoin's "cryptographic security" from a slogan into something actually achievable on real silicon.
