---
title: "P2SH-P2WSH (Nested SegWit Script)"
slug: p2sh-p2wsh-nested-segwit
draft: false
shortDefinition: "A P2WSH output wrapped in a P2SH outer layer so the address looks legacy (starts with '3') while the spend uses SegWit witness data."
keyTakeaways:
  - "Backwards-compatibility hack from the 2017-2018 SegWit rollout"
  - "Receive address looks like P2SH (starts with '3'), but the spend uses witness data"
  - "Larger and more expensive than native P2WSH; modern wallets default to bc1q or Taproot"
sources: []
relatedTerms:
  - p2sh-pay-script-hash
  - p2wsh-pay-witness-script-hash
  - segwit-segregated-witness-bip-141
  - native-segwit
  - bip-16-p2sh
  - taproot
  - p2wpkh-pay-witness-public-key-hash
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0141"
liveWidget: ~
---

P2SH-P2WSH - sometimes called "nested SegWit script" or "P2SH-wrapped P2WSH" - is a [P2WSH](/glossary/p2wsh-pay-witness-script-hash) output wrapped inside a [P2SH](/glossary/p2sh-pay-script-hash) outer layer. The address looks legacy (starts with `3`), but the spend follows [SegWit](/glossary/segwit-segregated-witness-bip-141) rules: the redeem script just commits to a P2WSH `scriptPubKey`, and the actual witness data sits outside the legacy transaction structure.

It existed for one reason: backwards compatibility during the SegWit rollout in 2017-2018.

When SegWit activated in August 2017, most wallets and exchanges did not yet support sending to native SegWit addresses (`bc1q...`). They did know how to send to `3...` addresses ([P2SH](/glossary/p2sh-pay-script-hash) had been around since 2012, via [BIP-16](/glossary/bip-16-p2sh)). To let users adopt SegWit before the rest of the ecosystem caught up, wallets generated P2SH-P2WSH addresses: legacy-looking on the outside, SegWit on the inside. Senders saw a familiar `3...` address; the receiver got SegWit's fee discount and malleability fix.

How the wrapping works:

- **Receive.** The address is the hash of a short redeem script: `OP_0 <32-byte-script-hash>`, which is itself a P2WSH `scriptPubKey`.
- **Spend.** The input reveals that redeem script (P2SH semantics), and the actual spending script plus signatures live in the witness stack (SegWit semantics).

In practice it is a P2WSH spend with one extra wrapping layer. You pay the bytes for the P2SH wrapper but get most of the SegWit benefits inside.

**Where you would see it:**

- Wallets generated between mid-2017 and ~2019 that wanted SegWit benefits without breaking sender compatibility
- Multisig setups from that era (Casa, Unchained, BitGo, and similar) often defaulted to P2SH-P2WSH
- Hardware wallets that supported SegWit before the ecosystem normalized on `bc1q`

**Modern picture:**

- New wallets default to [native SegWit](/glossary/native-segwit) (`bc1q...`) or [Taproot](/glossary/taproot) (`bc1p...`). No reason to nest anymore.
- Existing P2SH-P2WSH UTXOs are still spendable forever; nothing about the format expired.
- If you hold one, sweeping it to a native SegWit or Taproot address on a fee-light day costs you a transaction but pays back in lower future spend costs.

The same pattern exists for single-sig: P2SH-wrapped [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) gives a `3...` address that spends under SegWit. Same rationale, same modern story.
