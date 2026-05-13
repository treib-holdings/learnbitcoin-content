---
title: "Liquidity Ads"
slug: liquidity-ads
draft: false
shortDefinition: "A c-lightning plugin allowing node operators to advertise LN channel liquidity for lease, facilitating inbound capacity."
keyTakeaways:
  - "Offers a decentralized marketplace for LN channel capacity"
  - "Helps new merchants or heavy receivers get inbound liquidity"
  - "Implemented as a plugin for c-lightning to automate channel leasing"
sources: []
relatedTerms: []
liveWidget: ~
---

In LN, new or heavily receiving nodes often need inbound liquidity. The ‘Liquidity Ads’ plugin lets node operators list how much inbound or outbound capacity they can provide in exchange for fees. This is akin to a marketplace for LN channel leases, making it simpler for merchants or service providers to acquire pre-funded channels rather than manually seeking out connections. The plugin introduces a structured way for node operators to broadcast their willingness to open channels with certain parameters, enabling more fluid LN liquidity markets.
