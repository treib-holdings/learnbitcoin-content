---
title: "X-only Public Key"
slug: x-only-public-key
draft: false
published: "2026-09-17"
shortDefinition: "A 32-byte public key that stores only the X coordinate of a curve point, with the Y coordinate implied to be even. Introduced by BIP-340 and used for every Taproot output and signature."
keyTakeaways:
  - "Every valid X coordinate on secp256k1 has exactly two Y coordinates, one even and one odd, so fixing the parity to even loses no information and costs no security"
  - "An x-only key equals the 33-byte compressed key with prefix 0x02, which is why existing BIP32 keys can be reused by dropping the first byte"
  - "The signer, not the verifier, handles parity: if a key has an odd Y, the signer negates its secret key before signing, so every x-only key has two matching secret keys"
sources:
  - { label: "BIP-340 - Schnorr Signatures for secp256k1 (design section on implicit Y coordinates)", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "BIP-341 - Taproot (32-byte witness program)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Optech - X-only public keys topic", url: "https://bitcoinops.org/en/topics/x-only-public-keys/" }
relatedTerms:
  - bip-340
  - public-key
  - schnorr-signature
  - taproot
  - taproot-tweak
  - control-block
  - elliptic-curve
liveWidget: ~
---

A [public key](/glossary/public-key) is a point on the secp256k1 curve, and a point has two coordinates. For most of Bitcoin's history keys were stored compressed: the 32-byte X coordinate plus one prefix byte, 0x02 or 0x03, saying whether Y is even or odd. An x-only key drops that byte too. It is the 32-byte X coordinate alone, and the reader is told to assume the even Y.

That works because the curve is symmetric. For any X that lies on the curve there are exactly two possible Y values, and since the field's prime is odd, one of them is even and the other is odd. Choosing "always even" picks one of the two without ambiguity. [BIP-340](/glossary/bip-340) argues, and the argument holds, that this halves the set of usable keys without weakening them at all: anyone who could break an x-only key could break a full key by attacking its X coordinate and negating the answer if needed.

The bookkeeping lands on the signer. If a private key produces a point with an odd Y, the signer negates the private key, which flips the point to its even-Y twin, and signs with that. The verifier never sees the difference. A side effect is that every x-only public key corresponds to two private keys, a fact that matters for wallet software and for nothing else.

Taproot uses x-only keys everywhere. The 32-byte value inside a `bc1p` address is an x-only key, the internal key carried in a [control block](/glossary/control-block) is an x-only key, and the keys inside [Tapscript](/glossary/bip-342-tapscript) are x-only keys, which is why a key of any other length there is treated as an unknown type reserved for future schemes. The one place the dropped parity has to be recorded is the control block, whose first byte carries the parity of the output key so that a verifier can reconstruct the exact point during a script-path spend.

The x-only encoding saves one byte per key and one byte per signature. Next to ECDSA, a Schnorr key and signature together come to 96 bytes instead of roughly 104 to 105, a reduction of about 8 percent. The reason to know the term is not the byte. It is that "32 bytes" and "x-only" mean the same thing in every Taproot document, and reading those documents gets easier once you know it.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for where these keys sit in a Taproot output.
