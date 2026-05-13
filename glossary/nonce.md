---
title: "Nonce"
slug: nonce
draft: false
shortDefinition: "A 32-bit field in the block header that miners vary to find a hash below the network’s difficulty target."
keyTakeaways:
  - "Central to the proof-of-work process in block hashing"
  - "Only 4 bytes, so miners also tweak extranonce/other fields"
  - "Finding a valid nonce verifies the block meets difficulty"
sources: []
relatedTerms:
  - consensus-parameter
  - difficulty
  - difficulty-retargeting
  - hash
  - nonce-exhaustion
  - proof-work-pow
liveWidget: ~
---

In mining, the nonce is the primary ‘knob’ miners twist to produce different hashes. Once they exhaust the nonce range (2^32 possibilities), they adjust other fields (like the extranonce in the coinbase transaction) to continue searching. The goal: find any combination that yields a block header hash lower than the difficulty target. It’s called a ‘nonce’ (number used once) because each combination is tried once; changing it leads to a different potential block hash. A valid solution secures the block reward for the successful miner.
