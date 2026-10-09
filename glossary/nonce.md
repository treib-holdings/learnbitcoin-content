---
title: "Nonce"
slug: nonce
draft: false
updated: "2026-10-09"
shortDefinition: "A 32-bit field in the block header that miners vary to find a hash below the network's difficulty target."
keyTakeaways:
  - "Central to the proof-of-work process in block hashing"
  - "Only 4 bytes, so miners also tweak extranonce/other fields"
  - "Finding a valid nonce verifies the block meets difficulty"
sources:
  - { label: "Bitmain support - S21 Pro specification (234 TH/s typical, 3,510 W, 15 J/TH)", url: "https://support.bitmain.com/hc/en-us/articles/31321354157593-S21-Pro-Specification" }
relatedTerms:
  - consensus-parameter
  - difficulty
  - difficulty-retargeting
  - hash
  - nonce-exhaustion
  - proof-work-pow
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptographic_nonce"
  - "https://www.wikidata.org/wiki/Q1749235"
  - "https://en.bitcoin.it/wiki/Nonce"
liveWidget: ~
---

The nonce is a 32-bit field in the [block header](/glossary/block-header) that miners change while searching for a valid block. "Nonce" is short for "number used once."

[Mining](/glossary/mining) at the lowest level looks like this:

```
loop:
  set nonce to next value
  hash = SHA-256(SHA-256(header))
  if hash < target: broadcast block
  else: try again
```

That's it. There's no shortcut, no algebra, no clever derivation. You just compute hashes until one happens to fall below the target. One mining machine released in 2024, packed with many [ASIC](/glossary/asic-application-specific-integrated-circuit) chips, is rated at 234 trillion hashes per second.

The 32-bit nonce only has 2^32 = ~4.3 billion possible values, which a serious mining operation burns through in a fraction of a second. When it runs out, the miner changes another part of the block (typically the *extranonce* inside the coinbase transaction), which changes the [Merkle root](/glossary/merkle-root) in the header, which gives them a fresh 4.3-billion-value nonce space to search. Repeat until something works.

The nonce is the most boring 4 bytes in Bitcoin and also the entire mechanism by which proof-of-work happens. See [Hash](/glossary/hash) for what's being computed, and the [Mining rabbit hole](/rabbit-hole/mining) for why finding a good one matters.
