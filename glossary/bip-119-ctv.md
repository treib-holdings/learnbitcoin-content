---
title: "BIP 119（CTV）"
slug: bip-119-ctv
draft: false
shortDefinition: "提议新增 CHECKTEMPLATEVERIFY 操作码，实现对资金未来花费方式的契约式控制。"
keyTakeaways:
  - "添加模板化花费条件（契约）"
  - "可改善通道工厂、金库设计"
  - "因对可替代性和政策的潜在影响而存在争议"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0119"
  - "https://bitcoinops.org/en/topics/op_checktemplateverify/"
liveWidget: ~
---

[BIP-119](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki)是 Jeremy Rubin 起草的比特币改进提案，提议新增 [`OP_CHECKTEMPLATEVERIFY`](/glossary/checktemplateverify-ctv)（CTV）操作码。它是后 Taproot 时代讨论最多的"契约"提案，截至 2026 年仍为草案状态——未激活，未被拒绝，持续讨论中。

技术层面的提案内容：CTV 将允许 [Bitcoin Script](/glossary/bitcoin-script)提交到任何被允许花费输出的交易的*形状*——输入和输出的数量、金额、涉及的脚本类型等。这是一种[契约](/glossary/covenants)：对币未来如何移动的限制，而不仅仅是谁能移动它们。

提案针对的用例：

- **金库。**从冷存储提币被迫通过预提交的两步流程，在延迟期间用户可以取消非授权操作。
- **通道工厂。**一笔链上交易提交到稍后开启多个闪电通道，推迟大部分手续费成本。
- **离散对数合约和类似高级原语。**
- **一笔链上交易批量支付给多个收款方。**

辩论的位置：

- **支持：**CTV 是提议的最小、最简单的契约原语。它将解锁有用的结构，同时为将来更高级的契约想法留门。
- **反对：**添加*任何*契约操作码是不可逆的。一些比特币开发者担心与未来协议变更的微妙交互，或开启契约大门的先例。其他契约提案（如 OP_VAULT、OP_CTV+CSFS 和各种基于 Taproot 的替代方案）有不同的权衡。

BIP-119 在技术上已准备好多年。是否激活取决于尚未形成的社区共识。参见[契约](/glossary/covenants)了解更广泛的概念，[CTV](/glossary/checktemplateverify-ctv)了解操作码层面的机制。
