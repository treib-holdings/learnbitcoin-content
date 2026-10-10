---
title: "Low-S Signatures"
slug: low-s-signatures
linkText:
  - "Low-S Signatures"
  - "low-S"
draft: false
updated: "2026-10-10"
shortDefinition: "Every ECDSA signature has a twin that is also valid, with its S value flipped. Since version 0.11.1 (2015), Bitcoin Core relays only the low-S form, but that is node policy, not a consensus rule."
keyTakeaways:
  - "Leaves one acceptable form of each ECDSA signature instead of two"
  - "Curtails malleability by standardizing the S value"
  - "Bitcoin Core relay policy since version 0.11.1 (October 2015); never made a consensus rule"
sources:
  - { label: "BIP 62 - known sources of malleability, including inherent ECDSA malleability (negating S) and new signatures by anyone holding the keys; proposed low-S as a consensus rule; status Closed", url: "https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki" }
  - { label: "BIP 146 - proposed LOW_S as a consensus rule for legacy and SegWit scripts, with S at most half the curve order; notes the rule has been relay policy in Bitcoin Core since v0.11.1 and that SegWit txids are not third-party malleable, though flipping S still changes the wtxid; status Closed", url: "https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki" }
  - { label: "Bitcoin Core 0.11.1 release notes (October 15, 2015) - nodes require low-S signatures when relaying or mining; consensus behavior is unchanged; miners can still cooperate to break transactions", url: "https://bitcoincore.org/en/releases/0.11.1/" }
  - { label: "Bitcoin Core 31.1 source - src/policy/policy.h: SCRIPT_VERIFY_LOW_S is among the standard (relay) flags, not the mandatory ones (released July 8, 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/policy/policy.h" }
  - { label: "Bitcoin Core 31.1 source - src/validation.cpp: GetBlockScriptFlags enforces P2SH, WITNESS, TAPROOT, DERSIG, CLTV, CSV and NULLDUMMY in blocks, with no LOW_S flag (released July 8, 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/validation.cpp" }
  - { label: "Bitcoin Core - 31.1 release page (July 8, 2026)", url: "https://bitcoincore.org/en/releases/31.1/" }
  - { label: "BIP 141 - Segregated Witness: signature data is no longer part of the txid, which makes unintended malleability impossible; it adds no low-S rule", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 340 - Schnorr signatures: (r, n-s) is also a valid ECDSA signature, and Bitcoin restricts ECDSA to one of the two forms through a policy rule on the network", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "BIP 66 - strict DER signatures, a consensus rule", url: "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki" }
relatedTerms:
  - bip-66
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - low-r-signatures
  - schnorr-signature
liveWidget: ~
---

ECDSA signatures have an inherent malleability: for any valid (r, s) pair, (r, n-s) where n is the secp256k1 curve order is also a valid signature on the same message. An attacker could grab your unconfirmed transaction, flip the S, and rebroadcast a signature with identical meaning but a different txid.

The low-S rule pins down one form. Require s to be at most n/2, and a signature with S in the upper half is refused. Each signature then has one acceptable form instead of two. Whoever holds the private key can still sign the same transaction again and get a different, equally valid signature, but nobody else can.

History: BIP 62 (2014) proposed low-S as one of several consensus rules against malleability, and it was never deployed. Bitcoin Core began enforcing low-S as relay policy in version 0.11.1, released in October 2015. Nodes running it won't relay or mine a transaction with a high-S signature, but a block that contains one is still valid. BIP 146 (2016) proposed making the rule part of consensus for both legacy and [SegWit](/glossary/segwit-segregated-witness-bip-141) scripts, and it was closed without being deployed. BIP 141, the SegWit proposal itself, has no low-S rule. As of Bitcoin Core 31.1 (July 2026), low-S is still a standardness rule for every ECDSA input, legacy or SegWit, and not a consensus rule.

What actually fixed third-party malleability was SegWit. When a transaction spends SegWit outputs, its signatures sit in the witness, which the txid doesn't cover, so flipping S there leaves the txid alone (it does change the separate witness ID, the wtxid). For transactions spending older non-SegWit outputs, low-S together with BIP 66's strict DER encoding means the network won't pass along a tweaked copy. A miner could still put a high-S copy in a block, which is why the 0.11.1 release notes say the rule doesn't replace a real fix.
