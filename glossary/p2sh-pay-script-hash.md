---
title: "P2SH (Pay to Script Hash)"
slug: p2sh-pay-script-hash
draft: false
shortDefinition: "A script mechanism where funds are sent to the hash of a redemption script (addresses often start with '3')."
keyTakeaways:
  - "Enables flexible scripts (multisig, timelocks) hidden behind a single hash"
  - "Sends to an address starting with '3' in legacy format"
  - "Reveals the full redemption script only when spending"
sources: []
relatedTerms:
  - address
  - bip-16-p2sh
  - bitcoin-script
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - partially-signed-bitcoin-transaction-psbt
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
liveWidget: ~
---

P2SH - "Pay to Script Hash" - is the script format that made complex [Bitcoin Scripts](/glossary/bitcoin-script) practical to use as receive addresses. Introduced in 2012 via [BIP-16](/glossary/bip-16-p2sh), its addresses start with `3` (e.g. `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`).

The mechanism: instead of putting a complex spending script directly in an output (which would mean the sender needs to know it and pay for its bytes), you hash the script into a short 20-byte commitment. The output just locks to "the script whose hash is X." When you later spend, you reveal the actual script (the "redeem script") plus whatever it requires - signatures, preimages, locktime checks, etc.

Why this was a big deal:

- **Shareable addresses for complex setups.** A 2-of-3 multisig used to require the sender to know all three public keys and construct the script themselves. With P2SH, the receiver gives them a single short address, just like a regular P2PKH.
- **Cost transfer.** The byte cost of the complex script is paid by the spender (when revealing it), not the funder. Reasonable.
- **Hidden complexity.** The chain shows the address, not the script structure. Privacy benefit until spent.

P2SH is most commonly used for multisig (`OP_CHECKMULTISIG`-based scripts) and was, for years, the way to wrap a SegWit output to be compatible with non-SegWit wallets (so-called "P2SH-wrapped SegWit," addresses starting with `3` but spending under SegWit rules).

The modern successor is [P2WSH](/glossary/p2wsh-pay-witness-script-hash) (native SegWit script hash) and Taproot script-path spending. Both are cheaper and have cleaner properties. P2SH remains in heavy use for legacy multisig and wrapped-SegWit setups.
