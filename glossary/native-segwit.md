---
title: "Native SegWit"
slug: native-segwit
draft: false
shortDefinition: "Bech32 transaction formats (bc1q...) introduced by SegWit, offering lower fees and reduced transaction malleability."
keyTakeaways:
  - "Saves fees due to SegWit’s discount on witness data"
  - "Simplifies address parsing, with better error detection"
  - "Becoming the preferred standard for modern wallets"
sources: []
relatedTerms: []
liveWidget: ~
---

Segregated Witness (SegWit) separated signature data from the main block space, solving transaction malleability and boosting effective block capacity. Native SegWit addresses—also called bech32—begin with ‘bc1q’ on mainnet. They minimize overhead for witness data, resulting in lower fees when spending. Many modern wallets default to bech32 or bech32m (Taproot) addresses for efficiency, while older addresses (starting with ‘1’ or ‘3’) remain valid but don’t enjoy the same fee savings. Adopting native SegWit is a step toward a more efficient Bitcoin network with consistent transaction IDs.
