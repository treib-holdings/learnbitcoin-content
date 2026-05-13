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

BIP 62 and BIP 66 introduced strict DER encoding and the low-S requirement to minimize signature malleability-where different encodings of the same signature could change the txID. The low-S rule ensures only one canonical form for S, preventing alternative representations from being valid. This not only improves predictability of txIDs but also supports workflows like multi-sig or hardware wallets that rely on stable transaction hashes. Most modern wallets and miners reject high-S signatures to enforce this consistency, helping standardize the mempool and block validation.
