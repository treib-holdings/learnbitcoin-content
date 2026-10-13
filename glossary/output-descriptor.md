---
title: "Output Descriptor"
slug: output-descriptor
draft: false
updated: "2026-10-13"
shortDefinition: "A human-readable notation describing how to generate or watch specific Bitcoin scripts/addresses."
keyTakeaways:
  - "Simplifies sharing and managing sets of addresses/scripts"
  - "Works with watch-only wallets or complex multi-sig setups"
  - "Improves clarity over older, ad hoc address generation approaches"
sources:
  - { label: "Bitcoin Core - doc/descriptors.md: Support for Output Descriptors in Bitcoin Core", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md" }
  - { label: "BIP-380 - Output Script Descriptors General Operation (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki" }
  - { label: "Bitcoin Core - 0.21.0 release notes: experimental descriptor wallets, not the default type (2021-01-14)", url: "https://bitcoincore.org/en/releases/0.21.0/" }
  - { label: "Bitcoin Core - 23.0 release notes: descriptor wallets are now the default wallet type (2022-04-25)", url: "https://bitcoincore.org/en/releases/23.0/" }
  - { label: "Bitcoin Core - 30.0 release notes: BDB legacy wallets can no longer be created or loaded; legacy-only RPCs including addmultisigaddress removed (2025-10-10)", url: "https://bitcoincore.org/en/releases/30.0/" }
  - { label: "Bitcoin Optech - Topic: Output script descriptors", url: "https://bitcoinops.org/en/topics/output-script-descriptors/" }
relatedTerms:
  - bitcoin-core
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - p2wpkh-pay-witness-public-key-hash
  - psbt
  - taproot
sameAs:
  - "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md"
  - "https://bitcoinops.org/en/topics/output-script-descriptors/"
liveWidget: ~
---

An output descriptor is a compact text format that describes how to derive a set of Bitcoin scripts and addresses. It replaces ad-hoc collections of "raw addresses" with a self-contained recipe a wallet can plug in and start watching or spending from.

A typical descriptor looks like:

```
wpkh([d34db33f/84h/0h/0h]xpub6BosfCnifzxcF.../<0;1>/*)#cm5e6jrn
```

Decoded:

- `wpkh(...)` - the script type. Here, witness public-key hash (P2WPKH, native SegWit).
- `[d34db33f/84h/0h/0h]` - the BIP 32 origin: master key fingerprint and the derivation path used to reach this xpub.
- `xpub6Bos...` - the extended public key.
- `/<0;1>/*` - multipath: derive children at both `/0/*` (receive) and `/1/*` (change); the `*` stands for the unhardened child indexes, which a wallet scans over a range (0 to 1000 by default in Bitcoin Core).
- `#cm5e6jrn` - a checksum so typos fail fast at import time.

Why descriptors matter:

- **Self-describing.** Anyone reading the descriptor can derive the same addresses without out-of-band conventions like "we used BIP 84 with account 0 and SegWit." The descriptor encodes all of that explicitly.
- **Watch-only wallets.** Hand a descriptor (no private keys) to a phone or laptop and it can monitor balances and build unsigned PSBTs.
- **Multisig coordination.** A multisig wallet is described by a single descriptor like `wsh(sortedmulti(2,xpub_A/<0;1>/*,xpub_B/<0;1>/*,xpub_C/<0;1>/*))`. Cosigners import the same descriptor and derive the same receive and change addresses.
- **Tooling interoperability.** The language is standardized in BIP 380 and its companion BIPs, so a descriptor means the same thing in Bitcoin Core as in any other wallet that supports the standard. Move your watch-only wallet between tools by copying one string.

Bitcoin Core introduced descriptor wallets as an experimental option in 0.21 (January 2021), made them the default for new wallets in 23.0 (April 2022), and removed legacy wallets outright in 30.0 (October 2025): an old wallet can still be migrated, but no longer created or loaded. The legacy-only RPCs, `addmultisigaddress` among them, went with it.

For most users, descriptors stay invisible; the wallet handles them. For multisig setups, integrators, and anyone debugging a custody configuration, they're the lingua franca.
