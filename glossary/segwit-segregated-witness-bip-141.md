---
title: "SegWit (Segregated Witness, BIP 141)"
slug: segwit-segregated-witness-bip-141
draft: false
updated: "2026-10-13"
shortDefinition: "The main BIP for Segregated Witness, which separates witness data, fixes malleability, and effectively boosts block capacity."
keyTakeaways:
  - "Moves witness data out of the transaction id's hash; it stays in the block"
  - "Resolves malleability, boosts capacity"
  - "Enables layer-2 solutions like Lightning"
sources:
  - { label: "BIP 141 - Segregated Witness (Consensus layer): block weight is base size * 3 + total size, capped at 4,000,000, where base size is what a non-upgraded node sees; txid stays the double SHA256 of the serialization without witness data, so nonintentional malleability becomes impossible once all inputs are signed; witness versions 1 to 16 are reserved for future extensions; fixing malleability enables trust-free chains of unconfirmed transactions", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - Segregated Witness Benefits (January 26, 2016): old nodes only download the witness-stripped block and enforce the 1 MB limit on that; segwit raises the limit to nearly 4 MB, with an effective limit closer to 1.6 to 2 MB", url: "https://bitcoincore.org/en/2016/01/26/segwit-benefits/" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
  - { label: "Bitcoin Cash UAHF technical specification: activation time 1501590000 (12:20 UTC, August 1, 2017); the fork block must be larger than 1,000,000 bytes", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "Bitcoin Core 0.20.0 release notes (June 3, 2020): the wallet now uses bech32 addresses by default over RPC and creates native segwit change outputs", url: "https://bitcoincore.org/en/releases/0.20.0/" }
  - { label: "mainnet.observer - SegWit spending payments chart (0xB10C, the open-source successor to transactionfee.info): 96.5% of payments spent SegWit outputs over the 30 days to October 13, 2026, computed from the site's date.csv, payments_sum.csv and payments_segwit_spending_tx_sum.csv", url: "https://mainnet.observer/charts/payments-spending-segwit/" }
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

SegWit (**Seg**regated **Wit**ness) is the soft fork that activated on Bitcoin on August 24, 2017, at block 481,824, defined in [BIP-141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). It restructured how Bitcoin [transactions](/glossary/transaction) store signature data, solving multiple problems at once.

The core change: signature data ("witness data") was moved out of the main transaction body into a separate structure that's still in the block but that old nodes never download, so it doesn't count against the 1 MB block-size limit they still enforce. For upgraded nodes, blocks were redefined in terms of **weight units**, with a maximum of 4 million weight units per block. Witness data costs 1 weight unit per byte; non-witness data costs 4. This roughly doubled capacity - to about 1.6 to 2 MB of typical transactions - without a hard fork.

What SegWit fixed:

- **Transaction malleability.** Pre-SegWit, the [txid](/glossary/transaction) was computed over the full transaction including signatures, which were malleable. Third parties could change a tx's appearance (and its txid) without invalidating it. This broke unconfirmed-transaction chains and made layer-2 protocols nearly impossible to build safely. SegWit excludes witness data from the txid computation, so once every input is signed, nobody else can change the txid.
- **Block capacity.** The limit went from 1 MB to nearly 4 MB in the extreme case, which works out to about 1.6 to 2 MB for a typical mix of transactions.
- **Future upgrades.** SegWit put a version byte in front of every witness program and reserved versions 1 to 16 for future script systems, which is how [Taproot](/glossary/taproot) was added later as a clean soft fork.

The 2017 activation was politically explosive - it came out of the multi-year [block size war](/glossary/block-size-war) between people who wanted bigger raw block size and people who wanted layer-2 scaling. The bigger-block side forked off as [Bitcoin Cash](/glossary/bitcoin-cash) on August 1, 2017, three weeks before SegWit went live. The remaining Bitcoin community kept SegWit and the layered-scaling roadmap, and the [Lightning Network](/glossary/lightning-network) - which depends on stable txids - could now be built on top.

Initial adoption was eased by P2SH-wrapped variants - [P2SH-P2WPKH and P2SH-P2WSH](/glossary/p2sh-p2wsh-nested-segwit) - that let receivers collect SegWit benefits behind a familiar `3...` address senders already knew how to handle. [Native SegWit](/glossary/native-segwit) (`bc1q...`) came next: Bitcoin Core made bech32 its wallet default in 0.20.0 (June 2020), and the wrapped variants became a compatibility fallback.

By October 2026, more than 95% of payments spend SegWit outputs. Pre-SegWit legacy outputs still exist but are a shrinking share.
