---
title: "Signature Clipping"
slug: signature-clipping
draft: false
shortDefinition: "A malleability or forging technique in certain signature schemes. Strict sighash rules in Bitcoin mitigate these vulnerabilities."
keyTakeaways:
  - "Refers to maliciously tweaking valid signatures to alter TX IDs"
  - "Strict DER rules (BIP 66) and SegWit corrected most malleability flaws"
  - "Illustrates early vulnerabilities in ECDSA usage"
sources: []
relatedTerms:
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - schnorr-signature
  - signature-aggregation
  - taproot
liveWidget: ~
---

"Signature clipping" isn't a widely-used term of art in Bitcoin. It's a catchall for ECDSA signature malleability: ways to take a valid signature and produce a different valid signature for the same transaction, which changes the txid without changing the meaning.

There were two practical vectors:

- DER encoding variability. ECDSA signatures are wrapped in DER, and the DER spec allowed multiple encodings of the same numbers (extra padding bytes, alternate integer-length representations). [BIP 66](/glossary/bip-66) (2015) enforced strict DER and made non-canonical encodings non-standard.
- Inherent S-malleability. For any valid (r, s) ECDSA signature, (r, n-s) is also valid for the same message. The [low-S rule](/glossary/low-s-signatures) (BIP 62 proposal, BIP 146 relay policy, BIP 141 consensus for SegWit) requires s less than half the curve order, picking one canonical form.

SegWit (BIP 141) closed the issue at the protocol level by moving signature data out of the txid calculation entirely. For SegWit and Taproot inputs, signature tweaks don't change the txid no matter what an attacker does.

In modern Bitcoin, signature malleability is a solved problem for new transactions. Legacy P2PKH inherits ECDSA's mathematical properties, but with strict DER plus low-S enforced at the relay layer, the practical attack surface is gone.
