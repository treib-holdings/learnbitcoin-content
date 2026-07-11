---
title: "手续费估计"
slug: fee-estimation
draft: false
shortDefinition: "根据当前网络条件预测在特定时间范围内确认所需的 sat/vByte 费率。"
keyTakeaways:
  - "帮助用户避免多付或少付交易手续费"
  - "涉及读取内存池积压和近期区块纳入率"
  - "在突发网络活动时可能快速波动"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

手续费估计是钱包的工作，预测你需要支付多少聪/虚拟字节（sat/vB）才能在目标区块数内确认[交易](/glossary/transaction)。付太少就等；付太多就多付。

估计基于两个信号构建：

- **当前[内存池](/glossary/mempool)状态。** 每个手续费率有多少未确认交易数据排队？内存池越满，底线越高。
- **近期区块历史。** 最近几个区块实际纳入了什么手续费率？这将估计锚定到矿工当前接受的费率。

Bitcoin Core 通过 `estimatesmartfee` RPC 暴露自己的估计器；这是大多数节点和钱包参考的，有时混合第三方数据源。估计分层提供：下一区块、约 3 区块、约 6 区块、约 24 区块。更低紧迫性意味着更低手续费。

在低流量时期，估计器通常在所有层级返回 1 sat/vB——中继最低值。在拥堵事件中（Ordinals 铸造、交易所提现风暴、市场恐慌），下一区块估计可以在几分钟内飙升到数百 sat/vB。

估计是*猜测*。如果你少付卡住了，参见[手续费加价](/glossary/fee-bumping)。实时手续费市场可在[挖矿深入探讨 §6](/rabbit-hole/mining)和[节点页面](/node/)查看。
