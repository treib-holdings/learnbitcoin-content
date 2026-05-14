---
title: "Low-S Signatures"
slug: low-s-signatures
draft: false
shortDefinition: "A standard enforcing the ECDSA 'S' component's value be below a certain threshold, reducing transaction malleability."
keyTakeaways:
  - "Eliminates multiple valid encodings of a single ECDSA signature"
  - "Curtails malleability by standardizing the S value"
  - "Became standard in Bitcoin after BIP 66 and related updates"
sources: []
relatedTerms: []
liveWidget: ~
---

ECDSA signatures have an inherent malleability: for any valid (r, s) pair, (r, n-s) where n is the secp256k1 curve order is also a valid signature on the same message. An attacker could grab your unconfirmed transaction, flip the S, and rebroadcast a signature with identical meaning but a different txid.

The low-S rule pins down one canonical form. Require s less than or equal to n/2, and the higher half of possible S values becomes invalid. Now there's exactly one low-S signature per (key, message) pair.

History: proposed as part of BIP 62 (which never activated as a unified malleability fix), enforced as relay policy via BIP 146, and made consensus-mandatory for SegWit inputs via BIP 141. Pre-SegWit legacy inputs technically still accept high-S in consensus rules, but the relay policy makes high-S transactions non-standard so they don't propagate.

Combined with BIP 66 strict DER encoding and SegWit's separation of signature data from txid hashing, low-S effectively eliminated practical signature malleability on Bitcoin.
