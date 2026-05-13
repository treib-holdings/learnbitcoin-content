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
  - bip-16-p2sh
  - segwit-segregated-witness-bip-141
  - native-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
liveWidget: ~
---

BIP 173, located at [BIP-173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki), unveiled the bech32 address format. Recognizable by their "bc1" prefix for Bitcoin mainnet, bech32 addresses employ a base32 scheme that is both more human-friendly and resistant to common typing errors.
Apart from the better checksum, bech32 fully supports native SegWit outputs, helping reduce transaction fees and enable advanced features like the Lightning Network. The format has become increasingly popular, especially after wallets and exchanges embraced SegWit. While older address types remain valid, bech32 is widely considered the future of Bitcoin address encoding.
