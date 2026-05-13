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

While mining nonces are always publicly visible, cryptographic nonces in ECDSA or Schnorr must remain secret or properly randomized. If the same nonce is used twice with the same private key, an attacker can mathematically derive the private key. This has historically led to wallet thefts when a bug or poor randomization duplicated ECDSA nonces across transactions. Libraries like RFC6979 ensure deterministic, unique nonces to avoid this pitfall. It's a distinct issue from mining nonces, focusing on signature generation rather than proof-of-work.
