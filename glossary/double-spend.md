---
title: "双花"
slug: double-spend
draft: false
shortDefinition: "尝试多次使用同一个 UTXO，比特币的共识规则在交易确认后防止这种行为。"
keyTakeaways:
  - "比特币的账本逻辑使先前花费的输出无效"
  - "冲突由矿工在一条有效链上构建来解决"
  - "多次确认大幅降低双花风险"
sources: []
relatedTerms:
  - bip-30
  - bip-34
  - difficulty
  - double-spend-relay
  - energy-fud
  - full-validation
  - race-attack
  - reorg-reorganization
  - replay-attack
  - spv-simplified-payment-verification
  - transaction-finality
liveWidget: ~
---

双花是有人尝试将同一比特币花费两次。这是比特币被发明来解决的核心问题。

在没有可信中介的数字系统中，没有明显的理由不能制作两份支付副本并都广播出去。早期的数字现金项目（DigiCash、e-gold 等）通过将每笔交易路由到维护单一权威账本的中央服务器来处理这个问题。服务器防止双花；服务器也是单点故障和信任。

比特币的设计消除了服务器。取而代之的是，全球 UTXO 集在每个全节点上复制，每个节点执行规则：一旦 [UTXO](/glossary/utxo-unspent-transaction-output) 被花费，没有其他交易可以引用它。尝试同一 UTXO 花费两次，你的第二笔交易会被它到达的每个诚实节点拒绝。

剩余的边缘情况是交易确认*之前*发生什么。在[内存池](/glossary/mempool)中时，两笔冲突交易可以竞赛。先被挖出的获胜；另一笔在包含其对手的区块被找到的瞬间变为无效。这就是零确认交易并非真正最终的原因——也是比特币社区对大额使用 **6 次确认规则**的原因。六个区块后（约 60 分钟），逆转交易需要攻击者比整个诚实网络更快地秘密挖出六个替代区块。这需要超过全球算力的一半，持续运行，即使如此也只是概率性成功。这种指数衰减是比特币上[交易最终性](/glossary/transaction-finality)的实际形状：永远不是绝对的，但每次确认使逆转呈指数级困难。

比特币对双花的安全性是工作量证明*买到*的东西。参见[挖矿深入探讨](/rabbit-hole/mining)了解为什么花费的能源不是浪费——它是使账本抗伪造的成本。
