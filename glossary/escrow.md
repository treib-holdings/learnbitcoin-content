---
title: "托管"
slug: escrow
draft: false
shortDefinition: "由中立方或机制持有资金，直到满足特定条件。"
keyTakeaways:
  - "在不确定的交易中保护买卖双方"
  - "可使用第三方或多签脚本"
  - "通过在约定条件满足前扣留付款来减少欺诈风险"
sources: []
relatedTerms:
  - clawback-mechanism
  - coin-freeze
  - counterparty-risk
  - custodial-wallet
  - escrowed-lightning-channel
  - htlc-hashed-time-locked-contract
  - payment-channel
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

托管是在特定条件满足前将资金保持在中立安排中的做法。在比特币中，托管可以通过信任第三方（托管式托管）或使用密码原语使托管无信任（基于脚本或基于 HTLC 的托管）来实现。

比特币原生托管模式：

- **2-of-3 多签。** 买方、卖方和可信仲裁人各持一把密钥。任意两把签名释放资金。在正常路径中，买方+卖方一起签名释放给卖方。如有争议，仲裁人选边。这是经典比特币托管设置；在 Bisq 和 HodlHodl 等点对点比特币交易平台中广泛使用。
- **[基于 HTLC 的托管](/glossary/htlc-hashed-time-locked-contract)。** 通过揭示原像释放资金。卖方持有原像；交付商品后揭示。如果在截止日期前未揭示，资金退还买方。用于[原子交换](/glossary/atomic-swap)和[潜艇交换](/glossary/submarine-swap)。
- **[ZKCP](/glossary/zkcp-zero-knowledge-contingent-payment)。** 用于交易数字数据，卖方在付款释放前以密码方式证明其拥有所声称的内容。
- **时间锁托管。** 如果没有采取其他行动，资金在截止日期后自动释放给特定方。适用于截止日期和死人开关模式。

为什么基于脚本的托管优于信任方托管：

- **第三方不能携款潜逃。** 在 2-of-3 中，仲裁人只有一把签名——永远不够单独花费。
- **无托管责任。** 托管代理从不保管资金；他们只持有一把签名密钥。
- **可审计性。** 托管条件是链上脚本逻辑，不是由法院解释的合同语言。
- **更低成本。** 除了少量比特币交易手续费外，无托管服务费。

2026 年的现实比特币托管服务：Bisq、HodlHodl、Robosats（基于闪电网络）以及各种较小的点对点市场。大多数信誉良好的比特币交易通过某种形式的无信任托管而非托管中介进行。

闪电网络托管底层原语参见 [HTLC](/glossary/htlc-hashed-time-locked-contract)，链上托管底层多签模式参见[层次化多签](/glossary/hierarchical-multisig)。
