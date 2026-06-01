---
title: "Taproot"
slug: taproot
draft: false
shortDefinition: "The 2021 soft fork (BIPs 340, 341, 342) that brought Schnorr signatures, Taproot outputs, and Tapscript to Bitcoin. Every Taproot output looks the same on-chain regardless of the underlying script."
keyTakeaways:
  - "Activated November 2021 at block height 709,632 - Bitcoin's biggest protocol upgrade since SegWit"
  - "Schnorr signatures: 64 bytes fixed (vs ECDSA's ~71-72), tighter security proofs, native aggregation"
  - "Key-path spending: complex contracts look like single-sig spends on-chain (huge privacy win)"
  - "Script-path spending (MAST): reveal only the script branch actually used, not the tree"
  - "Taproot addresses start with `bc1p` (bech32m encoding)"
sources: []
relatedTerms:
  - bech32m
  - bip-bitcoin-improvement-proposal
  - bip-342-tapscript
  - lightning-channel
  - low-r-signatures
  - merkleized-abstract-syntax-tree-mast
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - segwit-segregated-witness-bip-141
  - signature-aggregation
  - signature-clipping
  - silent-payments
  - soft-fork
sameAs:
  - "https://en.bitcoin.it/wiki/Taproot"
  - "https://en.bitcoin.it/wiki/BIP_0341"
  - "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki"
  - "https://bitcoinops.org/en/topics/taproot/"
liveWidget: ~
---

Taproot is the soft fork that activated on Bitcoin in November 2021 at block height 709,632, bringing two cryptographic upgrades into the protocol: [Schnorr signatures](/glossary/schnorr-signature) ([BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)) and Taproot itself ([BIP-341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki), authored by Pieter Wuille, Jonas Nick, and Anthony Towns), along with the new Tapscript language ([BIP-342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki)) for advanced spending conditions.

The headline feature is that **every Taproot output looks the same on-chain**. Whether it is a single-sig spend, a 7-of-11 multisig, or a complex script with timelocks and hash preimages, the spend on the chain is just a 64-byte Schnorr signature against a 32-byte public key. Observers cannot tell which was used. This is huge for privacy.

Taproot addresses start with `bc1p` (using [bech32m](/glossary/bech32m) encoding).

## How it works

A Taproot output commits to either a single public key (the "internal key") or a tree of alternative spending scripts (the script paths), or both.

Two spending paths:

1. **Key-path spending.** If all participants in a multisig or complex contract agree, they can collectively sign with an aggregated public key (via [MuSig2](/glossary/signature-aggregation)). The spend looks like a single signature on-chain; observers cannot tell whether script paths existed or what they would have been. This is the common case and the most private and cheapest spend type Bitcoin has.
2. **Script-path spending (MAST).** If they do not agree - someone is offline, a timelock triggers, or a backup branch is needed - one party can reveal *only the script branch actually being executed*, along with a Merkle proof that it was committed to in the original output. Other branches stay hidden.

The combination means complex contracts pay almost zero on-chain cost when they "go right" (everyone signs cooperatively), and only reveal the strictly necessary branch when they "go wrong."

## What it unlocks

- **MuSig2 / FROST aggregation.** Multiple cosigners produce a single Schnorr signature on a single internal key. A 5-of-7 federation spends a Taproot output indistinguishably from a single-sig wallet.
- **Lightning channel privacy.** Cooperative channel closes look like any other Taproot key-path spend, no longer visibly "2-of-2 multisig closing."
- **Cheap multisig.** Pay for the signature you actually use, not for all the keys you committed to.
- **Less data on-chain.** Schnorr signatures are a fixed 64 bytes vs ECDSA's ~71-72 bytes after [low-R](/glossary/low-r-signatures) grinding.
- **Cleaner cryptography.** Schnorr has tighter security proofs than ECDSA.
- **A foundation for future protocols.** [Silent payments](/glossary/silent-payments), Discreet Log Contracts (DLCs), and newer Lightning constructions all benefit from Taproot primitives.

## Adoption

Taproot adoption took a few years to ripple through wallet software, hardware wallets, and infrastructure. As of 2026 it is widely supported, most major wallets default to Taproot addresses for new receive operations, and a meaningful and growing share of new addresses are `bc1p...`.

One structural property worth naming: Taproot outputs commit to the tweaked public key directly in the bech32m address - there is no hash layer in front. Every P2TR output is therefore "always-exposed" in [post-quantum](/glossary/post-quantum-bitcoin) terms: the pubkey is on chain from output creation, regardless of whether it is ever spent. The tradeoff buys key-path privacy and efficiency for complex contracts. The fix when post-quantum signatures arrive is a new output type, not abandoning Taproot.

See [Schnorr Signature](/glossary/schnorr-signature) and [Signature Aggregation](/glossary/signature-aggregation) for the building blocks.
