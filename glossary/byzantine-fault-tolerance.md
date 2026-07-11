---
title: "拜占庭容错"
slug: byzantine-fault-tolerance
draft: false
shortDefinition: "系统即使部分参与者恶意或不可预测行为仍能保持正确运行的能力。"
keyTakeaways:
  - "即使存在恶意或故障节点仍继续运行"
  - "解决分布式系统中的'拜占庭将军问题'"
  - "比特币采用工作量证明确保强 BFT 属性"
sources: []
relatedTerms:
  - anti-sybil-mechanism
  - decentralization
  - full-node
  - hd-wallet-hierarchical-deterministic-wallet
  - mining-algorithm
  - node
  - node-headcount
  - proof-work-pow
sameAs:
  - "https://en.wikipedia.org/wiki/Byzantine_fault"
  - "https://www.wikidata.org/wiki/Q1353446"
liveWidget: ~
---

拜占庭容错（BFT）是分布式系统在部分参与者 actively 恶意、撒谎或不可预测故障时仍能正确运行的属性。名字来自 Lamport、Shostak 和 Pease 1982 年的"拜占庭将军问题"论文，用一些将军是叛徒时如何协调作战计划来框架问题。

数十年来，BFT 被理解为需要*已知、已识别的参与者*和分配的投票权重。经典结果（PBFT 及其后继者）需要固定的验证者集，可以容忍最多约 1/3 的验证者恶意。

中本聪用[工作量证明](/glossary/proof-work-pow)做的事是为*开放、无许可*成员资格解决 BFT——任何人都可以随时加入或离开验证者集。技巧在于：不是已识别的验证者，身份本身通过消耗的计算工作来证明。攻击者不能只是假装有很多验证者；每张"选票"花费真实能源。

比特币的特定 BFT 属性：

- **经济上抵抗 51% 攻击。**攻击者需要超过全球算力的一半，持续运行，加上愿意花费能源的意愿。即使成功也只买到近期历史的概率性重组，而非深层历史重写。
- **从暂时分歧中恢复。**当两个矿工同时找到区块时，网络暂时分叉；[最长链规则](/glossary/longest-chain-rule)在一两个区块内解决。
- **容忍网络分区。**如果网络部分断开，每侧继续挖矿；重新连接时，累计工作量更多的一侧获胜。

权益证明系统通过不同手段实现 BFT（可削减保证金、已识别验证者）。比特币的基于能源的 BFT 用效率换无许可开放性——任何人都可以参与验证、挖矿、运行节点。拜占庭将军们不需要知道彼此的名字。

这是比特币[白皮书](/glossary/whitepaper)中的关键概念突破：通过工作量证明实现无许可 BFT。今天存在的每种加密货币在某种意义上都是这个想法的变体。
