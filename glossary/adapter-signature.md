---
title: "Adapter Signature"
slug: adapter-signature
draft: false
shortDefinition: "A cryptographic mechanism allowing a partial signature to reveal a secret once it's completed, often used for atomic swaps or advanced Lightning features."
keyTakeaways:
  - "Partial signature that reveals a hidden secret"
  - "Enables atomic swaps and advanced contract logic"
  - "Enhances trust minimization in multi-party transactions"
sources: []
relatedTerms:
  - bitcoin-script
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - merkleized-abstract-syntax-tree-mast
  - scriptless-scripts
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

An adapter signature is like handing someone a locked box along with a promise that, once they unlock it, they'll also discover a special code inside. In Bitcoin, it's a fancy way of building trust-minimized contracts and atomic swaps, ensuring that two parties can exchange signatures or secrets without either party getting cheated.
Essentially, you create a signature that only becomes fully valid when a second secret is revealed. This is useful in scenarios like atomic swaps where each participant wants to make sure they only release funds if the other person does so as well. If one side tries to bail, they can't claim the hidden secret because the final signature never materializes. This technology also underpins more advanced Lightning Network functions, adding flexibility and reducing the need for complicated, trust-heavy setups.
