---
title: "Key-path Spend"
slug: key-path-spend
draft: false
published: "2026-09-17"
shortDefinition: "Spending a Taproot output with a single Schnorr signature against the output key. The witness is one 64-byte item, nothing about any script tree is revealed, and the spend looks identical whether one person or a whole federation signed it."
keyTakeaways:
  - "The witness contains exactly one element: a BIP-340 signature valid for the tweaked output key, 64 bytes, or 65 with an explicit sighash byte"
  - "The signer uses the internal private key plus the tweak, so an aggregate key built with MuSig2 needs every participant, and the chain still sees one signature"
  - "It is the cheapest signed spend in Bitcoin and the most private: about nine in ten Taproot spends in the 30 days to mid-September 2026 used it, and the chain cannot tell a single-sig wallet from a multisig vault"
sources:
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-327 - MuSig2 for BIP340-compatible Multi-Signatures", url: "https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki" }
  - { label: "mainnet.observer - P2TR key-path versus script-path inputs", url: "https://mainnet.observer/charts/inputs-p2tr-paths/" }
relatedTerms:
  - taproot
  - script-path-spend
  - taproot-tweak
  - schnorr-signature
  - bip-340
  - musig2
  - sighash
  - signature-aggregation
liveWidget: ~
---

A [Taproot](/glossary/taproot) output can be spent through one of two doors, and the key path is the one meant to be used almost all the time. The spender produces a single [Schnorr signature](/glossary/schnorr-signature) that verifies against the output key, the 32-byte value in the `bc1p` address, and puts it in the witness. That is the whole spend. There is no script, no public key to include, and no proof of what else the output could have done.

The signature is not made with the internal private key directly. The output key is the internal key plus a [tweak](/glossary/taproot-tweak) that commits to the script tree, so the signer adds the same tweak to its private key first. Because the spender knows the tree, it can always compute the tweak; because the verifier only sees the output key, it never learns whether a tree existed. When the internal key is an aggregate built with [MuSig2](/glossary/musig2), every participant has to take part in producing that one signature, and the chain still sees one signature.

The witness is 64 bytes. BIP-341 defined a new sighash value, `SIGHASH_DEFAULT`, that means the same as `SIGHASH_ALL` and is implied when the byte is absent, so the common case saves a byte. Any other [sighash](/glossary/sighash) mode appends its byte for 65, and a 65-byte signature ending in zero is invalid, which prevents a third party from padding a signature to change the transaction's witness ID and fee rate. Compared with a native SegWit single-key spend, which carries a signature of about 71 bytes and a 33-byte public key, the key path is the smallest signed witness Bitcoin has.

It is also the private one. A key-path spend from a 3-of-3 federation with two timelocked fallback branches looks exactly like a key-path spend from a phone wallet. Over the 30 days ending 17 September 2026, about 90 percent of Taproot spends went through this door, which is what the design intended: the [script path](/glossary/script-path-spend) exists for the cases where cooperation fails, and using it is itself a signal that something did.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for both doors side by side.
