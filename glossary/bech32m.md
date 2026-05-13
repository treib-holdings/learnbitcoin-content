---
title: "BECH32m"
slug: bech32m
draft: false
shortDefinition: "An updated bech32 address format (BIP-350) for Taproot, featuring improved error detection compared to original bech32."
keyTakeaways:
  - "Supports Taproot addresses using ‘bc1p’ prefix"
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

BECH32m, outlined in [BIP-350](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki), is a refined version of the original bech32 format. Introduced with Taproot, it helps encode addresses with better error-checking properties, making it less likely for typos or misreads to go unnoticed.
This format typically starts with ‘bc1p’ and supports native Taproot scripts. By implementing an enhanced checksum algorithm, BECH32m further reduces the risk of accidentally sending funds to an invalid address. This is part of Bitcoin’s ongoing effort to improve usability and security, all while preserving backward compatibility for older address formats.
