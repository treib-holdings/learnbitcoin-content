---
title: "BIP 16 (P2SH)"
slug: bip-16-p2sh
draft: false
shortDefinition: "Pay-to-Script-Hash (P2SH) lets users send Bitcoin to a script's hash, revealing the script only during spending."
keyTakeaways:
  - "Improves privacy by hiding full script until spend time"
  - "Enables easier use of complex scripts (e.g., multisig)"
  - "Reduced data overhead for senders"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - segwit-segregated-witness-bip-141
  - bip-173-bech32
  - bip-341-taproot
  - bip-342-tapscript
  - bitcoin-script
  - p2sh-pay-script-hash
  - script
liveWidget: ~
---

[BIP-16](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki) introduced **Pay-to-Script-Hash (P2SH)**, Bitcoin's first major address-format upgrade after P2PKH. Activated as a [soft fork](/glossary/soft-fork) in April 2012, it made complex Bitcoin scripts practical to send to.

The problem P2SH solved: before BIP-16, if you wanted to receive funds at a multisig or other complex script, the *sender* needed to know the full script and include it in the output - which meant longer transactions, no privacy, and awkward user experience. P2SH inverted this: receivers publish only a 20-byte hash of the script (encoded as a [P2SH address](/glossary/p2sh-pay-script-hash) starting with `3`), and the actual script is revealed only when the recipient spends.

What this enabled:

- **Multi-signature wallets as a usable primitive.** Before P2SH, multisig was theoretically supported but practically unusable. After P2SH, users could share simple `3...` addresses and receive directly to multisig setups.
- **Future SegWit wrapping.** When [SegWit](/glossary/segwit-segregated-witness-bip-141) launched in 2017, it could be wrapped inside P2SH ("P2SH-P2WPKH") for compatibility with wallets that didn't yet understand native SegWit. This was the bridge that let SegWit deploy gradually.
- **A pattern for future format upgrades.** The "hash-then-reveal" model from P2SH directly influenced both SegWit's native script-hash format ([P2WSH](/glossary/p2wsh-pay-witness-script-hash)) and Taproot.

BIP-16 was one of the earliest examples of how a small, carefully-designed soft fork can unlock entirely new categories of use without changing the base protocol's nature. See [P2SH](/glossary/p2sh-pay-script-hash) for the address format details.
