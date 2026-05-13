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
liveWidget: ~
---

When a user wants to receive payment over LN, they generate a BOLT 11 invoice-an alphanumeric string that typically starts with 'lnbc' (mainnet) or 'lntb' (testnet). It includes information like the payment amount, the node's public key, an expiry time, and a payment hash. The payer scans or pastes this invoice into their LN wallet, which decodes the details and initiates a route. If the transaction succeeds, the receiver discloses the preimage to finalize payment. LN invoices keep the process smooth and user-friendly, avoiding lengthy addresses or manual references.
