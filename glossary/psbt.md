---
title: "PSBT"
slug: psbt
draft: false
shortDefinition: "Acronym for Partially Signed Bitcoin Transaction (BIP 174), enabling multi-device or multi-signer workflows."
keyTakeaways:
  - "Streamlines multi-signature or offline signing processes"
  - "Safeguards private keys by limiting exposed data"
  - "Adopted widely by wallets, hardware devices, and advanced scripts"
sources: []
relatedTerms: []
liveWidget: ~
---

PSBT is a format that separates transaction details from private key usage, letting participants sign without exposing secret data. It’s central for hardware wallets, multisig, and collaborative spending. Each cosigner or device adds signatures in turn, merging them into the PSBT until enough signatures fulfill the script requirements. PSBT ensures consistent metadata (like UTXO info) so signers can verify amounts and addresses. Once fully signed, the transaction can be broadcast. This approach boosts security and interoperability across diverse wallet implementations.
