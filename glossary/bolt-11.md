---
title: "BOLT 11"
slug: bolt-11
draft: false
shortDefinition: "A Lightning Network invoice format (commonly starting lnbc...) that encodes payment data like amount and destination."
keyTakeaways:
  - "Encodes LN payments in a structured invoice format"
  - "Specifies amount, receiver’s node, and optional data"
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

BOLT 11 is the LN’s version of a ‘payment address’—except it’s more like a detailed invoice containing the amount, destination node public key, and expiry time. These invoices often begin with ‘lnbc’ for mainnet or ‘lntb’ for testnet, followed by encoded data.
When a user wants to receive funds, they generate a BOLT 11 invoice and share it with the payer, who uses their LN wallet to decode and route the payment. This format ensures the network knows exactly how much to send, where to send it, and any optional hints like routing instructions. As LN evolves, BOLT 11 continues to add fields that support new features (e.g., multi-path payments).
