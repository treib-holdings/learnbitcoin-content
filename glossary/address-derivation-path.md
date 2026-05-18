---
title: "Address Derivation Path"
slug: address-derivation-path
draft: false
shortDefinition: "A structured route in hierarchical deterministic (HD) wallets (e.g., m/44'/0'/0'/0/0) to generate a sequence of keys and addresses."
keyTakeaways:
  - "Structures how HD wallets generate multiple addresses"
  - "Specified in BIPs like BIP-32 and BIP-44"
  - "Ensures wallet interoperability and organization"
sources: []
relatedTerms:
  - address
  - address-indexing
  - chaincode
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-entropy-mixer
  - seed-phrase
  - seed-tool
liveWidget: ~
---

A derivation path is the slash-separated address into a [BIP 32](/glossary/bip-32) HD wallet tree, telling the wallet exactly which key to derive from the master seed. The format is:

```
m / purpose' / coin_type' / account' / change / address_index
```

The apostrophe (often written `h` instead) marks a hardened derivation level. The first three levels are conventionally hardened so that leaking one branch's keys doesn't expose siblings.

The purpose-level conventions in practice:

- **BIP 44** (`m/44h/0h/0h/0/0`) - the original multi-account convention. Legacy P2PKH `1...` addresses.
- **BIP 49** (`m/49h/0h/0h/0/0`) - P2SH-wrapped SegWit (`3...` addresses).
- **BIP 84** (`m/84h/0h/0h/0/0`) - native SegWit (`bc1q...` addresses). The 2026 default for non-Taproot wallets.
- **BIP 86** (`m/86h/0h/0h/0/0`) - Taproot (`bc1p...` addresses).
- **BIP 48** (`m/48h/0h/0h/<script>h/0/0`) - the multisig convention.

Reading the parts:

- `purpose` - which spec governs the address format below this level.
- `coin_type` - registered chain ID. Bitcoin is 0; testnet is 1; other chains have their own.
- `account` - independent account index. Account 0 is conventional default; users with multiple wallets use 1, 2, etc.
- `change` - 0 for receive addresses, 1 for change addresses. (Some wallets reserve 2 for "internal change.")
- `address_index` - the sequential counter for individual addresses.

The same seed plus the same derivation path always produces the same private key, on any wallet that follows the convention. That's why a BIP 39 seed phrase is portable: import it into any wallet that uses BIP 84 (or 86, or 44, or whatever convention generated the addresses) and you get back the same keys.

Mismatched derivation paths are the canonical "I restored my wallet and don't see my balance" failure: the seed is right but the wallet is looking at a different branch of the tree. Modern wallets usually try the common paths automatically; older or specialty wallets sometimes need the path entered manually.
