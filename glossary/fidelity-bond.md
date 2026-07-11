---
title: "保证金债券"
slug: fidelity-bond
draft: false
shortDefinition: "一种机制（如 JoinMarket 中使用），参与者时间锁定或质押 BTC 以证明承诺并减少女巫攻击。"
keyTakeaways:
  - "锁定 BTC 以阻止虚假或垃圾参与者"
  - "在 JoinMarket 等隐私工具中使用以提高攻击成本"
  - "在匿名性和问责之间取得平衡"
sources: []
relatedTerms:
  - counterparty-risk
  - custodial-wallet
  - escrow
  - escrowed-lightning-channel
  - hierarchical-multisig
  - m-n
  - quorum-signatures
liveWidget: ~
---

保证金债券是作为[反女巫](/glossary/anti-sybil-mechanism)机制使用的[时间锁](/glossary/locktime) BTC 存款。参与者承诺将资本锁定一段时间；这使得创建许多假身份变得昂贵，从而使攻击隐私协议在经济上不具吸引力。

经典用例是 **JoinMarket**——一个去中心化的 [CoinJoin](/glossary/coinjoin) 协调协议。JoinMarket 的匹配市场让参与者作为"做市方"（提供流动性，赚取手续费）或"接受方"（付费混合）。没有反女巫措施，攻击者可以创建许多假的做市方，都由同一实体控制，并主导匹配过程以破坏混合。

保证金债券解决了这个问题。做市方可以通过在时间锁输出中锁定 BTC 来证明承诺——通常是 [CLTV](/glossary/checklocktimeverify-cltv) 保护的 UTXO，在某个未来区块之前不能花费。接受方更倾向于与拥有更大更长期锁定债券的做市方混合，因为：

- **攻击者需要锁定真实 BTC** 才能创建令人信服的假身份。
- **更大的债券+更长的锁定期 = 同等女巫能力的更高攻击成本。**
- **债券持有者有利益在其中**——他们在锁定期内无法恢复 BTC，因此承诺保持一致行为。

资本不会丢失；只是在锁定期内不可花费。攻击者承担资金被占用 的*机会成本*。在规模上，机会成本变得高昂。

这个概念可以推广。类似的经济质押机制出现在：

- 闪电网络的通道路资金（通道方有利益在其中）。
- PoS 系统（验证者质押以参与）。
- 一些联邦系统，委员会成员发布保证金。

保证金债券是比特币原语（[时间锁](/glossary/locktime)、公开可验证性）如何组合以解决相邻问题如女巫抵抗的干净示例，无需更改基础协议。
