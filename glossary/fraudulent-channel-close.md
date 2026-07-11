---
title: "欺诈性通道关闭"
slug: fraudulent-channel-close
draft: false
shortDefinition: "尝试使用先前通道状态关闭闪电通道以窃取资金，由惩罚交易处罚。"
keyTakeaways:
  - "作弊者尝试使用旧通道快照获取个人利益"
  - "目前通过扣押作弊者的闪电资金来惩罚"
  - "对欺诈性关闭提供强有力威慑"
sources: []
relatedTerms:
  - fraud-proof
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - penalty-transaction
liveWidget: ~
---

欺诈性通道关闭是[闪电网络](/glossary/lightning-network)参与者尝试向主网广播过时通道状态——一个给自己分配比当前实际状态更多资金的状态。这是闪电网络惩罚机制专门设计来威慑的"作弊"模式。

如何运作（以及为什么通常失败）：

1. **作弊者持有一个旧的[承诺交易](/glossary/lightning-channel)**，给予他们比当前应得更多的 BTC。（例如，通道开始 50/50，他们后来向对手方支付了 0.3 BTC，但仍持有旧的 50/50 承诺交易已签名并准备好广播。）
2. **他们在认为对手方可能离线的时刻广播旧承诺。**
3. **诚实对手方的[瞭望塔](/glossary/lightning-network-penalty)**（或其自身监控）检测到广播。
4. **对手方广播[惩罚交易](/glossary/penalty-transaction)**，使用其存储的撤销密钥，认领*整个*通道余额——包括作弊者认为刚偷到的部分。
5. **作弊者失去通道中的一切。** 净效果：他们试图偷 0.3 BTC 却失去了 1 BTC（整个通道）。

为什么威慑有效：

- **惩罚是全部的**，不是对等的。作弊者不只是失去他们试图偷的金额；他们失去*所有*通道资金。
- **检测窗口宽裕。** 通道关闭交易有 CSV 锁定延迟（通常 144-1008 个区块），关闭方在此之前不能花费资金。对手方有该窗口发布惩罚。
- **瞭望塔存在**以代表不能 24/7 在线的用户监控。

仍然可能出错的情况：

- **如果对手方在整个 CSV 延迟窗口期间离线**，作弊者成功。
- **如果瞭望塔恶意或被入侵**，你有漏洞。
- **如果作弊者意外广播旧状态**（例如从备份恢复），他们会失去自己的资金，即使他们并未试图作弊。

惩罚模型严厉但有效。[Eltoo](/glossary/eltoo) 如果激活，将用更宽容的"旧状态简单地被失效"模型取代此模型。在那之前，闪电网络用户承担谨慎状态管理的运营负担——对旧备份的一个错误操作可以摧毁一个通道价值的资金。
