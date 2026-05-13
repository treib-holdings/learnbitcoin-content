---
title: "Mnemonic (Seed) Phrase"
slug: mnemonic-seed-phrase
draft: false
shortDefinition: "A BIP 39-compliant set of 12/18/24 words encoding the private/extended key for a deterministic wallet backup."
keyTakeaways:
  - "Transforms cryptographic entropy into a memorable set of words"
  - "One phrase recovers all derived addresses in HD wallets"
  - "Central to modern wallet backup best practices"
sources: []
relatedTerms: []
liveWidget: ~
---

Rather than backing up a string of random hex digits, BIP 39 defines a process for generating human-readable word lists. Users write down these words as their primary backup for a hierarchical deterministic (HD) wallet. Losing the phrase means losing access, so secure storage is critical. Conversely, if it’s compromised, all derived addresses are at risk. Typically, wallets let you restore funds simply by re-entering the same 12/18/24 words. Some setups also add a passphrase (a ‘25th word’) for extra security.
