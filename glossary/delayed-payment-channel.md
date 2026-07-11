---
title: "延迟支付通道"
slug: delayed-payment-channel
draft: false
shortDefinition: "一种闪电通道变体，对一方的资金强制等待期，确保在作弊时有时间执行惩罚交易。"
keyTakeaways:
  - "通道对某些输出内置等待期"
  - "通过给予时间执行惩罚来确保安全"
  - "在闪电网络的信任模型与用户定义的流动性约束之间平衡"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
  - locktime
  - payment-channel
liveWidget: ~
---

"延迟支付通道"是标准闪电通道设计的描述性名称，其中每一方在单方面广播的承诺中的自有余额被 [CSV](/glossary/checksequenceverify-csv) 时间锁锁定一定数量的区块后才能花费。

机制与[延迟正义交易](/glossary/delayed-justice-transaction)的故事相同：当你广播自己的最新承诺以单方面关闭通道时，你的自有余额获得一个 CSV 锁定输出（通常 144-2016 个区块），而对手方的余额立即可花费。这种不对称并非不公平；是故意的。延迟是对手方可以惩罚你的窗口——如果你的"最新承诺"最终是过时的（[惩罚交易](/glossary/penalty-transaction)席卷）。

对于用户，实际要点：

- **合作关闭是快速的。** 当双方同意关闭时，通道产生正常的链上交易，没有 CSV 延迟。资金在一次确认后可用。
- **单方面强制关闭是慢的。** 如果你没有对手方合作就关闭，预期要等待 `to_self_delay`（通道开启时协商的值）后自有余额才可花费。
- **延迟也保护你。** 当对手方强制关闭时，同样的 CSV 延迟适用于他们的余额，给你（或你的瞭望塔）时间响应——如果他们的广播是作弊尝试的话。

"延迟支付通道"不是标准闪电网络词汇——大多数文档只叫它"闪电通道"，将 CSV 延迟视为实现细节。该短语存在于一些旧词汇表中，以强调不对称延迟作为设计的定义特征。

[Eltoo](/glossary/eltoo) 式通道（依赖 SIGHASH_ANYPREVOUT，尚未激活）将软化这种不对称：任何更新的状态自动使旧状态失效，移除单方面广播-然后等待-然后惩罚的需求。
