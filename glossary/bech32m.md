---
title: "BECH32m"
slug: bech32m
draft: false
shortDefinition: "An updated bech32 address format (BIP-350) for Taproot, featuring improved error detection compared to original bech32."
keyTakeaways:
  - "Supports Taproot addresses using 'bc1p' prefix"
  - "Enhanced checksum for fewer address errors"
  - "Defined in BIP-350 as an upgrade over bech32"
sources: []
relatedTerms:
  - address
  - b32-address
  - segwit-segregated-witness-bip-141
  - bip-173-bech32
  - native-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
liveWidget: ~
---

Bech32m is the address-encoding format used for [Taproot](/glossary/taproot) and any future SegWit version. It looks like `bc1p...` on mainnet and `tb1p...` on testnet, using the same character set as the original [bech32](/glossary/bip-173-bech32) format but with a different checksum constant.

The reason for the new format is a subtle bug in bech32. The original bech32 checksum used the constant 1, which interacted badly with certain edit-distance properties: a typo or attacker could create variations of an address that still validated as bech32 despite encoding different data. Pieter Wuille discovered the issue in 2020 and proposed bech32m (BIP 350) with a different checksum constant (`0x2bc830a3`) that closes the weakness.

How it splits in practice:

- **Witness version 0** outputs ([P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) `bc1q...` and [P2WSH](/glossary/p2wsh-pay-witness-script-hash) `bc1q...`) continue to use original bech32 for backwards compatibility. The weakness doesn't affect v0 in practice because v0 doesn't allow the length variations the bug would exploit.
- **Witness version 1+** (Taproot `bc1p...` and any future versions) use bech32m. The address validator picks the right algorithm based on the first decoded data byte (the witness version).

For users, the difference is invisible. Wallets pick the right encoding for the address type they're generating. The interesting story is mostly that constructive crypto review caught the bug before it hurt anyone in practice, and Bitcoin's upgrade-via-soft-fork model accommodated the fix cleanly.

Spec: [BIP-350](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki).
