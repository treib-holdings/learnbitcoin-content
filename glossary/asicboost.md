---
title: "ASICBoost"
slug: asicboost
draft: false
shortDefinition: "一种挖矿优化技术，通过减少部分 SHA-256 计算来降低能源成本并提升效率。"
keyTakeaways:
  - "优化 SHA-256 哈希过程"
  - "提高挖矿效率和盈利能力"
  - "最初引发了公平性和专利争议"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - asic-resistance
  - mining-algorithm
  - mining-software
liveWidget: ~
---

ASICBoost 是一种挖矿效率优化，利用 SHA-256 结构中的一个特性来跳过一些冗余计算，在 [ASIC](/glossary/asic-application-specific-integrated-circuit) 基线性能之上获得约 15-20% 的效率提升。存在两种变体：

- **显式 ASICBoost。**操控区块头版本字段来寻找在 SHA-256 中间态计算中共享状态的碰撞。链上可见；不需要在协议层面做任何手脚。
- **隐式 ASICBoost。**通过重新排序交易来操控 merkle 根，实现相同的中间态碰撞效果。链上不直接可见。著名地与 [SegWit](/glossary/segwit-segregated-witness-bip-141) 不兼容，因为 SegWit 重构了 merkle 根的计算方式。

隐式变体在 2017 年 [SegWit](/glossary/segwit-segregated-witness-bip-141) 激活僵局期间成为政治焦点。Greg Maxwell 公开观察到一些主要挖矿硬件（特别是当时某家制造商的产品）似乎使用了隐式 ASICBoost，而该制造商对 SegWit 的抵制可能部分源于 SegWit 与该优化不兼容。指控被否认；但时机很微妙。

这一事件提出了一个问题：谁在获得隐藏的效率优势，网络是否知情？大致的回答是"是的，这确实在发生"——引发了关于是否在未来协议变更中故意禁用隐式 ASICBoost 的讨论。

到 2026 年，现代挖矿 ASIC 已广泛将显式 ASICBoost 作为标准实现，优化内置于固件中。它不再是秘密优势；而是基本门槛。这个故事现在主要是历史性的，但它是一个有用的案例研究，说明硬件级优化如何以微妙的方式与共识级决策相互作用。
