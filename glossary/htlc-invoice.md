---
title: "HTLC Invoice"
slug: htlc-invoice
draft: false
shortDefinition: "An LN invoice referencing a hashed secret (payment hash). The receiver must reveal the preimage to collect funds."
keyTakeaways:
  - "Ties LN payments to a specific hashed secret"
  - "Receiver must disclose the preimage for final settlement"
  - "Crucial for LN’s atomic multi-hop security"
sources: []
relatedTerms:
  - bolt-11
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - htlc-preimage-manager
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
liveWidget: ~
---

On the Lightning Network, invoices typically include a payment hash. When a sender initiates a payment, each hop in the route sets up an HTLC that references that hash. The final recipient claims the payment by disclosing the hash preimage-thus proving they’re entitled to the funds. This system prevents partial or fraudulent claims. Once the invoice’s preimage is revealed, intermediate nodes are assured they’ll receive their share of the routing fees. LN wallets automate this behind the scenes, but the concept remains the backbone of LN routing and settlement.
