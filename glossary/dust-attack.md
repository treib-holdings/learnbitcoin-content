---
title: "Dust Attack"
slug: dust-attack
draft: false
shortDefinition: "Sending tiny BTC amounts to addresses in an attempt to track them when they’re later consolidated, revealing wallet clusters."
keyTakeaways:
  - "Exploits dust consolidation to deanonymize addresses"
  - "Users can freeze or ignore dust to preserve privacy"
  - "Highlighting suspiciously small UTXOs helps reduce risk"
sources: []
relatedTerms:
  - address-reuse
  - discard-threshold
  - dust
  - dust-limit
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

A dust attack involves an adversary scattering trivial BTC amounts across many addresses. If a target wallet eventually consolidates these dust outputs with other funds, on-chain analysis can link those addresses, identifying patterns of ownership. This is a subtle but effective technique for blockchain surveillance.
Users can mitigate dust attacks by either ignoring suspiciously small UTXOs or by using privacy-centric tools (like CoinJoin) to handle them. Modern wallets often label or automatically hide dust to reduce the chance of accidentally merging it with other, more significant outputs. Awareness is key: if you see a random 100 satoshi deposit, be cautious about spending it together with your main balance.
