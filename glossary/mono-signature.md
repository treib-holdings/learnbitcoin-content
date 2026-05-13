---
title: "Mono-Signature"
slug: mono-signature
draft: false
shortDefinition: "A single ECDSA or Schnorr signature controlling an output-typical single-sig scenario versus multisig."
keyTakeaways:
  - "Standard approach: one private key signs, one signature suffices"
  - "Less secure than multisig if the key is compromised"
  - "Schnorr single-sig can be more compact than ECDSA"
sources: []
relatedTerms:
  - interactive-multi-sig
  - m-n
  - module-signing
  - musig
  - musig2
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

Most basic Bitcoin transactions use one private key to sign a transaction input, producing a single signature. This is sometimes labeled ‘mono-signature’ or single-sig, distinguishing it from multi-signature setups. With Schnorr, a single-sig is smaller in size compared to ECDSA, but the concept remains the same: one private key is required to authorize spending. While simpler and cheaper on-chain than multisig, it lacks the collaborative security or redundancy multisig offers.
