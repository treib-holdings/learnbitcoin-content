---
title: "Wallet Import Format (WIF)"
slug: wallet-import-format-wif
draft: false
shortDefinition: "A user-friendly encoding of a private key (often starting with ‘5,’ ‘K,’ or ‘L’) commonly used in Bitcoin wallets."
keyTakeaways:
  - "Wraps a raw private key with a prefix and checksum in Base58Check"
  - "Simplifies manual entry but must be handled securely"
  - "Gradually superseded by HD seed phrases for typical backups"
sources: []
relatedTerms:
  - garlium
  - gui-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - wallet
  - watch-only-wallet
liveWidget: ~
---

WIF is a Base58Check-encoded string that includes version bytes and a checksum, making manual entry or scanning simpler. For instance, a compressed WIF might begin with ‘K’ or ‘L,’ indicating a compressed public key, while an uncompressed one often starts with ‘5.’ Despite being more readable than raw hex, it’s still sensitive data-anyone holding your WIF can spend your BTC. Modern wallets often skip WIF in favor of seed phrases but it remains relevant for importing single private keys or recovering older addresses.
