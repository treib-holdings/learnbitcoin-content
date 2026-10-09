---
title: "Native SegWit"
slug: native-segwit
draft: false
updated: "2026-10-09"
shortDefinition: "SegWit addresses starting with bc1q (the P2WPKH and P2WSH types), used directly instead of wrapped inside P2SH. They cost less to spend than legacy or wrapped SegWit addresses."
keyTakeaways:
  - "Saves fees, because witness data gets SegWit's discount and there is no P2SH wrapper to pay for"
  - "Simplifies address parsing, with better error detection"
  - "Bitcoin Core's default address type since version 0.20.0 (2020)"
sources:
  - { label: "BIP 141 - Segregated Witness: native vs P2SH-nested witness programs, wrapper overhead, P2WSH collision security", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 173 - Bech32 address format for native witness outputs", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BIP 341 - Taproot: SegWit version 1 spending rules", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Bitcoin Core 0.16.0 release notes (2018) - full SegWit support in the wallet, p2sh-segwit as the default address type", url: "https://bitcoincore.org/en/releases/0.16.0/" }
  - { label: "Bitcoin Core 0.20.0 release notes (2020) - wallet uses bech32 addresses by default", url: "https://bitcoincore.org/en/releases/0.20.0/" }
relatedTerms:
  - bech32m
  - p2sh
  - p2sh-p2wsh-nested-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - segwit-segregated-witness-bip-141
  - taproot
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki"
liveWidget: ~
---

"Native SegWit" refers to SegWit outputs used directly, with bech32 addresses (`bc1q...` on mainnet), rather than SegWit wrapped inside P2SH (`3...` addresses). Witness data lives in the segregated witness portion of the transaction either way; the on-chain encoding is what differs.

Strictly, BIP 141 calls any witness program placed directly in an output "native", so Taproot outputs (SegWit version 1, `bc1p...`) are native too. In wallet menus, though, "native SegWit" almost always means version 0: P2WPKH and P2WSH.

Why "native" vs "wrapped":

- **Wrapped SegWit** (P2SH-P2WPKH, [P2SH-P2WSH](/glossary/p2sh-p2wsh-nested-segwit)). A SegWit output dressed up as a P2SH output so wallets that didn't yet understand bech32 could still send to it. Compatible with everything but pays for the wrapper overhead.
- **Native SegWit** (P2WPKH, P2WSH). Direct bech32 encoding, no wrapper. Smaller transactions and lower fees, and signatures work the same as in the wrapped form. The script version (P2WSH) also uses a longer 32-byte hash where P2SH uses 20 bytes. BIP 141's authors judged that finding two different scripts with the same 20-byte hash (about 2^80 steps of work) was within reach, which matters when a multisig script is built with other parties. Requires the sender's wallet to understand bech32, which most modern wallets do.

Native SegWit was the cleaner end state of the SegWit design (BIP 141), but the ecosystem rolled out wrapped first to ease the transition. Bitcoin Core's wallet, for example, gained full SegWit support in version 0.16.0 (2018), with wrapped addresses as the default, then switched the default to native bech32 in version 0.20.0 (2020). As of 2026, native SegWit is the default in Bitcoin Core and many other wallets, and the wrapped form is mostly legacy.

For a single-key P2WPKH output, BIP 141 notes that wrapping adds 23 bytes to the spending input's non-witness data and 1 byte to the output, so leaving the wrapper out is where native SegWit saves. Measured in vbytes (virtual bytes, the size unit fees are charged by), that works out to about 68 per P2WPKH input against about 91 wrapped (roughly 25% less), or about 141 against 166 (roughly 15% less) for a simple one-input, two-output payment.

[Taproot](/glossary/taproot) (`bc1p...`, [bech32m](/glossary/bech32m)) adds better privacy and cheaper complex scripts. For a plain single-key wallet, Taproot's inputs are smaller (about 58 vbytes against 68) but its outputs are bigger (43 vbytes against 31), so fees come out about even with native SegWit. That rounds out the address-format stack as of 2026: legacy P2PKH (`1...`) for old wallets, wrapped SegWit (`3...`) for transition cases, native SegWit (`bc1q...`) for everyday use, and Taproot (`bc1p...`) as the newest type.

If you're picking an address type for a new wallet in 2026, native SegWit is the widely supported default. Taproot brings the privacy gains above, but every Taproot output puts its public key on chain from the start. The [quantum rabbit hole](/rabbit-hole/quantum-and-bitcoin) explains why that is a reason to think twice before using Taproot for long-term cold storage.
