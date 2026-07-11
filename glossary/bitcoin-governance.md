---
title: "比特币治理"
slug: bitcoin-governance
draft: false
published: "2026-05-29"
shortDefinition: "比特币的非正式决策过程。没有中央权威。变更通过多个利益相关方群体之间的粗略共识实现，每方都持有事实上的否决权。"
keyTakeaways:
  - "比特币没有正式投票机构、基金会或治理委员会"
  - "开发者、矿工、全节点运营商、用户和企业各自持有非正式否决权"
  - "系统有意缓慢——难以改变正是比特币作为货币可信的原因"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - soft-fork
  - chain-split
  - miner-signaling
  - consensus-parameter
  - bip-148-uasf
sameAs:
  - "https://en.bitcoin.it/wiki/Governance"
ogImage: "/diagrams/og/bitcoin-governance-vetoes.png"
ogImageAlt: "Pentagon diagram of Bitcoin's five governance stakeholder groups (Developers, Miners, Nodes, Users, Hodlers), each with a 'vetoes by' caption around a central CONSENSUS badge. Title: Five vetoes. One consensus. Tagline: No one is in charge. Everyone can refuse."
liveWidget: ~
---

比特币没有老板。没有投票变更规则的基金会，没有决定功能路线图的 CEO，没有股东大会。然而协议确实在演进——缓慢地、有争议地，通过一个没有人设计但所有人都已认识的过程。那个过程就是人们所说的*比特币治理*。

诚实的总结：比特币治理是多个利益相关方群体之间的粗略共识，每方都可以通过拒绝采纳来有效否决变更。

## 利益相关方

五个群体对比特币实际做什么有实际影响力：

- **开发者**——编写 [Bitcoin Core](/glossary/bitcoin-core)和其他节点实现的人。他们可以提议、设计、审查和合并代码。他们不能强迫任何人运行它。
- **矿工**——产出区块并通过[矿工信号](/glossary/miner-signaling)信号新规则的激活。他们在[软分叉](/glossary/soft-fork)激活中有结构性角色，但无法执行节点未采纳的规则。
- **全节点运营商**——运行共识规则。他们拒绝任何违反其执行规则的区块。如果经济节点拒绝升级，矿工和开发者想要的变更在功能上是死的。
- **用户和企业**——交易所、钱包、托管方、商户。如果分裂发生，他们选择认哪条链为"比特币"，他们的决定决定了哪个分叉保留价值。
- **持有者**——长期经济多数。他们不签区块也不写代码，但他们持有（或卖出）的意愿定义了矿工实际赚什么以及哪条链有市场认可的稀缺性。

<figure>
  <img src="/diagrams/bitcoin-governance-vetoes.svg" alt="A pentagon diagram of Bitcoin's five governance stakeholder groups, each able to veto a consensus change. Developers at top (vetoes by refusing to merge), Miners upper-right (by refusing to signal), Nodes lower-right (by refusing to upgrade), Users lower-left (by recognizing another chain), and Hodlers upper-left (by selling the new chain). A central CONSENSUS badge represents the alignment all five must reach. No one is in charge; everyone can refuse." />
  <figcaption>五个群体，五张否决票。没有中央权威。任何规则变更必须通过全部五方。</figcaption>
</figure>

对比特币共识规则的任何变更最终需要这些群体之间的一致。如果任何一方拒绝，变更要么失败要么创建链分裂。

## 流程

标准路径大致如下：

1. **讨论**——在邮件列表、开发者聊天或 [BIP](/glossary/bip-bitcoin-improvement-proposal)草案中提出想法。经过数月或数年的审查、批评和改进。
2. **实现**——编写代码、同行评审、合并到节点实现。
3. **发布**——新客户端发布。用户选择是否升级。
4. **信号**——对于[软分叉](/glossary/soft-fork)，矿工开始通过区块[信号](/glossary/miner-signaling)支持。
5. **锁定和激活**——如果达到阈值，规则激活。运行新客户端的节点执行它。
6. **采纳**——经济节点继续（或停止）认遵循新规则的链。如果足够多处理价值的节点升级，变更成功。

这个序列在 [SegWit](/glossary/segwit-segregated-witness-bip-141)、[Taproot](/glossary/taproot)和 2012 年以来每个重要变更中都有上演。端到端通常需要数年。失败的提案（BIP-148 的 UASF 威胁、2015-2017 年期间各种区块大小硬分叉尝试）在这些步骤之一失败——不是通过正式投票，而是因为未能对齐相关利益相关方。

## 为什么缓慢是关键

比特币治理经常被批评为低效。这个批评忽略了要点。一个规则容易改变的货币体系不是可信的货币体系。缓慢不是 bug——它是使比特币的"2100 万上限"以企业路线图永远无法做到的方式可信的属性。

让 SegWit 难以发布的同样程序摩擦，也让任何人——政府、公司或开发者小圈子——难以改变供应时间表、改变安全模型或悄悄削弱共识规则。粗略共识是特性。

## 比特币治理不是什么

明确比特币治理*不是*什么是有帮助的：

- **不是按持币量投票。**比特币没有链上治理代币。
- **不是矿工多数决。**矿工可以信号，但不能强迫经济节点认不同规则下的区块。
- **不是由 Bitcoin Core 开发者控制。**他们写代码，但他们写的每一行都必须被运行它的人接受。
- **不是没有治理。**缺乏正式治理不意味着没有治理——它意味着一个涌现过程，到目前为止，它比货币领域尝试过的任何正式机制都更难被捕获。

关于这在实践中如何运作的更深入探讨，[SegWit 激活](/glossary/segwit-segregated-witness-bip-141)和[区块大小战争](/rabbit-hole/block-size-war)的历史是经典案例研究。
