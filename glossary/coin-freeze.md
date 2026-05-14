---
title: "Coin Freeze"
slug: coin-freeze
draft: false
shortDefinition: "A script-based technique that prevents UTXOs from being spent until a specified future date or block height."
keyTakeaways:
  - "Relies on locktime opcodes (CLTV/CSV)"
  - "Ideal for time-delayed payments or savings"
  - "Temporarily restricts on-chain liquidity"
sources: []
relatedTerms:
  - burn-address
  - clawback-mechanism
  - coin-control
  - colored-coins
  - covenants
  - escrow
liveWidget: ~
---

Coin Freeze uses time-lock opcodes like OP_CHECKLOCKTIMEVERIFY (CLTV) or OP_CHECKSEQUENCEVERIFY (CSV) to lock up funds temporarily. Imagine placing your coins in a digital vault sealed until a particular block height or timestamp. While this can help enforce delayed payouts or protect funds from impulsive spending, it also reduces liquidity.
Some use cases include trustless escrows, strategic saving plans, or inheritance setups where heirs only gain access after a set date. The key is crafting a script that enforces the freeze, ensuring no transactions can spend these UTXOs prematurely. Once the locktime condition is met, the funds become spendable just like any other output.
