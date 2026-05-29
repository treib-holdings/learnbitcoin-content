---
title: "Mnemonic Entropy Bits"
slug: mnemonic-entropy-bits
draft: false
shortDefinition: "The underlying binary randomness used to generate BIP 39 seed words (commonly 128, 192, or 256 bits)."
keyTakeaways:
  - "128 bits → 12 words, 256 bits → 24 words, etc."
  - "Higher entropy means stronger cryptographic security"
  - "Checksum ensures small mistakes don't create an invalid seed"
sources: []
relatedTerms:
  - bip-39
  - hierarchical-deterministic-wallet
  - mnemonic-password
  - private-key
  - seed-phrase
liveWidget: ~
---

A BIP 39 mnemonic is a human-friendly encoding of raw random bits. The wallet generates entropy, appends a small checksum, then maps the result to words from the BIP 39 wordlist (2048 words, each carrying 11 bits of information).

The mapping is fixed:

- 128 bits + 4 checksum bits → 12 words
- 160 bits + 5 checksum bits → 15 words
- 192 bits + 6 checksum bits → 18 words
- 224 bits + 7 checksum bits → 21 words
- 256 bits + 8 checksum bits → 24 words

128 bits is the practical security floor. Brute-forcing 2^128 operations is computationally infeasible by any known method, classical or quantum (Grover's algorithm halves the bit-strength against quantum search, so 128-bit entropy becomes ~64-bit quantum security, which is the edge of "expensive but doable" if large-scale quantum computers existed; this is one reason a paranoid setup uses 24 words instead of 12).

In practice almost any modern wallet defaults to either 12 or 24 words. 12 is enough for any threat model that doesn't include a working cryptographically-relevant quantum computer; 24 is the choice when "future-proof against speculative cryptographic breakthroughs" matters to you. Both are massively more secure than the password you actually use for your email.

The checksum bits matter operationally: if you transcribe one word wrong, the checksum almost certainly fails and the wallet rejects the seed at load time instead of silently producing a different wallet. It's a small but real safety net against transcription errors.
