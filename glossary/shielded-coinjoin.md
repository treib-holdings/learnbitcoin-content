---
title: "Shielded CoinJoin"
slug: shielded-coinjoin
draft: false
shortDefinition: "一种假设性或未来方案，将 CoinJoin 与零知识证明结合，进一步隐藏交易细节。"
keyTakeaways:
  - "在典型输入输出混合之外进一步混淆 CoinJoin 中的数据"
  - "可能需要新的密码学原语或链上升级"
  - "代表比特币隐私增强的潜在未来方向"
sources: []
relatedTerms:
  - coinjoin
  - fungibility
  - mixing-service
  - payjoin
  - stealth-address
liveWidget: ~
---

"Shielded CoinJoin"是一种假设性/研究阶段的隐私增强方案，将 [CoinJoin](/glossary/coinjoin) 的多方混合与零知识密码学结合，以隐藏普通 CoinJoin 仍然泄露的*金额*和*所有权模式*。

动机：普通 CoinJoin 通过将多个用户的输入混合到一笔交易中并生成等值输出，打破了共同输入启发式。但链上分析师仍然可以看到：

- **哪些 UTXO 进入了混合。** 链上公开可见。
- **哪些等值输出来了。** 链上公开可见。
- **启发式模式。** 协调者元数据、时序、不等金额、混合后的剥离链行为。

这些泄露让高级分析师能够概率性地去匿名化相当一部分 CoinJoin 参与者。Shielded CoinJoin 会用密码学承诺值替换公开的输入输出金额，隐藏*哪个*等值份额对应哪个贡献者。

研究中的实现路径：

- **保密交易**（Greg Maxwell、Andrew Poelstra）——同态承诺隐藏交易金额，同时仍让节点验证没有通胀。已在 [Liquid](/glossary/liquid-network) 中使用，但在比特币主网上部署需要软分叉。
- **Bulletproofs**——高效的零知识范围证明，可以比朴素的 zk-SNARK 方案更便宜地实现保密 CoinJoin。
- **MimbleWimble 风格聚合**——数学上组合交易数据，使单独的金额和参与方不可观察。

这些目前都不是比特币协议的一部分。Shielded CoinJoin 更多是研究方向而非近期路线图项。2024 年主要 CoinJoin 协调者（Wasabi、Whirlpool）的关停使隐私讨论转向了[PayJoin](/glossary/payjoin)和[静默支付](/glossary/silent-payments)等去中心化替代方案，而非更复杂的混合方案。

参见 [CoinJoin](/glossary/coinjoin)了解当前一代技术，以及[可替代性](/glossary/fungibility)了解为什么这很重要。
