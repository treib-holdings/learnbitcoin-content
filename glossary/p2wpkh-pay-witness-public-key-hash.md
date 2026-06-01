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
  - p2sh
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0141"
liveWidget: ~
---

P2WPKH - "Pay to Witness Public Key Hash" - is the native [SegWit](/glossary/segwit-segregated-witness-bip-141) version of [P2PKH](/glossary/p2pkh-pay-public-key-hash). It's the single-signature address format that became standard after SegWit activated in 2017. Addresses start with `bc1q` (e.g. `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`).

Functionally identical to P2PKH: lock to a 20-byte [public-key](/glossary/public-key) hash, unlock with a public key + signature. What changes is *where the signature lives*.

In SegWit, the unlocking data (the "witness") is separated from the main transaction body. This has two practical consequences:

- **Smaller effective fee.** Witness data counts at 1/4 the weight of non-witness data. A typical P2WPKH spend costs ~40% less in fees than the equivalent P2PKH spend.
- **No transaction malleability.** The [txid](/glossary/transaction) is computed over the non-witness part only. The signature can't be tweaked after broadcast to change the txid. This is what made [Lightning](/glossary/lightning-network) practically deployable.

P2WPKH was the dominant new-receive format from 2018 through ~2023. As of 2026, many wallets have shifted defaults again toward [P2TR](/glossary/taproot) (Taproot, `bc1p...`) for further fee savings and privacy. P2WPKH remains fully supported, cheaper than P2PKH/P2SH, and a perfectly good choice for everyday use.

Like P2PKH, P2WPKH provides defense-in-depth against [post-quantum threats](/glossary/post-quantum-bitcoin): the public key is hashed in the address and only revealed at spend time. Single-use P2WPKH addresses are quantum-safe today; reused ones are not, because the spending witness contains the raw public key and every subsequent deposit inherits that exposure.
