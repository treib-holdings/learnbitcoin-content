---
title: "Race Attack"
slug: race-attack
draft: false
shortDefinition: "Attempting to double-spend a zero-confirmation transaction by quickly broadcasting a conflicting, higher-fee transaction."
keyTakeaways:
  - "Exploits zero-conf acceptance by sending a conflicting transaction"
  - "Relies on miners prioritizing the higher-fee or faster-broadcast TX"
  - "Merchants avoid by requiring confirmations or LN-based payments"
sources: []
relatedTerms:
  - double-spend
  - double-spend-relay
  - eavesdropping-attack
  - eclipse-attack
  - griefing-attack
  - jamming-attack-ln
  - reorg-reorganization
  - replay-attack
  - spv-simplified-payment-verification
liveWidget: ~
---

A race attack exploits the fact that unconfirmed (zero-conf) transactions are not guaranteed final. A malicious spender sends payment to a merchant at a low fee, and simultaneously or just after, broadcasts another TX paying themselves with a higher fee. Miners might confirm the higher-fee transaction first. Since the merchant has no confirmation, they risk losing the goods if they accept instantly. Using RBF or double-spend relays can facilitate these attacks. Merchants mitigate this by awaiting at least one confirmation, using LN for near-instant settlement, or employing detection tools to spot conflicting TXs in the mempool.
