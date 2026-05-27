---
title: "Native SegWit"
slug: native-segwit
draft: false
shortDefinition: "Bech32 transaction formats (bc1q...) introduced by SegWit, offering lower fees and reduced transaction malleability."
keyTakeaways:
  - "Saves fees due to SegWit's discount on witness data"
  - "Simplifies address parsing, with better error detection"
  - "Becoming the preferred standard for modern wallets"
sources: []
relatedTerms: []
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki"
liveWidget: ~
---

"Native SegWit" refers to SegWit usage with bech32 addresses (`bc1q...` on mainnet) rather than the older P2SH-wrapped SegWit pattern (`3...` addresses). Witness data lives in the segregated witness portion of the transaction either way; the on-chain encoding is what differs.

Why "native" vs "wrapped":

- **Wrapped SegWit** (P2SH-P2WPKH, P2SH-P2WSH). A SegWit output dressed up as a P2SH output so wallets that didn't yet understand bech32 could still send to it. Compatible with everything but pays for the wrapper overhead.
- **Native SegWit** (P2WPKH, P2WSH). Direct bech32 encoding, no wrapper. Smaller transactions, lower fees, identical security properties. Requires the sender's wallet to understand bech32, which all modern wallets do.

Native SegWit was the cleaner end state of the SegWit design (BIP 141), but the ecosystem rolled out wrapped first to ease the transition. By 2026, native SegWit is the default for new wallets, and the wrapped form is mostly legacy.

Fee savings are real but modest: a P2WPKH spend is roughly 10-15% cheaper than the wrapped equivalent in vbytes. Add [Taproot](/glossary/taproot) (`bc1p...`, [bech32m](/glossary/bech32m)) for slightly more savings and better privacy, and you've got the modern address-format stack: legacy P2PKH (`1...`) for old wallets, wrapped SegWit (`3...`) for transition cases, native SegWit (`bc1q...`) for current use, Taproot (`bc1p...`) for the cutting edge.

If you're picking an address type for a new wallet in 2026: Taproot if your senders support it, native SegWit otherwise.
