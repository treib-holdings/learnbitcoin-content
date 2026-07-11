---
title: "手续费底线"
slug: fee-floor
draft: false
shortDefinition: "非官方的最低手续费率，低于此值的交易在繁忙内存池条件下很少被挖出。"
keyTakeaways:
  - "反映拥堵期间最低竞争手续费率"
  - "低于此值的交易可能长时间未确认"
  - "内存池清空或网络活动下降时可能降低"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-estimation
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

手续费底线是实际最低手续费率（以 sat/vByte 为单位），低于此值的比特币交易不太可能在合理时间范围内确认。它不是单一的协议级常量；它是[内存池](/glossary/mempool)状态和矿工行为在任一时刻的涌现属性。

两个经常被混淆的相关概念：

- **中继策略最低值。** Bitcoin Core 默认*接受*交易进入内存池的最低值：1 sat/vB。低于此值，Core 节点根本不中继交易。Knots 和其他实现可以设置更高。
- **市场底线。** 当前被挖出的最便宜交易实际支付的手续费率。拥堵期间可以远高于中继最低值；安静时期等于中继最低值。

市场底线的行为：

- **空闲时期（2024-2026 年典型的低流量时期）：** 最便宜的被挖交易支付 1-2 sat/vB。几乎任何交易都能进入。
- **中等拥堵：** 5-20 sat/vB 底线。最低手续费交易在内存池中等待数小时。
- **严重拥堵（Ordinals 铸造、交易所出逃、市场恐慌）：** 底线飙升至 50-500+ sat/vB。低于此值的交易可能等待数天或被驱逐。

什么决定底线：

- **区块空间固定。** 每个区块约 4MB 等效重量，每天约 144 个区块 = 有界吞吐量。
- **需求变化剧烈。** 几小时内峰值可达基线的 10 倍。
- **矿工按手续费率打包。** 最高手续费的交易先进入；低手续费的排队。

手续费底线不由任何人执行。它只是当交易需求超过区块空间时发生的事情。现代钱包做[手续费估计](/glossary/fee-estimation)来设置舒适超过当前底线的费率；激进用户有时少付并依赖 [RBF](/glossary/replace-fee-rbf) 在需要时加价。

长期来看，随着[区块补贴](/glossary/block-subsidy)下降和矿工收入更多依赖手续费，手续费底线变得更有意义。2140 年的终局需要手续费单独资助挖矿；该条件下的底线必须高到足以维持网络安全。
