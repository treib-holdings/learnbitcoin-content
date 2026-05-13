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

BIP 66, detailed in [BIP-66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki), standardized the format of signatures in Bitcoin transactions, requiring them to follow strict Distinguished Encoding Rules (DER). Before this, looser rules allowed varying encodings that could alter a transaction's signature without changing its meaning.
This variability contributed to transaction malleability issues, as modified signatures could change the transaction ID. By enforcing exact DER formatting, BIP 66 reduced these potential exploits, making the network more reliable. Although it might seem minor, consistent signature rules are vital for wallet software and mining pools to function predictably and securely.
