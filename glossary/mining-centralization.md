---
title: "挖矿中心化"
slug: mining-centralization
draft: false
shortDefinition: "对比特币大部分算力可能集中在少数大型矿池中的担忧，构成 51% 威胁。"
keyTakeaways:
  - "大型矿池如果不受监控可能超过网络算力的 50%"
  - "危险包括双花、审查或信任破裂"
  - "解决方案：用户警惕、矿池切换或去中心化矿池协议"
sources: []
relatedTerms:
  - competitive-block-propagation
  - competitive-mining
  - decentralization
  - energy-fud
  - geographic-mining-distribution
  - hidden-miner-tax
  - miner-capitulation
  - miner-extractable-value-mev
  - mining
  - mining-pool
  - mining-algorithm
  - retail-mining
liveWidget: ~
---

挖矿中心化是对比特币[算力](/glossary/hash-rate)集中在太少人手中的担忧，这可能破坏比特币依赖的[去中心化](/glossary/decentralization)属性。

2026 年的结构现实：

- **少数[矿池](/glossary/mining-pool)协调大部分算力。** Foundry USA、AntPool、ViaBTC、F2Pool 等几个合计控制全球算力的一半以上。
- **少数 [ASIC](/glossary/asic-application-specific-integrated-circuit) 制造商供应大部分硬件。** Bitmain、MicroBT、Canaan 等少数几家。
- **少数司法管辖区托管大部分挖矿。** 美国是最大的，其次是其他国家，取决于年份。中国 2021 年的禁令大幅改变了地理分布。

实践中的含义：

- **协调攻击在理论上是可能的。** 集体控制 >50% 算力的矿池可以尝试重组最近的区块、审查特定交易或双花自己的输出。这些在大规模上尚未在比特币上发生过，但能力存在。
- **存在单一施压点。** 想要审查比特币交易的政府原则上可以施压其管辖范围内的矿池运营者使其合规。这已在较温和的形式中被观察到（一些矿池自愿过滤了 OFAC 制裁地址）。

制衡因素：

- **矿池不是矿工。** 矿池内的算力来自可以在数小时内切换矿池的个体矿工。行为不当的矿池往往会快速流失算力。
- **Stratum V2 进展。** 新的矿池-矿工协议将交易选择从矿池运营者转移到个体矿工。采用是渐进的但方向正确。
- **地理分散性已改善。** 与 2018-2020 年约 65% 算力在中国相比，网络现在分布在更多国家。
- **挖矿硬件是可替换的。** 矿工可以且确实在短期内通过不同矿池、不同司法管辖区路由算力。

诚实评估：挖矿中心化是一个有真实失败模式的真实担忧，但结构性制衡也是真实的。这是一个值得关注的领域，值得通过 Stratum V2 采用和矿池运营者审查来推进，也值得不必恐慌。请参阅[挖矿深入探讨 §8](/rabbit-hole/mining)了解更多。
