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

A race attack is a double-spend against a zero-confirmation transaction. The attacker sends two conflicting transactions in quick succession: one to the merchant (or merchant's wallet's view of the network) and one paying themselves back, with the second crafted to win the race to miners.

Two flavors:

- Vanilla race attack: broadcast tx-A to the merchant and tx-B to the rest of the network at roughly the same time, hoping miners see tx-B first.
- RBF-enabled race: broadcast tx-A (RBF-flagged) to the merchant, then broadcast tx-B at a higher fee. Since Replace-by-Fee is honest about replacement, this isn't really an "attack" so much as the protocol working as documented; the merchant just didn't wait.

Mitigations on the merchant side:

- Wait for at least one confirmation. Slow, but cryptographically the right answer.
- Use Lightning for instant settlement. Lightning payments are final on the second-hop level immediately, no zero-conf risk.
- Run a double-spend monitor that watches the mempool for conflicting transactions and flags them in real time. Reduces but doesn't eliminate the risk.

Many merchants still accept zero-conf for small amounts because the attack is non-trivial to execute (requires technical skill, decent timing, and a low-fee initial transaction that flags itself). The risk is real but the practical incidence is low. For amounts over a few dollars, wait for confirmations or use Lightning.
