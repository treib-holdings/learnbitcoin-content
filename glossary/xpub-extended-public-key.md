---
title: "Xpub (Extended Public Key)"
slug: xpub-extended-public-key
draft: false
shortDefinition: "A BIP 32 feature allowing derivation of child public keys without exposing the master private key."
keyTakeaways:
  - "Enables derivation of multiple child addresses from a single root"
  - "Retains spending security if the master private key is safely hidden"
  - "Used for watch-only wallets, accounting, and multi-sig coordination"
sources: []
relatedTerms:
  - bip-44
  - bip-85
  - chaincode
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - public-key
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
---

An xpub is a [BIP 32](/glossary/bip-32) extended public key: a parent public key bundled together with its [chaincode](/glossary/chaincode). With both pieces, anyone can derive all non-hardened child public keys (and therefore all addresses) under that branch of the wallet tree, without ever seeing a private key.

What you can do with someone's xpub:

- **Watch their wallet.** Import the xpub into Sparrow, Specter, BlueWallet, etc., and you'll see every receive address, every spend, every balance change in real time. No private key needed.
- **Generate fresh receive addresses for them.** A merchant server can hand out new addresses for each customer without holding any spending capability.
- **Participate as a watch-only cosigner.** Combine an xpub from each cosigner to build a multisig watching wallet.

What you give up by leaking an xpub:

- **Privacy.** Every present and future address in that branch is now visible to whoever has the xpub. The chain-analysis story collapses; the holder of the xpub sees the entire balance and transaction graph.
- **Forward secrecy on activity.** Even if you never share the xpub again, the holder can derive your next 1000 addresses just by walking the tree.

Treat an xpub like a balance sheet, not like an address.

Format variants you'll see in older wallets:

- `xpub...` - the original BIP 32 form, conventionally tied to legacy P2PKH derivations.
- `ypub...` - P2SH-wrapped SegWit (BIP 49).
- `zpub...` - native P2WPKH (BIP 84).
- `Ypub` / `Zpub` - multisig variants.

In 2026, the prefix variants are mostly historical: modern [descriptor wallets](/glossary/output-descriptor) carry the script-type information explicitly, so a single `xpub` plus a descriptor template covers everything cleanly.
