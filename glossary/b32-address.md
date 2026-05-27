---
title: "B32 Address"
slug: b32-address
draft: false
shortDefinition: "Another name for bech32 addresses, referring to the base32 encoding format introduced with Segregated Witness (SegWit)."
keyTakeaways:
  - "Synonymous with bech32 addresses"
  - "Improves error detection and QR scanning"
  - "Introduced as part of SegWit (BIP-173)"
sources: []
relatedTerms:
  - address
  - bech32m
  - bip-173-bech32
  - p2pk-pay-public-key
  - p2pkh-pay-public-key-hash
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - silent-payments
  - stealth-address
  - vanity-address
liveWidget: ~
---

"B32" is informal shorthand for [bech32](/glossary/bip-173-bech32), the address format defined in BIP 173 and used for witness-version-0 SegWit outputs. On mainnet, these addresses start with `bc1q` (P2WPKH or P2WSH).

The "B32" name isn't a Bitcoin standard term and rarely appears in spec documents or wallet UIs. Most of the ecosystem just says "bech32" or "native SegWit address." This entry exists because some legacy documentation uses the shorthand.

What bech32 buys you over the older formats:

- **Case-insensitive.** The whole address is lowercase, eliminating case-confusion errors.
- **Stronger error detection.** The BCH-code checksum catches almost all single-character typos and most multi-character errors. Mistype an address and the wallet usually rejects it instead of accidentally sending to a different valid address.
- **QR-code friendly.** The restricted character set encodes more efficiently in QR.

Witness version 1+ (Taproot and future versions) uses [bech32m](/glossary/bech32m) - the slightly different checksum that fixes a subtle bug found in original bech32. Those addresses look the same on the surface (`bc1p...` for Taproot) but use a different validator.

For modern Bitcoin: prefer native SegWit (`bc1q...`) or Taproot (`bc1p...`) over the older `1...` (P2PKH) and `3...` (P2SH-wrapped) formats. Lower fees, better error detection, smaller QR codes.
