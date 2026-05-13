---
title: "Silent Payments"
slug: silent-payments
draft: false
shortDefinition: "Chris Belcher's proposed enhancement of BIP 47 Payment Codes, letting senders create unique addresses on behalf of the receiver without address reuse."
keyTakeaways:
  - "Generates new addresses for each payment without an explicit handshake"
  - "Hides payment code usage from chain observers"
  - "Proposed by Chris Belcher, refining the BIP 47 model"
sources: []
relatedTerms:
  - address
  - address-derivation-path
  - address-reuse
  - fungibility
  - stealth-address
liveWidget: ~
---

Silent Payments build on the concept of payment codes, but aim to eliminate the need for a notification transaction. The receiver publishes a 'silent payment key,' from which senders derive ephemeral addresses for each payment. Observers only see normal single-use addresses-no separate handshake or direct link to the payer. This improves privacy by hiding payment code usage, as outside watchers cannot easily correlate addresses to a single code. It's a cryptographic approach that might require changes to wallets or partial soft-fork expansions of script logic.
