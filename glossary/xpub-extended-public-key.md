---
title: "Xpub (Extended Public Key)"
slug: xpub-extended-public-key
draft: false
updated: "2026-10-12"
shortDefinition: "A BIP 32 feature allowing derivation of child public keys without exposing the master private key."
keyTakeaways:
  - "Enables derivation of multiple child addresses from a single root"
  - "Retains spending security if the master private key is safely hidden"
  - "Used for watch-only wallets, accounting, and multi-sig coordination"
sources:
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: knowing an extended public key allows reconstruction of all descendant non-hardened public keys; an xpub plus any non-hardened child private key equals the parent extended private key", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP-360 - Pay-to-Merkle-Root (P2MR): extended public keys and wallet descriptors also reveal quantum vulnerable public key information", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
relatedTerms:
  - bip-32
  - bip-44
  - bip-85
  - chaincode
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - output-descriptor
  - public-key
  - public-key-exposure
  - watch-only-wallet
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
---

An xpub is a [BIP 32](/glossary/bip-32) extended public key: a parent public key bundled together with its [chaincode](/glossary/chaincode). With both pieces, anyone can derive all non-hardened child public keys (and therefore all addresses) under that branch of the wallet tree, without ever seeing a private key. Each child gets a chaincode of its own, computed from the parent's, which is what lets the derivation keep going down the branch.

What you can do with someone's xpub:

- **Watch their wallet.** Import the xpub into Sparrow, Specter, BlueWallet, etc., and you'll see every receive address, every spend, every balance change in real time. No private key needed.
- **Generate fresh receive addresses for them.** A merchant server can hand out new addresses for each customer without holding any spending capability.
- **Participate as a watch-only cosigner.** Combine an xpub from each cosigner to build a multisig watching wallet.

What you give up by leaking an xpub:

- **Privacy.** Every present and future address in that branch is now visible to whoever has the xpub. The chain-analysis story collapses; the holder of the xpub sees the entire balance and transaction graph.
- **Forward secrecy on activity.** Even if you never share the xpub again, the holder can derive every non-hardened address that will ever exist under that branch, not just the next few, by walking the tree. There is no taking it back.
- **Possibly the spending keys too.** BIP 32's own warning: "knowledge of a parent extended public key plus any non-hardened private key descending from it is equivalent to knowing the parent extended private key". Export a single child private key from a branch whose xpub is out in the world and you have handed over every key in the branch. The BIP's conclusion is that "extended public keys must be treated more carefully than regular public keys".
- **Public keys, in the quantum sense.** A hashed address hides its public key until the first spend; an xpub hands over the public keys behind every address under it up front. BIP-360 notes that xpubs and wallet descriptors "also reveal quantum vulnerable public key information", so sharing one with a server is [public key exposure](/glossary/public-key-exposure) for the whole branch, including addresses that have never been used.

Treat an xpub like a balance sheet, not like an address.

Format variants you'll see in older wallets:

- `xpub...` - the original BIP 32 form, conventionally tied to legacy P2PKH derivations.
- `ypub...` - P2SH-wrapped SegWit (BIP 49).
- `zpub...` - native P2WPKH (BIP 84).
- `Ypub` / `Zpub` - multisig variants.

In 2026, the prefix variants are mostly historical: modern [descriptor wallets](/glossary/output-descriptor) carry the script-type information explicitly, so a single `xpub` plus a descriptor template covers everything cleanly.
