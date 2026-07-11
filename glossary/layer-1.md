---
title: "第一层"
slug: layer-1
draft: false
shortDefinition: "比特币主网区块链，交易在完整的工作量证明共识下在链上结算。"
keyTakeaways:
  - "比特币安全和结算的基础"
  - "吞吐量受限，导致了第二层扩展"
  - "矿工和全节点共同执行共识"
sources: []
relatedTerms:
  - bitcoin-core
  - block
  - consensus-parameter
  - full-node
  - lightning-network
  - off-chain
  - proof-work-pow
  - second-layer
liveWidget: ~
---

第一层是比特币的基础链——由[工作量证明](/glossary/proof-work-pow)保护的账本，每笔确认的交易最终都在此结算。它是比特币架构中安全性最高、最终性最强，但也是最慢、最昂贵的层级。

第一层上的内容：

- **每个 UTXO**，由[私钥](/glossary/private-key)或脚本直接控制。
- **每笔链上交易**，由每个[全节点](/glossary/full-node)根据比特币共识规则验证。
- **[区块补贴](/glossary/block-subsidy)**的发行。
- [闪电网络](/glossary/lightning-network)的**通道开启和关闭**。
- [侧链](/glossary/sidechain)的**锚入和锚出**。
- **任何最终回归 BTC 所有权的第二层活动结算**。

第一层优化的属性：

- **最终性。** 一旦交易被足够多的区块覆盖，它实际上是永久的。[最长链规则](/glossary/longest-chain-rule)和累积的工作量证明使重写成本超过任何合理攻击者能承受的范围。
- **抗审查。** 没有任何方可以阻止特定交易最终被挖出。矿工可能尝试，但其他不这样做矿工也存在。
- **可验证性。** 每个节点为自己验证一切。不需要信任。
- **2100 万上限执行。** [供应渐近线](/glossary/asymptote)在这里由每个节点、每个区块执行。

第一层*未*优化的方面：

- **吞吐量。** 平均约每秒 7 笔交易，有不会改变的上限。
- **即时支付。** 确认平均需要约 10 分钟；完全结算需要更长时间。
- **微支付。** 手续费使低价值支付在基础层不经济。

这些限制是*特性*而非缺陷。它们使基础链足够安全，成为世界的最终结算层。[第二层](/glossary/second-layer)解决方案如闪电网络处理基础层限制所排除的用例。

第一层是比特币中不变的部分。其他一切都建立在它之上。
