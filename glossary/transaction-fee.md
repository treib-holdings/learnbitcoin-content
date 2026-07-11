---
title: "交易手续费"
slug: transaction-fee
draft: false
shortDefinition: "发送方包含的金额，用于奖励矿工优先处理交易确认。"
keyTakeaways:
  - "激励矿工将你的交易包含在区块中"
  - "计算方式为输入总额减去输出总额"
  - "根据网络拥堵和区块空间需求动态变化"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - coinbase-transaction
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - mining-subsidy
  - replace-fee-rbf
  - transaction
  - transaction-chaining
sameAs:
  - "https://en.bitcoin.it/wiki/Miner_fees"
liveWidget: ~
---

交易手续费是你付给[矿工](/glossary/miner)以将你的[比特币交易](/glossary/transaction)包含在区块中的费用。机制上，它是输入值之和与输出值之和的差额——你没有显式发送到某个输出的部分，由确认交易的矿工收集。

手续费以*费率*而非总额报价：**每虚拟字节聪（sat/vB）**。同一费率下，更大的交易手续费更高。典型交易大小：

- 简单 [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)（1 输入，2 输出）：约 140 vB
- [Taproot](/glossary/taproot)（1 输入，2 输出）：约 110 vB
- 2-of-3 多签：约 250 vB
- 多输入合并：500+ vB

在 10 sat/vB 下，分别需要 1,400 / 1,100 / 2,500 / 5,000+ 聪。实际手续费根据网络拥堵波动很大。

费率市场动态：

- **低拥堵期。** 费率降至 1-3 sat/vB。大多数交易在下一个区块确认。
- **高拥堵期。** 费率飙升。2024 年初 Ordinals 铸币潮期间，下一区块费率偶尔触及 500+ sat/vB。
- **估算器驱动的默认值。** 你的钱包使用[费用估算](/glossary/fee-estimation)选择合理费率。大多数钱包做得对；如果你理解权衡可以手动覆盖。
- **费用提升**（[RBF](/glossary/replace-fee-rbf)、[CPFP](/glossary/fee-bumping)）在你付少了被卡住时可用。

长期来看，交易手续费会成为矿工*唯一*的激励。目前它们约占[区块奖励](/glossary/block-reward)收入的 3-10%；随着[区块补贴](/glossary/block-subsidy)在 2140 年左右减半至零，手续费将变为 100%。今天存在的费率市场是比特币需要在补贴后维持安全性的费率市场的小预览。

参见[节点页面](/node/)上的实时内存池费率带，或[挖矿深度指南 §6](/rabbit-hole/mining)。
