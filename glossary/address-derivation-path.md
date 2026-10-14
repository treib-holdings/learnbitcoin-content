---
title: "Address Derivation Path"
slug: address-derivation-path
draft: false
updated: "2026-10-13"
shortDefinition: "A structured route in hierarchical deterministic (HD) wallets (e.g., m/44'/0'/0'/0/0) to generate a sequence of keys and addresses."
keyTakeaways:
  - "Structures how HD wallets generate multiple addresses"
  - "Specified in BIPs like BIP-32 and BIP-44"
  - "Ensures wallet interoperability and organization"
sources:
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets: m / purpose' / coin_type' / account' / change / address_index, apostrophe for hardened derivation at the first three levels; change 0 is the external chain and 1 the internal chain for change; accounts numbered from 0; coin type 0 is Bitcoin, 1 Bitcoin Testnet (2014)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: knowledge of a parent extended public key plus any non-hardened private key descending from it is equivalent to knowing the parent extended private key (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP-86 - Key Derivation for Single Key P2TR Outputs: purpose 86', the same account structure as BIP-44, BIP-49 (P2WPKH nested in P2SH) and BIP-84 (P2WPKH), with a different purpose value per script type (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki" }
  - { label: "BIP-48 - Multi-Script Hierarchy for Multi-Sig Wallets: m / purpose' / coin_type' / account' / script_type' / change / address_index with purpose 48' (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0048.mediawiki" }
  - { label: "Bitcoin Core - src/wallet/walletutil.cpp, GenerateWalletDescriptor: legacy descriptors on 44h, P2SH-SegWit on 49h, bech32 on 84h, bech32m on 86h", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/walletutil.cpp" }
  - { label: "BIP-380 - Output Script Descriptors: the hardened indicator h may be replaced with an apostrophe; not all wallets support or use the standard derivation paths of BIPs 44, 49 and 84 (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki" }
relatedTerms:
  - address
  - address-indexing
  - bip-32
  - bip-39
  - bip-44
  - chaincode
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-entropy-mixer
  - seed-phrase
  - seed-tool
liveWidget: ~
---

A derivation path is the slash-separated route into a [BIP 32](/glossary/bip-32) HD wallet tree, telling the wallet exactly which key to derive from the master seed. The format, as laid out in [BIP 44](/glossary/bip-44), is:

```
m / purpose' / coin_type' / account' / change / address_index
```

The apostrophe (often written `h` instead) marks a hardened derivation level. The first three levels are hardened so that an extended public key plus one leaked child key cannot be turned into the keys of the accounts beside it.

The purpose-level conventions in practice:

- **BIP 44** (`m/44h/0h/0h/0/0`) - the original multi-account convention. Legacy P2PKH `1...` addresses.
- **BIP 49** (`m/49h/0h/0h/0/0`) - P2SH-wrapped SegWit (`3...` addresses).
- **BIP 84** (`m/84h/0h/0h/0/0`) - native SegWit (`bc1q...` addresses). Bitcoin Core's descriptor wallets derive their bc1q addresses here.
- **BIP 86** (`m/86h/0h/0h/0/0`) - Taproot (`bc1p...` addresses).
- **BIP 48** (`m/48h/0h/0h/<script>h/0/0`) - the multisig convention, with an extra level for the script type.

Reading the parts:

- `purpose` - which spec governs the address format below this level.
- `coin_type` - the registered coin type. Bitcoin is 0; [testnet](/glossary/testnet) is 1; other chains have their own.
- `account` - independent account index. Account 0 is the default; accounts 1, 2, and so on keep separate pots of coins under one seed.
- `change` - 0 for receiving addresses (BIP 44 calls this the external chain), 1 for [change](/glossary/change-output) addresses (the internal chain).
- `address_index` - the sequential counter for individual addresses.

The same seed plus the same derivation path always produces the same private key, on any wallet that follows the convention. That's why a [BIP 39](/glossary/bip-39) seed phrase is portable: import it into any wallet that uses BIP 84 (or 86, or 44, or whatever convention generated the addresses) and you get back the same keys.

Mismatched derivation paths are the canonical "I restored my wallet and don't see my balance" failure: the seed is right but the wallet is looking at a different branch of the tree. Not every wallet uses the standard paths, as BIP 380 notes, so a restore sometimes needs the path entered by hand.
