---
title: "Payment Codes (BIP 47)"
slug: payment-codes-bip-47
draft: false
shortDefinition: "Reusable identifiers enabling private payments without exposing static addresses, avoiding address reuse."
keyTakeaways:
  - "One code produces new addresses for each payment"
  - "Prevents the privacy leaks of address reuse"
  - "Requires a notification TX to synchronize the code between parties"
sources: []
relatedTerms: []
liveWidget: ~
---

BIP 47 introduced ‘payment codes’ to let users share a single code that, when combined with a special notification transaction, generates unique addresses for each payment. Unlike simply reusing one address-which compromises privacy-payment codes produce fresh addresses behind the scenes. This means a merchant or individual can publicly share their code without revealing addresses or linking transactions. Although not widespread in all wallets, BIP 47 remains an influential idea for preserving on-chain privacy by minimizing address reuse and linking.
