---
title: "BECH32m"
slug: bech32m
draft: false
updated: "2026-09-17"
shortDefinition: "An updated bech32 address format (BIP-350) for Taproot, featuring improved error detection compared to original bech32."
keyTakeaways:
  - "Supports Taproot addresses using 'bc1p' prefix"
  - "Enhanced checksum for fewer address errors"
  - "Defined in BIP-350 as an upgrade over bech32"
sources:
  - { label: "BIP-350 - Bech32m format for v1+ witness addresses: the 'q' insertion weakness, the constant 0x2bc830a3 in place of 1, bech32 kept for witness version 0 because those addresses are valid at only two lengths (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki" }
  - { label: "BIP-173 - Base32 address format for native v0-16 witness outputs: the original bech32 checksum (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "sipa/bech32 issue #51 - Jonathan Knowles: deleting or inserting a single character can leave a bech32 string valid, found with property tests (May 28, 2019)", url: "https://github.com/sipa/bech32/issues/51" }
  - { label: "Pieter Wuille, bitcoin-dev - Bech32 weakness and impact on bip-taproot addresses (November 7, 2019)", url: "https://www.learnbitcoin.com/archive/t/2019/bech32-weakness-and-impact-on-bip-taproot-addresses#m-c76656f9" }
  - { label: "Pieter Wuille, bitcoin-dev - Progress on bech32 for future Segwit Versions (BIP-173) (December 5, 2020): the analysis that chose the constant 0x2bc830a3", url: "https://www.learnbitcoin.com/archive/t/2020/progress-on-bech32-for-future-segwit-versions-bip-173#m-fffda578" }
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

The reason for the new format is a subtle bug in bech32. The original bech32 checksum used the constant 1, and that choice has a blind spot: whenever an address ends in the letter `p`, inserting or deleting any number of `q` characters just before it leaves the checksum valid. Jonathan Knowles found the issue in May 2019 while running property-based tests against the bech32 reference code (sipa/bech32 issue #51); Pieter Wuille disclosed it to the bitcoin-dev list that November and in December 2020 proposed bech32m (BIP 350) with a different checksum constant (`0x2bc830a3`) that closes the weakness.

How it splits in practice:

- **Witness version 0** outputs ([P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) `bc1q...` and [P2WSH](/glossary/p2wsh-pay-witness-script-hash) `bc1q...`) continue to use original bech32 for backwards compatibility. The weakness doesn't affect v0 in practice because v0 doesn't allow the length variations the bug would exploit.
- **Witness version 1+** (Taproot `bc1p...` and any future versions) use bech32m. The address validator picks the right algorithm based on the first decoded data byte (the witness version).

For users, the difference is invisible. Wallets pick the right encoding for the address type they're generating. The interesting story is mostly that an outside tester caught the bug before it hurt anyone in practice, and because address encoding is a wallet convention rather than a consensus rule, the fix needed no soft fork at all.

Spec: [BIP-350](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki).

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for the bug that led to bech32m and the slow rollout that followed.
