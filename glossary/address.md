---
title: "Address"
slug: address
draft: false
shortDefinition: "A string (often starting with 1, 3, or bc1) that represents a destination for Bitcoin payments, derived from a public key."
keyTakeaways:
  - "Derived from a public key via cryptographic hashing"
  - "Multiple formats exist (e.g., P2PKH, Bech32)"
  - "Sharing an address is how you receive Bitcoin"
sources: []
relatedTerms:
  - b32-address
  - bech32m
  - bip-173-bech32
  - bitcoin-script
  - p2pk-pay-public-key
  - p2pkh-pay-public-key-hash
  - p2sh-pay-script-hash
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - price-discovery
  - silent-payments
  - stealth-address
  - vanity-address
liveWidget: ~
---

A Bitcoin address is like your street address in the digital realm, except it’s derived from cryptographic magic rather than city zoning. Each address is hashed from a public key, ensuring that only someone with the corresponding private key can spend the coins sent there. Addresses come in different flavors, from the older P2PKH (starting with '1') to Bech32 (starting with 'bc1'), which is defined in [BIP-173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki).
When you share an address, you’re effectively saying, “Send Bitcoin here, please.” It’s a lot shorter than a full public key, and it’s also a bit like wearing a costume that hides some of your underlying identity. Still, it’s important to remember that transactions on the blockchain are public, so good privacy practices (like avoiding address reuse) are vital.
