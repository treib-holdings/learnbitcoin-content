---
title: "BIP 16 (P2SH)"
slug: bip-16-p2sh
draft: false
shortDefinition: "Pay-to-Script-Hash (P2SH) lets users send Bitcoin to a script’s hash, revealing the script only during spending."
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

BIP 16, introduced in [BIP-16](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki), replaced the older Pay-to-PubKeyHash approach in many cases by allowing funds to be sent to the hash of a script rather than directly to a public key. This means the transaction creator doesn’t need to know the script’s details; the spender later reveals the full script to claim those coins.
P2SH not only simplifies complex scripts (like multisig) for senders but also preserves privacy until funds are spent. This design cut down on transaction complexity for standard users and paved the way for more advanced scripting scenarios without cluttering up the blockchain with large scripts at the time of sending.
