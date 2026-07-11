---
title: "交易加速器"
slug: accelerator
draft: false
shortDefinition: "一种第三方服务，旨在更快地重新广播或将你的交易纳入区块，通常需要付费。"
keyTakeaways:
  - "提供更快的交易确认，需支付额外费用"
  - "在网络高度拥堵时有用"
  - "依赖矿工或矿池配合"
sources: []
relatedTerms:
  - fee-bumping
  - fee-estimation
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

交易加速器是一种第三方服务，帮助卡住的未确认交易更快被纳入区块，通常通过向矿池支付额外费用来优先处理。

典型加速器服务的工作流程：

1. 用户将卡住的交易 txid 提交到加速器的网页表单。
2. 服务通过传统支付渠道或单独的链上交易向参与矿池直接付款。
3. 矿池在其区块模板中优先处理该交易：无论交易的链上费率如何，只要矿池挖到区块就将其纳入。
4. 如果矿池挖到区块，交易即被确认。

历史上的两种类型：

- **免费加速器**（早期的 ViaBTC、BTC.com）：如果交易达到某个最低费率，免费重新广播。当广播方比用户有更广泛的节点连接时，对提升略微低于市场费率的交易有用。
- **付费加速器**（ViaBTC 的商业服务、Mempool.space 的矿池资助服务等）：向参与矿池支付真金白银以纳入你的交易。

为什么现在基本被淘汰了：

- **RBF 已普及。** Replace-by-Fee（特别是在 2024 年 Bitcoin Core 28.0 默认启用 full-RBF 后）让你自己就能提升卡住交易的费率。不需要第三方。
- **CPFP 也可行。** Child-Pays-For-Parent 让你以高费率花费卡住交易的输出，将两笔交易拉入同一个区块。
- **内存池透明度。** mempool.space 等费用估算工具让人一开始就很难被卡住。

加速器是强制 opt-in RBF 时代的权宜之计，那时许多交易以不可替换的方式广播，无法提升手续费。有了默认 RBF 后，加速器的使用场景主要限于遗留的非 RBF 交易，或原始发送方丢失了签名钱包的交易。对于 2026 年普通的卡住交易：用 RBF 提升手续费就好。
