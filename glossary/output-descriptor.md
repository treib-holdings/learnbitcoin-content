---
title: "Output Descriptor"
slug: output-descriptor
draft: false
shortDefinition: "A human-readable notation describing how to generate or watch specific Bitcoin scripts/addresses."
keyTakeaways:
  - "Simplifies sharing and managing sets of addresses/scripts"
  - "Works with watch-only wallets or complex multi-sig setups"
  - "Improves clarity over older, ad hoc address generation approaches"
sources: []
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
- `/<0;1>/*` - multipath: derive children at both `/0/*` (receive) and `/1/*` (change), index ranging over all integers.
- `#cm5e6jrn` - a checksum so typos fail fast at import time.

Why descriptors matter:

- **Self-describing.** Anyone reading the descriptor can derive the same addresses without out-of-band conventions like "we used BIP 84 with account 0 and SegWit." The descriptor encodes all of that explicitly.
- **Watch-only wallets.** Hand a descriptor (no private keys) to a phone or laptop and it can monitor balances and build unsigned PSBTs.
- **Multisig coordination.** A multisig wallet is described by a single descriptor like `wsh(sortedmulti(2,xpub_A/<0;1>/*,xpub_B/<0;1>/*,xpub_C/<0;1>/*))`. Cosigners import the same descriptor and they're automatically synchronized.
- **Tooling interoperability.** Sparrow, Specter, Nunchuk, Bitcoin Core, and most modern wallets accept descriptors. Move your watch-only wallet between tools by copying one string.

Bitcoin Core moved to descriptor wallets as the default in 0.21 (2021) and made them mandatory for new wallets in 0.22. The legacy `addmultisigaddress`-style of wallet management is officially deprecated in favor of descriptors.

For most users, descriptors stay invisible; the wallet handles them. For multisig setups, integrators, and anyone debugging a custody configuration, they're the lingua franca.
