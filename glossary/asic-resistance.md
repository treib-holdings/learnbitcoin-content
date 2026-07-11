---
title: "抗 ASIC"
slug: asic-resistance
draft: false
shortDefinition: "设计让 ASIC 难以优化或不太值得优化的工作量证明算法的概念，比特币并不追求这一目标。"
keyTakeaways:
  - "试图阻止专用挖矿硬件"
  - "通常依赖频繁变更或复杂算法"
  - "不是比特币 SHA-256 PoW 的设计目标"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - asicboost
  - cpu-mining
  - mining-algorithm
  - mining-centralization
liveWidget: ~
---

"抗 ASIC"是一些加密货币（大多已失败）试图设计不受益于专用硬件的工作量证明算法的努力。想法是如果每个人都用通用 CPU 或 GPU 挖矿，挖矿就保持在家矿工中去中心化，而不是集中在工业矿场。

抗 ASIC 的历史本质上是"每次尝试最终都会出现 ASIC"：

- **Scrypt**（Litecoin，2011 年）。设计为需要比 CPU/GPU 能提供的更多内存。ASIC 于 2014 年到来。
- **Ethash**（Ethereum，2015 年）。内存硬，DAG 不断增长。ASIC 于 2018 年到来。
- **RandomX**（Monero，2019 年）。大量使用随机代码执行来阻止硬件优化。比前辈表现更好，但压力仍在。
- **ProgPoW**（提出但从未部署）。会定期更改算法以打乱 ASIC 制造商的多年摊销计划。

**比特币明确不追求抗 ASIC。** 原因：

- **抗 ASIC 充其量是暂时的。** 任何足够有利可图的算法最终都会吸引专用硬件。结果只是挖矿硬件不断淘汰的循环。
- **专业化实际上是安全特性。** 比特币 ASIC 除了 SHA-256 挖矿外毫无用处。这意味着全球挖矿产业已经*沉没*数十亿美元到只能用于保护比特币的硬件中。将那些硬件转用于攻击网络会摧毁其自身价值。这是一个强有力的承诺机制。
- **稳定的算法 enabling 稳定的挖矿基础设施。** 可预测的硬件生命周期让矿工建立长期运营。

比特币的押注：接受专业化，建立深厚的 ASIC 生态系统，依靠制造商和矿工之间的竞争来维持健康的去中心化。这个押注并不完美——制造商集中是真实的——但不断更换算法的替代方案有更糟糕的失败模式。

参见 [ASIC](/glossary/asic-application-specific-integrated-circuit)了解硬件本身，[挖矿中心化](/glossary/mining-centralization)了解行业集中的真实担忧。
