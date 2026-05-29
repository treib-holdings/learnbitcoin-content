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
  - p2sh
  - bip-91
  - bip-144-segwit-relay
  - bip-148-uasf
  - taproot
  - bip-342-tapscript
  - native-segwit
  - p2sh-p2wsh-nested-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://en.bitcoin.it/wiki/Segregated_Witness"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://bitcoinops.org/en/topics/segregated-witness/"
liveWidget: ~
legacyTitle: "BIP 141 (SegWit)"
---

SegWit (**Seg**regated **Wit**ness) is the soft fork that activated on Bitcoin in August 2017, defined in [BIP-141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). It restructured how Bitcoin [transactions](/glossary/transaction) store signature data, solving multiple problems at once.

The core change: signature data ("witness data") was moved out of the main transaction body into a separate structure that's still in the block but doesn't count against the original 1 MB block-size limit. Instead, blocks were redefined in terms of **weight units**, with a maximum of 4 million weight units per block. Witness data costs 1 weight unit per byte; non-witness data costs 4. This effectively roughly doubled capacity without a hard fork.

What SegWit fixed:

- **Transaction malleability.** Pre-SegWit, the [txid](/glossary/transaction) was computed over the full transaction including signatures, which were malleable. Third parties could change a tx's appearance (and its txid) without invalidating it. This broke unconfirmed-transaction chains and made layer-2 protocols nearly impossible to build safely. SegWit excludes witness data from the txid computation, so the txid is now stable from the moment a tx is signed.
- **Block capacity.** Effective block size went from ~1 MB to up to ~4 MB (~2 MB in typical usage with mixed transaction types).
- **Future upgrades.** SegWit introduced a versioning scheme for witness data that allowed [Taproot](/glossary/taproot) (witness version 1) to be added later as a clean soft fork.

The 2017 activation was politically explosive - it came out of the multi-year "scaling wars" between people who wanted bigger raw block size and people who wanted layer-2 scaling. The bigger-block side eventually forked off as Bitcoin Cash. The remaining Bitcoin community kept SegWit and the layered-scaling roadmap, and the [Lightning Network](/glossary/lightning-network) - which depends on stable txids - became viable shortly afterward.

Initial adoption was eased by P2SH-wrapped variants - [P2SH-P2WPKH and P2SH-P2WSH](/glossary/p2sh-p2wsh-nested-segwit) - that let receivers collect SegWit benefits behind a familiar `3...` address senders already knew how to handle. By 2019-2020 most wallets had migrated to [native SegWit](/glossary/native-segwit) (`bc1q...`), and the wrapped variants became legacy.

By 2026, the large majority of new Bitcoin outputs are SegWit or Taproot. Pre-SegWit legacy outputs still exist but are gradually being spent.
