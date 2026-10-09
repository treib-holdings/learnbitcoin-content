---
title: "BOLT 11"
slug: bolt-11
draft: false
updated: "2026-10-09"
shortDefinition: "A Lightning Network invoice format (commonly starting lnbc...) that encodes payment data like amount and destination."
keyTakeaways:
  - "Encodes LN payments in a structured invoice format"
  - "Specifies amount, receiver's node, and optional data"
  - "Provides a standard, user-friendly way to request Lightning payments"
sources:
  - { label: "BOLT #11 - Invoice Protocol for Lightning Payments", url: "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md" }
  - { label: "BOLTs PR #183 - BOLT 11 added to the spec (merged June 2017)", url: "https://github.com/lightning/bolts/pull/183" }
  - { label: "BIP 173 - Base32 address format for native v0-16 witness outputs (bech32)", url: "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" }
  - { label: "BOLT #12 - Limitations of BOLT 11", url: "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md#limitations-of-bolt-11" }
  - { label: "BOLTs PR #798 - Offers (merged September 2024)", url: "https://github.com/lightning/bolts/pull/798" }
  - { label: "LND API docs - AddInvoice (expiry defaults to 86,400 seconds)", url: "https://lightning.engineering/api-docs/api/lnd/lightning/add-invoice/" }
  - { label: "Core Lightning docs - invoice (expiry defaults to 604,800 seconds)", url: "https://docs.corelightning.org/reference/invoice" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bip-bitcoin-improvement-proposal
  - bolt
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
sameAs:
  - "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md"
liveWidget: ~
---

BOLT 11 is the specification for [Lightning invoices](/glossary/lightning-invoice) - the encoded payment requests that begin with `lnbc` (mainnet) or `lntb` (testnet). It's one of the [BOLT specs](/glossary/bolt) that define how Lightning implementations interoperate.

A BOLT-11 invoice encodes everything a payer needs to complete a payment:

- **Amount** (optional - the payer can specify if the invoice doesn't).
- **Payment hash** - hash of the secret preimage that, when revealed, completes the payment.
- **Payment secret** - a random value that keeps forwarding nodes from probing the recipient.
- **Destination node public key** - written out, or recovered from the signature.
- **Routing hints** for nodes that aren't well-connected to the public graph (useful for mobile wallets).
- **Expiry** - 1 hour if the invoice does not say. Node software often sets a longer one when it creates the invoice, such as 24 hours (LND) or a week (Core Lightning).
- **Description / memo** - a short note, or a hash of a longer description. Every invoice must carry one or the other.
- **A signature** from the recipient's node, proving it created the invoice.

The whole thing is encoded with [bech32](/glossary/bip-173-bech32), the format BIP 173 defined for native SegWit addresses, without that format's 90-character length limit. The result is a single string, typically a few hundred characters long, that fits in a QR code and can be copy-pasted, scanned, or NFC-tapped.

BOLT-11 invoices are single-use by design. Once a payment settles, the preimage is no longer secret, because the payer and every node on the route have seen it. If a second payment to the same invoice passes through any of those nodes, that node could keep it instead of forwarding it. To take repeated payments at one fixed handle, you need something that hands out a fresh invoice each time, such as [BOLT-12 offers](/glossary/lightning-invoice) (the modern successor) or an invoice-per-payment service.

BOLT-11 was added to the Lightning spec in June 2017 and became Lightning's payment-request lingua franca. BOLT-12 offers, merged into the spec in September 2024, fix several of its limitations. See [Lightning invoice](/glossary/lightning-invoice) for where support for offers stood as of October 2026.
