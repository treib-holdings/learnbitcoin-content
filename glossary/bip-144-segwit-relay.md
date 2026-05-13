---
title: "BIP 144 (SegWit Relay)"
slug: bip-144-segwit-relay
draft: false
shortDefinition: "Defines new P2P message types (e.g., witnessTx) for relaying SegWit data across the network."
keyTakeaways:
  - "Adds message types for witness data relay"
  - "Backwards-compatible with older nodes"
  - "Facilitates full SegWit support in P2P communication"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - segwit-segregated-witness-bip-141
  - bip-148-uasf
  - bip-341-taproot
  - bip-342-tapscript
  - native-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - taproot
liveWidget: ~
---

BIP 144, in [BIP-144](https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki), lays out the modifications to Bitcoin's peer-to-peer protocol to accommodate SegWit. It introduced message types like 'witnessTx' and 'witnessBlock,' allowing nodes to share transaction data that includes witness information.
These changes ensure that SegWit transactions propagate seamlessly and that upgraded nodes can verify the witness data. Meanwhile, older nodes, unaware of SegWit, ignore the witness portion without breaking consensus. BIP 144's design helped ensure a smooth soft-fork transition, ensuring compatibility in a network comprising both updated and legacy nodes.
