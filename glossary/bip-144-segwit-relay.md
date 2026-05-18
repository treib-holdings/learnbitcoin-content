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

[BIP-144](https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki) defines the peer-to-peer protocol changes needed to relay [SegWit](/glossary/segwit-segregated-witness-bip-141) transactions and blocks across the Bitcoin network. It's the network-protocol companion to BIP-141 (SegWit consensus) and BIP-143 (signature hashing).

The challenge SegWit posed at the P2P layer: witness data is part of the block but not part of the legacy transaction format. Old nodes need to be able to receive valid blocks without choking on data they don't understand; new nodes need to see and validate the witness data to enforce SegWit rules.

BIP-144's solution:

- **New service bit `NODE_WITNESS`** signals SegWit-aware nodes.
- **Witness-aware message types.** `tx` messages from SegWit-aware peers include witness data in the new format. Legacy peers receive transactions stripped of witness data (which is valid for them - they don't enforce SegWit rules).
- **Witness-aware `getdata` requests.** A SegWit-aware peer can request blocks with witness data; a legacy peer requests them without.
- **Backwards compatibility.** Old nodes that don't signal NODE_WITNESS still receive valid blocks via the legacy code path, just without witness verification.

This dual-protocol approach is what let SegWit deploy without splitting the network. SegWit-aware nodes enforce all the new rules; non-upgraded nodes still validate the parts they understand and accept SegWit blocks as valid under their (slightly more permissive) view of the rules.

BIP-144 is one of those infrastructure pieces that everyone takes for granted but that was essential for the SegWit rollout to actually work in practice. See [SegWit](/glossary/segwit-segregated-witness-bip-141) for the consensus change this enables at the network layer.
