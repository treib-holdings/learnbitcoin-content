---
title: "Seed Phrase"
slug: seed-phrase
draft: false
shortDefinition: "12 or 24 English words (BIP-39) that encode a Bitcoin wallet's master secret. The complete backup; lose it and you lose the coins, leak it and someone else has them."
keyTakeaways:
  - "Standard is BIP-39 - a 2,048-word list, 11 bits per word, with a built-in checksum"
  - "12 words = 128 bits of entropy. 24 words = 256 bits. Either is unguessable in practice"
  - "Every key and address in an HD wallet derives from this single phrase"
  - "Store offline. Verify the backup. Consider geographic redundancy"
sources: []
relatedTerms:
  - bip-32
  - bip-39
  - bip-44
  - bip-85
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - mnemonic-entropy-bits
  - mnemonic-password
  - private-key
  - seed-entropy-mixer
  - seed-tool
  - security
sameAs:
  - "https://en.bitcoin.it/wiki/Seed_phrase"
  - "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0039"
liveWidget: ~
---

A seed phrase is a sequence of 12 or 24 English words that encodes the master secret for an entire Bitcoin wallet. Also called a "mnemonic phrase" or "recovery phrase" - the terms are interchangeable in practice.

## What it is, mechanically

The standard is **[BIP-39](/glossary/bip-39)**, published in 2013. It defines:

- A fixed list of 2,048 words. Each word is unique in its first four letters, so a half-typed word still resolves unambiguously and transcription errors are easier to catch.
- A mapping from binary entropy to word sequences. Each word encodes 11 bits.
- A SHA-256-derived checksum, so a mistyped or randomly-guessed phrase fails validation instead of silently opening a different (and probably empty) wallet.
- A derivation from words to a 512-bit master seed: PBKDF2-HMAC-SHA512, 2,048 iterations, with an optional user-chosen passphrase as the salt.

That 512-bit master seed feeds into [BIP-32](/glossary/bip-32) hierarchical key derivation, which produces every [private key](/glossary/private-key) and address the wallet uses. The chain - words to master seed to master private key to derived keys to addresses - is purely deterministic. Same words in, same wallet out, on any BIP-39 + BIP-32 compatible software.

12 words encodes 128 bits of entropy. 24 words encodes 256 bits. Either is more than enough; 128 bits of randomness is unguessable in any practical sense, and 256 bits is well beyond the reach of any conceivable adversary.

## Why it has won

Portability. Back up with one wallet, restore on a completely different brand, your coins are still there - as long as both implement the standard. That cross-vendor interoperability is one of the quiet wins of Bitcoin's standards process.

The phrase is the **complete** backup. From those 12 or 24 words, a [hierarchical deterministic wallet](/glossary/hierarchical-deterministic-wallet) can regenerate every private key, every public key, and every address the wallet has ever used or will ever use. Lose your hardware wallet, your phone, your laptop - all of it - you can restore the wallet on any compatible device by typing the words back in.

That power cuts both ways. Anyone who reads your seed phrase has the same capability.

## Storage rules

- **Write it down on paper or metal.** Do not photograph it. Do not type it into a computer except into a wallet during restore. Do not store it in a password manager or cloud drive.
- **Verify the backup.** Practice restoring on a fresh device. A backup you have never tested is a backup you do not have.
- **Consider geographic redundancy.** A house fire that destroys your seed and your hardware wallet has destroyed your money. Two or three copies in physically separate locations is reasonable for non-trivial amounts.
- **Consider a passphrase** (the "25th word"). An optional, user-chosen additional secret that combines with the 12 or 24 words to derive a separate wallet. Powerful but adds operational risk: forget the passphrase and the funds are gone.

The seed phrase is the **one** thing you must protect to truly self-custody Bitcoin. Everything else is recoverable; this is not.

See the [Seed Backup Strategies rabbit hole](/rabbit-hole/seed-backup-strategies) for the deeper treatment - paper versus metal, multisig backup schemes, inheritance planning, and how to verify a backup without exposing the words to anyone else.
