---
title: "Shamir's Secret Sharing"
slug: shamir-secret-sharing
draft: false
shortDefinition: "A cryptographic scheme that splits a secret into N shares such that any threshold M can reconstruct it but fewer cannot."
keyTakeaways:
  - "Standard math for splitting a seed across multiple locations"
  - "Standardized for BIP 39 seeds as SLIP-39 (Trezor supports natively)"
  - "Not equivalent to multisig - see key-split for the security caveat"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - key-split
  - multisig
  - seed-phrase
liveWidget: ~
---

Shamir's Secret Sharing (SSS) is the math behind splitting a Bitcoin seed (or any secret) into multiple shares such that any M of N shares can reconstruct it, but any M-1 reveal nothing. Named for cryptographer Adi Shamir, who published the construction in 1979.

In Bitcoin practice, the standard form is SLIP-39: a wordlist-based SSS scheme for BIP 39 seeds. Trezor implements it natively; SeedSigner can produce SLIP-39 shares from any seed. Typical configurations: 2-of-3 or 3-of-5 shares distributed across geographic locations or trusted parties.

The full discussion of SSS in Bitcoin - including the crucial caveat that SSS is **not** the same security model as [multisig](/glossary/multisig), because key reconstruction at signing time momentarily holds the full key on one device - lives at [key-split](/glossary/key-split).
