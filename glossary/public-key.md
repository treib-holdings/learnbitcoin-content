---
title: "Public Key"
slug: public-key
draft: false
updated: "2026-10-13"
shortDefinition: "Derived from a private key via elliptic curve multiplication, used to verify signatures or generate BTC addresses."
keyTakeaways:
  - "Core to Bitcoin's cryptography: verifying signatures derived from private keys"
  - "Safe to share, unlike the private key"
  - "Hashed (HASH160) into legacy and native SegWit single-key addresses; a Taproot address carries a tweaked public key instead"
sources:
  - { label: "SECG - SEC 1: Elliptic Curve Cryptography, version 2.0 (May 21, 2009): a key pair is a secret integer d and the public point Q = dG; the security of every ECC scheme rests on the elliptic curve discrete logarithm problem, for which no general subexponential algorithm is known", url: "https://www.secg.org/sec1-v2.pdf" }
  - { label: "BIP 340 - Schnorr Signatures for secp256k1: Bitcoin has used ECDSA over secp256k1 to authenticate transactions; the standard compressed public key is 33 bytes, and Taproot keys are encoded as 32 bytes (x-only)", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (2008): each owner signs a hash of the previous transaction and the public key of the next owner, and a payee can verify the signatures to verify the chain of ownership", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Core - src/hash.h: CHash160, Bitcoin's 160-bit hash (SHA-256 then RIPEMD-160)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/hash.h" }
  - { label: "BIP 141 - Segregated Witness: for a 20-byte version-0 witness program (P2WPKH), the HASH160 of the public key must match the program", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 341 - Taproot: a version-1 witness program is the 32-byte encoding of the output key Q, a public key tweaked with the script tree", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP 360 (Draft, Pay-to-Merkle-Root, version 0.12.1): long-exposure quantum attacks target public keys already on the chain; Taproot outputs are fundamentally vulnerable, while P2PKH and P2WPKH funds become vulnerable once a spend reveals the key", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
relatedTerms:
  - address
  - b32-address
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - shors-algorithm
  - xpub-extended-public-key
sameAs:
  - "https://en.wikipedia.org/wiki/Public-key_cryptography"
  - "https://www.wikidata.org/wiki/Q201339"
liveWidget: ~
---

A public key is a number derived from a [private key](/glossary/private-key) via elliptic curve multiplication. It corresponds uniquely to the private key but reveals nothing about it - you can publish your public key without compromising your secret.

The mechanism: Bitcoin uses the secp256k1 elliptic curve. Multiplying a curve generator point G by your private key k gives a point P = k*G. That point P (encoded as 33 bytes in compressed form, or as a 32-byte x-only key under Taproot) is your public key. Going forward from k to P is cheap. Going backward from P to k requires solving the elliptic curve discrete logarithm problem, for which no efficient method is known - the same hard problem every elliptic curve cryptosystem relies on.

What public keys are used for:

- **Verifying signatures.** When you spend BTC, your wallet signs the transaction with your private key. Anyone, including every node on the network, can verify that signature against your public key without learning your private key. That's how Bitcoin enforces "only the rightful owner can spend."
- **Generating [addresses](/glossary/address).** Legacy (P2PKH) and native SegWit (P2WPKH) addresses are derived by hashing the public key with HASH160 (SHA-256, then RIPEMD-160). The hash is what gets shared; the public key itself is only revealed when you spend. [Taproot](/glossary/taproot) addresses work differently: they contain a tweaked 32-byte public key directly, not a hash of it.

Why hash the public key into an address instead of just sharing the public key? Two reasons. First, addresses are much shorter and easier to handle. Second, hashing adds a layer of defense: if elliptic curve cryptography is ever broken (e.g. by a sufficiently powerful quantum computer running [Shor's algorithm](/glossary/shors-algorithm)), funds at unspent addresses remain safe as long as the public key has never been revealed. Reused or already-spent addresses are more exposed, and Taproot outputs, which carry their key on-chain, do not get this protection at all. See [Post-Quantum Bitcoin](/glossary/post-quantum-bitcoin) for the migration framework.

The asymmetry between private and public keys - cheap one way, impossible the other - is the foundation of everything in Bitcoin that involves cryptographic ownership.
