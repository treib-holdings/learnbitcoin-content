---
title: "CheckTemplateVerify (CTV)"
slug: checktemplateverify-ctv
draft: false
shortDefinition: "Proposed BIP-119 opcode allowing 'template covenants,' restricting how outputs can be spent in future transactions."
keyTakeaways:
  - "Allows restricting future transaction shapes (template covenants)"
  - "Potentially beneficial for vaults or batch payment features"
  - "Debated due to concerns about restricting coin fungibility"
sources: []
relatedTerms:
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - covenants
  - op-code-operation-code
  - script
  - scriptless-scripts
liveWidget: ~
---

CTV, from [BIP-119](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki), introduces a technique to specify exactly which transaction layout can spend your coins. Think of it as providing a 'template' for all future spending paths. This mechanism, sometimes referred to as a covenant, can limit outputs to a predefined set of addresses or structure.
Supporters argue that it enables batch channel openings, vault designs, and efficient coin management with minimal trust. Detractors worry about potential overreach, where forced spending constraints could lead to fungibility or censorship concerns. Nevertheless, CTV highlights the ongoing interest in expanding Bitcoin's smart contract capabilities without sacrificing simplicity and security.
