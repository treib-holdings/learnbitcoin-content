---
title: "Off-Chain"
slug: chain
draft: false
shortDefinition: "Any Bitcoin activity that doesn't settle directly on the main blockchain (e.g., LN payments or custodial transactions)."
keyTakeaways:
  - "Lessens mainnet usage, saving block space and fees"
  - "Can be trust-based (custodial) or trust-minimized (LN)"
  - "Requires eventual settlement to record final states on layer-1"
sources: []
relatedTerms: []
liveWidget: ~
---

Off-chain methods reduce congestion on Bitcoin's layer-1 by avoiding a confirmed transaction for every small payment or multi-step process. LN channels, for example, track balances off-chain, settling on-chain only when channels open or close. Similarly, custodial transactions in an exchange database don't appear on the blockchain unless a deposit/withdrawal occurs. Off-chain solutions bring speed and low fees but can involve trade-offs in trust or complexity. They often serve as a scaling complement to on-chain finality.
