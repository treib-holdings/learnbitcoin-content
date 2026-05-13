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

In Bitcoin, hashing is central to proof-of-work. Miners repeatedly apply SHA-256 to block headers, racing to find a hash under a specific difficulty target. Hashes also secure the blockchain’s data structure: transactions are hashed into a Merkle tree, and blocks reference the previous block’s hash, forming a chain. A minor change in the input radically changes the hash, making it a one-way function that’s incredibly difficult to reverse or predict. This property underpins both Bitcoin’s security and its consensus mechanism.
