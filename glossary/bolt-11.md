---
title: "BOLT 11"
slug: bolt-11
draft: false
shortDefinition: "A Lightning Network invoice format (commonly starting lnbc...) that encodes payment data like amount and destination."
keyTakeaways:
  - "Encodes LN payments in a structured invoice format"
  - "Specifies amount, receiver's node, and optional data"
  - "Provides a standard, user-friendly way to request Lightning payments"
sources: []
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
liveWidget: ~
---

BOLT 11 is the specification for [Lightning invoices](/glossary/lightning-invoice) - the encoded payment requests that begin with `lnbc` (mainnet) or `lntb` (testnet). It's one of the [BOLT specs](/glossary/bolt) that define how Lightning implementations interoperate.

A BOLT-11 invoice encodes everything a payer needs to complete a payment:

- **Amount** (optional - the payer can specify if the invoice doesn't).
- **Payment hash** - hash of the secret preimage that, when revealed, completes the payment.
- **Destination node public key.**
- **Routing hints** for nodes that aren't well-connected to the public graph (useful for mobile wallets).
- **Expiry** - default 1 hour.
- **Optional description / memo.**
- **A signature** from the recipient's node, proving it created the invoice.

The whole thing is encoded as bech32 - the same address format used for native SegWit addresses. The result is a relatively short string that fits in a QR code and can be copy-pasted, scanned, or NFC-tapped.

Single-use by design. Once the payment hash is revealed (when the payment settles), reusing the same invoice would either fail or be a fraud signal. To accept recurring payments at one fixed handle, you need [BOLT-12 offers](/glossary/lightning-invoice) (the modern successor) or a separate invoice-per-payment workflow.

BOLT-11 has been Lightning's payment-request lingua franca since 2017. Every Lightning wallet supports it. BOLT-12 is gradually displacing it, but BOLT-11 will be in heavy use for many years yet.
