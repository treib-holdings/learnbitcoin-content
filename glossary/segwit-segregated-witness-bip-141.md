---
title: "SegWit (Segregated Witness, BIP 141)"
slug: segwit-segregated-witness-bip-141
draft: false
shortDefinition: "The main BIP for Segregated Witness, which separates witness data, fixes malleability, and effectively boosts block capacity."
keyTakeaways:
  - "Separates witness data from the main block"
  - "Resolves malleability, boosts capacity"
  - "Enables layer-2 solutions like Lightning"
sources: []
relatedTerms:
  - bech32m
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-16-p2sh
  - bip-91
  - bip-144-segwit-relay
  - bip-148-uasf
  - bip-341-taproot
  - bip-342-tapscript
  - native-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - taproot
liveWidget: ~
legacyTitle: "BIP 141 (SegWit)"
---

BIP 141, found in [BIP-141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki), introduced Segregated Witness (SegWit)-one of Bitcoin’s most significant upgrades. By moving signature (witness) data out of the base transaction block and into a separate structure, SegWit tackled transaction malleability and increased effective block space without a hard fork.
SegWit paves the way for advanced scaling solutions like the Lightning Network and further developments (Schnorr, Taproot). Although initially controversial during the 2017 scaling debates, its activation signaled a move toward a multi-layered scaling approach rather than raw on-chain expansion. Today, most modern wallets and exchanges support SegWit, benefiting from lower fees and malleability fixes.
