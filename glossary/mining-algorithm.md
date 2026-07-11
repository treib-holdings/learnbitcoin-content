---
title: "挖矿算法"
slug: mining-algorithm
draft: false
shortDefinition: "比特币使用 SHA-256 双重哈希（SHA-256D）进行工作量证明。其他币可能使用替代 PoW 算法。"
keyTakeaways:
  - "比特币 PoW 的核心，需要专用 ASIC 硬件"
  - "双重哈希设计增强抗碰撞性"
  - "脱离 SHA-256 将是重大颠覆性变动"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - asic-resistance
  - competitive-mining
  - cpu-mining
  - difficulty-retargeting
  - energy-fud
  - hash-rate
  - hash-rate-derivative
  - hashlet
  - hidden-miner-tax
  - merged-mining
  - miner
  - miner-capitulation
  - miner-extractable-value-mev
  - mining
  - mining-pool
  - mining-centralization
  - mining-colocation
  - mining-rig
  - mining-software
  - proof-work-pow
  - retail-mining
  - revenue-ths
liveWidget: ~
---

比特币的挖矿算法是 **SHA-256d**——SHA-256 的双重应用（`SHA-256(SHA-256(header))`）。[矿工](/glossary/miner)在候选[区块头](/glossary/block-header)上计算这个哈希，直到结果低于当前[难度](/glossary/difficulty)目标。

双重哈希设计并非随意。它防御**长度扩展攻击**——单向 SHA-256 的一个已知弱点，知道 `SHA-256(x)` 的攻击者可以在不知道 `x` 的情况下计算 `SHA-256(x || y)`。双重哈希破坏了这个属性。代价是哈希操作的计算开销增加 2 倍；安全收益被认为值得。

其他加密货币使用不同算法——Scrypt（莱特币）、Ethash（旧版以太坊）、RandomX（门罗）、Equihash（Zcash）等。每个设计选择反映了优先级：抗 ASIC、内存硬度、能源效率或仅仅是协议差异化。

对于比特币，SHA-256d 被锁定因为：

- **巨大的硬件沉没成本。** 全球比特币挖矿业已在 SHA-256 专用 [ASIC](/glossary/asic-application-specific-integrated-circuit) 上投入数十亿。更改算法将使所有这些硬件变废铁。
- **需要硬分叉。** 任何算法更改都是[硬分叉](/glossary/fork)，比特币的共识机制使部署几乎不可能。
- **没有真正更改的需求。** SHA-256 在 25 年以上的密码分析中未被攻破。切换的安全论据不成立。

算法选择是比特币设计中最永久的部分之一。即使关于"后量子迁移"的讨论也集中在签名方案（ECDSA → 抗量子签名）上，而非哈希算法。SHA-256 将长期存在。请参阅[工作量证明](/glossary/proof-work-pow)了解该算法是其引擎的更广泛机制。
