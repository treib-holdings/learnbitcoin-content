---
title: "BIP 65 (OP_CHECKLOCKTIMEVERIFY)"
slug: bip-65-opchecklocktimeverify
draft: false
shortDefinition: "Added a script opcode (CLTV) enabling funds to be locked until a certain block height or timestamp is reached."
keyTakeaways:
  - "Implements time-based spending constraints"
  - "Enables contracts like payment channels, escrows"
  - "Strengthens Bitcoin's smart contract flexibility"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-bitcoin-improvement-proposal
  - bip-68-relative-locktime
  - bitcoin-script
  - checklocktimeverify-cltv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

BIP 65, outlined in [BIP-65](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki), introduced OP_CHECKLOCKTIMEVERIFY (CLTV). This opcode enforces that an output can only be spent after a specific block height or timestamp has been reached. It's like a timed vault where you can't open the door until the clock strikes a certain moment.
CLTV opened the door to more advanced scripting use cases, such as payment channels and trust-minimized escrow. By restricting spending until a future time, users can create contracts where funds remain locked until the agreed-upon conditions are met. Along with later proposals like OP_CHECKSEQUENCEVERIFY (BIP 112), CLTV helps developers build sophisticated layer-2 applications on top of Bitcoin.
