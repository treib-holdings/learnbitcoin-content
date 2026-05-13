---
title: "Lockup Period (Lightning)"
slug: lockup-period-lightning
draft: false
shortDefinition: "The time BTC remains committed to a payment channel, unavailable for on-chain use until the channel closes or settles."
keyTakeaways:
  - "BTC is committed to an off-chain payment channel"
  - "Funds remain off-limits for direct on-chain spending"
  - "Channels close at any time, returning funds to on-chain addresses"
sources: []
relatedTerms: []
liveWidget: ~
---

When you open a Lightning channel, your BTC is locked in a 2-of-2 multisig until you or your channel partner decide to close. During this ‘lockup,’ funds can’t be spent on-chain but can be transacted off-chain between the channel participants. The lockup period can be indefinite, but some participants periodically close channels to rebalance or move funds elsewhere. A locked channel doesn’t earn interest—rather, it’s a trade-off for speed and low fees in LN transactions. If someone tries to cheat, time-lock scripts (like CSV) may force a period before funds are fully claimable on-chain, ensuring penalty mechanisms can work.
