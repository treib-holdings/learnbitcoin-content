---
title: "P2SH (Pay to Script Hash)"
slug: p2sh
draft: false
updated: "2026-10-09"
shortDefinition: "Pay to Script Hash (BIP 16, 2012): an output type that locks bitcoin to the 20-byte hash of a script. Receivers share a short address starting with 3 and reveal the full script only when spending."
keyTakeaways:
  - "Receiver publishes a 20-byte hash; the actual redeem script is revealed only at spend time"
  - "Made multi-signature wallets a usable primitive (no longer requiring senders to know the full script)"
  - "Cost transfer: complex-script byte cost is paid by the spender, not the funder"
  - "Was the bridge that let SegWit deploy gradually via 'P2SH-wrapped SegWit' addresses"
sources:
  - { label: "BIP 16 - Pay to Script Hash (new rules apply to blocks timestamped from April 1, 2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki" }
  - { label: "BIP 13 - Address format for pay-to-script-hash (version byte 5, addresses start with 3)", url: "https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki" }
  - { label: "BIP 11 - M-of-N standard transactions (multisig was valid but non-standard before)", url: "https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki" }
  - { label: "BIP 141 - Segregated Witness, including P2WPKH and P2WSH nested in BIP16 P2SH", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - BIPs implemented (doc/bips.md): BIP 16 took effect on April 1, 2012", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/doc/bips.md" }
  - { label: "mainnet-observer - Input Types by Count: daily P2SH, nested P2WPKH and nested P2WSH spends", url: "https://mainnet.observer/charts/inputs-types-by-count/" }
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bitcoin-script
  - multisig
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - psbt
  - script
  - segwit-segregated-witness-bip-141
  - soft-fork
  - taproot
sameAs:
  - "https://en.bitcoin.it/wiki/Pay_to_script_hash"
  - "https://en.bitcoin.it/wiki/BIP_0016"
  - "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki"
liveWidget: ~
---

P2SH - "Pay to Script Hash" - is the script format that made complex [Bitcoin Scripts](/glossary/bitcoin-script) practical to use as receive addresses. Introduced via [BIP-16](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki) and enforced as a [soft fork](/glossary/soft-fork) from April 1, 2012, it was Bitcoin's first major address-format upgrade after P2PKH. P2SH addresses start with `3` (e.g. `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`).

## The mechanism

Before BIP-16, if you wanted to receive funds at a multisig or other complex script, the *sender* needed to know the full script and include it in the output - which meant longer transactions, no privacy, and awkward user experience. P2SH inverted this: receivers publish only a 20-byte hash of the script, and the actual script is revealed only when the recipient spends.

The output just locks to "the script whose hash is X." When you later spend, you reveal the actual script (the "redeem script") plus whatever it requires - signatures, preimages, locktime checks, etc.

## What it enabled

- **Multi-signature wallets as a usable primitive.** Before P2SH, multisig scripts were valid but non-standard (nodes would not relay them), so in practice they were unusable. After P2SH, users could share simple `3...` addresses and receive directly to multisig setups.
- **Cost transfer.** The byte cost of the complex script is paid by the spender (when revealing it), not the funder. Reasonable.
- **Hidden complexity.** The chain shows the address, not the script structure - a privacy benefit until spent.
- **A pattern for future format upgrades.** The "hash-then-reveal" model from P2SH directly influenced both [SegWit](/glossary/segwit-segregated-witness-bip-141)'s native script-hash format ([P2WSH](/glossary/p2wsh-pay-witness-script-hash)) and Taproot.
- **The bridge for SegWit adoption.** When SegWit launched in 2017, it could be wrapped inside P2SH ("P2SH-P2WPKH") for compatibility with wallets that didn't yet understand native SegWit. P2SH-wrapped SegWit addresses also start with `3` but spend under SegWit rules.

## Modern usage

As of 2026, P2SH is mostly seen in wrapped-SegWit wallets and older multisig setups (`OP_CHECKMULTISIG`-based scripts). The modern successors are [P2WSH](/glossary/p2wsh-pay-witness-script-hash) (native SegWit script hash) and [Taproot](/glossary/taproot) script-path spending - both cheaper and with cleaner properties.

BIP-16 was one of the earliest examples of how a small, carefully-designed soft fork can unlock entirely new categories of use without changing the base protocol's nature.
