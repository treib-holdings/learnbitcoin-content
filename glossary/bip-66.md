---
title: "BIP 66"
slug: bip-66
draft: false
shortDefinition: "Enforces strict DER-encoded signatures, mitigating certain transaction malleability and parsing issues."
keyTakeaways:
  - "Makes signatures conform to a single DER standard"
  - "Reduces malleability by removing alternate encodings"
  - "Improves network stability and wallet compatibility"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - schnorr-signature
  - signature-aggregation
liveWidget: ~
---

[BIP-66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki) tightened Bitcoin's signature encoding rules to require strict **Distinguished Encoding Rules (DER)** format. Activated as a [soft fork](/glossary/soft-fork) in July 2015, it was a malleability fix that closed off several edge cases that had caused subtle bugs in earlier years.

The problem: before BIP-66, Bitcoin accepted any signature that OpenSSL accepted, and OpenSSL was loose. The same logical [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) signature could be encoded multiple ways - leading zeros, varying integer encodings, padded buffers. Each encoding parsed to the same actual signature, but the *bytes* differed, which meant the transaction's [txid](/glossary/transaction) (computed over those bytes) differed.

This was a form of transaction malleability: someone could intercept a broadcast transaction, re-encode the signature in a different valid way, and rebroadcast with a different txid. The original sender's wallet would lose track of the transaction even though it eventually confirmed. The most famous victim was Mt. Gox, which used malleability as their explanation for losing 850,000 BTC in 2014 (the actual cause was more complex, but malleability was part of the story).

BIP-66's fix: require signatures to be in canonical DER format - one specific byte layout per logical signature. Anything else gets rejected by every node.

This eliminated *signature-form* malleability but didn't fully solve transaction malleability (some other vectors remained, like script-form variations). The complete fix came with [SegWit](/glossary/segwit-segregated-witness-bip-141) in 2017, which structurally separates witness data from the txid computation. BIP-66 was a useful intermediate step.

The activation of BIP-66 also marked the first time Bitcoin used the [BIP-9](/glossary/bip-9-versionbits) miner-signaling mechanism for a soft fork - a template that would be reused many times.
