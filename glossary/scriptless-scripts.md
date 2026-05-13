---
title: "Scriptless Scripts"
slug: scriptless-scripts
draft: false
shortDefinition: "Off-chain contract logic leveraging Schnorr signatures to encode conditions without revealing them on-chain."
keyTakeaways:
  - "Keeps contract details off-chain to enhance privacy"
  - "Works with Schnorr’s algebraic properties for signature-based logic"
  - "Reduces on-chain overhead compared to typical Bitcoin scripts"
sources: []
relatedTerms:
  - bitcoin-script
  - checktemplateverify-ctv
  - covenants
  - gzen-generalized-zen
  - op-code-operation-code
  - script
liveWidget: ~
---

Scriptless scripts push contract conditions into the signature itself rather than a Bitcoin script. For example, in discreet log contracts (DLCs) or advanced LN features, parties embed cryptographic conditions into Schnorr signatures. The blockchain just sees a standard signature, preserving privacy and reducing on-chain data. It’s a novel approach championed by cryptographers like Andrew Poelstra, aiming to do more complex contract logic—like oracles or multi-hop LN routing—without cluttering the main chain with large scripts or revealing contract details publicly.
