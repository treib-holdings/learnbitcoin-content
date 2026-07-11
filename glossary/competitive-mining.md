---
title: "竞争性挖矿"
slug: competitive-mining
draft: false
shortDefinition: "比特币挖矿的开放性质，任何拥有 ASIC 硬件和电力的人都可以尝试发现有效区块。"
keyTakeaways:
  - "任何拥有合适设备的人都可以挖 BTC"
  - "ASIC 硬件和廉价电力是竞争优势"
  - "通过工作量证明支持比特币的安全性"
sources: []
relatedTerms:
  - block-propagation
  - competitive-block-propagation
  - difficulty
  - difficulty-retargeting
  - miner-extractable-value-mev
  - mining
  - mining-algorithm
  - mining-centralization
  - mining-colocation
  - mining-rig
  - mining-software
  - stale-block
liveWidget: ~
---

竞争性挖矿是比特币工作量证明的无许可性质：没有许可证，没有最低质押门槛，没有协议层面的歧视。任何获得 ASIC 硬件和电力的人都可以挖矿，每个区块的赢家纯粹由谁先找到有效的 nonce 决定。

竞争优化的是什么：

- **每美元算力。** 新一代 ASIC（Antminer S21、Whatsminer M60、Bitmain S21 XP 等）提供更高的每瓦特哈希率。设备更新周期很快；2-3 年前的 ASIC 在当前难度下通常不经济。
- **电力成本。** 挖矿经济学中的主导变量。盈利运营支付 3-5 美分/千瓦时；超过 7-8 美分就是边际的。这就是为什么挖矿聚集在水力发电过剩、天然气火炬燃烧、核电基载和未充分利用的电网容量附近。
- **运营效率。** 散热（浸没式或水冷）、设施正常运行时间、固件调优、[专有固件](/glossary/proprietary-mining-firmware)、矿池选择。在规模上每个百分点都很重要。

去中心化的故事是混合的。挖矿原则上是无许可的，但在实践中，资本密集度（工业规模设施、ASIC 供应链、廉价电力交易）将挖矿集中在资本充足的运营商中。即使底层矿工多样化，矿池层也进一步聚合了算力。诚实的核算参见[挖矿中心化](/glossary/mining-centralization)。

尽管如此，结构属性仍然成立：协议不挑选赢家。拥有 ASIC 和廉价电力的新进入者可以加入、挖矿、获得报酬和退出，不需要任何人的许可。这就是竞争性挖矿提供的去中心化底线。
