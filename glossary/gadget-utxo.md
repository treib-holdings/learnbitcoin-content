---
title: "Gadget UTXO"
slug: gadget-utxo
draft: false
shortDefinition: "A catch-all term for outputs used in advanced crypto constructs (e.g., payment channels, covenants, DLCs)."
keyTakeaways:
  - "Refers to outputs enabling sophisticated on-chain contracts"
  - "Often leverages time locks, multi-sig, or specialized scripts"
  - "Essential for advanced layer-2 and smart contract designs in Bitcoin"
sources: []
relatedTerms:
  - coin-plasma
  - coinjoin
  - payjoin
  - shielded-coinjoin
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
---

Gadget UTXOs serve specialized purposes beyond standard wallet-to-wallet transfers. For instance, a Lightning Network channel commit transaction or a Discreet Log Contract (DLC) funding output might be considered a 'gadget.' These outputs often rely on more complex scripts or opcodes, potentially involving time locks, multi-sig conditions, or other advanced features. By bundling extra logic into the UTXO itself, developers can build higher-level functionality without altering Bitcoin's consensus at the base layer.
