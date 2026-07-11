---
title: "交易对手风险"
slug: counterparty-risk
draft: false
shortDefinition: "交易中另一方未能履行义务的可能性，自行持有私钥可大幅降低此风险。"
keyTakeaways:
  - "当你依赖第三方持有资金时就会存在"
  - "比特币的自托管大幅降低此风险"
  - "多签和无信任合约可以进一步保护双方"
sources: []
relatedTerms:
  - clawback-mechanism
  - covenants
  - custodial-lightning-wallet
  - custodial-wallet
  - escrow
  - escrowed-lightning-channel
  - mining-collocation
  - one-way-peg
  - sidechain
liveWidget: ~
---

交易对手风险是你依赖的人——持有资金、完成交易或履行合约——未能做到的风险。在传统金融中它无处不在：银行存款依赖银行偿付能力，证券依赖经纪商诚信，衍生品依赖发行方的支付能力。

比特币的定义特性是你可以消除资产本身的交易对手风险。当你持有自己 BTC 的[私钥](/glossary/private-key)时，没有第三方可以阻止你花费、冻结你的访问、要求许可或破产带走它。BTC 是你的，很少有其他金融工具允许这种方式。

当你把密钥交给其他人时，你就引入了交易对手风险：

- **交易所账户**（[托管钱包](/glossary/custodial-wallet)）——依赖交易所的偿付能力、托管 practices 和释放资金的意愿。
- **借贷平台**——依赖平台从违约借款人那里恢复的能力以及避免成为庞氏骗局。
- **"收益"产品**——依赖某人在某处产生该收益而不崩溃。
- **其他链上的包装或锚定比特币**——依赖桥接托管人或智能合约诚实且未被入侵。

2022 年的连锁暴雷是一次真实压力测试：Celsius、BlockFi、Voyager、Genesis 和 FTX 在一年内全部崩溃，数十亿美元的客户交易对手风险暴露变为部分破产索赔，需要数年才能解决。将 BTC 转入"收益"安排的客户失去了大部分。自己持有密钥的客户什么都没损失。

口号是"不是你的密钥，就不是你的币"。这不是比喻；这是精确的技术现实。脱离路径参见[托管钱包](/glossary/custodial-wallet)和[钱包](/glossary/wallet)。
