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
  - p2sh-pay-script-hash
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - silent-payments
  - stealth-address
  - vanity-address
liveWidget: ~
---

B32 is shorthand for the bech32 address format, defined in [BIP-173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki). It encodes addresses using lower-case alphanumeric characters and includes built-in error detection. If you’ve seen addresses that begin with “bc1,” you’re looking at bech32—or B32 if you prefer the nickname.
These addresses cut down on typing mistakes and are more QR code-friendly than legacy formats. They’re part of the broader SegWit upgrade, which also helped reduce transaction fees and paved the way for further protocol improvements. So, B32 addresses are not just a style choice; they’re a more efficient and secure format for sending and receiving Bitcoin.
