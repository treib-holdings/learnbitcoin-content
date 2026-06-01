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
  - grovers-algorithm
  - hash-puzzle
  - hash-rate
  - hash-rate-derivative
  - hashlet
  - merged-mining
  - merkle-proof
  - merkle-root
  - nonce
  - nonce-exhaustion
  - post-quantum-bitcoin
  - proof-work-pow
sameAs:
  - "https://en.wikipedia.org/wiki/Hash_function"
  - "https://www.wikidata.org/wiki/Q183427"
  - "https://en.wikipedia.org/wiki/Cryptographic_hash_function"
  - "https://www.wikidata.org/wiki/Q477202"
  - "https://en.bitcoin.it/wiki/Hash"
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

The most plausible weakening, not break, is [Grover's algorithm](/glossary/grovers-algorithm) running on a quantum computer: it halves SHA-256's effective security from 256 bits to 128 bits via quadratic speedup on unstructured search. 128-bit symmetric security is still the standard floor for cryptography elsewhere - annoying for Bitcoin, not catastrophic. See [Post-Quantum Bitcoin](/glossary/post-quantum-bitcoin) for the broader picture.

See the [Mining rabbit hole §2](/rabbit-hole/mining) for how the one-way property turns into security, and [Key Space rabbit hole](/rabbit-hole/key-space) for why 2^256 is bigger than your intuition wants it to be.
