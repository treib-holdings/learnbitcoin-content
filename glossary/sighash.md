---
title: "SIGHASH"
slug: sighash
draft: false
shortDefinition: "指定交易中哪些部分被签名。选项包括 ALL、NONE、SINGLE 和 ANYONECANPAY。"
keyTakeaways:
  - "控制签名锁定交易的多少内容"
  - "SIGHASH_ALL 是典型交易的默认值"
  - "高级标志支持部分或灵活的交易修改"
sources: []
relatedTerms:
  - bitcoin-script
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - sighashanyonecanpay
  - sighashsingle
  - transaction
liveWidget: ~
---

SIGHASH 标志告诉签名算法，签名承诺了交易的哪些部分。默认是 `SIGHASH_ALL`：签名覆盖每个输入和每个输出，任何地方的任何改动都会使签名失效。几乎所有比特币交易都用这个。

非默认标志用于特定的构造模式：

- `SIGHASH_NONE`——签名覆盖输入但不覆盖输出。完成交易的人可以改写资金去向。小众场景，主要在教程中被引用，实践中很少使用。
- `SIGHASH_SINGLE`——签名只覆盖与此输入相同索引的输出。其他输出可以改变。适用于你只关心自己目的地的报价和互换场景。
- `SIGHASH_ANYONECANPAY`（一个修饰符，与其他标志 OR 运算）——签名只承诺此输入，不承诺其他输入。任何人都可以添加更多输入而不破坏你的签名。众筹式和 PayJoin 式流程的基础。

Taproot（BIP 341）为 Schnorr 时代重新设计了 sighash 算法，修复了一个长期存在的 `SIGHASH_SINGLE` bug，并添加了 `SIGHASH_DEFAULT`（功能等同于 `SIGHASH_ALL` 但不需要编码，省一个字节）。SegWit 的 BIP 143 已经修复了使 SegWit 之前 sighash 在多输入交易上变慢的二次哈希问题。

大多数用户永远不会直接接触 SIGHASH。钱包会选择 `SIGHASH_ALL`（或在 Taproot 下 `SIGHASH_DEFAULT`），这是正确的选择。
