---
title: "ASIC（专用集成电路）"
slug: asic-application-specific-integrated-circuit
draft: false
shortDefinition: "专为单一任务优化的专用硬件芯片——比特币 ASIC 专注于 SHA-256 挖矿。"
keyTakeaways:
  - "专为比特币挖矿设计的芯片"
  - "推动了工业化规模的挖矿运营"
  - "引发了对中心化和能源消耗的担忧"
sources: []
relatedTerms:
  - asic-resistance
  - asicboost
  - cpu-mining
  - hash-rate
  - miner
  - mining-algorithm
  - mining-rig
  - mining-software
sameAs:
  - "https://en.wikipedia.org/wiki/Application-specific_integrated_circuit"
  - "https://www.wikidata.org/wiki/Q217302"
  - "https://en.bitcoin.it/wiki/ASIC"
  - "https://en.bitcoin.it/wiki/Mining_hardware_comparison"
liveWidget: ~
---

ASIC——即**专用集成电路**（Application-Specific Integrated Circuit）——是一种被设计为极其擅长做一件事的芯片。对于比特币来说，这件事就是 SHA-256 [哈希](/glossary/hash)运算。一块现代比特币挖矿 ASIC 芯片每秒可执行约 100 万亿次 SHA-256 哈希运算，功耗仅数十瓦。而通用 CPU 全速运行也许能每秒做十亿次哈希运算。差距约为 10 万倍。

比特币硬件的演进历程：

- **2009-2010 年：** CPU 挖矿。任何有笔记本电脑的人都能挖到区块。
- **2010-2011 年：** GPU 挖矿。显卡在哈希运算上比 CPU 快约 50-100 倍。爱好者纷纷迁移。
- **2011-2013 年：** FPGA 挖矿。可重构芯片又带来了 5-10 倍的提升。
- **2013 年至今：** ASIC 挖矿。首批 SHA-256 专用芯片于 2013 年初上市。仍用非 ASIC 硬件挖矿的人在几个月内就被淘汰了。

ASIC 挖矿永久改变了比特币的社会结构。挖矿从爱好变成了产业。运营集中在电价最便宜的地方。算力集中在商业级设施中。"人人都能挖矿"的时代结束了。

这为比特币带来了什么：

- **巨大的安全预算。** 现代 ASIC 每台成本数千美元；有竞争力的挖矿需要工业级部署。攻击者必须购买并运行对抗全球挖矿产业的硬件才能威胁共识。
- **难以转用。** 比特币 ASIC 确实无法转作他用。除了挖比特币（或其他 SHA-256 链）之外毫无用处。这种专业化意味着安全投资以一种通用硬件不具备的方式被*锁定*了。

代价是什么：

- **中心化压力。** ASIC 供应由少数制造商主导（Bitmain、MicroBT、Canaan 等）。地理挖矿集中度跟随电价分布。
- **能源足迹。** 比特币全球挖矿耗电量约为世界电力总量的 0.5%。其中大部分现在来自搁置或低成本能源，但也不是没有。

参见[挖矿](/glossary/mining)了解更全面的图景，[挖矿中心化](/glossary/mining-centralization)了解结构性担忧。
