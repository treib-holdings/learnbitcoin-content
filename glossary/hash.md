---
title: "Hash"
slug: hash
draft: false
shortDefinition: "The output of a cryptographic function (e.g., SHA-256) that condenses input data into a fixed-size digest."
keyTakeaways:
  - "Maps variable data to a fixed-length, pseudorandom output"
  - "Fundamental to block mining and Merkle tree integrity"
  - "Cryptographic property: small changes yield drastically different hashes"
sources: []
relatedTerms:
  - hash-fever
  - hash-locktime-contract-hlc
  - hash-puzzle
  - hash-rate
  - hash-rate-derivative
  - hashlet
  - hashpool
  - merged-mining
  - merkle-proof
  - merkle-root
  - nonce
  - nonce-exhaustion
  - proof-work-pow
liveWidget: ~
---

A hash is the output of a hash function: an algorithm that takes input of any size and produces a fixed-length, pseudorandom-looking output. Bitcoin uses **SHA-256**, which always produces 256 bits (64 hex characters), regardless of whether you fed it one byte or one terabyte.

Three properties make hashes useful for Bitcoin:

- **Deterministic.** The same input always produces the same hash.
- **One-way.** Given the output, there is no efficient way to find an input that produces it - except by guessing inputs until one happens to work. The expected number of guesses is ~2^256, which is unfathomable.
- **Avalanche.** Change one bit of input and roughly half the output bits change, unpredictably. Similar inputs produce wildly different hashes.

Bitcoin uses hashes everywhere:

- **[Block headers](/glossary/block-header)** are hashed (twice, via double-SHA-256) and the result must be below the difficulty target to be valid. This is the search [miners](/glossary/miner) are racing to win.
- **Each block references the previous block's hash**, creating the tamper-evident [blockchain](/glossary/blockchain).
- **Transactions are organized into a [Merkle tree](/glossary/merkle-tree-merkle-root)** whose root commits to every transaction in the block with a single hash.
- **Addresses are hashes of public keys**, which keeps the underlying public key private until you spend.
- **TXIDs are hashes** of serialized transactions.

The bet Bitcoin makes is that SHA-256 stays one-way for the foreseeable future. If that ever breaks, Bitcoin breaks. So far, after 16 years of being one of the most attacked cryptographic systems on Earth, SHA-256 has held.

See the [Mining rabbit hole §2](/rabbit-hole/mining) for how the one-way property turns into security, and [Key Space rabbit hole](/rabbit-hole/key-space) for why 2^256 is bigger than your intuition wants it to be.
