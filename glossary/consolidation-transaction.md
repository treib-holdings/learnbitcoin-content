---
title: "合并交易"
slug: consolidation-transaction
draft: false
shortDefinition: "将多个小 UTXO 合并为单个输出的交易，通常在低手续费期间进行。"
keyTakeaways:
  - "将小 UTXO 合并为更少、更大的输出"
  - "减少未来交易手续费和钱包杂乱"
  - "如果输入来自不同地址，可能损害隐私"
sources: []
relatedTerms:
  - batch-transaction
  - bitcoin-days-destroyed
  - coin-age
  - transaction
  - transaction-chaining
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

合并交易将许多小 [UTXO](/glossary/utxo-unspent-transaction-output) 合并为一个更大的输出。它是钱包积累了大量小输入后的清理操作。

动机是手续费效率。[交易](/glossary/transaction)中的每个输入占用字节（大约 68-148 字节，取决于脚本类型），更大的交易[手续费](/glossary/fee-estimation)更高。如果你有 50 个小 UTXO 并想在以后花费它们，每笔触及其中多个的未来交易都要为所有这些输入字节付费。在低手续费期间合并意味着现在一次性支付字节费用，之后每次花费都省钱。

实际步骤：

1. **等待低手续费窗口。** 关注[内存池](/glossary/mempool)，当下一个区块手续费降至 1-3 sat/vB 时合并。空闲周末和 rally 后平静期是常见窗口。
2. **精心选择 UTXO。** 合并来自不同来源的 UTXO 会公开链接它们。如果你一直在小心翼翼地将某些地址保持独立以保护隐私，*不要*在一次合并交易中组合它们。
3. **发送到自己钱包的新地址。** 输出是一个由你控制的单一新 UTXO。

隐私权衡是真实的。合并告诉公开链："这些 UTXO 都属于同一个所有者。"如果它们来自 KYC 来源或不同的身份背景，你刚刚链接了它们。当隐私很重要时，正确的做法是合并*已经公开链接*的 UTXO（来自同一来源，已经一起使用过），而不是混合孤立的 UTXO。

交易所和商家将此作为常规操作。个人用户通常每几个月合并一次（如果有的话）。此功能解决的小 UTXO 问题参见[粉尘](/glossary/dust)。
