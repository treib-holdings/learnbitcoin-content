---
title: "BIP 173 (Bech32)"
slug: bip-173-bech32
draft: false
shortDefinition: "Introduced the bech32 address format, a SegWit-compatible encoding with improved error detection."
keyTakeaways:
  - "Uses base32 encoding and a robust checksum"
  - "Native SegWit support reduces fees and malleability"
  - "Easier to type and scan with fewer errors"
sources: []
relatedTerms:
  - address
  - b32-address
  - bech32m
  - bip-bitcoin-improvement-proposal
  - p2sh
  - segwit-segregated-witness-bip-141
  - native-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0173"
  - "https://bitcoinops.org/en/topics/bech32/"
liveWidget: ~
---

[BIP-173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) defines **bech32**, the address format used for native [SegWit](/glossary/segwit-segregated-witness-bip-141) outputs. Bech32 addresses are recognizable by their `bc1q` prefix (mainnet) or `tb1q` (testnet).

Why bech32 exists and is worth caring about:

- **Better error detection.** Bech32's checksum is mathematically designed to detect typos and adjacent-character swaps - the kind of mistakes humans actually make. The previous Base58Check format was strong but less rigorous; bech32 catches more errors with better mathematical guarantees.
- **Lowercase + alphanumeric only.** Bech32 uses only `0-9` and `a-z` (excluding visually-confusable characters like `1/l/I` and `0/O/b`). Easier to read aloud, dictate over the phone, and re-key by hand.
- **QR code friendly.** Bech32 in all-lowercase produces smaller QR codes than mixed-case Base58. Wallets render bech32 addresses as uppercase inside QR codes for further compactness while remaining valid.
- **Native SegWit support.** The whole point: bech32 was designed to be the witness-version-0 address format. Spending from bech32 saves ~30-40% in fees compared to legacy P2PKH.

Designed by Pieter Wuille (Bitcoin Core dev) and proposed in 2017, bech32 became the default address format for new SegWit deployments through the late 2010s.

A successor, **bech32m** (BIP-350), was introduced for [Taproot](/glossary/taproot) addresses (prefix `bc1p`). It uses essentially the same format with one constant changed, fixing a subtle weakness in bech32 that mattered for the new witness versions.

In 2026, most wallets default to bech32 or bech32m addresses for new receives. Legacy formats (`1...`, `3...`) still work but are gradually being phased out in everyday use. See [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) and [Taproot](/glossary/taproot) for the script formats bech32/bech32m wrap.
