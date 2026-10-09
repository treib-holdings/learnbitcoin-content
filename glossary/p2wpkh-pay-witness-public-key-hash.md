---
title: "P2WPKH (Pay to Witness Public Key Hash)"
slug: p2wpkh-pay-witness-public-key-hash
draft: false
updated: "2026-10-09"
shortDefinition: "A native SegWit single-sig format (often bech32 bc1q...) that lowers fees and prevents signature malleability."
keyTakeaways:
  - "A witness version for single key/sig with better fee efficiency"
  - "Removes signature data from the main block, cutting malleability"
  - "Encouraged as a standard for modern wallets over legacy addresses"
sources:
  - { label: "Bitcoin Core 0.20.0 release notes (2020) - wallet uses bech32 addresses by default", url: "https://bitcoincore.org/en/releases/0.20.0/" }
  - { label: "mainnet-observer - Output Types by Count, daily share of P2WPKH, P2TR and other outputs", url: "https://mainnet.observer/charts/output-type-distribution-count/" }
  - { label: "BIP 341 - Taproot: 32-byte output key and 64-byte key-path signature", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP 141 - Segregated Witness: the P2WPKH witness is a signature and the public key", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
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

P2WPKH has been Bitcoin Core's default address type since version 0.20.0 (2020), and since 2022 it has been the most common output type on chain in most months. In September 2026 it made up about 53% of new outputs, against about 5% for [P2TR](/glossary/taproot) (Taproot, `bc1p...`). For single-key use, Taproot's smaller inputs and bigger outputs leave fees about even with P2WPKH. P2WPKH remains fully supported, cheaper than P2PKH/P2SH, and a perfectly good choice for everyday use.

Like P2PKH, P2WPKH provides defense-in-depth against [post-quantum threats](/glossary/post-quantum-bitcoin): the public key is hashed in the address and only revealed at spend time. Reusing the address loses that cover, because the first spend puts the raw public key in the witness and every later deposit to the address inherits that exposure.
