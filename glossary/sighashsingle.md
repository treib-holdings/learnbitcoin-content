---
title: "SIGHASH_SINGLE"
slug: sighashsingle
draft: false
shortDefinition: "一种签名标志，只签名对应索引的输出，允许部分或特殊的交易修改。"
keyTakeaways:
  - "将一个输入绑定到单个匹配的输出索引"
  - "允许部分交易修改而不使现有签名失效"
  - "相比标准 SIGHASH_ALL，安全使用更复杂"
sources: []
relatedTerms:
  - bitcoin-script
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - sighash
  - sighashanyonecanpay
  - transaction
liveWidget: ~
---

`SIGHASH_SINGLE` 只签名与被签输入相同索引的输出。其他输出可以改变而不使签名失效。

使用场景：构建一笔交易，你的贡献是"把我的币发到这个特定目的地"，但你不在乎交易中其他输入或输出是什么。原子互换、互不信任方之间的部分组装，以及某些市场构造会用到它。

SegWit 之前它有一个著名的陷阱。如果输入索引大于输出数量，sighash 算法会回退到一个常数值（整数 1）。任何人都可以对一笔不相关的交易重放该签名。这个 bug 很早被发现并被工具作者绕过。BIP 143（SegWit sighash）为 SegWit 输入干净地消除了它，Taproot 的 sighash（BIP 341）则彻底关上了这扇门。

除特定协议设计外，`SIGHASH_SINGLE` 很少是正确的选择。`SIGHASH_ALL` 是默认值是有原因的：它承诺一切，留下最小的攻击面。
