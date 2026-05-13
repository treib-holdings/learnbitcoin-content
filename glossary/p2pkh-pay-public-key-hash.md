---
title: "P2PKH (Pay to Public Key Hash)"
slug: p2pkh-pay-public-key-hash
draft: false
shortDefinition: "The dominant legacy script format (addresses starting with '1') that locks BTC to a hashed public key."
keyTakeaways:
  - "Most recognizable format for legacy BTC addresses"
  - "Requires the spender's public key and signature to unlock"
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

P2PKH - "Pay to Public Key Hash" - is the original mainstream Bitcoin script format. Its [addresses](/glossary/address) start with `1` (e.g. `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`).

The locking script is straightforward: "to spend this UTXO, provide a [public key](/glossary/public-key) that hashes to a specific 20-byte value, and a valid signature over the spending transaction." The recipient publishes only the hash (the address); the actual public key isn't revealed until the funds are spent.

Two reasons P2PKH replaced the older [P2PK](/glossary/p2pk-pay-public-key) format around 2010:

- **Shorter addresses.** A hash is 20 bytes vs a public key's 33 bytes. Easier to copy, share, and read aloud.
- **Defense-in-depth.** If the underlying elliptic-curve cryptography were ever broken, funds at unspent P2PKH addresses would still be protected by the hash. Public keys only get exposed when the user spends.

P2PKH has been Bitcoin's workhorse for over a decade. It's still fully supported and fully secure, but it's more expensive in fees than newer formats. Modern wallets default to [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) (SegWit, `bc1q...`) or [P2TR](/glossary/taproot) (Taproot, `bc1p...`) for new receives. Existing P2PKH UTXOs are commonly spent into newer-format change outputs, gradually migrating the supply.

See [Address](/glossary/address) for the full lineup of address formats coexisting on Bitcoin today.
