---
title: "Lightning Invoice"
slug: lightning-invoice
draft: false
shortDefinition: "A payment request in the LN, commonly encoded as a BOLT 11 string for easy sending and receiving."
keyTakeaways:
  - "Encodes LN payment details (amount, destination, expiry)"
  - "Scanned or entered into an LN wallet to pay off-chain"
  - "Can include optional fields like routing hints"
sources: []
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
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
liveWidget: ~
---

A Lightning invoice is a payment request on the [Lightning Network](/glossary/lightning-network). It's a string the recipient generates and shares with the payer, encoding everything the payer needs to find and complete a payment.

The standard format is **BOLT-11**, an encoded string typically starting with `lnbc` (mainnet) or `lntb` (testnet). It contains:

- **Amount** (optional - some invoices let the payer pick).
- **Payment hash** - a hash of a secret (the *preimage*) the recipient knows. The payment only completes when the preimage is revealed.
- **Recipient node public key** - which Lightning node should receive.
- **Routing hints** - optional info about which channels can deliver the payment, useful for nodes with limited public connectivity.
- **Expiry** - how long the invoice is valid (default usually 1 hour).
- **Description / memo** - optional human-readable note.
- **Signature** from the recipient's node.

The payment flow:

1. Recipient generates an invoice; copies it to the payer (QR code, copy-paste, NFC, etc.).
2. Payer's wallet decodes the invoice, finds a route through the network, and forwards an HTLC.
3. Each hop holds the payment locked until the preimage is revealed.
4. The final recipient reveals the preimage to claim the payment, which cascades back through the route.
5. Each routing node along the path now has proof the payment completed.

Invoices are single-use. The payment hash gets revealed when the payment settles, so paying the same invoice twice would either fail (the recipient won't accept it again) or be a fraud signal.

A newer format, **BOLT-12 offers**, addresses some BOLT-11 limitations - reusable, supports recurring payments, smaller, more private. It was officially merged into the Lightning spec in September 2024. As of 2026 it's supported by Core Lightning, LDK, and eclair/Phoenix; LND adoption is still in progress. Expect BOLT-12 to gradually displace BOLT-11 over the next few years.

See [Lightning Network](/glossary/lightning-network) for how invoices get routed.
