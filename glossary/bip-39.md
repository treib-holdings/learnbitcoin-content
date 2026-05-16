---
title: "BIP 39 (Mnemonic Seed)"
slug: bip-39
draft: false
shortDefinition: "The 2013 standard for encoding a wallet seed as 12-24 English words, with an optional passphrase for extra protection."
keyTakeaways:
  - "Encodes 128-256 bits of entropy as 12-24 words from a 2048-word list"
  - "Optional passphrase produces a different wallet from the same words"
  - "Universally adopted; the canonical way wallets back up their seed"
sources: []
relatedTerms:
  - bip-32
  - bip-bitcoin-improvement-proposal
  - mnemonic-entropy-bits
  - mnemonic-password
  - mnemonic-seed-phrase
  - seed-phrase
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0039"
liveWidget: ~
---

BIP 39, authored by Marek Palatinus, Pavol Rusnak, Aaron Voisine, and Sean Bowe in September 2013, defines how a Bitcoin wallet encodes its seed as a sequence of 12 to 24 ordinary English words. The same construction is used by every major modern Bitcoin wallet.

The math:

1. Start with 128, 160, 192, 224, or 256 bits of cryptographic entropy.
2. Append a SHA-256-derived checksum (entropy / 32 bits long).
3. Split into 11-bit groups and look each up in the 2048-word BIP 39 wordlist.

The result is a phrase of 12, 15, 18, 21, or 24 words. 12 words encode 128 bits of entropy; 24 words encode 256 bits (see [mnemonic entropy bits](/glossary/mnemonic-entropy-bits) for the full ladder). Both are well beyond brute-force range; the choice is preference. Hardware wallets typically default to 24.

To get the actual wallet seed (the input for [BIP 32](/glossary/bip-32) derivation), the mnemonic is fed through PBKDF2-HMAC-SHA512 with 2048 iterations, with an optional passphrase as the salt. Pass an empty passphrase and you get one wallet; pass a non-empty passphrase and you get a completely different wallet from the same words. That optional [passphrase](/glossary/mnemonic-password) is sometimes called the "25th word."

Why BIP 39 matters:

- **Human-friendly backup.** A 24-word list is easier to write down accurately, transcribe, and verify than 64 hex characters.
- **Error detection.** The checksum catches almost all transcription errors at load time, so a typo fails fast instead of silently opening a different (and probably empty) wallet.
- **Cross-wallet portability.** Restore a BIP 39 seed in any BIP 39 / BIP 32 compatible wallet and get the same keys.
- **Multiple language wordlists.** The wordlist is published in English, Japanese, Korean, Spanish, French, Italian, Czech, Portuguese, and Chinese (both simplified and traditional). Same math, localized words.

The English wordlist was chosen carefully: 2048 words (exactly 11 bits each), each unique within its first four letters (so a half-typed word still resolves unambiguously), no easily-confused pairs, and no offensive terms. It's the most-deployed mnemonic standard in cryptocurrency by orders of magnitude.

Spec: [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
