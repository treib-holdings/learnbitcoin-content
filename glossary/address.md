---
title: "Address"
slug: address
draft: false
updated: "2026-10-13"
shortDefinition: "A string (often starting with 1, 3, or bc1) that represents a destination for Bitcoin payments, derived from a public key."
keyTakeaways:
  - "Derived from a public key or script, usually via cryptographic hashing"
  - "Multiple formats exist (e.g., P2PKH, Bech32)"
  - "Sharing an address is how you receive Bitcoin"
sources:
  - { label: "BIP-173 - Base32 address format for native v0-16 witness outputs: the checksum guarantees detection of any error affecting at most 4 characters; the mainnet P2WPKH example starts with bc1q (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BIP-350 - Bech32m format for v1+ witness addresses: witness version 1 and later use Bech32m; the valid Taproot test vectors start with bc1p (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki" }
  - { label: "BIP-341 - Taproot: a Taproot output is a native SegWit version 1 output whose 32-byte witness program is a public key; key-based spends by one party or many are indistinguishable from each other (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-340 - Schnorr Signatures for secp256k1: a fixed 64-byte format instead of DER-encoded ECDSA signatures of up to 72 bytes (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "Bitcoin Core - 0.13.1 release notes: each byte of a segregated witness is given a weight of 1, each other byte in a block a weight of 4 (2016-10-27)", url: "https://bitcoincore.org/en/releases/0.13.1/" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 10, Privacy: a new key pair should be used for each transaction to keep them from being linked to a common owner (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - address-reuse
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

A Bitcoin address is a short string that represents a destination for a payment. It usually encodes a [hash](/glossary/hash) of a [public key](/glossary/public-key) or of a script; a Taproot address encodes a tweaked public key directly. Either way it is formatted to be easy to copy, paste, and scan.

You'll see several address formats coexisting on the network:

- **Legacy / P2PKH** - starts with `1`. The original format. Still works; uses more block space than newer types.
- **P2SH** - starts with `3`. Pay-to-Script-Hash, often used for [multisig](/glossary/multisig) or older SegWit-wrapped addresses.
- **Native SegWit / Bech32** - starts with `bc1q`. Introduced by [BIP-173](/glossary/bip-173-bech32). Cheaper fees, better error detection.
- **Taproot / Bech32m** - starts with `bc1p`. Defined by [BIP-341](/glossary/taproot) and encoded with [Bech32m](/glossary/bech32m). Fixed 64-byte Schnorr signatures, and a key-path spend looks the same whether one key, a multisig, or a script tree sits behind it.

All formats represent the same underlying concept: "to spend BTC sent here, you must produce a valid script and signature(s) that satisfy the locking conditions encoded in this address." Different formats just specify different locking script structures and different on-chain footprints.

A few things addresses are not:

- **Not your identity.** An address is a destination, not an account. A wallet typically generates many addresses to receive on.
- **Not anonymous.** The chain is fully public. If an address has been linked to you (by an exchange KYC, a public donation, a re-used address), every transaction touching it can be linked back. See [Fungibility](/glossary/fungibility).
- **Not permanent.** Most wallets generate a fresh address for each incoming payment. [Reusing addresses](/glossary/address-reuse) leaks privacy by concentrating activity in one observable bucket.

Share addresses casually for receiving. Generate new ones often. Treat the on-chain history of any address as a public ledger entry, because that's exactly what it is.
