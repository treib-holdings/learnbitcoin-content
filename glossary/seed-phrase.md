---
title: "Seed Phrase"
slug: seed-phrase
draft: false
shortDefinition: "A mnemonic phrase (BIP 39) encoding a wallet's master private key. Identical concept to 'mnemonic (seed) phrase.'"
keyTakeaways:
  - "All addresses/keys in an HD wallet derive from this phrase"
  - "Must be stored securely offline to prevent theft"
  - "Widely used across wallets for standard, portable backups"
sources: []
relatedTerms:
  - bip-44
  - bip-85
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - entropy-mixing-party
  - hardware-seed-vault
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - seed-entropy-mixer
  - seed-tool
  - security
liveWidget: ~
---

A seed phrase is a sequence of 12 or 24 English words that encodes the master secret for an entire Bitcoin wallet. The standard is [BIP-39](/glossary/mnemonic-seed-phrase), which defines a list of 2,048 carefully chosen words; the words are selected so that no two share a 4-letter prefix, making them robust against transcription errors.

A 12-word phrase encodes 128 bits of entropy. A 24-word phrase encodes 256 bits. Either is more than enough; 128 bits of randomness is currently considered unguessable in any practical sense, and 256 bits is well beyond the reach of any conceivable adversary.

The phrase is the *complete* backup of the wallet. From those 12 or 24 words, a [hierarchical deterministic wallet](/glossary/hierarchical-deterministic-wallet) can regenerate every [private key](/glossary/private-key), every public key, and every [address](/glossary/address) the wallet has ever used or will ever use. If you lose your hardware wallet, your phone, your laptop - all of it - you can restore the entire wallet on any compatible device by typing the words back in.

That power cuts both ways. Anyone who reads your seed phrase has the same capability. Storage rules:

- **Write it down on paper or metal.** Do not photograph it. Do not type it into a computer except into a wallet during restore. Do not store it in a password manager or cloud drive.
- **Verify the backup.** Practice restoring on a fresh device. A backup you've never tested is a backup you don't have.
- **Consider geographic redundancy.** A house fire that destroys your seed and your hardware wallet has destroyed your money. Two or three copies in physically separate locations is reasonable for non-trivial amounts.
- **Consider a passphrase** ("25th word"). An optional, user-chosen additional secret that combines with the 12/24 words to derive a separate wallet. Powerful but adds operational risk: forget the passphrase and the funds are gone.

The seed phrase is the *one* thing you must protect to truly self-custody Bitcoin. Everything else is recoverable; this is not.
