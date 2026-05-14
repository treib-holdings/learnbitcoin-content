---
title: "Interactive Multi-Sig"
slug: interactive-multi-sig
draft: false
shortDefinition: "A signing model requiring all cosigners to collaborate in real time before producing a valid multi-signature transaction."
keyTakeaways:
  - "Requires simultaneous or sequential online presence of cosigners"
  - "Potentially reduces signature footprint (e.g., via aggregated signatures)"
  - "More complex to implement but can enhance efficiency or privacy"
sources: []
relatedTerms:
  - hierarchical-multisig
  - m-n
  - mono-signature
  - musig
  - musig2
  - partially-signed-bitcoin-transaction-psbt
  - quorum-signatures
liveWidget: ~
---

In an interactive multisig scheme, each signer must communicate with the others during transaction creation. Unlike standard Bitcoin multisig, where signers can sequentially add signatures, an interactive setup might require back-and-forth messages to combine partial signatures or generate a single aggregated signature (e.g., in Schnorr-based protocols). This can strengthen privacy or reduce transaction size, but it necessitates real-time communication channels. Often used in advanced protocols or collaborative custody, it's more complex than the conventional approach, where each signature is independently appended.
