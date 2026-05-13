---
title: "Lightning Refund Invoice"
slug: lightning-refund-invoice
draft: false
shortDefinition: "An invoice that returns funds to the original payer if a payment route fails or is canceled, used in LN workflows."
keyTakeaways:
  - "Provides a plan B if an LN payment fails or can't route"
  - "Requires cooperation between sender and receiver to issue the refund invoice"
  - "Enhances reliability in complex LN scenarios"
sources: []
relatedTerms:
  - bolt-11
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-invoice
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
liveWidget: ~
---

A Lightning refund invoice is a payment request that goes the *other* direction from a failed or canceled payment - returning funds from the original receiver back to the payer. It's not a core part of the Lightning protocol itself, but a wallet-level convention used in specific workflows.

The contexts where refund invoices come up:

- **Merchant order cancellations.** A customer pays for something, then cancels before the merchant ships. The merchant generates a refund invoice; the customer's wallet pays it.
- **Failed product/service delivery.** A service that takes Lightning payments and later determines it can't fulfill issues a refund invoice.
- **Overpayments.** Rare in Lightning (payments are amount-locked), but possible in some workflows.
- **Subscription cancellations.** Pro-rated refunds via refund invoice.

The technical reality: a Lightning refund is just a regular Lightning payment in the reverse direction. It uses a [BOLT-11](/glossary/bolt-11) invoice (or [BOLT-12 offer](/glossary/lightning-invoice)), gets routed through the network normally, and settles normally. There's no protocol-level "refund" primitive - it's just two payments going opposite ways.

What can make refunds awkward in practice:

- **The original payer might not be online.** Lightning payments require both parties' wallets to be reachable when the payment routes. A merchant can issue a refund invoice but can't *push* a payment to a customer who's not running a node.
- **No native refund tracking.** Wallets typically don't link the refund to the original payment, so the bookkeeping is on you.
- **BOLT-12 helps slightly.** BOLT-12 "offers" support a "request refund" workflow more cleanly than BOLT-11's static invoices.

Most users will encounter Lightning refunds rarely. When they do, the experience is roughly: receive a refund invoice URL or QR code, pay it like any other invoice. The underlying mechanics are unremarkable.
