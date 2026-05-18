---
title: "Public Key"
slug: public-key
draft: false
shortDefinition: "Derived from a private key via elliptic curve multiplication, used to verify signatures or generate BTC addresses."
keyTakeaways:
  - "Core to Bitcoin's cryptography: verifying signatures derived from private keys"
  - "Safe to share, unlike the private key"
  - "Usually hashed to form addresses in typical script types"
sources: []
relatedTerms:
  - address
  - b32-address
  - p2pk-pay-public-key
  - xpub-extended-public-key
sameAs:
  - "https://en.wikipedia.org/wiki/Public-key_cryptography"
  - "https://www.wikidata.org/wiki/Q201339"
liveWidget: ~
---

A public key is a number derived from a [private key](/glossary/private-key) via elliptic curve multiplication. It corresponds uniquely to the private key but reveals nothing about it - you can publish your public key without compromising your secret.

The mechanism: Bitcoin uses the secp256k1 elliptic curve. Multiplying a curve generator point G by your private key k gives a point P = k·G. That point P (encoded as 33 bytes in compressed form) is your public key. Going forward from k to P is cheap. Going backward from P to k requires solving the elliptic curve discrete logarithm problem, which is computationally intractable - the same intractability that secures most of the modern internet's cryptography.

What public keys are used for:

- **Verifying signatures.** When you spend BTC, your wallet signs the transaction with your private key. Anyone, including every node on the network, can verify that signature against your public key without learning your private key. That's how Bitcoin enforces "only the rightful owner can spend."
- **Generating [addresses](/glossary/address).** Most Bitcoin address types are derived by hashing the public key (SHA-256 then RIPEMD-160, or just SHA-256 for newer formats). The hash is what's typically shared publicly; the public key itself is only revealed when you spend.

Why hash the public key into an address instead of just sharing the public key? Two reasons. First, addresses are much shorter and easier to handle. Second, hashing adds a layer of defense: if elliptic curve cryptography is ever broken (e.g. by a sufficiently powerful quantum computer), funds at unspent addresses remain safe as long as the public key has never been revealed. Reused or already-spent addresses are more exposed.

The asymmetry between private and public keys - cheap one way, impossible the other - is the foundation of everything in Bitcoin that involves cryptographic ownership.
