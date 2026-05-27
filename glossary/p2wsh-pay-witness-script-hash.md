---
title: "P2WSH (Pay to Witness Script Hash)"
slug: p2wsh-pay-witness-script-hash
draft: false
shortDefinition: "The SegWit version of P2SH for advanced scripts (e.g., multisig) with addresses starting bc1q."
keyTakeaways:
  - "Carries P2SH functionality into SegWit's witness structure"
  - "Reduces on-chain data usage for complex scripts/multisig"
  - "Preferred in modern wallets over older P2SH for advanced scripts"
sources: []
relatedTerms:
  - address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0141"
liveWidget: ~
---

P2WSH - "Pay to Witness Script Hash" - is the native [SegWit](/glossary/segwit-segregated-witness-bip-141) version of [P2SH](/glossary/p2sh). It carries the same "send to a script's hash" model into SegWit's witness structure, with all the SegWit benefits: smaller effective fees, no malleability.

Addresses start with `bc1q` and are noticeably longer than [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) addresses, because P2WSH uses a 32-byte script hash (SHA-256) vs P2WPKH's 20-byte key hash (RIPEMD-160 of SHA-256). The longer hash provides stronger collision resistance, which matters for scripts that might be shared with potentially adversarial counterparties.

Where P2WSH is used in practice:

- **Multisig wallets.** Native SegWit 2-of-3, 3-of-5, etc.
- **Complex HTLCs.** Some [Lightning](/glossary/lightning-network) channel constructions use P2WSH outputs.
- **Anything with non-trivial spending logic.** Time locks, hash locks, vault constructions.

For Taproot-aware setups, [P2TR](/glossary/taproot) (witness version 1) generally replaces P2WSH with better properties: aggregated signatures via MuSig2, MAST for hidden script branches, smaller on-chain footprint, single-sig-indistinguishable spends. New multisig wallets typically default to Taproot in 2026. P2WSH remains in heavy use for older multisig setups and ecosystems that haven't migrated yet.
