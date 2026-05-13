---
title: "P2WPKH (Pay to Witness Public Key Hash)"
slug: p2wpkh-pay-witness-public-key-hash
draft: false
shortDefinition: "A native SegWit single-sig format (often bech32 bc1q...) that lowers fees and prevents signature malleability."
keyTakeaways:
  - "A witness version for single key/sig with better fee efficiency"
  - "Removes signature data from the main block, cutting malleability"
  - "Encouraged as a standard for modern wallets over legacy addresses"
sources: []
relatedTerms:
  - address
  - bip-85
  - p2sh-pay-script-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - utxo-unspent-transaction-output
liveWidget: ~
---

P2WPKH encapsulates single-sig transactions within Bitcoin’s Segregated Witness structure, moving signature data outside the base transaction data. This reduces the effective size for fee calculation, providing savings for users. Addresses start with ‘bc1q’ on mainnet. It also fixes malleability issues by segregating the witness (signature) data from the transaction ID calculation. While functionally similar to P2PKH, it is more cost-efficient and more future-proof. Many wallets now default to P2WPKH addresses, though some remain on P2PKH due to compatibility or user preference issues.
