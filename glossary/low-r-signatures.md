---
title: "Low R Signatures"
slug: low-r-signatures
draft: false
shortDefinition: "An ECDSA optimization using a minimal 'R' component, reducing overall signature size and lowering transaction fees."
keyTakeaways:
  - "Shortens ECDSA signatures by minimizing the R field size"
  - "Saves a few bytes, trimming transaction fees slightly"
  - "Implemented in many modern wallets as a default optimization"
sources: []
relatedTerms:
  - bip-66
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - low-s-signatures
  - schnorr-signature
liveWidget: ~
---

ECDSA signatures have two components, R and S. R is derived from a per-signature nonce, and the resulting bytes are roughly uniform: about half the time R's high bit is set, which requires an extra leading zero byte to encode as a positive DER integer.

Low-R signing grinds. The signer tries successive deterministic nonces (RFC 6979 derivation) until it produces an R whose high bit is clear, saving one byte. On average it takes two attempts to find one, with a long tail. The resulting signature is cryptographically equivalent; the only difference is the encoded length.

Bitcoin Core adopted low-R signing in 0.17 (2018) and most major wallets followed. Across the network it saves roughly one vbyte per ECDSA signature, which sounds trivial but adds up over millions of transactions. For Taproot / Schnorr signatures the trick doesn't apply (Schnorr signatures are a fixed 64 bytes regardless), so this is a legacy-ECDSA-only optimization.

Most users never see it. It happens automatically inside the signing code.
