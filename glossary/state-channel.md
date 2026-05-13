---
title: "State Channel"
slug: state-channel
draft: false
shortDefinition: "A generic off-chain mechanism letting participants transact privately, then settle the final state on-chain. LN channels are a prime example."
keyTakeaways:
  - "Converts repeated on-chain transactions into private off-chain updates"
  - "Settles on the main chain only once the channel closes"
  - "Enables real-time trading or micropayments with minimal fees"
sources: []
relatedTerms: []
liveWidget: ~
---

A state channel locks funds or data in a shared multi-party arrangement. Participants update balances or states through signed off-chain messages. The final, mutually agreed state eventually commits on-chain, reducing on-chain transactions drastically. This concept applies beyond Bitcoin (e.g., Ethereum state channels), but LN popularizes it for BTC micropayments. It’s part of the broader ‘layer-2’ scaling family, offering near-instant, low-fee transfers. State channels can host advanced logic, though Bitcoin’s LN channels typically revolve around hashed timelock contracts for trustless routing.
