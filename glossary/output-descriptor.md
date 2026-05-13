---
title: "Output Descriptor"
slug: output-descriptor
draft: false
shortDefinition: "A human-readable notation describing how to generate or watch specific Bitcoin scripts/addresses."
keyTakeaways:
  - "Simplifies sharing and managing sets of addresses/scripts"
  - "Works with watch-only wallets or complex multi-sig setups"
  - "Improves clarity over older, ad hoc address generation approaches"
sources: []
relatedTerms: []
liveWidget: ~
---

Output descriptors detail script structures (e.g., single-sig, multisig, or P2WSH) using a concise format that can include derivation paths, key fingerprints, and script types. They tell wallet software precisely which addresses to watch or spend from, often integrated with hardware wallets or multi-signature setups. For instance, a descriptor might look like `wpkh([fingerprint/44'/0'/0']xpub/0/*)`, indicating a range of P2WPKH addresses derived from a specific HD xpub. Output descriptors enhance interoperability among wallets and enable ‘watch-only’ setups without manual address tracking.
