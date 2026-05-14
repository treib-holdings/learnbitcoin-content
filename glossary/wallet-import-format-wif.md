---
title: "Wallet Import Format (WIF)"
slug: wallet-import-format-wif
draft: false
shortDefinition: "A user-friendly encoding of a private key (often starting with '5,' 'K,' or 'L') commonly used in Bitcoin wallets."
keyTakeaways:
  - "Wraps a raw private key with a prefix and checksum in Base58Check"
  - "Simplifies manual entry but must be handled securely"
  - "Gradually superseded by HD seed phrases for typical backups"
sources: []
relatedTerms:
  - gui-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - wallet
  - watch-only-wallet
liveWidget: ~
---

WIF (Wallet Import Format) is a Base58Check encoding of a single Bitcoin private key. It wraps the raw 32-byte private key with a network prefix byte, an optional compression flag, and a 4-byte checksum so a typo at the wallet import screen fails fast instead of silently loading a different key.

What WIF strings look like:

- **`5...`** - uncompressed-public-key form. Legacy; only present in pre-2012-ish wallets and a few collector wallets.
- **`K...` or `L...`** - compressed-public-key form. The standard format for modern WIF.
- **`p2...`** (or other prefixes) - BIP 38 encrypted private keys: a WIF protected with a passphrase. The user must decrypt before use.

Where you still encounter WIF in 2026:

- **Sweeping a paper wallet.** Older paper wallets stored a single WIF; importing it into a modern wallet moves the coins to your HD-managed addresses.
- **One-off private key recovery.** A long-dormant address resurfaces, you have the raw private key somewhere, and you need to spend it once.
- **Educational tools.** Some teaching wallets and Bitcoin developer playgrounds use WIF because it's compact and human-readable.

WIF is a single-key format. There's no derivation, no tree, no children. If you import a WIF and then spend from the resulting address, modern wallets typically don't track future addresses derived from any related key - because there isn't a related key tree. For ongoing custody, modern practice is BIP 39 mnemonic seed phrases driving BIP 32 HD wallets. WIF lives on as the legacy single-key compatibility format.

Security note: a WIF is exactly as sensitive as a raw private key. Anyone with the string can spend the coins. Treat it like cash, not like a public address.
