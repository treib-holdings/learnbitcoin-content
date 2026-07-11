---
title: "输入（交易输入）"
slug: input-transaction-input
draft: false
shortDefinition: "对正在被花费的特定 UTXO 的引用，包含解锁这些资金的签名。"
keyTakeaways:
  - "标识正在花费哪个 UTXO"
  - "必须包含有效的签名/见证数据"
  - "多个输入可以共同资助一笔交易"
sources: []
relatedTerms:
  - bitcoin-script
  - coinbase-transaction
  - output-transaction-output
  - segwit-segregated-witness-bip-141
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
---

交易输入是指向正在被花费的 [UTXO](/glossary/utxo-unspent-transaction-output)（未花费交易输出）的指针，加上证明花费者有权花费它的证据。

每个输入通过其来源 **txid**（创建它的交易）和 **输出索引**（该交易的哪个输出）来引用 UTXO。它还携带解锁数据——对于传统交易是数字签名，对于 SegWit 交易是见证数据——用于满足 UTXO 的锁定脚本。

一笔[交易](/glossary/transaction)可以包含多个输入。在一笔交易中花费三个 UTXO 意味着三个输入，每个都需要各自的有效签名。如果任何一个输入验证失败，整笔交易会被每个节点拒绝——输入与其所属交易是原子性的。

一旦交易确认，它引用的每个输入都被永久消耗。尝试重复使用已花费的 UTXO 就是[双花](/glossary/double-spend)尝试；网络会拒绝它。
