---
title: "BIP 66"
slug: bip-66
draft: false
updated: "2026-10-09"
shortDefinition: "Enforces strict DER-encoded signatures, mitigating certain transaction malleability and parsing issues."
keyTakeaways:
  - "Makes signatures conform to a single DER standard"
  - "Reduces malleability by removing alternate encodings"
  - "Improves network stability and wallet compatibility"
sources:
  - { label: "BIP 66 - strict DER signatures (deployment reuses the BIP 34 switchover)", url: "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki" }
  - { label: "BIP 68 - deployed by BIP 9 version bits, starting May 2016", url: "https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki" }
  - { label: "bitcoin.org alert - July 2015 chain forks (a 6-block invalid chain on July 4, 2015)", url: "https://bitcoin.org/en/alert/2015-07-04-spv-mining" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - schnorr-signature
  - signature-aggregation
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0066"
liveWidget: ~
---

[BIP-66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki) tightened Bitcoin's signature encoding rules to require strict **Distinguished Encoding Rules (DER)** format. Activated as a [soft fork](/glossary/soft-fork) in July 2015, it was a malleability fix that closed off several edge cases that had caused subtle bugs in earlier years.

The problem: before BIP-66, Bitcoin accepted any signature that OpenSSL accepted, and OpenSSL was loose. The same logical [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) signature could be encoded multiple ways - leading zeros, varying integer encodings, padded buffers. Each encoding parsed to the same actual signature, but the *bytes* differed, which meant the transaction's [txid](/glossary/transaction) (computed over those bytes) differed.

This was a form of transaction malleability: someone could intercept a broadcast transaction, re-encode the signature in a different valid way, and rebroadcast with a different txid. The original sender's wallet would lose track of the transaction even though it eventually confirmed. The most famous victim was Mt. Gox, which used malleability as their explanation for losing 850,000 BTC in 2014 (the actual cause was more complex, but malleability was part of the story).

BIP-66's fix: require signatures to be in canonical DER format - one specific byte layout per logical signature. Anything else gets rejected by every node.

This eliminated *signature-form* malleability but didn't fully solve transaction malleability (some other vectors remained, like script-form variations). The complete fix came with [SegWit](/glossary/segwit-segregated-witness-bip-141) in 2017, which structurally separates witness data from the txid computation. BIP-66 was a useful intermediate step.

BIP-66 reused the version-number switchover from [BIP-34](/glossary/bip-34): once 950 of the previous 1,000 blocks were version 3, version 2 blocks became invalid. The [BIP-9](/glossary/bip-9-versionbits) version-bits mechanism came later, and its first deployment was the CSV soft fork of 2016 ([BIP-68](/glossary/bip-68-relative-locktime), BIP-112 and BIP-113).

Enforcement began on July 4, 2015. Shortly after, a small miner that had not upgraded produced an invalid block, and miners who were not fully validating extended it into a 6-block chain before the valid chain pulled ahead. [How Bitcoin Works](/journey/how-bitcoin-works) puts that fork alongside the other deep reorgs in Bitcoin's history.
