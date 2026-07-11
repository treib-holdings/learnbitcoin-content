---
title: "SIGHASH_ANYONECANPAY"
slug: sighashanyonecanpay
draft: false
shortDefinition: "一种签名标志，允许其他参与者向交易添加输入而不使现有签名失效。"
keyTakeaways:
  - "将签名隔离为仅签名者自己的输入"
  - "在多输入交易中支持部分签名"
  - "适用于 CoinJoin 式流程或灵活的交易构建"
sources: []
relatedTerms:
  - bitcoin-script
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - sighash
  - sighashsingle
  - transaction
liveWidget: ~
---

`SIGHASH_ANYONECANPAY` 是一个修饰标志（与 `SIGHASH_ALL`、`SIGHASH_NONE` 或 `SIGHASH_SINGLE` 进行 OR 运算），告诉签名者"只承诺此输入，不承诺其他输入"。任何人之后都可以向交易添加更多输入而不破坏你的签名。

它支持多方共同贡献一笔共享交易而不需要互相信任的模式：

- 众筹：发布的部分交易设定了接收输出；支持者各自添加一个用 `SIGHASH_ALL | SIGHASH_ANYONECANPAY` 签名的输入。当输入总额覆盖输出时，任何人都可以广播。
- PayJoin（BIP 78）式流程，发送方和接收方各自贡献输入，结果对外部观察者来说看起来就是一笔普通交易。
- 在 Replace-by-Fee 之前的费用提升设计中的费用追加，不过现在 [RBF](/glossary/replace-fee-rbf) 和 CPFP 能更好地处理这个需求。

它是一个功能强大但有锋利边缘的标志。用 `SIGHASH_NONE | SIGHASH_ANYONECANPAY` 签名等于签了"随便怎么花我的 UTXO"，这几乎不是任何人的本意。临时构建的安全默认是 `SIGHASH_ALL | SIGHASH_ANYONECANPAY`：我的输入已承诺，输出已固定，其余开放。
