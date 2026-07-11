---
title: "工作量证明（Proof-of-Work，PoW）"
slug: proof-work-pow
draft: false
shortDefinition: "比特币的共识机制，矿工计算 SHA-256 哈希直到找到满足目标难度的有效区块哈希。"
keyTakeaways:
  - "需要大量计算工作才能提出有效区块"
  - "通过使攻击成本高到不可行来确保安全"
  - "比特币去中心化共识设计的基础"
sources: []
relatedTerms:
  - anti-sybil-mechanism
  - byzantine-fault-tolerance
  - consensus-parameter
  - decentralization
  - difficulty
  - difficulty-retargeting
  - energy-fud
  - grovers-algorithm
  - hash
  - incentive-compatibility
  - nonce
  - nonce-exhaustion
  - poisson-process
sameAs:
  - "https://en.wikipedia.org/wiki/Proof_of_work"
  - "https://www.wikidata.org/wiki/Q7249984"
  - "https://en.bitcoin.it/wiki/Proof_of_work"
liveWidget: ~
---

工作量证明是比特币的共识机制。它是将电力和时间转化为向链上添加新区块权利的规则。

机制很简单。要提出一个区块，[矿工](/glossary/miner)必须产生一个[区块头](/glossary/block-header)，其[哈希](/glossary/hash)低于网络定义的目标。唯一的办法就是尝试[随机数](/glossary/nonce)直到碰巧产生一个足够低的哈希。没有代数方法，没有捷径。"工作"就是在工业级硬件上的暴力猜测——目前整个全球挖矿网络约 700 EH/s。

三个特性使 PoW 成为比特币安全模型的核心：

- **不对称成本。** 产生一个有效哈希需要数万亿次尝试；验证只需一次哈希。诚实节点可以免费验证区块；攻击者无法廉价伪造。
- **与现实资源绑定。** 哈希需要专用芯片和电力，两者都存在于物理现实中。你不能像印法币一样印工作量证明。
- **[难度](/glossary/difficulty)自动调整**以保持出块时间在 10 分钟附近，无论多少算力加入或离开。安全预算随采用扩展。

标准批评是能源消耗。标准辩护是这些能源不是浪费——它是[保护整条链免受篡改](/rabbit-hole/mining/rabbit-hole)的成本，边际挖矿运营使用的是没有其他买家的能源（弃风弃光、火炬天然气、非高峰水电）。参见 [Mining rabbit hole](/rabbit-hole/mining) 了解两种论点的完整版本。

PoW 是中本聪试图解决的问题的答案：如何在没有中央机构的情况下在互联网上实现无信任共识？让达成共识*昂贵*。让篡改*更*昂贵。让通往收入的最廉价路径是诚实。这就是密码学家所说的[激励兼容性](/glossary/incentive-compatibility)——它让比特币在理性自利而非信任上运行。
