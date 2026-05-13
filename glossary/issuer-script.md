---
title: "Issuer Script"
slug: issuer-script
draft: false
shortDefinition: "A script controlling issuance logic for tokens on Bitcoin (e.g., colored coins or sidechain assets)."
keyTakeaways:
  - "Implements rules for creating custom assets atop Bitcoin"
  - "Historically linked to colored coins or sidechain tokens"
  - "Ensures issuance obeys scripted logic and supply constraints"
sources: []
relatedTerms: []
liveWidget: ~
---

In early 'colored coins' or some sidechain proposals, an 'issuer script' defines how many tokens can be created, who can create them, and under what conditions. It might rely on specific opcodes or metadata to track these tokens as they move across the main Bitcoin chain. Though not widely adopted on mainnet, the concept lives on in sidechains and layer-2 platforms where pegged assets or stablecoins need an issuance framework. This script typically ensures the token supply can't exceed the chosen cap, reflecting a governance model embedded directly in Bitcoin's script constraints.
