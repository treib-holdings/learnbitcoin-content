---
title: "Mnemonic Entropy Bits"
slug: mnemonic-entropy-bits
draft: false
updated: "2026-10-09"
shortDefinition: "The underlying binary randomness used to generate BIP 39 seed words (commonly 128, 192, or 256 bits)."
keyTakeaways:
  - "128 bits -> 12 words, 256 bits -> 24 words, etc."
  - "12 words (128 bits) already matches the roughly 128-bit security of Bitcoin's keys"
  - "The checksum catches most typos, so a wrong word is usually rejected instead of opening a different wallet"
sources:
  - { label: "BIP 39 - entropy, checksum and word count", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "SEC 2 v2.0 - secp256k1 rated at 128-bit strength (Table 1)", url: "https://www.secg.org/sec2-v2.pdf" }
  - { label: "NIST Post-Quantum Cryptography Call for Proposals (2016) - Grover needs long serial runs (section 4.A.5)", url: "https://csrc.nist.gov/CSRC/media/Projects/Post-Quantum-Cryptography/documents/call-for-proposals-final-dec-2016.pdf" }
  - { label: "NIST IR 8105 - impact of quantum computing on common algorithms (Table 1)", url: "https://nvlpubs.nist.gov/nistpubs/ir/2016/NIST.IR.8105.pdf" }
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

- 128 bits + 4 checksum bits -> 12 words
- 160 bits + 5 checksum bits -> 15 words
- 192 bits + 6 checksum bits -> 18 words
- 224 bits + 7 checksum bits -> 21 words
- 256 bits + 8 checksum bits -> 24 words

128 bits is the practical security floor, and it matches what Bitcoin's keys deliver anyway. A secp256k1 key gives about 128-bit security against the best known attack on ordinary (non-quantum) computers, and brute-forcing 2^128 possibilities is out of reach for any of them.

In theory Grover's algorithm could cut a blind search of 2^128 seeds to about 2^64 quantum steps, each one a full seed-to-address computation. To get that whole speedup the steps have to run one after another, and splitting the work across many machines shrinks the gain. NIST notes that Grover's algorithm "requires a long-running serial computation, which is difficult to implement in practice." The bigger quantum risk to any wallet is [Shor's algorithm](/glossary/shors-algorithm) deriving keys from exposed public keys, and a longer seed does nothing about that.

In practice almost any modern wallet defaults to either 12 or 24 words, and both are far beyond brute-force range. 24 words adds margin against speculative attacks on the seed itself, but it does not protect coins whose public keys are already exposed if a large quantum computer arrives. Either one is massively more secure than the password you actually use for your email.

The checksum bits matter operationally. If one word is wrong but still on the BIP 39 list, the checksum catches it about 15 times in 16 for a 12-word seed (4 checksum bits) and about 255 times in 256 for a 24-word seed (8 checksum bits). The wallet then rejects the seed at load time instead of silently producing a different wallet. It's a small but real safety net against transcription errors.
