---
title: "P2PKH (Pay to Public Key Hash)"
slug: p2pkh-pay-public-key-hash
draft: false
shortDefinition: "The dominant legacy script format (addresses starting with ‘1’) that locks BTC to a hashed public key."
keyTakeaways:
  - "Most recognizable format for legacy BTC addresses"
  - "Requires the spender’s public key and signature to unlock"
  - "Less fee-efficient than SegWit or Taproot scripts"
sources: []
relatedTerms:
  - address
  - b32-address
  - p2sh-pay-script-hash
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pk-pay-public-key
  - utxo-unspent-transaction-output
liveWidget: ~
---

P2PKH is the script type you see in classic Bitcoin addresses, typically starting with ‘1.’ It’s a straightforward method: the script expects a valid signature that matches the hashed public key. This approach overshadowed P2PK in early Bitcoin, as it only reveals the public key upon spending (not when receiving). Though P2PKH remains widespread, it’s slowly being superseded by SegWit variants (P2WPKH) that offer lower fees and better malleability fixes. Still, P2PKH addresses are fully supported and extremely common in existing wallets and transactions.
