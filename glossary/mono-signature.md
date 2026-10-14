---
title: "Mono-Signature"
slug: mono-signature
draft: false
updated: "2026-10-13"
shortDefinition: "A single ECDSA or Schnorr signature controlling an output: the typical single-sig setup, as opposed to multisig."
keyTakeaways:
  - "Standard approach: one private key signs, one signature suffices"
  - "Less secure than multisig if the key is compromised"
  - "Schnorr single-sig can be more compact than ECDSA"
sources:
  - { label: "BIP-340 - Schnorr Signatures for secp256k1 (2020): a standard for 64-byte Schnorr signatures; DER-encoded ECDSA signatures are variable size and up to 72 bytes", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "Bitcoin Core PR #13666 - Always create signatures with Low R values (merged August 2018): signatures of at most 71 bytes including the sighash byte, and 71 bytes in most cases", url: "https://github.com/bitcoin/bitcoin/pull/13666" }
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules (2020): multi-party public keys and signatures are indistinguishable from their single-party equivalents, so most applications can use the key-based spending path", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Optech - MuSig topic page: multiple users each with their own private key create a combined public key that is indistinguishable from any other schnorr pubkey", url: "https://bitcoinops.org/en/topics/musig/" }
  - { label: "BOLT #3 - Bitcoin Transaction and Script Formats: the funding output is a P2WSH 2-of-2 OP_CHECKMULTISIG script", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md" }
  - { label: "mainnet.observer (formerly transactionfee.info) - Input Types by Count (daily data read 13 October 2026: over the previous 30 days P2WPKH 71%, P2TR key path 8%, P2PKH 7% and nested P2WPKH 4% of inputs; P2A anchors 6%; P2SH, P2WSH, nested P2WSH and P2TR script path about 4% together)", url: "https://mainnet.observer/charts/inputs-types-by-count/" }
relatedTerms:
  - interactive-multi-sig
  - m-n
  - musig
  - musig2
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

"Mono-signature" is an unusual phrasing for what most people call single-sig: one private key, one signature, controlling one output. It's the default Bitcoin spending pattern.

The vast majority of on-chain Bitcoin transactions today are single-sig: single-key output types account for roughly nine in ten of the inputs spent in a typical month (counting Taproot key-path spends, which look the same on-chain whether one key or an aggregate of several produced the signature), and script spends such as classical multisig are only a few percent. Multisig and aggregated schemes are used for higher-security custody (vaults, exchange cold storage, treasuries) or for protocol reasons (Lightning channels are 2-of-2 multisig under the hood; a 2-of-2 built with MuSig2 on Taproot can spend through the key path and look exactly like single-sig).

Schnorr (Taproot) single-sig signatures are a fixed 64 bytes; ECDSA signatures run up to 72 bytes in DER encoding, or 71 once a wallet grinds for [low-R](/glossary/low-r-signatures) values. Both authorize spending with one private key, both look on-chain like one signature, both have the same single-point-of-failure security profile.

The tradeoff is the obvious one: one key, one point of failure. Lose access to the key (lost seed, dead drive, no backup) and the coins are gone. Compromise the key (malware, supply-chain attack on a wallet, careless seed handling) and the coins are stolen. Multisig and aggregated signatures spread that risk across multiple keys or devices, at the cost of operational complexity.

For most users, a single hardware wallet (single-sig) with a properly verified seed backup is dramatically more secure than the alternatives they'd actually execute correctly. Multisig is a real upgrade only if you're willing to use it competently.
