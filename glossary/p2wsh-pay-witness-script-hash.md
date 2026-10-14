---
title: "P2WSH (Pay to Witness Script Hash)"
slug: p2wsh-pay-witness-script-hash
draft: false
updated: "2026-10-15"
shortDefinition: "The SegWit version of P2SH for advanced scripts (e.g., multisig) with addresses starting bc1q."
keyTakeaways:
  - "Carries P2SH functionality into SegWit's witness structure"
  - "Reduces on-chain data usage for complex scripts/multisig"
  - "Preferred in modern wallets over older P2SH for advanced scripts"
sources:
  - { label: "BIP 141 - Segregated Witness: a P2WSH program is the 32-byte SHA256 of the witnessScript and a P2WPKH program is the 20-byte HASH160 of the public key; the P2WSH scriptPubKey is 34 bytes against 23 for P2SH, a size chosen to improve security against collision attacks because 2^80 work 'is not infeasible anymore'; the spending script moves to the witness", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 173 - Bech32 address format: version 0 witness addresses are always 42 or 62 characters (P2WPKH and P2WSH respectively)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BIP 48 - Multi-Script Hierarchy for Multi-Sig Wallets: script types are nested SegWit (p2sh-p2wsh) and native SegWit (p2wsh); the recommended default for wallets is p2wsh", url: "https://github.com/bitcoin/bips/blob/master/bip-0048.mediawiki" }
  - { label: "Lightning BOLT 3 - Bitcoin Transaction and Script Formats: most transaction outputs used are P2WSH, 'the Segwit version of P2SH'; the funding output is a P2WSH 2-of-2 multisig, and the to_local and HTLC outputs are P2WSH", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md" }
  - { label: "BIP 341 - Taproot: merges pay-to-pubkey and pay-to-scripthash so outputs spendable by a key or a script are indistinguishable; a key-path spend does not reveal whether a script path existed; Merkle branches reveal only the executed part of the script", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Core - BIPs implemented (doc/bips.md): MuSig2 key aggregation and derivation via musig() descriptors (BIP 327, 328, 390) supported as of v30.0, MuSig2 signing as of v31.0", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/doc/bips.md" }
  - { label: "Bitcoin Core - Release lifecycle table: version 30.0 released 2025-10-10, version 31.0 released 2026-04-19", url: "https://bitcoincore.org/en/lifecycle/" }
  - { label: "mainnet-observer - Input Types by Count (daily CSV read October 14, 2026): in September 2026 P2WSH was 2.1% of inputs, nested P2WSH 0.5%, Taproot key-path 7.0% and Taproot script-path 0.8%", url: "https://mainnet.observer/charts/inputs-types-by-count/" }
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

Addresses start with `bc1q` and are noticeably longer than [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) addresses (62 characters against 42), because P2WSH uses a 32-byte script hash (SHA-256) vs P2WPKH's 20-byte key hash (RIPEMD-160 of SHA-256). The longer hash provides stronger collision resistance, which matters for scripts that might be shared with potentially adversarial counterparties.

Where P2WSH is used in practice:

- **Multisig wallets.** Native SegWit 2-of-3, 3-of-5, etc. [BIP 48](https://github.com/bitcoin/bips/blob/master/bip-0048.mediawiki), the standard derivation scheme for multisig wallets, recommends P2WSH as the default.
- **Lightning channels.** [BOLT 3](https://github.com/lightning/bolts/blob/master/03-transactions.md) builds the funding output and most commitment-transaction outputs, HTLC outputs included, as P2WSH.
- **Anything with non-trivial spending logic.** Time locks, hash locks, vault constructions.

[P2TR](/glossary/taproot) (witness version 1) offers better properties for the same jobs: aggregated signatures via MuSig2, Merkle branches (MAST) so only the executed script path is revealed, a smaller on-chain footprint, and key-path spends that look like any single-sig spend. The tooling is still catching up, though. Bitcoin Core added MuSig2 descriptors in version 30.0 (October 2025) and MuSig2 signing in version 31.0 (April 2026), and BIP 48 still recommends P2WSH. On the chain in September 2026, P2WSH spends (2.1% of all inputs) still outnumbered Taproot script-path spends (0.8%); Taproot multisig done with MuSig2 hides inside key-path spends and cannot be counted, but Bitcoin Core's tooling for it only arrived in 2025 and 2026. P2WSH remains the workhorse for multisig, with Taproot multisig arriving rather than arrived.
