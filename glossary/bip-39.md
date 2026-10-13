---
title: "BIP 39 (Mnemonic Seed)"
slug: bip-39
draft: false
updated: "2026-10-13"
shortDefinition: "The 2013 standard for encoding a wallet seed as 12-24 English words, with an optional passphrase for extra protection."
keyTakeaways:
  - "Encodes 128-256 bits of entropy as 12-24 words from a 2048-word list"
  - "Optional passphrase produces a different wallet from the same words"
  - "The most common seed phrase standard, though not universal: Electrum uses its own format"
sources:
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP-39 - Wordlists: English, Japanese, Korean, Spanish, Chinese (Simplified and Traditional), French, Italian, Czech, Portuguese", url: "https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md" }
  - { label: "Electrum - Documentation, Seed phrase: Electrum does not generate BIP39 seeds", url: "https://electrum.readthedocs.io/en/latest/seedphrase.html" }
  - { label: "Bitcoin Wiki - Seed phrase: BIP39 is the most common standard used for seed phrases", url: "https://en.bitcoin.it/wiki/Seed_phrase" }
  - { label: "BIP-380 - Output Script Descriptors General Operation, Motivation: not all wallets support or use the standard derivation paths (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki" }
relatedTerms:
  - bip-32
  - bip-bitcoin-improvement-proposal
  - mnemonic-entropy-bits
  - mnemonic-password
  - seed-phrase
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0039"
liveWidget: ~
---

BIP 39, authored by Marek Palatinus, Pavol Rusnak, Aaron Voisine, and Sean Bowe in September 2013, defines how a Bitcoin wallet encodes its seed as a sequence of 12 to 24 ordinary English words. It is the most common seed phrase standard, though not the only one: Electrum deliberately generates its own seed format instead.

The math:

1. Start with 128, 160, 192, 224, or 256 bits of cryptographic entropy.
2. Append a SHA-256-derived checksum (entropy / 32 bits long).
3. Split into 11-bit groups and look each up in the 2048-word BIP 39 wordlist.

The result is a phrase of 12, 15, 18, 21, or 24 words. 12 words encode 128 bits of entropy; 24 words encode 256 bits (see [mnemonic entropy bits](/glossary/mnemonic-entropy-bits) for the full ladder). Both are well beyond brute-force range; the choice is preference.

To get the actual wallet seed (the input for [BIP 32](/glossary/bip-32) derivation), the mnemonic is fed through PBKDF2-HMAC-SHA512 with 2048 iterations, with the string "mnemonic" plus an optional passphrase as the salt. Pass an empty passphrase and you get one wallet; pass a non-empty passphrase and you get a completely different wallet from the same words. That optional [passphrase](/glossary/mnemonic-password) is sometimes called the "25th word."

Why BIP 39 matters:

- **Human-friendly backup.** A 24-word list is easier to write down accurately, transcribe, and verify than 64 hex characters.
- **Error detection.** A word that is not on the list is rejected outright, and the checksum catches most of the remaining errors at load time, so a typo usually fails fast instead of silently opening a different (and probably empty) wallet. The spec itself calls the checksum short: an error that still yields valid words slips past it about one time in 16 for a 12-word phrase and one time in 256 for 24 words.
- **Cross-wallet portability.** Restore a BIP 39 seed in any BIP 39 / BIP 32 compatible wallet and get the same keys. The same addresses follow only if both wallets also use the same derivation path and script type.
- **Multiple language wordlists.** The wordlist is published in English, Japanese, Korean, Spanish, French, Italian, Czech, Portuguese, and Chinese (both simplified and traditional). Same math, localized words. The spec itself strongly discourages the non-English lists, since most wallets only support English and a phrase translated to another list yields a different seed.

The English wordlist was chosen carefully: 2048 words (exactly 11 bits each), each unique within its first four letters (so a half-typed word still resolves unambiguously), and no easily-confused pairs. It is the most common seed phrase standard in use.

Spec: [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
