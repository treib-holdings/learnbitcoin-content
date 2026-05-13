---
title: "Custodial Lightning Wallet"
slug: custodial-lightning-wallet
draft: false
shortDefinition: "A Lightning wallet where a third party manages LN channels and funds on your behalf, akin to storing BTC on an exchange."
keyTakeaways:
  - "Requires trusting a service to hold your LN funds"
  - "Easier onboarding compared to running a node"
  - "Less secure than managing your own channels and keys"
sources: []
relatedTerms:
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - counterparty-risk
  - custodial-wallet
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-probe
  - lightning-routing
  - wallet
  - wumbo-channels-lightning
liveWidget: ~
---

A custodial Lightning wallet takes the do-it-yourself complexity of channel management and moves it behind a service provider's curtain. You simply log in, send or receive Lightning payments, and trust the operator to maintain channels, handle liquidity, and keep fees low.
While that's convenient, it comes with the classic trade-off: you don't directly control the private keys or the LN channels. If the custodian freezes withdrawals or experiences technical issues, your LN balance is at risk. Many see custodial LN wallets as a stepping stone for beginners before migrating to self-custody solutions.
