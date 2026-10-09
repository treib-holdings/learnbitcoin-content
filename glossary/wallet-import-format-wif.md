---
title: "Wallet Import Format (WIF)"
slug: wallet-import-format-wif
draft: false
updated: "2026-10-09"
shortDefinition: "Wallet Import Format: a Base58Check encoding of a single Bitcoin private key, used to move keys between wallets. Mainnet WIF strings start with 5 (uncompressed) or K or L (compressed)."
keyTakeaways:
  - "Wraps a raw private key with a prefix and checksum in Base58Check"
  - "Simplifies manual entry but must be handled securely"
  - "Gradually superseded by HD seed phrases for typical backups"
sources:
  - { label: "Bitcoin Core source - EncodeSecret and DecodeSecret, how a WIF string is built and read (src/key_io.cpp, v31.1)", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/src/key_io.cpp" }
  - { label: "Bitcoin 0.6.0 release notes (2012) - new wallets use 33-byte compressed public keys", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.6.0.md" }
  - { label: "BIP 38 - Passphrase-protected private key (encrypted keys start with 6P)", url: "https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki" }
  - { label: "Bitcoin Core - Output descriptors: WIF keys and combo() (doc/descriptors.md, v31.1)", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/doc/descriptors.md" }
  - { label: "Bitcoin Core 30.0 release notes - importprivkey and other legacy-wallet RPCs removed", url: "https://bitcoincore.org/en/releases/30.0/" }
relatedTerms:
  - gui-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - wallet
  - watch-only-wallet
sameAs:
  - "https://en.bitcoin.it/wiki/Wallet_import_format"
liveWidget: ~
---

WIF (Wallet Import Format) is a Base58Check encoding of a single Bitcoin private key. It wraps the raw 32-byte private key with a network prefix byte, an optional compression flag, and a 4-byte checksum so a typo at the wallet import screen fails fast instead of silently loading a different key.

What WIF strings look like on mainnet:

- **`5...`** (51 characters) - uncompressed-public-key form. Legacy. Bitcoin Core switched new wallets to compressed keys in version 0.6.0 (2012), so `5...` keys mostly turn up in older wallets and paper wallets.
- **`K...` or `L...`** (52 characters) - compressed-public-key form. The standard format for modern WIF.
- **`6P...`** - a BIP 38 encrypted private key, a related format rather than WIF itself. The key is locked with a passphrase, and the wallet must decrypt it before use.

Where you still encounter WIF in 2026:

- **Sweeping a paper wallet.** Older [paper wallets](/glossary/paper-wallet) stored a single WIF; sweeping it with a modern wallet sends the coins to your HD-managed addresses in a new transaction.
- **One-off private key recovery.** A long-dormant address resurfaces, you have the raw private key somewhere, and you need to spend it once.
- **Educational tools.** Some teaching wallets and Bitcoin developer playgrounds use WIF because it's compact and human-readable.

WIF is a single-key format. There's no derivation, no tree, no children. If you import a WIF and then spend from the resulting address, modern wallets typically don't track future addresses derived from any related key - because there isn't a related key tree. For ongoing custody, modern practice is BIP 39 mnemonic seed phrases driving BIP 32 HD wallets. WIF lives on as the legacy single-key compatibility format.

A WIF also doesn't record which address type the key was used with. The same compressed key can control a `1...` address, a wrapped-SegWit `3...` address and a native SegWit `bc1q...` address, so you may need to tell the importing wallet which to look for. Bitcoin Core removed its old `importprivkey` command in version 30.0 (October 2025). From that version on, a WIF goes inside an [output descriptor](/glossary/output-descriptor) such as `wpkh(<WIF>)` or `combo(<WIF>)`, which is loaded with `importdescriptors`.

Security note: a WIF is exactly as sensitive as a raw private key. Anyone with the string can spend the coins. Treat it like cash, not like a public address.
