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
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - price-discovery
  - silent-payments
  - stealth-address
  - vanity-address
sameAs:
  - "https://en.bitcoin.it/wiki/Address"
liveWidget: ~
---

A Bitcoin address is a short string that represents a destination for a payment. It encodes a [hash](/glossary/hash) of a [public key](/glossary/public-key) (or a script), formatted to be easy to copy, paste, and scan.

You'll see several address formats coexisting on the network:

- **Legacy / P2PKH** - starts with `1`. The original format. Still works; uses more block space than newer types.
- **P2SH** - starts with `3`. Pay-to-Script-Hash, often used for multisig or older SegWit-wrapped addresses.
- **Native SegWit / Bech32** - starts with `bc1q`. Introduced by [BIP-173](/glossary/bip-173-bech32). Cheaper fees, better error detection.
- **Taproot / Bech32m** - starts with `bc1p`. Introduced with [BIP-341](/glossary/taproot). Best privacy, smallest signatures, supports advanced scripts that look identical to single-sig.

All formats represent the same underlying concept: "to spend BTC sent here, you must produce a valid script and signature(s) that satisfy the locking conditions encoded in this address." Different formats just specify different locking script structures and different on-chain footprints.

A few things addresses are not:

- **Not your identity.** An address is a destination, not an account. A wallet typically generates many addresses to receive on.
- **Not anonymous.** The chain is fully public. If an address has been linked to you (by an exchange KYC, a public donation, a re-used address), every transaction touching it can be linked back. See [Fungibility](/glossary/fungibility).
- **Not permanent.** Most wallets generate a fresh address for each incoming payment. Reusing addresses leaks privacy by concentrating activity in one observable bucket.

Share addresses casually for receiving. Generate new ones often. Treat the on-chain history of any address as a public ledger entry, because that's exactly what it is.
