---
title: "Bitcoin Script"
slug: bitcoin-script
draft: false
shortDefinition: "The built-in scripting language defining spending conditions (e.g., single-sig, multisig) in Bitcoin transactions."
keyTakeaways:
  - "Specifies the conditions to spend BTC outputs"
  - "Stack-based and deliberately limited for security"
  - "Can form complex contracts with features like multisig or time locks"
sources: []
relatedTerms:
  - adapter-signature
  - bip-16-p2sh
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bip-342-tapscript
  - bitcoin-pizza-day
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - merkleized-abstract-syntax-tree-mast
  - op-code-operation-code
  - opreturn
  - p2sh-pay-script-hash
  - script
  - scriptless-scripts
  - taproot
liveWidget: ~
---

Bitcoin Script is like a stack-based set of instructions that outlines how funds can be spent. For example, a typical pay-to-pubkey-hash script demands a valid signature from the holder of the corresponding private key. More advanced scripts enable multi-signature arrangements, time locks, or other conditional logic.
Unlike more flexible Turing-complete languages, Bitcoin Script is intentionally limited to enhance security and mitigate attack vectors. That said, developers continue to extend its functionality via soft forks (like Taproot). Although it's not the easiest language to master, understanding Script opens the door to creative on-chain contracts and advanced features.
