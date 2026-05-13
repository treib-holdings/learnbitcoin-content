---
title: "BIP 119 (CTV)"
slug: bip-119-ctv
draft: false
shortDefinition: "Proposes a new opcode CHECKTEMPLATEVERIFY for covenant-like controls on how funds can be spent in the future."
keyTakeaways:
  - "Adds templated spending conditions (covenants)"
  - "Could improve channel factories, vault designs"
  - "Debated for possible impact on fungibility and policy"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

BIP 119, referencing [BIP-119](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki), introduces CHECKTEMPLATEVERIFY (CTV), which enables pre-authorized transaction templates. Think of it like a 'covenant' that dictates the exact script paths or addresses that coins can move to, restricting subsequent transactions to specific patterns.
Proponents see CTV as a powerful new tool for batch transactions, vaults, and trust-minimized channel factories. Critics worry about potential overreach, saying covenants might limit fungibility or open the door to intrusive policy scripts. While still an active discussion, BIP 119 reflects ongoing efforts to expand Bitcoin's scripting abilities within the existing framework.
