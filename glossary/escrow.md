---
title: "Escrow"
slug: escrow
draft: false
shortDefinition: "Funds held by a neutral party or mechanism until certain conditions are fulfilled."
keyTakeaways:
  - "Protects both buyer and seller in uncertain transactions"
  - "Can use a third party or a multisig script"
  - "Reduces fraud risk by withholding payment until agreed conditions"
sources: []
relatedTerms:
  - clawback-mechanism
  - coin-freeze
  - coin-plasma
  - counterparty-risk
  - custodial-wallet
  - escrowed-lightning-channel
  - htlc-hashed-time-locked-contract
  - payment-channel
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

In Bitcoin, an escrow typically involves either a trusted third party or a multi-signature script that only releases funds when specific criteria are met—like completing a service or receiving a product. Traditionally, a centralized escrow agent holds the money, but Bitcoin’s scripting capabilities can replace that agent with code. For example, a 2-of-3 multisig could include buyer, seller, and an arbitrator.
Escrow arrangements reduce counterparty risk for high-value transactions or when trust between parties is limited. If something goes wrong, the arbiter can settle disputes. While it introduces a layer of complexity and potentially a middleman, escrow is often essential for major purchases or marketplaces where chargebacks and consumer protections aren’t built into the payment layer.
