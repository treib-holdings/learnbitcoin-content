---
title: "Green Address"
slug: green-address
draft: false
shortDefinition: "A concept or service branding quick 'trusted' BTC transactions, sometimes using partial multi-sig or third-party assurance."
keyTakeaways:
  - "Seeks instant trust in transactions via a known intermediary"
  - "Contradicts Bitcoin's decentralized model"
  - "Never became a mainstream standard but influenced quick payment services"
sources: []
relatedTerms:
  - address
  - b32-address
  - hierarchical-multisig
  - m-n
  - psbt
  - security
  - wallet
liveWidget: ~
---

"Green address" is a mostly-historical concept where a transaction is trusted as if it had confirmed already, on the basis that it comes from a known, reputable entity that guarantees not to double-spend. The recipient effectively treats the transaction as final the moment it arrives.

The original proposal (Mt. Gox era, ~2011-2013) had specific patterns:

- A custodian publishes a designated "green" address.
- The custodian promises to never double-spend from that address.
- Merchants accepting payment from the green address grant instant credit, trusting the custodian's promise rather than waiting for confirmations.

It never gained meaningful adoption for good reasons:

- **Centralized trust.** The promise is only as good as the custodian's solvency and honesty. The merchant is now trusting two parties: their counterparty AND the custodian's promise. This is the opposite of Bitcoin's value proposition.
- **The "I trust the custodian" path** has a much simpler implementation: just use a custodial settlement system entirely, the way credit cards work. Adding cryptographic complexity for no security gain doesn't help.
- **Better alternatives emerged.** Lightning Network solved the "fast settlement" problem with cryptographic finality rather than custodial trust.

The term occasionally surfaces in marketing for "trusted Bitcoin" services that promise instant credit on Bitcoin payments to known addresses. In every modern case, what's actually being sold is custodial trust dressed in Bitcoin terminology - useful for some users, but not really Bitcoin's offering.

For practical use in 2026: if you need fast settlement, use Lightning. If you need instant credit from a known entity, that entity can just give you instant credit; you don't need Bitcoin in the loop for the instant-credit part. "Green address" is a museum piece from when those options didn't yet exist.
