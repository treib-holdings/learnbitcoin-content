---
title: "P2WSH (Pay to Witness Script Hash)"
slug: p2wsh-pay-witness-script-hash
draft: false
shortDefinition: "The SegWit version of P2SH for advanced scripts (e.g., multisig) with addresses starting bc1q."
keyTakeaways:
  - "Carries P2SH functionality into SegWit’s witness structure"
  - "Reduces on-chain data usage for complex scripts/multisig"
  - "Preferred in modern wallets over older P2SH for advanced scripts"
sources: []
relatedTerms:
  - address
  - p2sh-pay-script-hash
  - p2wpkh-pay-witness-public-key-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - utxo-unspent-transaction-output
liveWidget: ~
---

P2WSH parallels P2SH’s concept of sending to a script hash, but in the SegWit realm. The actual script (like multisig or complex logic) resides in the witness portion, lowering fees and preventing malleability. P2WSH addresses typically begin with ‘bc1q’ followed by a longer string. Only when spending does the script get revealed, proving it matches the hashed witness script. Commonly used for multi-signature setups, P2WSH also paves the way for further improvements like Taproot. For users, it’s recommended over legacy P2SH as it’s more efficient and robust.
