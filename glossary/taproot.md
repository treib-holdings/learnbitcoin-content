---
title: "Taproot"
slug: taproot
draft: false
updated: "2026-10-13"
shortDefinition: "The 2021 soft fork (BIPs 340, 341, 342) that brought Schnorr signatures, Taproot outputs, and Tapscript to Bitcoin. Every Taproot output looks the same on-chain regardless of the underlying script."
keyTakeaways:
  - "Activated November 2021 at block height 709,632 - Bitcoin's biggest protocol upgrade since SegWit"
  - "Schnorr signatures: 64 bytes fixed (vs ECDSA's ~71-72), tighter security proofs, native aggregation"
  - "Key-path spending: complex contracts look like single-sig spends on-chain (huge privacy win)"
  - "Script-path spending (MAST): reveal only the script branch actually used, not the tree"
  - "Taproot addresses start with `bc1p` (bech32m encoding)"
sources:
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules (Pieter Wuille, Jonas Nick, Anthony Towns): a Taproot output is a native SegWit version 1 output with a 32-byte witness program; a key path spend is a single 64-byte signature, and a script path spend reveals one leaf plus a Merkle path proving the output committed to it", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-340 - Schnorr signatures for secp256k1: a fixed 64-byte format where DER-encoded ECDSA signatures are variable size and up to 72 bytes; provable security, where the best known results for ECDSA rely on stronger assumptions; linearity lets several parties produce one signature valid for the sum of their keys", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "Bitcoin Core 0.21.1 release notes (May 1, 2021): Speedy Trial needs 90 percent of blocks in a 2,016-block retarget period to signal; once locked in, Taproot activates at block 709632, expected in November 2021", url: "https://bitcoincore.org/en/releases/0.21.1/" }
  - { label: "BIP-350 - Bech32m format for v1+ witness addresses: native witness version 1 and later addresses use the Bech32m checksum; the mainnet test vectors begin bc1p", url: "https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki" }
  - { label: "Bitcoin Core source - src/wallet/wallet.h: DEFAULT_ADDRESS_TYPE is OutputType::BECH32, so new addresses are bc1q unless the user picks another type", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/wallet.h" }
  - { label: "ChainQuery - UTXO set repartition by output type (snapshot 2026-10-11): 53.8 million P2TR outputs, more than any other type, holding 1.1 percent of all bitcoin", url: "https://chainquery.com/reports/utxo-repartition" }
  - { label: "mainnet.observer - outputs created per day by type, raw data (outputs_p2tr_sum.csv against outputs_sum.csv and date.csv): Taproot was 5.4 percent of new outputs in September 2026; 2024 was the peak year at 26.5 percent, with 41.7 percent in January 2024", url: "https://mainnet.observer/csv/outputs_p2tr_sum.csv" }
relatedTerms:
  - bech32m
  - bip-bitcoin-improvement-proposal
  - bip-342-tapscript
  - inscriptions
  - key-path-spend
  - lightning-channel
  - low-r-signatures
  - merkleized-abstract-syntax-tree-mast
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - script-path-spend
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

The headline feature is that **every Taproot output looks the same on-chain**. Whether it backs a single-sig wallet, a multisig, or a complex script with timelocks and hash preimages, the output on the chain is just a 32-byte public key, and if the parties cooperate the spend is a single 64-byte Schnorr signature. Observers cannot tell which was used unless a script path is revealed. This is huge for privacy.

Taproot addresses start with `bc1p` (using [bech32m](/glossary/bech32m) encoding).

## How it works

A Taproot output commits to either a single public key (the "internal key") or a tree of alternative spending scripts (the script paths), or both.

Two spending paths:

1. **[Key-path spending](/glossary/key-path-spend).** If all participants in a multisig or complex contract agree, they can collectively sign with an aggregated public key (via [MuSig2](/glossary/musig2)). The spend looks like a single signature on-chain; observers cannot tell whether script paths existed or what they would have been. This is the common case and the most private and cheapest spend type Bitcoin has.
2. **[Script-path spending](/glossary/script-path-spend) ([MAST](/glossary/merkleized-abstract-syntax-tree-mast)).** If they do not agree - someone is offline, a timelock triggers, or a backup branch is needed - one party can reveal *only the script branch actually being executed*, along with a Merkle proof that it was committed to in the original output. Other branches stay hidden.

The combination means complex contracts pay almost zero on-chain cost when they "go right" (everyone signs cooperatively), and only reveal the strictly necessary branch when they "go wrong."

## What it unlocks

- **MuSig2 / FROST aggregation.** Multiple cosigners produce a single Schnorr signature on a single internal key. A 5-of-7 federation spends a Taproot output indistinguishably from a single-sig wallet.
- **Lightning channel privacy.** Cooperative channel closes look like any other Taproot key-path spend, no longer visibly "2-of-2 multisig closing."
- **Cheap multisig.** Pay for the signature you actually use, not for all the keys you committed to.
- **Less data on-chain.** Schnorr signatures are a fixed 64 bytes; DER-encoded ECDSA signatures run up to 72, and 71 even after [low-R](/glossary/low-r-signatures) grinding.
- **Cleaner cryptography.** Schnorr has tighter security proofs than ECDSA.
- **A foundation for future protocols.** [Silent payments](/glossary/silent-payments), Discreet Log Contracts (DLCs), and newer Lightning constructions all benefit from Taproot primitives.

## Adoption

Taproot adoption took a few years to ripple through wallet software, hardware wallets, and infrastructure. As of 2026 it is widely supported for sending and receiving, but most major wallets still hand out native SegWit `bc1q` addresses by default; Bitcoin Core does, and offers Taproot as an option. About 5 percent of newly created outputs are `bc1p...`, down from the 2024 [inscription](/glossary/inscriptions) peak, even though by count Taproot is now the largest output type in the UTXO set.

One structural property worth naming: Taproot outputs commit to the tweaked public key directly in the bech32m address - there is no hash layer in front. Every P2TR output is therefore "always-exposed" in [post-quantum](/glossary/post-quantum-bitcoin) terms: the pubkey is on chain from output creation, regardless of whether it is ever spent. The tradeoff buys key-path privacy and efficiency for complex contracts. The fix when post-quantum signatures arrive is a new output type, not abandoning Taproot.

See [Schnorr Signature](/glossary/schnorr-signature) and [Signature Aggregation](/glossary/signature-aggregation) for the building blocks.

See [The BIP Process](/rabbit-hole/bip-process) for the process that got Taproot activated.

Go deeper in [How Taproot Actually Works](/rabbit-hole/how-taproot-works) - the tweak, both spending paths byte by byte, what Schnorr did and did not change, the activation timeline, and five years of adoption numbers.
