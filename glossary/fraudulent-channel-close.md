---
title: "Fraudulent Channel Close"
slug: fraudulent-channel-close
draft: false
shortDefinition: "Attempting to close a Lightning channel using a prior channel state to steal funds, punished by a penalty transaction."
keyTakeaways:
  - "Cheater tries using an old channel snapshot for personal gain"
  - "Currently penalized by seizing the cheater's LN funds"
  - "Provides a strong deterrent against fraudulent closes"
sources: []
relatedTerms:
  - fraud-proof
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - penalty-transaction
liveWidget: ~
---

If one LN participant tries to broadcast an outdated channel commitment, effectively claiming more BTC than they currently deserve, that's a fraudulent channel close. Lightning's 'penalty transactions' guard against this, allowing the honest counterparty to swoop in and confiscate the cheater's funds once the old state hits the blockchain.
This harsh penalty discourages bad actors, since the cost of getting caught is losing all channel funds. Alternative proposals like Eltoo aim to replace the penalty approach with a system that simply invalidates older channel states, but as it stands, LN is all about brandishing a big stick to keep participants honest.
