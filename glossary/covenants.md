---
title: "Covenants"
slug: covenants
draft: false
shortDefinition: "Scripts that impose conditions on how outputs are spent in the future, as proposed by BIP 119’s CTV or other covenant designs."
keyTakeaways:
  - "Adds spending constraints beyond typical ownership rules"
  - "Could enable vaults, advanced channel operations, or batch spending"
  - "Debated in the community due to potential implications for coin fungibility"
sources: []
relatedTerms:
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - clawback-mechanism
  - coin-freeze
  - coin-plasma
  - colored-coins
  - counterparty-risk
  - covariance-transaction
  - op-code-operation-code
  - script
  - scriptless-scripts
liveWidget: ~
---

Covenants extend Bitcoin’s script to dictate not just who can spend an output, but also how those coins can be spent down the line. For example, you might enforce that funds can only go to specific addresses or require certain transaction formats. BIP 119’s [CheckTemplateVerify (CTV)](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki) is one approach to implementing these constraints.
Supporters argue covenants unlock new use cases: vaults with restricted withdrawal patterns, channel factories, or mass coin management. Critics worry about potential censorship or reduced fungibility if covenants become widespread. Nonetheless, the idea of limiting future transaction paths intrigues developers seeking more robust on-chain contracts without fully replicating a Turing-complete environment.
