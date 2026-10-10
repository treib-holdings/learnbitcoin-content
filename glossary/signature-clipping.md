---
title: "Signature Clipping"
slug: signature-clipping
draft: false
updated: "2026-10-10"
shortDefinition: "A loose name for signature malleability: turning a valid signature into a different valid one, which changes a transaction's ID. Strict DER, low-S relay policy and SegWit largely closed it off in Bitcoin."
keyTakeaways:
  - "Refers to maliciously tweaking valid signatures to alter TX IDs"
  - "Strict DER rules (BIP 66) and SegWit corrected most malleability flaws"
  - "Illustrates early vulnerabilities in ECDSA usage"
sources:
  - { label: "BIP 62 - known sources of malleability: OpenSSL accepting non-DER signature encodings, and inherent ECDSA malleability from negating S; status Closed", url: "https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki" }
  - { label: "BIP 66 - strict DER signatures: OpenSSL accepted deviations from DER, so BIP 66 restricts valid signatures to exactly what DER mandates (a consensus soft fork); strict DER had been relay policy since v0.8.0", url: "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki" }
  - { label: "Bitcoin Core 31.1 source - src/kernel/chainparams.cpp: BIP 66 enforced from block 363,725 on mainnet (released July 8, 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/kernel/chainparams.cpp" }
  - { label: "mempool.space - block 363,725, mined July 4, 2015", url: "https://mempool.space/block/00000000000000000379eaa19dce8c9b722d46ae6a57c2f1a988119488b50931" }
  - { label: "BIP 146 - proposed LOW_S as a consensus rule; LOW_S has been relay policy in Bitcoin Core since v0.11.1; SegWit txids are not third-party malleable; status Closed", url: "https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki" }
  - { label: "Bitcoin Core 0.11.1 release notes (October 15, 2015) - low-S required when relaying or mining; consensus behavior unchanged; miners can still cooperate to break transactions", url: "https://bitcoincore.org/en/releases/0.11.1/" }
  - { label: "Bitcoin Core 31.1 source - src/policy/policy.h: SCRIPT_VERIFY_LOW_S is a standard (relay) flag, not a mandatory one (released July 8, 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/policy/policy.h" }
  - { label: "BIP 141 - Segregated Witness: signature data is no longer part of the txid; it adds no low-S rule", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 341 - Taproot: spending rules for SegWit version 1 outputs, whose signatures also sit in the witness", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
relatedTerms:
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - schnorr-signature
  - signature-aggregation
  - taproot
liveWidget: ~
---

"Signature clipping" isn't a widely-used term of art in Bitcoin. It's a catchall for ECDSA signature malleability: ways to take a valid signature and produce a different valid signature for the same transaction, which changes the txid without changing the meaning.

There were two practical vectors:

- Loose encoding. ECDSA signatures are wrapped in DER, which allows exactly one encoding of each signature. Bitcoin's original code checked signatures with OpenSSL, though, and OpenSSL also accepted encodings that strayed from DER, so the same signature could be written several ways. [BIP 66](/glossary/bip-66), enforced from July 2015, made strict DER a consensus rule, so a block containing any other encoding is invalid.
- Inherent S-malleability. For any valid (r, s) ECDSA signature, (r, n-s) is also valid for the same message. The [low-S rule](/glossary/low-s-signatures) requires s to be at most half the curve order, picking one form. BIP 62 proposed it as a consensus rule and was never deployed. Bitcoin Core has enforced it only as relay policy since version 0.11.1 (October 2015), and BIP 146, a later proposal to make it consensus, was closed. SegWit (BIP 141) has no low-S rule.

SegWit (BIP 141) closed the issue at the protocol level by moving signature data out of the txid calculation entirely. For SegWit and Taproot inputs, signature tweaks don't change the txid no matter what an attacker does.

For transactions that spend only SegWit or Taproot outputs, third-party malleability is solved. Transactions that spend older outputs, such as legacy P2PKH, can still be altered in principle. Strict DER is a consensus rule, while low-S is only relay policy. The network won't pass along a tweaked copy, but a miner could still put a high-S copy in a block.
