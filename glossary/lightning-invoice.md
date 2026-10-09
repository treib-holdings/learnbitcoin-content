---
title: "Lightning Invoice"
slug: lightning-invoice
draft: false
updated: "2026-10-09"
shortDefinition: "A payment request on the Lightning Network, commonly encoded as a BOLT 11 string for easy sending and receiving."
keyTakeaways:
  - "Encodes LN payment details (amount, destination, expiry)"
  - "Scanned or entered into an LN wallet to pay off-chain"
  - "Can include optional fields like routing hints"
sources:
  - { label: "BOLT #11 - Invoice Protocol for Lightning Payments", url: "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md" }
  - { label: "BOLT #12 - Negotiation Protocol for Lightning Payments (offers)", url: "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md" }
  - { label: "BOLTs PR #798 - Offers (merged September 2024)", url: "https://github.com/lightning/bolts/pull/798" }
  - { label: "Bitcoin Optech - Offers (topic page and implementation history)", url: "https://bitcoinops.org/en/topics/offers/" }
  - { label: "LND 0.22.0 release notes (in development) - first BOLT 12 code", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/release-notes/release-notes-0.22.0.md" }
relatedTerms:
  - bolt-11
  - graph-pruning
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
sameAs:
  - "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md"
liveWidget: ~
---

A Lightning invoice is a payment request on the [Lightning Network](/glossary/lightning-network). It's a string the recipient generates and shares with the payer, encoding everything the payer needs to find and complete a payment.

The standard format is **[BOLT-11](/glossary/bolt-11)**, an encoded string typically starting with `lnbc` (mainnet) or `lntb` (testnet). It contains:

- **Amount** (optional - some invoices let the payer pick).
- **Payment hash** - a hash of a secret (the *preimage*) the recipient knows. The payment only completes when the preimage is revealed.
- **Payment secret** - a random value that stops nodes along the route from probing the recipient.
- **Recipient node public key** - which Lightning node should receive (written out, or recovered from the signature).
- **Routing hints** - optional info about which channels can deliver the payment, useful for nodes with limited public connectivity.
- **Expiry** - how long the invoice is valid (1 hour if the invoice does not say).
- **Description / memo** - a short note on what the payment is for, or a hash of a longer description. Every invoice must carry one or the other.
- **Signature** from the recipient's node.

The payment flow:

1. Recipient generates an invoice; copies it to the payer (QR code, copy-paste, NFC, etc.).
2. Payer's wallet decodes the invoice, finds a route through the network, and forwards an HTLC.
3. Each hop holds the payment locked until the preimage is revealed.
4. The final recipient reveals the preimage to claim the payment, which cascades back through the route.
5. The payer ends up holding the preimage, which serves as proof of payment.

Invoices are meant to be paid once. When a payment settles, the preimage stops being a secret, because the payer and every node on the route have seen it. If a second payment to the same hash passed through one of those nodes, that node could keep it instead of forwarding it. The BOLT 12 spec lists the danger of paying one invoice twice among BOLT 11's limitations.

A newer format, **BOLT-12 offers**, addresses some BOLT-11 limitations. An offer is reusable, because each payer's wallet uses it to request a fresh invoice over Lightning, and blinded paths let the recipient keep its node hidden. Offers were merged into the Lightning spec in September 2024, without the built-in recurring payments that earlier drafts included.

As of October 2026 Core Lightning, eclair and LDK support offers. LND's released versions do not, though work on native support has started in its development branch.

See [Lightning Network](/glossary/lightning-network) for how invoices get routed.
