---
title: "P2SH (Pay to Script Hash)"
slug: p2sh-pay-script-hash
draft: false
shortDefinition: "A script mechanism where funds are sent to the hash of a redemption script (addresses often start with ‘3’)."
keyTakeaways:
  - "Enables flexible scripts (multisig, timelocks) hidden behind a single hash"
  - "Sends to an address starting with ‘3’ in legacy format"
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

P2SH introduced the concept of sending BTC to a script’s hash instead of a public key hash. The spender only reveals the full script when they spend, preserving privacy for more complex scripts (like multisig). It shortens what senders must see or handle-just a single hash. Then the real logic (multisig or otherwise) is revealed in the spending transaction. This setup facilitated easily shareable addresses for complex scripts (like 2-of-3 multisig), as recipients don’t need to broadcast the entire script upfront. Bech32-based P2WSH offers a native SegWit version, but P2SH remains widely used for multisig wallets.
