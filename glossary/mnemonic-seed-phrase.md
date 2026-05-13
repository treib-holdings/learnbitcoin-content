---
title: "Mnemonic (Seed) Phrase"
slug: mnemonic-seed-phrase
draft: false
shortDefinition: "A BIP 39-compliant set of 12/18/24 words encoding the private/extended key for a deterministic wallet backup."
keyTakeaways:
  - "Transforms cryptographic entropy into a memorable set of words"
  - "One phrase recovers all derived addresses in HD wallets"
  - "Central to modern wallet backup best practices"
sources: []
relatedTerms: []
liveWidget: ~
---

A mnemonic seed phrase is the formal name for what most people call a [seed phrase](/glossary/seed-phrase) - the 12, 18, or 24 English words that back up a Bitcoin wallet. The terms are interchangeable in everyday usage.

The standard is **[BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)**, published in 2013. It defines:

- A fixed list of 2,048 words, in 10 languages (English is by far the most common).
- The mapping between binary entropy and word sequences (each word encodes 11 bits).
- A checksum so a mistyped or randomly-guessed phrase fails validation.
- The derivation from words to a 512-bit master seed (PBKDF2 with the phrase, optionally salted by a passphrase).

The 512-bit master seed then feeds into the [BIP-32](/glossary/hierarchical-deterministic-wallet) hierarchical key derivation, which produces every private key and address the wallet uses. The whole chain - words → master seed → master private key → derived keys → addresses - is purely deterministic. Same words in, same wallet out, on any BIP-39/32 compatible software.

This portability is why BIP-39 has won. You can back up with one wallet and restore on a completely different brand of wallet, and your coins are still there - as long as both implement the standard. That interoperability is one of the quiet wins of Bitcoin's standards process.

See [Seed Phrase](/glossary/seed-phrase) for the practical handling and storage guidance.
