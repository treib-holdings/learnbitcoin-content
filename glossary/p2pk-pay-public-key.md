---
title: "P2PK (Pay to Public Key)"
slug: p2pk-pay-public-key
draft: false
shortDefinition: "An older script type locking coins directly to a public key, mostly replaced by P2PKH."
keyTakeaways:
  - "Locks funds to a raw public key, not a key hash"
  - "Visible in Satoshi's early mined blocks but now uncommon"
  - "Less private and flexible than current script forms"
sources: []
relatedTerms:
  - address
  - b32-address
  - p2sh-pay-script-hash
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - utxo-unspent-transaction-output
liveWidget: ~
---

In Bitcoin's early days, some transactions used scripts requiring a direct signature from a specified public key, known as Pay-to-PubKey. While functional, it forced the full public key to appear in the blockchain upon spending, which impacted privacy and reusability. Over time, Pay-to-PubKey-Hash (P2PKH) became standard, hashing the key in the script to reduce on-chain data and add a layer of obfuscation. P2PK can still be spent, but modern wallets rarely generate new P2PK outputs, instead opting for P2PKH, SegWit, or Taproot addresses.
