---
title: "Negligible Output Attack"
slug: negligible-output-attack
draft: false
shortDefinition: "Sending a tiny, nearly worthless BTC amount to a target address, hoping the user later merges it and reveals linking info."
keyTakeaways:
  - "Exploits dust consolidation to correlate user addresses"
  - "Can degrade privacy if wallets merge dust automatically"
  - "Avoid by ignoring dust or employing privacy-preserving transaction tools"
sources: []
relatedTerms: []
liveWidget: ~
---

A negligible output might be just a few hundred satoshis or even less—labelled as dust. Attackers exploit how wallets might automatically consolidate dust with other outputs, potentially linking addresses together for chain analysis. By sending dust to known addresses, adversaries track if the user merges it in future transactions, disclosing new addresses or spending patterns. Users can combat this by freezing dust or using privacy techniques like CoinJoin. This kind of chain ‘attack’ is subtle yet common, highlighting the importance of address management and privacy best practices.
