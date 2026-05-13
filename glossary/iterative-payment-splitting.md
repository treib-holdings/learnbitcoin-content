---
title: "Iterative Payment Splitting"
slug: iterative-payment-splitting
draft: false
shortDefinition: "An LN strategy repeatedly splitting a large payment into smaller parts if initial routes lack sufficient capacity."
keyTakeaways:
  - "Continually breaks down payment amounts until they succeed"
  - "Useful when few channels have enough liquidity for the full amount"
  - "Builds on LN’s multi-path payment capabilities"
sources: []
relatedTerms: []
liveWidget: ~
---

Lightning’s multi-path payments (AMP) let you break a single payment into multiple streams. Iterative payment splitting refines this by retrying smaller chunks if the original chunk fails due to capacity limits. The LN node systematically probes routes, sending partial amounts until the total is transferred. This approach boosts reliability-particularly when large channels are scarce-though it may increase routing fees or complexity. It’s a practical workaround for LN’s channel capacity constraints, ensuring fewer failed attempts and better user experience for bigger payments.
