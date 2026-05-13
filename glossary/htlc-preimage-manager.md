---
title: "HTLC Preimage Manager"
slug: htlc-preimage-manager
draft: false
shortDefinition: "The component (or external service) in LN setups tracking and handling preimages for multi-hop payments."
keyTakeaways:
  - "Keeps track of short-lived LN secrets tied to each HTLC"
  - "Coordinates timely preimage disclosure for multi-hop payments"
  - "May be internal node logic or an external LN service module"
sources: []
relatedTerms:
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
liveWidget: ~
---

An HTLC preimage manager is the component inside a [Lightning node](/glossary/lightning-node) (or a separate service) that tracks the cryptographic secrets associated with pending [HTLCs](/glossary/htlc-hashed-time-locked-contract) and coordinates their revelation as payments resolve.

Why a node needs to manage preimages carefully:

- **Multi-hop atomicity depends on it.** When a downstream hop reveals a preimage, the current hop must immediately use it to claim the upstream HTLC. Delays here mean losing the routing fee or, in worst cases, losing the principal.
- **Hold invoices.** Some Lightning workflows deliberately don't immediately reveal the preimage - the receiver holds payment in pending state while they confirm external conditions (e.g., custodial fiat conversion). The preimage manager has to track these long-held payments and decide when to release or refuse.
- **Receiver wallet logic.** When you generate a Lightning invoice on your wallet, the preimage is generated locally. The wallet stores it and reveals it when the corresponding HTLC arrives. If the wallet loses the preimage, you can't claim the payment.

The preimage manager handles:

- **Generation.** Random 32-byte secrets for new invoices.
- **Storage.** Persistent record of preimages for in-flight payments, durable across restarts.
- **Release timing.** Reveal preimages promptly when downstream HTLCs settle (or release held invoices when conditions are met).
- **Recovery.** Re-broadcast preimages if a counterparty force-closes a channel before settling cleanly.

In well-designed Lightning implementations (LND, Core Lightning, Eclair), this is internal logic users never see. In more modular setups, it can be a separate service - useful for high-availability deployments where the preimage logic runs alongside watchtower and signer services.

For most users, the preimage manager is invisible infrastructure. For Lightning service operators, getting preimage management right is one of the operational hot spots.
