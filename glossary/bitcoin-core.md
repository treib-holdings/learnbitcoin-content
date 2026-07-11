---
title: "Bitcoin Core"
slug: bitcoin-core
draft: false
shortDefinition: "比特币协议的参考实现，最初由中本聪创建，现由社区开发者维护。"
keyTakeaways:
  - "设定比特币规则执行的标准"
  - "由去中心化的开发者群体维护"
  - "提供最彻底的区块链验证"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core-rpc
  - bitcoin-knots
  - lurking-wife-mode
  - node
  - node-autoban
  - node-operator
  - node-synchronization
  - spv-simplified-payment-verification
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_Core"
  - "https://www.wikidata.org/wiki/Q18198917"
  - "https://en.bitcoin.it/wiki/Bitcoin_Core"
liveWidget: ~
---

Bitcoin Core 是比特币协议的参考实现。它是[中本聪](/glossary/satoshi-nakamoto)2008 年最初编写的代码库（名为"Bitcoin"），2014 年当比特币软件需要与比特币网络区分时更名。它驱动了绝大多数公开可达的[全节点](/glossary/full-node)，大多数其他钱包和库都默默遵从它。

代码库位于 **[github.com/bitcoin/bitcoin](https://github.com/bitcoin/bitcoin)**，由轮换的贡献者团队维护，无正式治理结构。变更经过：

1. 对任何面向用户或影响共识的内容提交 **BIP** 规范。
2. 向代码库提交 pull request，由任何愿意的人审查（许多严肃的审查者确实会审查）。
3. 由维护者集成——一小群有合并权限的人。他们不制定规则；他们合并通过审查的内容。
4. 由发布经理标记发布版本，由多个密钥持有者签名。
5. **采用是自愿的。**每个节点运营商选择是否升级。变更只有在足够多的运营商运行新版本使网络有效迁移后才真正上线。

开放审查与自愿采用的组合使比特币协议真正难以变更。恶意的维护者无法偷塞变更；审查者会发现。恶意的团体无法分叉规则；节点不会运行他们的版本。系统优化为*不犯错误*，即使以缓慢演进为代价。

Bitcoin Core 大约每 6 个月发布一次。主要版本带来了 SegWit（2017 年）、Taproot 信号（2021 年），以及内存池策略、网络和验证性能的增量改进。它是存在中审查最严格的加密货币代码库，也是"比特币实际上是什么"的事实标准。

代码库也有自己的怪癖。Sjors Provoost 2015 年的 [Lurking Wife Mode](/glossary/lurking-wife-mode)——一个掩盖所有余额和金额显示的 GUI 开关——仍然随版本发布，提醒你真实的人类在编写这个软件。

参见[全节点](/glossary/full-node)了解运行它意味着什么，[主权之旅](/journey/sovereignty)了解你可能想要的原因。
